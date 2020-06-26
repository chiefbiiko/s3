import { baseOp, deriveConfig } from "./client/mod.ts";
import { Doc, camelCase, OPS_HTTP_VERBS } from "./util.ts";

// TODO:
// + add a changelog that integrates with `git tag -a`
// + add a content-type header to requests
// + presend headers with 100-continue Expect header
// + add a content-md5 header for traffic data integrity
// + implement chunked uploads
// + think of how to maintain and tackle a feature roadmap
//   + follow the official js sdk afap
//     https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

/** Convenience export. */
export { Doc } from "./util.ts";

/** Generic representation of a S3 client. */
export interface S3Client {
  [key: string]: (params: Doc, options?: Doc) => Promise<Doc>;
}

/** Credentials. */
export interface Credentials {
  accessKeyId: string; // AKIAIOSFODNN7EXAMPLE
  secretAccessKey: string; // wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
  sessionToken?: string; // somesessiontoken
}

/** Client configuration. */
export interface ClientConfig {
  credentials?: Credentials | (() => Credentials | Promise<Credentials>);
  region?: string; // us-east-1
  profile?: string; // default
  bucket?: string; // yo-bucket
  host?: string; // yo-bucket.s3.us-east-1.amazonaws.com
  port?: number; // 443
  endpoint?: string; // https://yo-bucket.s3.us-east-1.amazonaws.com:443
  retry?: boolean; // retry a failing command once on a 403 response?
}

/** Creates a S3 client. */
export function createClient(conf?: ClientConfig): S3Client {
  const _conf: Doc = deriveConfig(conf);

  const s3: S3Client = {} as S3Client;

  for (const [op, httpVerb] of OPS_HTTP_VERBS.entries()) {
    s3[camelCase(op)] = baseOp.bind(null, _conf, op, httpVerb);
  }

  return s3;
}