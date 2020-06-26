// import { encode } from "../deps.ts";
import { createHeaders } from "./create_headers.ts";
import { Doc, toPayload } from "../util.ts";

/** Base fetch. */
export async function baseFetch(
  conf: Doc,
  // op: string,
  httpVerb: string,
  params: Doc
): Promise<Doc> {
    // const httpVerb: string = OPS_HTTP_VERBS.get(op) ?? "";

  // TODO: assert params.Body is always set if httpVerb !== "GET"
  const payload: undefined | Uint8Array =await toPayload(params);

  let headers: Headers = await createHeaders({
    ...conf,
    cache: conf.cache,
    host: conf.host,
    httpVerb,
    objectKey: params.Key,
    payload
  });

  // console.error(">>>>>>> payload", payload);
  // console.error(">>>>>>> headers", JSON.stringify(Object.fromEntries(headers.entries()), null, 2));
  // console.error(">>>>>>> conf", JSON.stringify(conf, null, 2));

  let response: Response = await fetch(conf.endpoint, {
    method: httpVerb,
    headers,
    body: payload
  });

  // let body: Doc = await response.json();

  if (!response.ok) {
    if (response.status === 403 && conf.retry) {
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