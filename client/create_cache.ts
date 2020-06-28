import { ClientConfig, Credentials } from "../mod.ts";
import { kdf } from "./aws_signature_v4.ts";
import { Doc, date as dateUtil } from "../util.ts";

/** Service name. */
const SERVICE: string = "s3";

/** Cache for credentialScope and expensive signature key. */
export function createCache(conf: ClientConfig): Doc {
  return {
    _credentialScope: "",
    _signingKey: null,
    _accessKeyId: "",
    _sessionToken: "",
    async refresh(date: Date): Promise<void> {
      const dateStamp: string = dateUtil.format(date, "dateStamp");

      let credentials: Credentials;

      if (typeof conf.credentials === "function") {
        credentials = await conf.credentials();
      } else {
        // NOTE: bc conf flew thru deriveConfig .credentials is guaranteed
        credentials = conf.credentials!;
      }

      this._signingKey = kdf(
        credentials.secretAccessKey,
        dateStamp,
        // NOTE: bc conf flew thru deriveConfig .region is guaranteed
        conf.region!,
        SERVICE
      ) as Uint8Array;

      this._credentialScope = `${dateStamp}/${conf.region}/${SERVICE}/aws4_request`;
      this._accessKeyId = credentials.accessKeyId;
      this._sessionToken = credentials.sessionToken;
    },
    get signingKey(): Uint8Array {
      return this._signingKey;
    },
    get credentialScope(): string {
      return this._credentialScope;
    },
    get accessKeyId(): string {
      return this._accessKeyId;
    },
    get sessionToken(): string {
      return this._sessionToken;
    }
  };
}