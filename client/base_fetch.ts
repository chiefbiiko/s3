import { createHeaders, HeadersConfig } from "./create_headers.ts";
import { Doc, stripLeadingSlash, toPayload } from "../util.ts";

/** Base fetch. */
export async function baseFetch(
  conf: Doc,
  // op: string,
  httpVerb: string,
  params: Doc
): Promise<Doc> {
  // TODO: assert params.Body is set if httpVerb !== "GET"
  
  const payload: undefined | Uint8Array =await toPayload(params);

  // NOTE: "as HeadersConfig" bc ts doesn't see the spreaded props
  let headers: Headers = await createHeaders({
    ...conf,
    httpVerb,
    objectKey: params.Key,
    payload
  } as HeadersConfig);


  const url: string = conf.endpoint + stripLeadingSlash(params.Key);

  let response: Response = await fetch(url, {
    method: httpVerb,
    headers,
    body: payload
  });

  if (!response.ok) {
    if (response.status === 403 && conf.retry) {
      // retry once with refreshed credenttials
      headers = await createHeaders({
        ...conf,
        httpVerb,
        objectKey:params.Key, 
        payload
      } as HeadersConfig, true);

      response = await fetch(conf.endpoint, {
        method: httpVerb,
        headers,
        body: payload
      });

      if (response.ok) {
        // TODO: detect response content-type and parse accordingly
        return response.json();
      }
    }

    throw new Error(await response.text());
  }

  // TEMP,TODO: detect response content-type and parse accordingly
  return {text: await response.text()}
}