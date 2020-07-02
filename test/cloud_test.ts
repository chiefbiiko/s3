import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { S3Client, createClient } from "../mod.ts";

import { Doc } from "../util.ts";

const BUCKET_NAME: string = Deno.env.get("BUCKET_NAME") ||
  "s3testingstack-bucket-419";

const s3: S3Client = createClient({ bucket: BUCKET_NAME });

Deno.test({
  name: "creating a bucket",
  async fn(): Promise<void> {
    await s3.createBucket({ Bucket: BUCKET_NAME });
  },
});

Deno.test({
  name: "PutObject into a bucket defined when constructing the S3 client",
  async fn(): Promise<void> {
    const result: undefined | Doc = await s3.putObject({
      Key: ".gitignore",
      Body: ".env",
    });

    assertEquals(result, undefined);
  },
});

Deno.test({
  name: "PutObject into a bucket specified at calltime",
  async fn(): Promise<void> {
    const result: undefined | Doc = await createClient().putObject({
      Bucket: BUCKET_NAME,
      Key: "callback.js",
      Body: "function cb() {}",
    });

    assertEquals(result, undefined);
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

Deno.test({
  name: "batch deleting objects",
  async fn(): Promise<void> {
    const Objects = (await s3.listObjectsV2())!
      .Contents
      .map(({ Key }: { Key: string }): { Key: string } => ({ Key }));

    await s3.deleteObjects({ Delete: { Objects } });
  },
});

Deno.test({
  name: "deleting a bucket",
  async fn(): Promise<void> {
    await s3.deleteBucket({ Bucket: BUCKET_NAME });
  },
});
