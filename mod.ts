import { baseOp, deriveConfig } from "./client/mod.ts";
import { Doc, camelCase } from "./util.ts";

// TODO:
// + add a changelog that integrates with `git tag -a`
// + add a content-type header to requests
// + presend headers with 100-continue Expect header
// + add a content-md5 header for traffic data integrity
// + implement chunked uploads
// + think of how to maintain and tackle a feature roadmap

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
  region?: string; // us-west-2
  profile?: string; // default
  bucket?: string; // yo-bucket
  port?: number; // 80
}

/** S3 operations. */
export const OPS: Set<string> = new Set<string>([]);

/** Creates a S3 client. */
export function createClient(conf?: ClientConfig): S3Client {
  const _conf: Doc = deriveConfig(conf);

  const s3: S3Client = {} as S3Client;

  for (const op of OPS) {
    s3[camelCase(op)] = baseOp.bind(null, _conf, op);
  }

  return s3;
}