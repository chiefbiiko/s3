import { contentType, sha256, encode, extname, md5 } from "../deps.ts";
import { awsSignatureV4 } from "./aws_signature_v4.ts";
import { Doc, date as dateUtil, sortConcatHeaders, toCanonicalUri, toCanonicalQueryString } from "../util.ts";
import { ClientConfig } from "../mod.ts";

/** Algorithm identifer. */
const ALGORITHM: string = "AWS4-HMAC-SHA256";

/** zero-bytes SHA256. */
const ZERO_BYTES_SHA256_HEX: string = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

/** Required configuration for assembling headers. */
export interface HeadersConfig extends ClientConfig {
  httpVerb: string;
  host: string; // s3.us-west-2.amazonaws.com
  cache: Doc; // internal cache for expensive-2-make signing key (& credScope)
  date?: Date; // allows reusing a date for 5min (max signature timestamp diff)
  extraHeaders?: { [key: string]: string };
  objectKey?: string;
  payload?: Uint8Array,
  queryString?: string
}

/** Assembles a header object for a S3 request. */
export async function createHeaders(
  {
    cache,
    date = new Date(),
    extraHeaders,
    host,
    httpVerb,
    objectKey = "/",
    payload,
    queryString = ""
  }: HeadersConfig,
  refreshCredentials: boolean = !cache.signingKey
): Promise<Headers> {
  if (refreshCredentials) {
    await cache.refresh(date);
  }
  
  const amzDate: string = dateUtil.format(date, "amz");

  const canonicalUri: string = toCanonicalUri(objectKey);

  const canonicalQueryString: string = toCanonicalQueryString(queryString);

  const rawHeaders: {[key:string]:string} = {
    ...extraHeaders,
    "content-length": `${payload?.byteLength ?? 0}`,
    host,
    "x-amz-date": amzDate,
  }
  
  let payloadSha256Hex: string;
  
  if (payload) {
    payloadSha256Hex = sha256(payload, undefined, "hex") as string;
    
    rawHeaders["content-md5"] = md5(payload, undefined, "base64url") as string;
  } else {
    payloadSha256Hex = ZERO_BYTES_SHA256_HEX;
  }
  
  // NOTE: 4 chunked uploads the X-Amz-Content-Sha256 header should be set to
  // "STREAMING-AWS4-HMAC-SHA256-PAYLOAD"
  rawHeaders["x-amz-content-sha256"] = payloadSha256Hex;
  
  if (cache.sessionToken) {
    rawHeaders["x-amz-security-token"] = cache.sessionToken
  }
  
  const ctype: undefined |string  = contentType(extname(objectKey));
  
  if (ctype) {
    rawHeaders["content-type"] = ctype;
  }

  const { signedHeaders, canonicalHeaders } = sortConcatHeaders(rawHeaders);

  const canonicalRequest: string = `${httpVerb}\n${canonicalUri}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\n${payloadSha256Hex}`;

  const canonicalRequestDigest: string = sha256(
    canonicalRequest,
    "utf8",
    "hex"
  ) as string;

  const stringToSign: Uint8Array = encode(
    `${ALGORITHM}\n${amzDate}\n${cache.credentialScope}\n${canonicalRequestDigest}`,
    "utf8"
  );
  
  const signature: string = awsSignatureV4(
    cache.signingKey,
    stringToSign,
    "hex"
  ) as string;

  const authorizationHeaderValue: string = `${ALGORITHM} Credential=${cache.accessKeyId}/${cache.credentialScope},SignedHeaders=${signedHeaders},Signature=${signature}`;

  rawHeaders.authorization = authorizationHeaderValue;

  return new Headers(rawHeaders)
}