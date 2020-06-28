# s3

[![ci](https://github.com/chiefbiiko/s3/workflows/ci/badge.svg?branch=master)](https://github.com/chiefbiiko/s3/actions?query=workflow%3Aci)

everything here is under construction

the mvp implementation should encompass single-part uploads, reads, and the ability to set advanced object and bucket configurations.

there's a whole lot more to do: chunked uploads, docs, codebase simplifications, etc.

consider [sponsoring](https://github.com/sponsors/chiefbiiko) if you want to gas up development.

## usage

``` ts
import { createClient } from "https://denopkg.com/chiefbiiko/s3/mod.ts";

const s3 = createClient();

const result = await s3.listBuckets();
```