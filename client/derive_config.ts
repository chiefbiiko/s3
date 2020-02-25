import { get } from "../deps.ts";
import { ClientConfig } from "../mod.ts";
import { Doc, deriveHostEndpoint } from "../util.ts";
import { createCache } from "./create_cache.ts";

/** Derives an internal config object from a ClientConfig. */
export function deriveConfig(conf: ClientConfig = {}): Doc {
  const _conf: ClientConfig = { ...conf };

  if (
    _conf.profile ||
    !_conf.region ||
    !_conf.credentials ||
    (typeof _conf.credentials !== "function" &&
      (!_conf.credentials.accessKeyId || !_conf.credentials.secretAccessKey))
  ) {
    const got: Doc = get({ profile: _conf.profile });

    if (typeof _conf.credentials !== "function") {
      _conf.credentials = {
        accessKeyId: got.accessKeyId,
        secretAccessKey: got.secretAccessKey,
        sessionToken: got.sessionToken,
        ..._conf.credentials
      };
    }

    _conf.region = got.region;

    if (
      typeof _conf.credentials !== "function" &&
      (!_conf.region ||
        !_conf.credentials.accessKeyId ||
        !_conf.credentials.secretAccessKey)
    ) {
      throw new Error("unable to derive aws config");
    }
  }

  _conf.cache = createCache(_conf);
  
  if (_conf.bucket) {
    Object.assign(_conf, deriveHostEndpoint(_conf.region, _conf.bucket, _conf.port));
  }
  
  return _conf;
}