import { assertEquals } from "./deps.ts";
import { createHeaders, HeadersConfig } from "../client/create_headers.ts";
import { fixtures } from "./fixtures.ts";
import { Doc } from "../util.ts";

/** Maps Headers to an object. */
export function toPojo(headers: Headers): Doc {
  return Object.fromEntries(headers.entries());
}

Deno.test({
  name: "GET object createHeaders",
  async fn(): Promise<void> {
    const { input, expected } = fixtures["GET object createHeaders"];

    const actual: Headers = await createHeaders(
      input.conf,
      input.refreshCredentials
    );

    assertEquals(toPojo(actual), toPojo(expected));
  }
});

Deno.test({
  name: "PUT object createHeaders",
  async fn(): Promise<void> {
    const { input, expected } = fixtures["PUT object createHeaders"];

    const actual: Headers = await createHeaders(
      input.conf,
      input.refreshCredentials
    );

    assertEquals(toPojo(actual), toPojo(expected));
  }
});

Deno.test({
  name: "GET bucket lifecycle",
  async fn(): Promise<void> {
    const { input, expected } = fixtures["GET bucket lifecycle"];

    const actual: Headers = await createHeaders(
      input.conf,
      input.refreshCredentials
    );

    assertEquals(toPojo(actual), toPojo(expected));
  }
});

Deno.test({
  name: "GET bucket (list objects)",
  async fn(): Promise<void> {
    const { input, expected } = fixtures["GET bucket (list objects)"];

    const actual: Headers = await createHeaders(
      input.conf,
      input.refreshCredentials
    );

    assertEquals(toPojo(actual), toPojo(expected));
  }
});
