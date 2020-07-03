import {
  Tag,
  declaration,
  serialize,
  tag,
} from "https://raw.githubusercontent.com/olaven/serialize-xml/v0.3.2/mod.ts";

export interface DeleteObjectsRequest {
  Delete: {
    Objects: { Key: string; VersionId?: string }[];
  };
  Quiet?: boolean;
}

export function stringify(r: DeleteObjectsRequest): string {
  return serialize(declaration([["version", "1.0"], ["encoding", "UTF-8"]])) +
    serialize(
      tag(
        "Delete",
        r.Delete.Objects.map((o: { Key: string; VersionId: string }): Tag =>
          tag("Object", [tag("Key", o.Key), tag("VersionId", o.VersionId)])
        ),
        [["xmlns", "http://s3.amazonaws.com/doc/2006-03-01/"]],
      ),
    );
}
