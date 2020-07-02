import {list , item } from "./xml_utils.ts"

const xml: string = `
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Name>s3testingstack-bucket-419</Name><Prefix></Prefix><Marker></Marker><MaxKeys>1000</MaxKeys><IsTruncated>false</IsTruncated><Contents><Key>.gitignore</Key><LastModified>2020-07-02T12:07:30.000Z</LastModified><ETag>&quot;f579cccc964135c7d644c7b2d3b0d3ec&quot;</ETag><Size>4</Size><Owner><ID>8732cdd33894b89bf2359ce24c3742eb1765b330723e88e8ccba940732bf3e2d</ID><DisplayName>noah.anabiik.schwarz</DisplayName></Owner><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>callback.js</Key><LastModified>2020-07-02T12:07:31.000Z</LastModified><ETag>&quot;f8fa4b30fab5f8cec8a2e6ab2616e2c4&quot;</ETag><Size>16</Size><Owner><ID>8732cdd33894b89bf2359ce24c3742eb1765b330723e88e8ccba940732bf3e2d</ID><DisplayName>noah.anabiik.schwarz</DisplayName></Owner><StorageClass>STANDARD</StorageClass></Contents></ListBucketResult>
`.trim()

// function list(input: string,tag: string, global: boolean): undefined |string[] {
//   const regex: RegExp =  RegExp(`(?:<${tag}>)(.*?)(?:<\/${tag}>)`, global ? "g" : undefined)
// 
//   return input.match(regex) || undefined
// }
// 
// function item(input: string, tag: string): undefined | string {
//   const regex: RegExp = RegExp(`(?:<${tag}>)(.*?)(?:<\/${tag}>)`)
// 
//   return input.match(regex)![1]
// }

interface Content {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  Owner: {
    ID: string;
    DisplayName: string
  };
  StorageClass: string;
}

export function parse(xml: string): {Contents: Content[]} {
  return {
    Contents: list(xml, "Contents", true)?.map((content: string): Content => ({
      Key: item(content, "Key")!,
      LastModified: item(content, "LastModified")!,
      ETag: item(content, "ETag")!,
      Size: Number(item(content, "Size")!),
      Owner: {
        ID: item(content, "ID")!,
        DisplayName: item(content, "DisplayName")!,
      },
      StorageClass: item(content, "StorageClass")!,
    })) || []
  };
}
