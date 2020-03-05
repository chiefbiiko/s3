import { Doc } from "../util.ts";

/** Maps Headers to an object. */
export function toPojo(headers: Headers): Doc {
  return Object.fromEntries(headers.entries());
}