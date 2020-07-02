import { Doc} from "../util.ts"
import  * as listobjectsv2 from "./listobjectsv2.ts";

export const parsers: { [key:string]: (xml: string) => Doc} = {
  ListObjectsV2: listobjectsv2.parse
}