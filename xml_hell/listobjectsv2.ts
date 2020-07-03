import { list, item } from "./xml_utils.ts";

interface Content {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  Owner: {
    ID: string;
    DisplayName: string;
  };
  StorageClass: string;
}

export function parse(xml: string): { Contents: Content[] } {
  return {
    Contents: list(xml, "Contents")?.map((content: string): Content => ({
      Key: item(content, "Key")!,
      LastModified: item(content, "LastModified")!,
      ETag: item(content, "ETag")!,
      Size: Number(item(content, "Size")!),
      Owner: {
        ID: item(content, "ID")!,
        DisplayName: item(content, "DisplayName")!,
      },
      StorageClass: item(content, "StorageClass")!,
    })) || [],
  };
}
