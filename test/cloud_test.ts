import { assertEquals } from "https://deno.land/std@v0.35.0/testing/asserts.ts";

import { S3Client, createClient } from "../mod.ts";
import { Doc } from "../util.ts"

// // TODO: create the bucket from within here once that is impld
// const s3: S3Client = createClient({ bucket: Deno.env().BUCKET_NAME });
//
// Deno.test({
//   name: "PutObject",
//   async fn(): Promise<void> {
//     const result: Doc = await s3.putObject({
//       // TODO: figure out params - check how key param flows thru da module
//       Key: "test_file",
//       Body: '{"fraud":419}'
//     });
//
//     assertEquals(0, 1);
//   }
// });

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
