import { Doc } from "../util.ts";
import * as listobjectsv2 from "./listobjectsv2.ts";
import * as deleteobjects from "./deleteobjects.ts";

export const parsers: { [key: string]: (xml: string) => Doc } = {
  ListObjectsV2: listobjectsv2.parse,
};

export const stringifiers: { [key: string]: (x: Doc) => string } = {
  DeleteObjects: deleteobjects.stringify,
};
