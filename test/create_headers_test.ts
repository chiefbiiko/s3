import { assertEquals } from "https://deno.land/std@v0.34.0/testing/asserts.ts";
import { createHeaders } from "../client/create_headers.ts";
import { Doc } from "../util.ts"

Deno.test({
  name: "createHeaders",
  async fn(): Promise<void> {
    const expectedSignature: string = "TODO"

    const headers: Headers = await createHeaders({
      // httpVerb: string,
      // objectKey: string,
      // payload: Uint8Array,
      // conf: HeadersConfig,
      // refreshCredentials: boolean = !conf.cache.signingKey
    });

    assertEquals(0, 1);
  }
});

Deno.runTests();