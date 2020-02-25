import { sha256, encode } from "../deps.ts";
import { awsSignatureV4 } from "./aws_signature_v4.ts";
import { Doc, date } from "../util.ts";
import { ClientConfig } from "../mod.ts";

/** Algorithm identifer. */
const ALGORITHM: string = "AWS4-HMAC-SHA256";

// /** Content type header value for POST requests. */
// const CONTENT_TYPE: string = "application/x-amz-json-1.0";

/** Required configuration for assembling headers. */
export interface HeadersConfig extends ClientConfig {
  host: string; // dynamodb.us-west-2.amazonaws.com
  // method: string; // POST
  cache: Doc; // internal cache for expensive-2-make signing key (& credScope)
  date?: Date; // allows reusing a date for 5min (max signature timestamp diff)
}

/** Assembles a header object for a DynamoDB request. */
export async function createHeaders(
  // op: string,
  httpVerb: string,
  objectKey: string,
  payload: Uint8Array,
  conf: HeadersConfig,
  refreshCredentials: boolean = !conf.cache.signingKey
): Promise<Headers> {
  if (refreshCredentials) {
    await conf.cache.refresh();
  }

  // const amzTarget: string = `DynamoDB_20120810.${op}`;

  const amzDate: string = date.format(conf.date || new Date(), "amz");

  // const httpVerb: string = OP2VERB.get(op);

  // const canonicalUri: string = conf.canonicalUri || "/";

  const canonicalUri: string = objectKey;

  const canonicalQueryString: string = "";

  // const canonicalHeaders: string = `content-type:${CONTENT_TYPE}\nhost:${conf.host}\nx-amz-date:${amzDate}\nx-amz-target:${amzTarget}\n`;

  const canonicalHeaders: string = `host:${conf.host}\nx-amz-date:${amzDate}\n`;

  const signedHeaders: string = "host;x-amz-date";

  const payloadHash: string = sha256(payload, null, "hex") as string;

  const canonicalRequest: string = `${httpVerb}\n${canonicalUri}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;

  const canonicalRequestDigest: string = sha256(
    canonicalRequest,
    "utf8",
    "hex"
  ) as string;

  const msg: Uint8Array = encode(
    `${ALGORITHM}\n${amzDate}\n${conf.cache.credentialScope}\n${canonicalRequestDigest}`,
    "utf8"
  );

  const signature: string = awsSignatureV4(
    conf.cache.signingKey,
    msg,
    "hex"
  ) as string;

  const authorizationHeader: string = `${ALGORITHM} Credential=${conf.cache.accessKeyId}/${conf.cache.credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const headers: Headers = new Headers({
    // "Content-Type": CONTENT_TYPE,
    "X-Amz-Date": amzDate,
    // "X-Amz-Target": amzTarget,
    Authorization: authorizationHeader,
    // 4 chunked uploads the X-Amz-Content-Sha256 header should be set to
    // STREAMING-AWS4-HMAC-SHA256-PAYLOAD
    "X-Amz-Content-Sha256": payloadHash
  });

  // https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
  if (conf.cache.sessionToken) {
    headers.append("X-Amz-Security-Token", conf.cache.sessionToken);
  }

  return headers;
}