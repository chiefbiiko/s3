import { sha256, encode } from "../deps.ts";
import { awsSignatureV4 } from "./aws_signature_v4.ts";
import { Doc, date as dateUtil } from "../util.ts";
import { ClientConfig } from "../mod.ts";

/** Algorithm identifer. */
const ALGORITHM: string = "AWS4-HMAC-SHA256";

/** zero-bytes SHA256. */
const ZERO_BYTES_SHA256_HEX: string = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

/** Matches the question mark leading a query string. */
const LEADING_QUESTIONMARK_PATTERN: RegExp = /^\?/;

/** Matches the root slash of a object key. */
const LEADING_SLASH_PATTERN: RegExp = /^\//;

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

/** Sorts and concats given headers to aws canonical and signed headers. */
function sortConcatHeaders(headers: { [key: string]: string }): { canonicalHeaders: string, signedHeaders: string } {
  const sorted: string[] = Object.keys(headers)
    // NOTE: not mapping headers that have an undefined value - fx
    // x-amz-security-token - is optional
    .filter((headerKey: string): boolean => !!headers[headerKey])
    .sort((a: string, b: string): number =>
      a.toLowerCase().localeCompare(b.toLowerCase()));

  console.error(">>>>>>> sorted", sorted);

  const canonicalHeaders: string = sorted
    .reduce((acc: string, headerKey: string): string =>
      `${acc}${headerKey.toLowerCase()}:${headers[headerKey]}\n`, "");

  const signedHeaders: string = sorted
    .map((headerKey: string): string => headerKey.toLowerCase())
    .join(";");

  return { canonicalHeaders, signedHeaders };
}

/** Convers a query string to its canonical form. */
function toCanonicalQueryString(queryString: string): string {
  return queryString
    .replace(LEADING_QUESTIONMARK_PATTERN, "")
    .split("&")
    // NOTE: if kv is present and not a proper kv pair append =("")
    .map((kv: string): string => !kv.trim() || kv.includes("=") ? kv : `${kv}=`)
    .join("&");
}

/** Transforms an object key to a canonical uri. */
function toCanonicalUri(objectKey: string): string {
  // const canonicalUri: string = objectKey.startsWith("/") ? objectKey : `/${objectKey}`
  const cut: string = objectKey.replace(LEADING_SLASH_PATTERN, "");

  return `/${encodeURIComponent(cut)}`
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

  // const canonicalUri: string = objectKey; // "/" + objectKey;
  // TODO: uri-encode!
  // const canonicalUri: string = objectKey.startsWith("/") ? objectKey : `/${objectKey}`
  const canonicalUri: string = toCanonicalUri(objectKey);

  const canonicalQueryString: string = toCanonicalQueryString(queryString);

  const payloadHash: string = !payload ? ZERO_BYTES_SHA256_HEX : sha256(payload, null!, "hex") as string;

  const rawHeaders: {[key:string]:string} = {
    ...extraHeaders,
    host,
    "x-amz-security-token": cache.sessionToken,
    // "Content-Type": CONTENT_TYPE,
    "x-amz-date": amzDate,
    // Authorization: authorizationHeader,
    // NOTE: 4 chunked uploads the X-Amz-Content-Sha256 header should be set to
    // "STREAMING-AWS4-HMAC-SHA256-PAYLOAD"
    "x-amz-content-sha256": payloadHash
  }

  // TODO: sort and concat std + extra headerswith a func
  // TODO: add and map content-type to canonicalHeaders and signedHeaders
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

  console.error(">>>>>>> canonicalRequest\n", canonicalRequest);

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

  if (!rawHeaders["x-amz-security-token"]) {
    // NOTE: if the session token is undefined deleting, otherwise we wld end up
    // with a string header value "undefined"
    delete rawHeaders["x-amz-security-token"]
  }

  rawHeaders.authorization = authorizationHeaderValue;

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