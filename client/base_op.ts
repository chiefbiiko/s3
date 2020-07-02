import { baseFetch } from "./base_fetch.ts";
// import { API } from "../api/mod.ts";
// import { Translator } from "./translator.ts";
import { Doc, deriveHostEndpoint } from "../util.ts";
import { ClientConfig } from "../mod.ts";

// const _Translator: any = Translator;

// /** Op options. */
// export interface OpOptions {
//   wrapNumbers?: boolean; // wrap numbers to a special number value type? [false]
//   convertEmptyValues?: boolean; // convert empty strings and binaries? [false]
//   translateJSON?: boolean; // translate I/O JSON schemas? [true]
// }

// /** Base shape of all DynamoDB query schemas. */
// const ATTR_VALUE: string =
//   API.operations.PutItem.input.members.Item.value.shape;

// /** S3 operations that do not take any parameters. */
// export const NO_PARAMS_OPS: Set<string> = new Set<string>([
//   // "ListObjectsV2"
// ]);

/** Base op. */
export async function baseOp(
  conf: ClientConfig,
  _op: string,
  httpVerb: string,
  params: Doc = {},
  // {
  //   wrapNumbers = false,
  //   convertEmptyValues = false,
  //   translateJSON = false
  // }: OpOptions = NO_PARAMS_OPS.has(op) ? params || {} : {}
): Promise<undefined | Doc> {
  // TODO: how to avoid shared state more efficently?
  let _conf: ClientConfig = {...conf}

  if (params.Bucket ||params.bucket) {
    Object.assign(_conf, deriveHostEndpoint({
      bucket: params.Bucket ||params.bucket,
      host: conf.host,
      port: conf.port,
      endpoint: conf.endpoint
    }))
  } else if (!_conf.host || !_conf.endpoint) {
    throw new Error("undefined host/endpoint");
  }

  // return baseFetch(_conf, op, params);

  // let translator: any;
  // let outputShape: any;

  // if (translateJSON) {
  //   translator = new _Translator({
  //     wrapNumbers,
  //     convertEmptyValues,
  //     // attrValue: ATTR_VALUE
  //   });
  // 
  //   outputShape = API.operations[op].output;
  // 
  //   params = translator.translateInput(params, API.operations[op].input);
  // } else {
  //   params = { ...params };
  // }

  let rawResult: undefined | Doc = await baseFetch(_conf, httpVerb, params);

return rawResult;

  // if (!translateJSON) {
  //   return rawResult;
  // }

  // return translator.translateOutput(rawResult, outputShape);
}