import { encode } from "../deps.ts";
import { HeadersConfig, createHeaders } from "./create_headers.ts";
import { Doc, opVerbs } from "../util.ts";

/** Base fetch. */
export async function baseFetch(
  conf: Doc,
  op: string,
  params: Doc
): Promise<Doc> {
    const httpVerb: string = opVerbs.get(op);
    
 // TODO: figure out what da payload should be 4 S3
  const payload: Uint8Array = httpVerb === "GET" ? null : encode("TODO");

  let headers: Headers = await createHeaders(
    httpVerb,
    // TODO: check this!!!
    params.Key,
    payload,
    conf as HeadersConfig
  );

  let response: Response = await fetch(conf.endpoint, {
    method: httpVerb,
    headers,
    body: httpVerb === "GET" ? payload : 
  });

  let body: Doc = await response.json();

  if (!response.ok) {
    if (response.status === 403) {
      // retry once with refreshed credenttials
      headers = await createHeaders(op, payload, conf as HeadersConfig, true);

      response = await fetch(conf.endpoint, {
        method: httpVerb,
        headers,
        body: payload
      });

      if (response.ok) {
        body = await response.json();

        return body;
      }
    }

    throw new Error(body.message);
  }

  return body;
}