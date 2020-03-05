import { ClientConfig } from "../mod.ts"
import { Doc, deriveHostEndpoint } from "../util.ts"
import { encode } from "../deps.ts";
import { createCache } from "../client/create_cache.ts";

// NOTE: fixtures obtained from
// https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-header-based-auth.html

const region: string = "us-east-1";
const bucket: string = "examplebucket";

const clientConfig: ClientConfig = {
  credentials: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
  },
  region,
  bucket
};

export const fixtures: Doc = {
  "GET object createHeaders": {
    input: {
      conf: {
        ...clientConfig,
        cache: createCache(clientConfig),
        date: new Date("2013-05-24T00:00:00Z"),
        extraHeaders: { Range: "bytes=0-9" },
        host: deriveHostEndpoint({ bucket }).host,
        httpVerb: "GET",
        objectKey: "/test.txt"
      },
      refreshCredentials: true
    },
    expected: new Headers({
      authorization: "AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20130524/us-east-1/s3/aws4_request,SignedHeaders=host;range;x-amz-content-sha256;x-amz-date,Signature=f0e8bdb87c964420e857bd35b5d6ed310bd44f0170aba48dd91039c6036bdb41",
      host: "examplebucket.s3.amazonaws.com",
      range: "bytes=0-9",
      "x-amz-content-sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "x-amz-date": "20130524T000000Z"
    })
  },
  "PUT object createHeaders": {
    input: {
      conf: {
        ...clientConfig,
        cache: createCache(clientConfig),
        date: new Date("2013-05-24T00:00:00Z"),
        extraHeaders: {
          "x-amz-storage-class": "REDUCED_REDUNDANCY",
          Date: "Fri, 24 May 2013 00:00:00 GMT"
        },
        host: deriveHostEndpoint({ bucket }).host,
        httpVerb: "PUT",
        objectKey: "test$file.text",
        payload: encode("Welcome to Amazon S3.", "utf8")
      },
      refreshCredentials: true
    },
    expected: new Headers({
      authorization: "AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20130524/us-east-1/s3/aws4_request,SignedHeaders=date;host;x-amz-content-sha256;x-amz-date;x-amz-storage-class,Signature=98ad721746da40c64f1a55b78f14c238d841ea1380cd77a1b5971af0ece108bd",
      date: "Fri, 24 May 2013 00:00:00 GMT",
      host: "examplebucket.s3.amazonaws.com",
      "x-amz-content-sha256": "44ce7dd67c959e0d3524ffac1771dfbba87d2b6b4b4e99e42034a8b803f8b072",
      "x-amz-date": "20130524T000000Z",
      "x-amz-storage-class": "REDUCED_REDUNDANCY"
    })
  },
  "GET bucket lifecycle": {
    input: {
      conf: {
        ...clientConfig,
        cache: createCache(clientConfig),
        date: new Date("2013-05-24T00:00:00Z"),
        host: deriveHostEndpoint({ bucket }).host,
        httpVerb: "GET",
        queryString: "?lifecycle"
      },
      refreshCredentials: true
    },
    expected: new Headers({
      authorization: "AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20130524/us-east-1/s3/aws4_request,SignedHeaders=host;x-amz-content-sha256;x-amz-date,Signature=fea454ca298b7da1c68078a5d1bdbfbbe0d65c699e0f91ac7a200a0136783543",
      host: "examplebucket.s3.amazonaws.com",
      "x-amz-content-sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "x-amz-date": "20130524T000000Z"
    })
  },
  "GET bucket (list objects)": {
    input: {
      conf: {
        ...clientConfig,
        cache: createCache(clientConfig),
        date: new Date("2013-05-24T00:00:00Z"),
        host: deriveHostEndpoint({ bucket }).host,
        httpVerb: "GET",
        queryString: "?max-keys=2&prefix=J"
      },
      refreshCredentials: true
    },
    expected: new Headers({
      authorization: "AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20130524/us-east-1/s3/aws4_request,SignedHeaders=host;x-amz-content-sha256;x-amz-date,Signature=34b48302e7b5fa45bde8084f4b7868a86f0a534bc59db6670ed5711ef69dc6f7",
      host: "examplebucket.s3.amazonaws.com",
      "x-amz-content-sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "x-amz-date": "20130524T000000Z"
    })
  }
};