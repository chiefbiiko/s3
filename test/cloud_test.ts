import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { S3Client, createClient } from "../mod.ts";

// TODO: create the bucket from within here once that is impld
const s3: S3Client = createClient({ bucket: Deno.env.get("BUCKET_NAME") });

Deno.test({
  name: "PutObject into a bucket defined when constructing the S3 client",
  async fn(): Promise<void> {
    const result = await s3.putObject({
      Key: ".gitignore",
      Body: '.env',
    });
  },
});

Deno.test({
  name: "PutObject into a bucket specified at calltime",
  async fn(): Promise<void> {
    const result = await createClient().putObject({
      Bucket: Deno.env.get("BUCKET_NAME"),
      Key: "callback.js",
      Body: 'function cb() {}',
    });
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
