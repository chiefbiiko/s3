import { get } from "../deps.ts";
import { Doc, deriveHostEndpoint } from "../util.ts";
import { createCache } from "./create_cache.ts";
import {ClientConfig} from "../mod.ts";

/** Derives an internal config object from a ClientConfig. */
export function deriveConfig(conf: ClientConfig = {}): Doc {
  const _conf: Doc = { retry: true, ...conf };

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

    if (!_conf.region) {
      throw new Error("unable to derive aws region");
    }

    if (
      typeof _conf.credentials !== "function" &&
      (!_conf.region ||
        !_conf.credentials.accessKeyId ||
        !_conf.credentials.secretAccessKey)
    ) {
      throw new Error("unable to derive aws credentials");
    }
  }

  _conf.cache = createCache(_conf);

  if (_conf.bucket) {
    Object.assign(_conf, deriveHostEndpoint(_conf));
  }

  return _conf;
}