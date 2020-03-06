import { assertEquals } from "./deps.ts";

import { S3Client, createClient } from "../mod.ts";
import { Doc } from "../util.ts"

// TODO: create the bucket from within here once that is impld
const s3: S3Client = createClient({ bucket: Deno.env().BUCKET_NAME });

Deno.test({
  name: "PutObject",
  async fn(): Promise<void> {
    const result: Doc = await s3.putObject({
      Key: "kitchen",
      Body: "microwave stories"
    });

    console.error(">>>>>>> result");
    console.error(result);

    // assertEquals(0, 1);
  }
});

// Deno.test({
//   name: "GetObject",
//   async fn(): Promise<void> {
//     const result: Doc = await s3.getObject({
//       Key: "test_file"
//     });
//
//     assertEquals(0, 1);
//   }
// });