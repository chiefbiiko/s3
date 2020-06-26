import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { S3Client, createClient } from "../mod.ts";

// TODO: create the bucket from within here once that is impld
const s3: S3Client = createClient({
  bucket: Deno.env.get("BUCKET_NAME"),
  retry: false
});

Deno.test({
  name: "PutObject",
  async fn(): Promise<void> {
    const result = await s3.putObject({
      Key: "bendo/kitchen.json",
      Body: '{"microwave":"stories"}',
    });

    console.error(">>>>>>> result\n", result);
  },
});

// Deno.test({
//   name: "GetObject",
//   async fn(): Promise<void> {
//     const result: Doc = await s3.getObject({
//       // TODO: figure out params - check how key param flows thru da module
//       Key: "test_file"
//     });
//
//     assertEquals(0, 1);
//   }
// });
