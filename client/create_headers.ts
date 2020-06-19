import { contentType, sha256, encode, extname } from "../deps.ts";
import { awsSignatureV4 } from "./aws_signature_v4.ts";
import { Doc, date as dateUtil, sortConcatHeaders, toCanonicalUri, toCanonicalQueryString } from "../util.ts";
import { ClientConfig } from "../mod.ts";

/** Algorithm identifer. */
const ALGORITHM: string = "AWS4-HMAC-SHA256";

/** zero-bytes SHA256. */
const ZERO_BYTES_SHA256_HEX: string = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

// /** Content type header value for POST requests. */
// const CONTENT_TYPE: string = "application/x-amz-json-1.0";

/** Required configuration for assembling headers. */
export interface HeadersConfig extends ClientConfig {
  httpVerb: string;
  host: string; // dynamodb.us-west-2.amazonaws.com
  cache: Doc; // internal cache for expensive-2-make signing key (& credScope)
  date?: Date; // allows reusing a date for 5min (max signature timestamp diff)
  extraHeaders?: { [key: string]: string };
  objectKey?: string;
  payload?: Uint8Array,
  queryString?: string
}

/** Assembles a header object for a DynamoDB request. */
export async function createHeaders(
  // op: string,
  // httpVerb: string,
  // objectKey: string = "/",
  // payload: null | Uint8Array,
  // queryString: string = "",
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

  const payloadHash: string = !payload ? ZERO_BYTES_SHA256_HEX : sha256(payload, null!, "hex") as string;

  const rawHeaders: {[key:string]:string} = {
    ...extraHeaders,
    host,
    // "x-amz-security-token": cache.sessionToken,
    "x-amz-date": amzDate,
    // Authorization: authorizationHeader,
    // NOTE: 4 chunked uploads the X-Amz-Content-Sha256 header should be set to
    // "STREAMING-AWS4-HMAC-SHA256-PAYLOAD"
    "x-amz-content-sha256": payloadHash
  }
  
  if (cache.sessionToken) {
    rawHeaders["x-amz-security-token"] = cache.sessionToken
  }
  
    //  add and map content-type to canonicalHeaders and signedHeaders
  const ctype: undefined |string  = contentType(extname(objectKey));
  
  if (ctype) {
    rawHeaders["content-type"] = ctype;
  }

  // TODO: sort and concat std + extra headerswith a func
  const { signedHeaders, canonicalHeaders } = sortConcatHeaders(rawHeaders);
  // let canonicalHeaders: string = "";
  // let signedHeaders: string = "";
  //
  // if (conf.cache.sessionToken) {
  //   canonicalHeaders= `host:${conf.host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\nx-amz-security-token:${conf.cache.sessionToken}\n`;
  //   signedHeaders = "host;x-amz-content-sha256;x-amz-date;x-amz-security-token"
  // } else {
  //   canonicalHeaders= `host:${conf.host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  //   signedHeaders = "host;x-amz-content-sha256;x-amz-date";
  // }

  // const canonicalHeaders: string = `host:${conf.host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;

  // const signedHeaders: string = "host;x-amz-content-sha256;x-amz-date";

  const canonicalRequest: string = `${httpVerb}\n${canonicalUri}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;

  console.debug(">>>>>>> canonicalRequest\n", canonicalRequest);

  const canonicalRequestDigest: string = sha256(
    canonicalRequest,
    "utf8",
    "hex"
  ) as string;

  const msg: Uint8Array = encode(
    `${ALGORITHM}\n${amzDate}\n${cache.credentialScope}\n${canonicalRequestDigest}`,
    "utf8"
  );

  const signature: string = awsSignatureV4(
    cache.signingKey,
    msg,
    "hex"
  ) as string;

  const authorizationHeaderValue: string = `${ALGORITHM} Credential=${cache.accessKeyId}/${cache.credentialScope},SignedHeaders=${signedHeaders},Signature=${signature}`;

  // if (!rawHeaders["x-amz-security-token"]) {
  //   // NOTE: if the session token is undefined deleting, otherwise we wld end up
  //   // with a string header value "undefined"
  //   delete rawHeaders["x-amz-security-token"]
  // }

  rawHeaders.authorization = authorizationHeaderValue;

  console.error(">>>>>>> rawHeaders", JSON.stringify(rawHeaders, null, 2));

  return new Headers(rawHeaders)

  // // const headers: Headers = new Headers({
  // //   // "Content-Type": CONTENT_TYPE,
  // //   "X-Amz-Date": amzDate,
  // //   Authorization: authorizationHeader,
  // //   // NOTE: 4 chunked uploads the X-Amz-Content-Sha256 header should be set to
  // //   // "STREAMING-AWS4-HMAC-SHA256-PAYLOAD"
  // //   "X-Amz-Content-Sha256": payloadHash
  // // });
  //
  // // https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
  // if (conf.cache.sessionToken) {
  //   headers.append("X-Amz-Security-Token", conf.cache.sessionToken);
  // }

  // return headers;
}