import { baseFetch } from "./base_fetch.ts";
import { API } from "../api/mod.ts";
import { Translator } from "./translator.ts";
import { Doc, deriveHostEndpoint } from "../util.ts";
import { ClientConfig } from "../mod.ts";

/** Op options. */
export interface OpOptions {
  wrapNumbers?: boolean; // wrap numbers to a special number value type? [false]
  convertEmptyValues?: boolean; // convert empty strings and binaries? [false]
  translateJSON?: boolean; // translate I/O JSON schemas? [true]
}

// /** Base shape of all DynamoDB query schemas. */
// const ATTR_VALUE: string =
//   API.operations.PutItem.input.members.Item.value.shape;

/** S3 operations that do not take any parameters. */
export const NO_PARAMS_OPS: Set<string> = new Set<string>([
  "TODO"
]);

/** Base op. */
export async function baseOp(
  conf: ClientConfig,
  op: string,
  params: Doc = {},
  {
    wrapNumbers = false,
    convertEmptyValues = false,
    translateJSON = true
  }: OpOptions = NO_PARAMS_OPS.has(op) ? params || {} : {}
): Promise<Doc> {
  let _conf: ClientConfig = {...conf}

  if (params.Bucket) {
    Object.assign(_conf, deriveHostEndpoint({
      region: conf.region,
      bucket: params.Bucket,
      host: conf.host,
      port: conf.port,
      endpoint: conf.endpoint
    }))
  }

  // return baseFetch(_conf, op, params);

  let translator: any;
  let outputShape: any;

  if (translateJSON) {
    translator = new Translator({
      wrapNumbers,
      convertEmptyValues,
      // attrValue: ATTR_VALUE
    });

    outputShape = API.operations[op].output;

    params = translator.translateInput(params, API.operations[op].input);
  } else {
    params = { ...params };
  }

  let rawResult: Doc = await baseFetch(conf, op, params);

  if (!translateJSON) {
    return rawResult;
  }

  return translator.translateOutput(rawResult, outputShape);
}