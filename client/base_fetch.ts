import { encode } from "../deps.ts";
import { HeadersConfig, createHeaders } from "./create_headers.ts";
import { Doc } from "../util.ts";

/** Maps S3 operations to their corresponding HTTP verbs. */
const OP2VERB: Map<string, string> = new Map<string, string>();

/** Base fetch. */
export async function baseFetch(
  conf: Doc,
  op: string,
  params: Doc
): Promise<Doc> {
 // TODO: figure out what da payload should be 4 S3
  const payload: Uint8Array = encode(JSON.stringify(params), "utf8");

  const httpVerb: string = OP2VERB.get(op);

  let headers: Headers = await createHeaders(
    op,
    params.Key,
    payload,
    conf as HeadersConfig
  );

  let response: Response = await fetch(conf.endpoint, {
    method: httpVerb,
    headers,
    body: payload
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