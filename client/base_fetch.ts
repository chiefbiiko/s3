import { encode } from "../deps.ts";
import { HeadersConfig, createHeaders } from "./create_headers.ts";
import { Doc, opVerbs, toBuf } from "../util.ts";

/** Base fetch. */
export async function baseFetch(
  conf: Doc,
  op: string,
  params: Doc
): Promise<Doc> {
    const httpVerb: string = opVerbs.get(op) ?? "";

  // TODO: assert params.Body is always set if httpVerb !== "GET"
  const payload: undefined | Uint8Array =await toBuf(params);

  let headers: Headers = await createHeaders({
    ...conf,
    cache: conf.cache,
    host: conf.host,
    httpVerb,
    objectKey: params.Key,
    payload
  });

  let response: Response = await fetch(conf.endpoint, {
    method: httpVerb,
    headers,
    body: payload
  });

  // let body: Doc = await response.json();

  if (!response.ok) {
    if (response.status === 403) {
      // retry once with refreshed credenttials
      // headers = await createHeaders(httpVerb,params.Key, payload, conf as HeadersConfig, true);
      headers = await createHeaders({ ...conf,
        cache: conf.cache,
        host: conf.host,
        httpVerb,objectKey:params.Key, payload}, true);

      response = await fetch(conf.endpoint, {
        method: httpVerb,
        headers,
        body: payload
      });

      if (response.ok) {
        // body = await response.json();
        return await response.json();

        // return body;
      }
    }

    throw new Error(await response.text());
  }

  return await response.json();
}