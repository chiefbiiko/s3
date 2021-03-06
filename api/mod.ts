import { Api } from "./api.ts";

const _Api: any = Api;

export const API: any = new _Api(JSON.parse(`
{
  "version": "2.0",
  "metadata": {
    "apiVersion": "2006-03-01",
    "checksumFormat": "md5",
    "endpointPrefix": "s3",
    "globalEndpoint": "s3.amazonaws.com",
    "protocol": "rest-xml",
    "serviceAbbreviation": "Amazon S3",
    "serviceFullName": "Amazon Simple Storage Service",
    "serviceId": "S3",
    "signatureVersion": "s3",
    "uid": "s3-2006-03-01"
  },
  "operations": {
    "AbortMultipartUpload": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}/{Key+}",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key",
          "UploadId"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "UploadId": {
            "location": "querystring",
            "locationName": "uploadId"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "CompleteMultipartUpload": {
      "http": {
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key",
          "UploadId"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "MultipartUpload": {
            "locationName": "CompleteMultipartUpload",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "members": {
              "Parts": {
                "locationName": "Part",
                "type": "list",
                "member": {
                  "type": "structure",
                  "members": {
                    "ETag": {},
                    "PartNumber": {
                      "type": "integer"
                    }
                  }
                },
                "flattened": true
              }
            }
          },
          "UploadId": {
            "location": "querystring",
            "locationName": "uploadId"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        },
        "payload": "MultipartUpload"
      },
      "output": {
        "type": "structure",
        "members": {
          "Location": {},
          "Bucket": {},
          "Key": {},
          "Expiration": {
            "location": "header",
            "locationName": "x-amz-expiration"
          },
          "ETag": {},
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "CopyObject": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "CopySource",
          "Key"
        ],
        "members": {
          "ACL": {
            "location": "header",
            "locationName": "x-amz-acl"
          },
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "CacheControl": {
            "location": "header",
            "locationName": "Cache-Control"
          },
          "ContentDisposition": {
            "location": "header",
            "locationName": "Content-Disposition"
          },
          "ContentEncoding": {
            "location": "header",
            "locationName": "Content-Encoding"
          },
          "ContentLanguage": {
            "location": "header",
            "locationName": "Content-Language"
          },
          "ContentType": {
            "location": "header",
            "locationName": "Content-Type"
          },
          "CopySource": {
            "location": "header",
            "locationName": "x-amz-copy-source"
          },
          "CopySourceIfMatch": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-match"
          },
          "CopySourceIfModifiedSince": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-modified-since",
            "type": "timestamp"
          },
          "CopySourceIfNoneMatch": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-none-match"
          },
          "CopySourceIfUnmodifiedSince": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-unmodified-since",
            "type": "timestamp"
          },
          "Expires": {
            "location": "header",
            "locationName": "Expires",
            "type": "timestamp"
          },
          "GrantFullControl": {
            "location": "header",
            "locationName": "x-amz-grant-full-control"
          },
          "GrantRead": {
            "location": "header",
            "locationName": "x-amz-grant-read"
          },
          "GrantReadACP": {
            "location": "header",
            "locationName": "x-amz-grant-read-acp"
          },
          "GrantWriteACP": {
            "location": "header",
            "locationName": "x-amz-grant-write-acp"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "Metadata": {
            "shape": "S11",
            "location": "headers",
            "locationName": "x-amz-meta-"
          },
          "MetadataDirective": {
            "location": "header",
            "locationName": "x-amz-metadata-directive"
          },
          "TaggingDirective": {
            "location": "header",
            "locationName": "x-amz-tagging-directive"
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "StorageClass": {
            "location": "header",
            "locationName": "x-amz-storage-class"
          },
          "WebsiteRedirectLocation": {
            "location": "header",
            "locationName": "x-amz-website-redirect-location"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "SSEKMSEncryptionContext": {
            "shape": "S1b",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-context"
          },
          "CopySourceSSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-copy-source-server-side-encryption-customer-algorithm"
          },
          "CopySourceSSECustomerKey": {
            "shape": "S1d",
            "location": "header",
            "locationName": "x-amz-copy-source-server-side-encryption-customer-key"
          },
          "CopySourceSSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-copy-source-server-side-encryption-customer-key-MD5"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "Tagging": {
            "location": "header",
            "locationName": "x-amz-tagging"
          },
          "ObjectLockMode": {
            "location": "header",
            "locationName": "x-amz-object-lock-mode"
          },
          "ObjectLockRetainUntilDate": {
            "shape": "S1h",
            "location": "header",
            "locationName": "x-amz-object-lock-retain-until-date"
          },
          "ObjectLockLegalHoldStatus": {
            "location": "header",
            "locationName": "x-amz-object-lock-legal-hold"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "CopyObjectResult": {
            "type": "structure",
            "members": {
              "ETag": {},
              "LastModified": {
                "type": "timestamp"
              }
            }
          },
          "Expiration": {
            "location": "header",
            "locationName": "x-amz-expiration"
          },
          "CopySourceVersionId": {
            "location": "header",
            "locationName": "x-amz-copy-source-version-id"
          },
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "SSEKMSEncryptionContext": {
            "shape": "S1b",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-context"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        },
        "payload": "CopyObjectResult"
      },
      "alias": "PutObjectCopy"
    },
    "CreateBucket": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "ACL": {
            "location": "header",
            "locationName": "x-amz-acl"
          },
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "CreateBucketConfiguration": {
            "locationName": "CreateBucketConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "members": {
              "LocationConstraint": {}
            }
          },
          "GrantFullControl": {
            "location": "header",
            "locationName": "x-amz-grant-full-control"
          },
          "GrantRead": {
            "location": "header",
            "locationName": "x-amz-grant-read"
          },
          "GrantReadACP": {
            "location": "header",
            "locationName": "x-amz-grant-read-acp"
          },
          "GrantWrite": {
            "location": "header",
            "locationName": "x-amz-grant-write"
          },
          "GrantWriteACP": {
            "location": "header",
            "locationName": "x-amz-grant-write-acp"
          },
          "ObjectLockEnabledForBucket": {
            "location": "header",
            "locationName": "x-amz-bucket-object-lock-enabled",
            "type": "boolean"
          }
        },
        "payload": "CreateBucketConfiguration"
      },
      "output": {
        "type": "structure",
        "members": {
          "Location": {
            "location": "header",
            "locationName": "Location"
          }
        }
      },
      "alias": "PutBucket"
    },
    "CreateMultipartUpload": {
      "http": {
        "requestUri": "/{Bucket}/{Key+}?uploads"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "ACL": {
            "location": "header",
            "locationName": "x-amz-acl"
          },
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "CacheControl": {
            "location": "header",
            "locationName": "Cache-Control"
          },
          "ContentDisposition": {
            "location": "header",
            "locationName": "Content-Disposition"
          },
          "ContentEncoding": {
            "location": "header",
            "locationName": "Content-Encoding"
          },
          "ContentLanguage": {
            "location": "header",
            "locationName": "Content-Language"
          },
          "ContentType": {
            "location": "header",
            "locationName": "Content-Type"
          },
          "Expires": {
            "location": "header",
            "locationName": "Expires",
            "type": "timestamp"
          },
          "GrantFullControl": {
            "location": "header",
            "locationName": "x-amz-grant-full-control"
          },
          "GrantRead": {
            "location": "header",
            "locationName": "x-amz-grant-read"
          },
          "GrantReadACP": {
            "location": "header",
            "locationName": "x-amz-grant-read-acp"
          },
          "GrantWriteACP": {
            "location": "header",
            "locationName": "x-amz-grant-write-acp"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "Metadata": {
            "shape": "S11",
            "location": "headers",
            "locationName": "x-amz-meta-"
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "StorageClass": {
            "location": "header",
            "locationName": "x-amz-storage-class"
          },
          "WebsiteRedirectLocation": {
            "location": "header",
            "locationName": "x-amz-website-redirect-location"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "SSEKMSEncryptionContext": {
            "shape": "S1b",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-context"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "Tagging": {
            "location": "header",
            "locationName": "x-amz-tagging"
          },
          "ObjectLockMode": {
            "location": "header",
            "locationName": "x-amz-object-lock-mode"
          },
          "ObjectLockRetainUntilDate": {
            "shape": "S1h",
            "location": "header",
            "locationName": "x-amz-object-lock-retain-until-date"
          },
          "ObjectLockLegalHoldStatus": {
            "location": "header",
            "locationName": "x-amz-object-lock-legal-hold"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "AbortDate": {
            "location": "header",
            "locationName": "x-amz-abort-date",
            "type": "timestamp"
          },
          "AbortRuleId": {
            "location": "header",
            "locationName": "x-amz-abort-rule-id"
          },
          "Bucket": {
            "locationName": "Bucket"
          },
          "Key": {},
          "UploadId": {},
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "SSEKMSEncryptionContext": {
            "shape": "S1b",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-context"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      },
      "alias": "InitiateMultipartUpload"
    },
    "DeleteBucket": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteBucketAnalyticsConfiguration": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?analytics",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      }
    },
    "DeleteBucketCors": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?cors",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteBucketEncryption": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?encryption",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteBucketInventoryConfiguration": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?inventory",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      }
    },
    "DeleteBucketLifecycle": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?lifecycle",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteBucketMetricsConfiguration": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?metrics",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      }
    },
    "DeleteBucketPolicy": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?policy",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteBucketReplication": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?replication",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteBucketTagging": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?tagging",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteBucketWebsite": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?website",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "DeleteObject": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}/{Key+}",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "MFA": {
            "location": "header",
            "locationName": "x-amz-mfa"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "BypassGovernanceRetention": {
            "location": "header",
            "locationName": "x-amz-bypass-governance-retention",
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "DeleteMarker": {
            "location": "header",
            "locationName": "x-amz-delete-marker",
            "type": "boolean"
          },
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "DeleteObjectTagging": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}/{Key+}?tagging",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          }
        }
      }
    },
    "DeleteObjects": {
      "http": {
        "requestUri": "/{Bucket}?delete"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Delete"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Delete": {
            "locationName": "Delete",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "required": [
              "Objects"
            ],
            "members": {
              "Objects": {
                "locationName": "Object",
                "type": "list",
                "member": {
                  "type": "structure",
                  "required": [
                    "Key"
                  ],
                  "members": {
                    "Key": {},
                    "VersionId": {}
                  }
                },
                "flattened": true
              },
              "Quiet": {
                "type": "boolean"
              }
            }
          },
          "MFA": {
            "location": "header",
            "locationName": "x-amz-mfa"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "BypassGovernanceRetention": {
            "location": "header",
            "locationName": "x-amz-bypass-governance-retention",
            "type": "boolean"
          }
        },
        "payload": "Delete"
      },
      "output": {
        "type": "structure",
        "members": {
          "Deleted": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Key": {},
                "VersionId": {},
                "DeleteMarker": {
                  "type": "boolean"
                },
                "DeleteMarkerVersionId": {}
              }
            },
            "flattened": true
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          },
          "Errors": {
            "locationName": "Error",
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Key": {},
                "VersionId": {},
                "Code": {},
                "Message": {}
              }
            },
            "flattened": true
          }
        }
      },
      "alias": "DeleteMultipleObjects"
    },
    "DeletePublicAccessBlock": {
      "http": {
        "method": "DELETE",
        "requestUri": "/{Bucket}?publicAccessBlock",
        "responseCode": 204
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "GetBucketAccelerateConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?accelerate"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Status": {}
        }
      }
    },
    "GetBucketAcl": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?acl"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Owner": {
            "shape": "S32"
          },
          "Grants": {
            "shape": "S35",
            "locationName": "AccessControlList"
          }
        }
      }
    },
    "GetBucketAnalyticsConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?analytics"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "AnalyticsConfiguration": {
            "shape": "S3e"
          }
        },
        "payload": "AnalyticsConfiguration"
      }
    },
    "GetBucketCors": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?cors"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "CORSRules": {
            "shape": "S3u",
            "locationName": "CORSRule"
          }
        }
      }
    },
    "GetBucketEncryption": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?encryption"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ServerSideEncryptionConfiguration": {
            "shape": "S47"
          }
        },
        "payload": "ServerSideEncryptionConfiguration"
      }
    },
    "GetBucketInventoryConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?inventory"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "InventoryConfiguration": {
            "shape": "S4d"
          }
        },
        "payload": "InventoryConfiguration"
      }
    },
    "GetBucketLifecycle": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?lifecycle"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Rules": {
            "shape": "S4t",
            "locationName": "Rule"
          }
        }
      },
      "deprecated": true
    },
    "GetBucketLifecycleConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?lifecycle"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Rules": {
            "shape": "S58",
            "locationName": "Rule"
          }
        }
      }
    },
    "GetBucketLocation": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?location"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "LocationConstraint": {}
        }
      }
    },
    "GetBucketLogging": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?logging"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "LoggingEnabled": {
            "shape": "S5i"
          }
        }
      }
    },
    "GetBucketMetricsConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?metrics"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "MetricsConfiguration": {
            "shape": "S5q"
          }
        },
        "payload": "MetricsConfiguration"
      }
    },
    "GetBucketNotification": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?notification"
      },
      "input": {
        "shape": "S5t"
      },
      "output": {
        "shape": "S5u"
      },
      "deprecated": true
    },
    "GetBucketNotificationConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?notification"
      },
      "input": {
        "shape": "S5t"
      },
      "output": {
        "shape": "S65"
      }
    },
    "GetBucketPolicy": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?policy"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Policy": {}
        },
        "payload": "Policy"
      }
    },
    "GetBucketPolicyStatus": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?policyStatus"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "PolicyStatus": {
            "type": "structure",
            "members": {
              "IsPublic": {
                "locationName": "IsPublic",
                "type": "boolean"
              }
            }
          }
        },
        "payload": "PolicyStatus"
      }
    },
    "GetBucketReplication": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?replication"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ReplicationConfiguration": {
            "shape": "S6s"
          }
        },
        "payload": "ReplicationConfiguration"
      }
    },
    "GetBucketRequestPayment": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?requestPayment"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Payer": {}
        }
      }
    },
    "GetBucketTagging": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?tagging"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "TagSet"
        ],
        "members": {
          "TagSet": {
            "shape": "S3k"
          }
        }
      }
    },
    "GetBucketVersioning": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?versioning"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Status": {},
          "MFADelete": {
            "locationName": "MfaDelete"
          }
        }
      }
    },
    "GetBucketWebsite": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?website"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "RedirectAllRequestsTo": {
            "shape": "S7t"
          },
          "IndexDocument": {
            "shape": "S7w"
          },
          "ErrorDocument": {
            "shape": "S7y"
          },
          "RoutingRules": {
            "shape": "S7z"
          }
        }
      }
    },
    "GetObject": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "IfMatch": {
            "location": "header",
            "locationName": "If-Match"
          },
          "IfModifiedSince": {
            "location": "header",
            "locationName": "If-Modified-Since",
            "type": "timestamp"
          },
          "IfNoneMatch": {
            "location": "header",
            "locationName": "If-None-Match"
          },
          "IfUnmodifiedSince": {
            "location": "header",
            "locationName": "If-Unmodified-Since",
            "type": "timestamp"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "Range": {
            "location": "header",
            "locationName": "Range"
          },
          "ResponseCacheControl": {
            "location": "querystring",
            "locationName": "response-cache-control"
          },
          "ResponseContentDisposition": {
            "location": "querystring",
            "locationName": "response-content-disposition"
          },
          "ResponseContentEncoding": {
            "location": "querystring",
            "locationName": "response-content-encoding"
          },
          "ResponseContentLanguage": {
            "location": "querystring",
            "locationName": "response-content-language"
          },
          "ResponseContentType": {
            "location": "querystring",
            "locationName": "response-content-type"
          },
          "ResponseExpires": {
            "location": "querystring",
            "locationName": "response-expires",
            "type": "timestamp"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "PartNumber": {
            "location": "querystring",
            "locationName": "partNumber",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Body": {
            "streaming": true,
            "type": "blob"
          },
          "DeleteMarker": {
            "location": "header",
            "locationName": "x-amz-delete-marker",
            "type": "boolean"
          },
          "AcceptRanges": {
            "location": "header",
            "locationName": "accept-ranges"
          },
          "Expiration": {
            "location": "header",
            "locationName": "x-amz-expiration"
          },
          "Restore": {
            "location": "header",
            "locationName": "x-amz-restore"
          },
          "LastModified": {
            "location": "header",
            "locationName": "Last-Modified",
            "type": "timestamp"
          },
          "ContentLength": {
            "location": "header",
            "locationName": "Content-Length",
            "type": "long"
          },
          "ETag": {
            "location": "header",
            "locationName": "ETag"
          },
          "MissingMeta": {
            "location": "header",
            "locationName": "x-amz-missing-meta",
            "type": "integer"
          },
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          },
          "CacheControl": {
            "location": "header",
            "locationName": "Cache-Control"
          },
          "ContentDisposition": {
            "location": "header",
            "locationName": "Content-Disposition"
          },
          "ContentEncoding": {
            "location": "header",
            "locationName": "Content-Encoding"
          },
          "ContentLanguage": {
            "location": "header",
            "locationName": "Content-Language"
          },
          "ContentRange": {
            "location": "header",
            "locationName": "Content-Range"
          },
          "ContentType": {
            "location": "header",
            "locationName": "Content-Type"
          },
          "Expires": {
            "location": "header",
            "locationName": "Expires",
            "type": "timestamp"
          },
          "WebsiteRedirectLocation": {
            "location": "header",
            "locationName": "x-amz-website-redirect-location"
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "Metadata": {
            "shape": "S11",
            "location": "headers",
            "locationName": "x-amz-meta-"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "StorageClass": {
            "location": "header",
            "locationName": "x-amz-storage-class"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          },
          "ReplicationStatus": {
            "location": "header",
            "locationName": "x-amz-replication-status"
          },
          "PartsCount": {
            "location": "header",
            "locationName": "x-amz-mp-parts-count",
            "type": "integer"
          },
          "TagCount": {
            "location": "header",
            "locationName": "x-amz-tagging-count",
            "type": "integer"
          },
          "ObjectLockMode": {
            "location": "header",
            "locationName": "x-amz-object-lock-mode"
          },
          "ObjectLockRetainUntilDate": {
            "shape": "S1h",
            "location": "header",
            "locationName": "x-amz-object-lock-retain-until-date"
          },
          "ObjectLockLegalHoldStatus": {
            "location": "header",
            "locationName": "x-amz-object-lock-legal-hold"
          }
        },
        "payload": "Body"
      }
    },
    "GetObjectAcl": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}/{Key+}?acl"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Owner": {
            "shape": "S32"
          },
          "Grants": {
            "shape": "S35",
            "locationName": "AccessControlList"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "GetObjectLegalHold": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}/{Key+}?legal-hold"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "LegalHold": {
            "shape": "S8y"
          }
        },
        "payload": "LegalHold"
      }
    },
    "GetObjectLockConfiguration": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?object-lock"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ObjectLockConfiguration": {
            "shape": "S91"
          }
        },
        "payload": "ObjectLockConfiguration"
      }
    },
    "GetObjectRetention": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}/{Key+}?retention"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Retention": {
            "shape": "S99"
          }
        },
        "payload": "Retention"
      }
    },
    "GetObjectTagging": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}/{Key+}?tagging"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "TagSet"
        ],
        "members": {
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          },
          "TagSet": {
            "shape": "S3k"
          }
        }
      }
    },
    "GetObjectTorrent": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}/{Key+}?torrent"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Body": {
            "streaming": true,
            "type": "blob"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        },
        "payload": "Body"
      }
    },
    "GetPublicAccessBlock": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?publicAccessBlock"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "PublicAccessBlockConfiguration": {
            "shape": "S9g"
          }
        },
        "payload": "PublicAccessBlockConfiguration"
      }
    },
    "HeadBucket": {
      "http": {
        "method": "HEAD",
        "requestUri": "/{Bucket}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          }
        }
      }
    },
    "HeadObject": {
      "http": {
        "method": "HEAD",
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "IfMatch": {
            "location": "header",
            "locationName": "If-Match"
          },
          "IfModifiedSince": {
            "location": "header",
            "locationName": "If-Modified-Since",
            "type": "timestamp"
          },
          "IfNoneMatch": {
            "location": "header",
            "locationName": "If-None-Match"
          },
          "IfUnmodifiedSince": {
            "location": "header",
            "locationName": "If-Unmodified-Since",
            "type": "timestamp"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "Range": {
            "location": "header",
            "locationName": "Range"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "PartNumber": {
            "location": "querystring",
            "locationName": "partNumber",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "DeleteMarker": {
            "location": "header",
            "locationName": "x-amz-delete-marker",
            "type": "boolean"
          },
          "AcceptRanges": {
            "location": "header",
            "locationName": "accept-ranges"
          },
          "Expiration": {
            "location": "header",
            "locationName": "x-amz-expiration"
          },
          "Restore": {
            "location": "header",
            "locationName": "x-amz-restore"
          },
          "LastModified": {
            "location": "header",
            "locationName": "Last-Modified",
            "type": "timestamp"
          },
          "ContentLength": {
            "location": "header",
            "locationName": "Content-Length",
            "type": "long"
          },
          "ETag": {
            "location": "header",
            "locationName": "ETag"
          },
          "MissingMeta": {
            "location": "header",
            "locationName": "x-amz-missing-meta",
            "type": "integer"
          },
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          },
          "CacheControl": {
            "location": "header",
            "locationName": "Cache-Control"
          },
          "ContentDisposition": {
            "location": "header",
            "locationName": "Content-Disposition"
          },
          "ContentEncoding": {
            "location": "header",
            "locationName": "Content-Encoding"
          },
          "ContentLanguage": {
            "location": "header",
            "locationName": "Content-Language"
          },
          "ContentType": {
            "location": "header",
            "locationName": "Content-Type"
          },
          "Expires": {
            "location": "header",
            "locationName": "Expires",
            "type": "timestamp"
          },
          "WebsiteRedirectLocation": {
            "location": "header",
            "locationName": "x-amz-website-redirect-location"
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "Metadata": {
            "shape": "S11",
            "location": "headers",
            "locationName": "x-amz-meta-"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "StorageClass": {
            "location": "header",
            "locationName": "x-amz-storage-class"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          },
          "ReplicationStatus": {
            "location": "header",
            "locationName": "x-amz-replication-status"
          },
          "PartsCount": {
            "location": "header",
            "locationName": "x-amz-mp-parts-count",
            "type": "integer"
          },
          "ObjectLockMode": {
            "location": "header",
            "locationName": "x-amz-object-lock-mode"
          },
          "ObjectLockRetainUntilDate": {
            "shape": "S1h",
            "location": "header",
            "locationName": "x-amz-object-lock-retain-until-date"
          },
          "ObjectLockLegalHoldStatus": {
            "location": "header",
            "locationName": "x-amz-object-lock-legal-hold"
          }
        }
      }
    },
    "ListBucketAnalyticsConfigurations": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?analytics"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContinuationToken": {
            "location": "querystring",
            "locationName": "continuation-token"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IsTruncated": {
            "type": "boolean"
          },
          "ContinuationToken": {},
          "NextContinuationToken": {},
          "AnalyticsConfigurationList": {
            "locationName": "AnalyticsConfiguration",
            "type": "list",
            "member": {
              "shape": "S3e"
            },
            "flattened": true
          }
        }
      }
    },
    "ListBucketInventoryConfigurations": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?inventory"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContinuationToken": {
            "location": "querystring",
            "locationName": "continuation-token"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContinuationToken": {},
          "InventoryConfigurationList": {
            "locationName": "InventoryConfiguration",
            "type": "list",
            "member": {
              "shape": "S4d"
            },
            "flattened": true
          },
          "IsTruncated": {
            "type": "boolean"
          },
          "NextContinuationToken": {}
        }
      }
    },
    "ListBucketMetricsConfigurations": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?metrics"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContinuationToken": {
            "location": "querystring",
            "locationName": "continuation-token"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IsTruncated": {
            "type": "boolean"
          },
          "ContinuationToken": {},
          "NextContinuationToken": {},
          "MetricsConfigurationList": {
            "locationName": "MetricsConfiguration",
            "type": "list",
            "member": {
              "shape": "S5q"
            },
            "flattened": true
          }
        }
      }
    },
    "ListBuckets": {
      "http": {
        "method": "GET"
      },
      "output": {
        "type": "structure",
        "members": {
          "Buckets": {
            "type": "list",
            "member": {
              "locationName": "Bucket",
              "type": "structure",
              "members": {
                "Name": {},
                "CreationDate": {
                  "type": "timestamp"
                }
              }
            }
          },
          "Owner": {
            "shape": "S32"
          }
        }
      },
      "alias": "GetService"
    },
    "ListMultipartUploads": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?uploads"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Delimiter": {
            "location": "querystring",
            "locationName": "delimiter"
          },
          "EncodingType": {
            "location": "querystring",
            "locationName": "encoding-type"
          },
          "KeyMarker": {
            "location": "querystring",
            "locationName": "key-marker"
          },
          "MaxUploads": {
            "location": "querystring",
            "locationName": "max-uploads",
            "type": "integer"
          },
          "Prefix": {
            "location": "querystring",
            "locationName": "prefix"
          },
          "UploadIdMarker": {
            "location": "querystring",
            "locationName": "upload-id-marker"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Bucket": {},
          "KeyMarker": {},
          "UploadIdMarker": {},
          "NextKeyMarker": {},
          "Prefix": {},
          "Delimiter": {},
          "NextUploadIdMarker": {},
          "MaxUploads": {
            "type": "integer"
          },
          "IsTruncated": {
            "type": "boolean"
          },
          "Uploads": {
            "locationName": "Upload",
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "UploadId": {},
                "Key": {},
                "Initiated": {
                  "type": "timestamp"
                },
                "StorageClass": {},
                "Owner": {
                  "shape": "S32"
                },
                "Initiator": {
                  "shape": "Sad"
                }
              }
            },
            "flattened": true
          },
          "CommonPrefixes": {
            "shape": "Sae"
          },
          "EncodingType": {}
        }
      }
    },
    "ListObjectVersions": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?versions"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Delimiter": {
            "location": "querystring",
            "locationName": "delimiter"
          },
          "EncodingType": {
            "location": "querystring",
            "locationName": "encoding-type"
          },
          "KeyMarker": {
            "location": "querystring",
            "locationName": "key-marker"
          },
          "MaxKeys": {
            "location": "querystring",
            "locationName": "max-keys",
            "type": "integer"
          },
          "Prefix": {
            "location": "querystring",
            "locationName": "prefix"
          },
          "VersionIdMarker": {
            "location": "querystring",
            "locationName": "version-id-marker"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IsTruncated": {
            "type": "boolean"
          },
          "KeyMarker": {},
          "VersionIdMarker": {},
          "NextKeyMarker": {},
          "NextVersionIdMarker": {},
          "Versions": {
            "locationName": "Version",
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "ETag": {},
                "Size": {
                  "type": "integer"
                },
                "StorageClass": {},
                "Key": {},
                "VersionId": {},
                "IsLatest": {
                  "type": "boolean"
                },
                "LastModified": {
                  "type": "timestamp"
                },
                "Owner": {
                  "shape": "S32"
                }
              }
            },
            "flattened": true
          },
          "DeleteMarkers": {
            "locationName": "DeleteMarker",
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Owner": {
                  "shape": "S32"
                },
                "Key": {},
                "VersionId": {},
                "IsLatest": {
                  "type": "boolean"
                },
                "LastModified": {
                  "type": "timestamp"
                }
              }
            },
            "flattened": true
          },
          "Name": {},
          "Prefix": {},
          "Delimiter": {},
          "MaxKeys": {
            "type": "integer"
          },
          "CommonPrefixes": {
            "shape": "Sae"
          },
          "EncodingType": {}
        }
      },
      "alias": "GetBucketObjectVersions"
    },
    "ListObjects": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Delimiter": {
            "location": "querystring",
            "locationName": "delimiter"
          },
          "EncodingType": {
            "location": "querystring",
            "locationName": "encoding-type"
          },
          "Marker": {
            "location": "querystring",
            "locationName": "marker"
          },
          "MaxKeys": {
            "location": "querystring",
            "locationName": "max-keys",
            "type": "integer"
          },
          "Prefix": {
            "location": "querystring",
            "locationName": "prefix"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IsTruncated": {
            "type": "boolean"
          },
          "Marker": {},
          "NextMarker": {},
          "Contents": {
            "shape": "Saw"
          },
          "Name": {},
          "Prefix": {},
          "Delimiter": {},
          "MaxKeys": {
            "type": "integer"
          },
          "CommonPrefixes": {
            "shape": "Sae"
          },
          "EncodingType": {}
        }
      },
      "alias": "GetBucket"
    },
    "ListObjectsV2": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}?list-type=2"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Delimiter": {
            "location": "querystring",
            "locationName": "delimiter"
          },
          "EncodingType": {
            "location": "querystring",
            "locationName": "encoding-type"
          },
          "MaxKeys": {
            "location": "querystring",
            "locationName": "max-keys",
            "type": "integer"
          },
          "Prefix": {
            "location": "querystring",
            "locationName": "prefix"
          },
          "ContinuationToken": {
            "location": "querystring",
            "locationName": "continuation-token"
          },
          "FetchOwner": {
            "location": "querystring",
            "locationName": "fetch-owner",
            "type": "boolean"
          },
          "StartAfter": {
            "location": "querystring",
            "locationName": "start-after"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IsTruncated": {
            "type": "boolean"
          },
          "Contents": {
            "shape": "Saw"
          },
          "Name": {},
          "Prefix": {},
          "Delimiter": {},
          "MaxKeys": {
            "type": "integer"
          },
          "CommonPrefixes": {
            "shape": "Sae"
          },
          "EncodingType": {},
          "KeyCount": {
            "type": "integer"
          },
          "ContinuationToken": {},
          "NextContinuationToken": {},
          "StartAfter": {}
        }
      }
    },
    "ListParts": {
      "http": {
        "method": "GET",
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key",
          "UploadId"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "MaxParts": {
            "location": "querystring",
            "locationName": "max-parts",
            "type": "integer"
          },
          "PartNumberMarker": {
            "location": "querystring",
            "locationName": "part-number-marker",
            "type": "integer"
          },
          "UploadId": {
            "location": "querystring",
            "locationName": "uploadId"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "AbortDate": {
            "location": "header",
            "locationName": "x-amz-abort-date",
            "type": "timestamp"
          },
          "AbortRuleId": {
            "location": "header",
            "locationName": "x-amz-abort-rule-id"
          },
          "Bucket": {},
          "Key": {},
          "UploadId": {},
          "PartNumberMarker": {
            "type": "integer"
          },
          "NextPartNumberMarker": {
            "type": "integer"
          },
          "MaxParts": {
            "type": "integer"
          },
          "IsTruncated": {
            "type": "boolean"
          },
          "Parts": {
            "locationName": "Part",
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "PartNumber": {
                  "type": "integer"
                },
                "LastModified": {
                  "type": "timestamp"
                },
                "ETag": {},
                "Size": {
                  "type": "integer"
                }
              }
            },
            "flattened": true
          },
          "Initiator": {
            "shape": "Sad"
          },
          "Owner": {
            "shape": "S32"
          },
          "StorageClass": {},
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "PutBucketAccelerateConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?accelerate"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "AccelerateConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "AccelerateConfiguration": {
            "locationName": "AccelerateConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "members": {
              "Status": {}
            }
          }
        },
        "payload": "AccelerateConfiguration"
      }
    },
    "PutBucketAcl": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?acl"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "ACL": {
            "location": "header",
            "locationName": "x-amz-acl"
          },
          "AccessControlPolicy": {
            "shape": "Sbe",
            "locationName": "AccessControlPolicy",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          },
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "GrantFullControl": {
            "location": "header",
            "locationName": "x-amz-grant-full-control"
          },
          "GrantRead": {
            "location": "header",
            "locationName": "x-amz-grant-read"
          },
          "GrantReadACP": {
            "location": "header",
            "locationName": "x-amz-grant-read-acp"
          },
          "GrantWrite": {
            "location": "header",
            "locationName": "x-amz-grant-write"
          },
          "GrantWriteACP": {
            "location": "header",
            "locationName": "x-amz-grant-write-acp"
          }
        },
        "payload": "AccessControlPolicy"
      }
    },
    "PutBucketAnalyticsConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?analytics"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id",
          "AnalyticsConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          },
          "AnalyticsConfiguration": {
            "shape": "S3e",
            "locationName": "AnalyticsConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "AnalyticsConfiguration"
      }
    },
    "PutBucketCors": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?cors"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "CORSConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "CORSConfiguration": {
            "locationName": "CORSConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "required": [
              "CORSRules"
            ],
            "members": {
              "CORSRules": {
                "shape": "S3u",
                "locationName": "CORSRule"
              }
            }
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          }
        },
        "payload": "CORSConfiguration"
      }
    },
    "PutBucketEncryption": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?encryption"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "ServerSideEncryptionConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "ServerSideEncryptionConfiguration": {
            "shape": "S47",
            "locationName": "ServerSideEncryptionConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "ServerSideEncryptionConfiguration"
      }
    },
    "PutBucketInventoryConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?inventory"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id",
          "InventoryConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          },
          "InventoryConfiguration": {
            "shape": "S4d",
            "locationName": "InventoryConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "InventoryConfiguration"
      }
    },
    "PutBucketLifecycle": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?lifecycle"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "LifecycleConfiguration": {
            "locationName": "LifecycleConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "required": [
              "Rules"
            ],
            "members": {
              "Rules": {
                "shape": "S4t",
                "locationName": "Rule"
              }
            }
          }
        },
        "payload": "LifecycleConfiguration"
      },
      "deprecated": true
    },
    "PutBucketLifecycleConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?lifecycle"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "LifecycleConfiguration": {
            "locationName": "LifecycleConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "required": [
              "Rules"
            ],
            "members": {
              "Rules": {
                "shape": "S58",
                "locationName": "Rule"
              }
            }
          }
        },
        "payload": "LifecycleConfiguration"
      }
    },
    "PutBucketLogging": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?logging"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "BucketLoggingStatus"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "BucketLoggingStatus": {
            "locationName": "BucketLoggingStatus",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "members": {
              "LoggingEnabled": {
                "shape": "S5i"
              }
            }
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          }
        },
        "payload": "BucketLoggingStatus"
      }
    },
    "PutBucketMetricsConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?metrics"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Id",
          "MetricsConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Id": {
            "location": "querystring",
            "locationName": "id"
          },
          "MetricsConfiguration": {
            "shape": "S5q",
            "locationName": "MetricsConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "MetricsConfiguration"
      }
    },
    "PutBucketNotification": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?notification"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "NotificationConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "NotificationConfiguration": {
            "shape": "S5u",
            "locationName": "NotificationConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "NotificationConfiguration"
      },
      "deprecated": true
    },
    "PutBucketNotificationConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?notification"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "NotificationConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "NotificationConfiguration": {
            "shape": "S65",
            "locationName": "NotificationConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "NotificationConfiguration"
      }
    },
    "PutBucketPolicy": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?policy"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Policy"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "ConfirmRemoveSelfBucketAccess": {
            "location": "header",
            "locationName": "x-amz-confirm-remove-self-bucket-access",
            "type": "boolean"
          },
          "Policy": {}
        },
        "payload": "Policy"
      }
    },
    "PutBucketReplication": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?replication"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "ReplicationConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "ReplicationConfiguration": {
            "shape": "S6s",
            "locationName": "ReplicationConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          },
          "Token": {
            "location": "header",
            "locationName": "x-amz-bucket-object-lock-token"
          }
        },
        "payload": "ReplicationConfiguration"
      }
    },
    "PutBucketRequestPayment": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?requestPayment"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "RequestPaymentConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "RequestPaymentConfiguration": {
            "locationName": "RequestPaymentConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "required": [
              "Payer"
            ],
            "members": {
              "Payer": {}
            }
          }
        },
        "payload": "RequestPaymentConfiguration"
      }
    },
    "PutBucketTagging": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?tagging"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Tagging"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "Tagging": {
            "shape": "Sc1",
            "locationName": "Tagging",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "Tagging"
      }
    },
    "PutBucketVersioning": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?versioning"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "VersioningConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "MFA": {
            "location": "header",
            "locationName": "x-amz-mfa"
          },
          "VersioningConfiguration": {
            "locationName": "VersioningConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "members": {
              "MFADelete": {
                "locationName": "MfaDelete"
              },
              "Status": {}
            }
          }
        },
        "payload": "VersioningConfiguration"
      }
    },
    "PutBucketWebsite": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?website"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "WebsiteConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "WebsiteConfiguration": {
            "locationName": "WebsiteConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "members": {
              "ErrorDocument": {
                "shape": "S7y"
              },
              "IndexDocument": {
                "shape": "S7w"
              },
              "RedirectAllRequestsTo": {
                "shape": "S7t"
              },
              "RoutingRules": {
                "shape": "S7z"
              }
            }
          }
        },
        "payload": "WebsiteConfiguration"
      }
    },
    "PutObject": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "ACL": {
            "location": "header",
            "locationName": "x-amz-acl"
          },
          "Body": {
            "streaming": true,
            "type": "blob"
          },
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "CacheControl": {
            "location": "header",
            "locationName": "Cache-Control"
          },
          "ContentDisposition": {
            "location": "header",
            "locationName": "Content-Disposition"
          },
          "ContentEncoding": {
            "location": "header",
            "locationName": "Content-Encoding"
          },
          "ContentLanguage": {
            "location": "header",
            "locationName": "Content-Language"
          },
          "ContentLength": {
            "location": "header",
            "locationName": "Content-Length",
            "type": "long"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "ContentType": {
            "location": "header",
            "locationName": "Content-Type"
          },
          "Expires": {
            "location": "header",
            "locationName": "Expires",
            "type": "timestamp"
          },
          "GrantFullControl": {
            "location": "header",
            "locationName": "x-amz-grant-full-control"
          },
          "GrantRead": {
            "location": "header",
            "locationName": "x-amz-grant-read"
          },
          "GrantReadACP": {
            "location": "header",
            "locationName": "x-amz-grant-read-acp"
          },
          "GrantWriteACP": {
            "location": "header",
            "locationName": "x-amz-grant-write-acp"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "Metadata": {
            "shape": "S11",
            "location": "headers",
            "locationName": "x-amz-meta-"
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "StorageClass": {
            "location": "header",
            "locationName": "x-amz-storage-class"
          },
          "WebsiteRedirectLocation": {
            "location": "header",
            "locationName": "x-amz-website-redirect-location"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "SSEKMSEncryptionContext": {
            "shape": "S1b",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-context"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "Tagging": {
            "location": "header",
            "locationName": "x-amz-tagging"
          },
          "ObjectLockMode": {
            "location": "header",
            "locationName": "x-amz-object-lock-mode"
          },
          "ObjectLockRetainUntilDate": {
            "shape": "S1h",
            "location": "header",
            "locationName": "x-amz-object-lock-retain-until-date"
          },
          "ObjectLockLegalHoldStatus": {
            "location": "header",
            "locationName": "x-amz-object-lock-legal-hold"
          }
        },
        "payload": "Body"
      },
      "output": {
        "type": "structure",
        "members": {
          "Expiration": {
            "location": "header",
            "locationName": "x-amz-expiration"
          },
          "ETag": {
            "location": "header",
            "locationName": "ETag"
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "SSEKMSEncryptionContext": {
            "shape": "S1b",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-context"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "PutObjectAcl": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}?acl"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "ACL": {
            "location": "header",
            "locationName": "x-amz-acl"
          },
          "AccessControlPolicy": {
            "shape": "Sbe",
            "locationName": "AccessControlPolicy",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          },
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "GrantFullControl": {
            "location": "header",
            "locationName": "x-amz-grant-full-control"
          },
          "GrantRead": {
            "location": "header",
            "locationName": "x-amz-grant-read"
          },
          "GrantReadACP": {
            "location": "header",
            "locationName": "x-amz-grant-read-acp"
          },
          "GrantWrite": {
            "location": "header",
            "locationName": "x-amz-grant-write"
          },
          "GrantWriteACP": {
            "location": "header",
            "locationName": "x-amz-grant-write-acp"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          }
        },
        "payload": "AccessControlPolicy"
      },
      "output": {
        "type": "structure",
        "members": {
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "PutObjectLegalHold": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}?legal-hold"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "LegalHold": {
            "shape": "S8y",
            "locationName": "LegalHold",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          }
        },
        "payload": "LegalHold"
      },
      "output": {
        "type": "structure",
        "members": {
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "PutObjectLockConfiguration": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?object-lock"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ObjectLockConfiguration": {
            "shape": "S91",
            "locationName": "ObjectLockConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "Token": {
            "location": "header",
            "locationName": "x-amz-bucket-object-lock-token"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          }
        },
        "payload": "ObjectLockConfiguration"
      },
      "output": {
        "type": "structure",
        "members": {
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "PutObjectRetention": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}?retention"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "Retention": {
            "shape": "S99",
            "locationName": "Retention",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "BypassGovernanceRetention": {
            "location": "header",
            "locationName": "x-amz-bypass-governance-retention",
            "type": "boolean"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          }
        },
        "payload": "Retention"
      },
      "output": {
        "type": "structure",
        "members": {
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "PutObjectTagging": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}?tagging"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key",
          "Tagging"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "Tagging": {
            "shape": "Sc1",
            "locationName": "Tagging",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "Tagging"
      },
      "output": {
        "type": "structure",
        "members": {
          "VersionId": {
            "location": "header",
            "locationName": "x-amz-version-id"
          }
        }
      }
    },
    "PutPublicAccessBlock": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}?publicAccessBlock"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "PublicAccessBlockConfiguration"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "PublicAccessBlockConfiguration": {
            "shape": "S9g",
            "locationName": "PublicAccessBlockConfiguration",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            }
          }
        },
        "payload": "PublicAccessBlockConfiguration"
      }
    },
    "RestoreObject": {
      "http": {
        "requestUri": "/{Bucket}/{Key+}?restore"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "VersionId": {
            "location": "querystring",
            "locationName": "versionId"
          },
          "RestoreRequest": {
            "locationName": "RestoreRequest",
            "xmlNamespace": {
              "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
            },
            "type": "structure",
            "members": {
              "Days": {
                "type": "integer"
              },
              "GlacierJobParameters": {
                "type": "structure",
                "required": [
                  "Tier"
                ],
                "members": {
                  "Tier": {}
                }
              },
              "Type": {},
              "Tier": {},
              "Description": {},
              "SelectParameters": {
                "type": "structure",
                "required": [
                  "InputSerialization",
                  "ExpressionType",
                  "Expression",
                  "OutputSerialization"
                ],
                "members": {
                  "InputSerialization": {
                    "shape": "Scr"
                  },
                  "ExpressionType": {},
                  "Expression": {},
                  "OutputSerialization": {
                    "shape": "Sd6"
                  }
                }
              },
              "OutputLocation": {
                "type": "structure",
                "members": {
                  "S3": {
                    "type": "structure",
                    "required": [
                      "BucketName",
                      "Prefix"
                    ],
                    "members": {
                      "BucketName": {},
                      "Prefix": {},
                      "Encryption": {
                        "type": "structure",
                        "required": [
                          "EncryptionType"
                        ],
                        "members": {
                          "EncryptionType": {},
                          "KMSKeyId": {
                            "shape": "Sj"
                          },
                          "KMSContext": {}
                        }
                      },
                      "CannedACL": {},
                      "AccessControlList": {
                        "shape": "S35"
                      },
                      "Tagging": {
                        "shape": "Sc1"
                      },
                      "UserMetadata": {
                        "type": "list",
                        "member": {
                          "locationName": "MetadataEntry",
                          "type": "structure",
                          "members": {
                            "Name": {},
                            "Value": {}
                          }
                        }
                      },
                      "StorageClass": {}
                    }
                  }
                }
              }
            }
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        },
        "payload": "RestoreRequest"
      },
      "output": {
        "type": "structure",
        "members": {
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          },
          "RestoreOutputPath": {
            "location": "header",
            "locationName": "x-amz-restore-output-path"
          }
        }
      },
      "alias": "PostObjectRestore"
    },
    "SelectObjectContent": {
      "http": {
        "requestUri": "/{Bucket}/{Key+}?select&select-type=2"
      },
      "input": {
        "locationName": "SelectObjectContentRequest",
        "xmlNamespace": {
          "uri": "http://s3.amazonaws.com/doc/2006-03-01/"
        },
        "type": "structure",
        "required": [
          "Bucket",
          "Key",
          "Expression",
          "ExpressionType",
          "InputSerialization",
          "OutputSerialization"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "Expression": {},
          "ExpressionType": {},
          "RequestProgress": {
            "type": "structure",
            "members": {
              "Enabled": {
                "type": "boolean"
              }
            }
          },
          "InputSerialization": {
            "shape": "Scr"
          },
          "OutputSerialization": {
            "shape": "Sd6"
          },
          "ScanRange": {
            "type": "structure",
            "members": {
              "Start": {
                "type": "long"
              },
              "End": {
                "type": "long"
              }
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Payload": {
            "type": "structure",
            "members": {
              "Records": {
                "type": "structure",
                "members": {
                  "Payload": {
                    "eventpayload": true,
                    "type": "blob"
                  }
                },
                "event": true
              },
              "Stats": {
                "type": "structure",
                "members": {
                  "Details": {
                    "eventpayload": true,
                    "type": "structure",
                    "members": {
                      "BytesScanned": {
                        "type": "long"
                      },
                      "BytesProcessed": {
                        "type": "long"
                      },
                      "BytesReturned": {
                        "type": "long"
                      }
                    }
                  }
                },
                "event": true
              },
              "Progress": {
                "type": "structure",
                "members": {
                  "Details": {
                    "eventpayload": true,
                    "type": "structure",
                    "members": {
                      "BytesScanned": {
                        "type": "long"
                      },
                      "BytesProcessed": {
                        "type": "long"
                      },
                      "BytesReturned": {
                        "type": "long"
                      }
                    }
                  }
                },
                "event": true
              },
              "Cont": {
                "type": "structure",
                "members": {},
                "event": true
              },
              "End": {
                "type": "structure",
                "members": {},
                "event": true
              }
            },
            "eventstream": true
          }
        },
        "payload": "Payload"
      }
    },
    "UploadPart": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "Key",
          "PartNumber",
          "UploadId"
        ],
        "members": {
          "Body": {
            "streaming": true,
            "type": "blob"
          },
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "ContentLength": {
            "location": "header",
            "locationName": "Content-Length",
            "type": "long"
          },
          "ContentMD5": {
            "location": "header",
            "locationName": "Content-MD5"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "PartNumber": {
            "location": "querystring",
            "locationName": "partNumber",
            "type": "integer"
          },
          "UploadId": {
            "location": "querystring",
            "locationName": "uploadId"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        },
        "payload": "Body"
      },
      "output": {
        "type": "structure",
        "members": {
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "ETag": {
            "location": "header",
            "locationName": "ETag"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        }
      }
    },
    "UploadPartCopy": {
      "http": {
        "method": "PUT",
        "requestUri": "/{Bucket}/{Key+}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Bucket",
          "CopySource",
          "Key",
          "PartNumber",
          "UploadId"
        ],
        "members": {
          "Bucket": {
            "location": "uri",
            "locationName": "Bucket"
          },
          "CopySource": {
            "location": "header",
            "locationName": "x-amz-copy-source"
          },
          "CopySourceIfMatch": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-match"
          },
          "CopySourceIfModifiedSince": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-modified-since",
            "type": "timestamp"
          },
          "CopySourceIfNoneMatch": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-none-match"
          },
          "CopySourceIfUnmodifiedSince": {
            "location": "header",
            "locationName": "x-amz-copy-source-if-unmodified-since",
            "type": "timestamp"
          },
          "CopySourceRange": {
            "location": "header",
            "locationName": "x-amz-copy-source-range"
          },
          "Key": {
            "location": "uri",
            "locationName": "Key"
          },
          "PartNumber": {
            "location": "querystring",
            "locationName": "partNumber",
            "type": "integer"
          },
          "UploadId": {
            "location": "querystring",
            "locationName": "uploadId"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKey": {
            "shape": "S19",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "CopySourceSSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-copy-source-server-side-encryption-customer-algorithm"
          },
          "CopySourceSSECustomerKey": {
            "shape": "S1d",
            "location": "header",
            "locationName": "x-amz-copy-source-server-side-encryption-customer-key"
          },
          "CopySourceSSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-copy-source-server-side-encryption-customer-key-MD5"
          },
          "RequestPayer": {
            "location": "header",
            "locationName": "x-amz-request-payer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "CopySourceVersionId": {
            "location": "header",
            "locationName": "x-amz-copy-source-version-id"
          },
          "CopyPartResult": {
            "type": "structure",
            "members": {
              "ETag": {},
              "LastModified": {
                "type": "timestamp"
              }
            }
          },
          "ServerSideEncryption": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption"
          },
          "SSECustomerAlgorithm": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-algorithm"
          },
          "SSECustomerKeyMD5": {
            "location": "header",
            "locationName": "x-amz-server-side-encryption-customer-key-MD5"
          },
          "SSEKMSKeyId": {
            "shape": "Sj",
            "location": "header",
            "locationName": "x-amz-server-side-encryption-aws-kms-key-id"
          },
          "RequestCharged": {
            "location": "header",
            "locationName": "x-amz-request-charged"
          }
        },
        "payload": "CopyPartResult"
      }
    }
  },
  "shapes": {
    "Sj": {
      "type": "string",
      "sensitive": true
    },
    "S11": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S19": {
      "type": "blob",
      "sensitive": true
    },
    "S1b": {
      "type": "string",
      "sensitive": true
    },
    "S1d": {
      "type": "blob",
      "sensitive": true
    },
    "S1h": {
      "type": "timestamp",
      "timestampFormat": "iso8601"
    },
    "S32": {
      "type": "structure",
      "members": {
        "DisplayName": {},
        "ID": {}
      }
    },
    "S35": {
      "type": "list",
      "member": {
        "locationName": "Grant",
        "type": "structure",
        "members": {
          "Grantee": {
            "shape": "S37"
          },
          "Permission": {}
        }
      }
    },
    "S37": {
      "type": "structure",
      "required": [
        "Type"
      ],
      "members": {
        "DisplayName": {},
        "EmailAddress": {},
        "ID": {},
        "Type": {
          "locationName": "xsi:type",
          "xmlAttribute": true
        },
        "URI": {}
      },
      "xmlNamespace": {
        "prefix": "xsi",
        "uri": "http://www.w3.org/2001/XMLSchema-instance"
      }
    },
    "S3e": {
      "type": "structure",
      "required": [
        "Id",
        "StorageClassAnalysis"
      ],
      "members": {
        "Id": {},
        "Filter": {
          "type": "structure",
          "members": {
            "Prefix": {},
            "Tag": {
              "shape": "S3h"
            },
            "And": {
              "type": "structure",
              "members": {
                "Prefix": {},
                "Tags": {
                  "shape": "S3k",
                  "flattened": true,
                  "locationName": "Tag"
                }
              }
            }
          }
        },
        "StorageClassAnalysis": {
          "type": "structure",
          "members": {
            "DataExport": {
              "type": "structure",
              "required": [
                "OutputSchemaVersion",
                "Destination"
              ],
              "members": {
                "OutputSchemaVersion": {},
                "Destination": {
                  "type": "structure",
                  "required": [
                    "S3BucketDestination"
                  ],
                  "members": {
                    "S3BucketDestination": {
                      "type": "structure",
                      "required": [
                        "Format",
                        "Bucket"
                      ],
                      "members": {
                        "Format": {},
                        "BucketAccountId": {},
                        "Bucket": {},
                        "Prefix": {}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "S3h": {
      "type": "structure",
      "required": [
        "Key",
        "Value"
      ],
      "members": {
        "Key": {},
        "Value": {}
      }
    },
    "S3k": {
      "type": "list",
      "member": {
        "shape": "S3h",
        "locationName": "Tag"
      }
    },
    "S3u": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "AllowedMethods",
          "AllowedOrigins"
        ],
        "members": {
          "AllowedHeaders": {
            "locationName": "AllowedHeader",
            "type": "list",
            "member": {},
            "flattened": true
          },
          "AllowedMethods": {
            "locationName": "AllowedMethod",
            "type": "list",
            "member": {},
            "flattened": true
          },
          "AllowedOrigins": {
            "locationName": "AllowedOrigin",
            "type": "list",
            "member": {},
            "flattened": true
          },
          "ExposeHeaders": {
            "locationName": "ExposeHeader",
            "type": "list",
            "member": {},
            "flattened": true
          },
          "MaxAgeSeconds": {
            "type": "integer"
          }
        }
      },
      "flattened": true
    },
    "S47": {
      "type": "structure",
      "required": [
        "Rules"
      ],
      "members": {
        "Rules": {
          "locationName": "Rule",
          "type": "list",
          "member": {
            "type": "structure",
            "members": {
              "ApplyServerSideEncryptionByDefault": {
                "type": "structure",
                "required": [
                  "SSEAlgorithm"
                ],
                "members": {
                  "SSEAlgorithm": {},
                  "KMSMasterKeyID": {
                    "shape": "Sj"
                  }
                }
              }
            }
          },
          "flattened": true
        }
      }
    },
    "S4d": {
      "type": "structure",
      "required": [
        "Destination",
        "IsEnabled",
        "Id",
        "IncludedObjectVersions",
        "Schedule"
      ],
      "members": {
        "Destination": {
          "type": "structure",
          "required": [
            "S3BucketDestination"
          ],
          "members": {
            "S3BucketDestination": {
              "type": "structure",
              "required": [
                "Bucket",
                "Format"
              ],
              "members": {
                "AccountId": {},
                "Bucket": {},
                "Format": {},
                "Prefix": {},
                "Encryption": {
                  "type": "structure",
                  "members": {
                    "SSES3": {
                      "locationName": "SSE-S3",
                      "type": "structure",
                      "members": {}
                    },
                    "SSEKMS": {
                      "locationName": "SSE-KMS",
                      "type": "structure",
                      "required": [
                        "KeyId"
                      ],
                      "members": {
                        "KeyId": {
                          "shape": "Sj"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "IsEnabled": {
          "type": "boolean"
        },
        "Filter": {
          "type": "structure",
          "required": [
            "Prefix"
          ],
          "members": {
            "Prefix": {}
          }
        },
        "Id": {},
        "IncludedObjectVersions": {},
        "OptionalFields": {
          "type": "list",
          "member": {
            "locationName": "Field"
          }
        },
        "Schedule": {
          "type": "structure",
          "required": [
            "Frequency"
          ],
          "members": {
            "Frequency": {}
          }
        }
      }
    },
    "S4t": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Prefix",
          "Status"
        ],
        "members": {
          "Expiration": {
            "shape": "S4v"
          },
          "ID": {},
          "Prefix": {},
          "Status": {},
          "Transition": {
            "shape": "S50"
          },
          "NoncurrentVersionTransition": {
            "shape": "S52"
          },
          "NoncurrentVersionExpiration": {
            "shape": "S53"
          },
          "AbortIncompleteMultipartUpload": {
            "shape": "S54"
          }
        }
      },
      "flattened": true
    },
    "S4v": {
      "type": "structure",
      "members": {
        "Date": {
          "shape": "S4w"
        },
        "Days": {
          "type": "integer"
        },
        "ExpiredObjectDeleteMarker": {
          "type": "boolean"
        }
      }
    },
    "S4w": {
      "type": "timestamp",
      "timestampFormat": "iso8601"
    },
    "S50": {
      "type": "structure",
      "members": {
        "Date": {
          "shape": "S4w"
        },
        "Days": {
          "type": "integer"
        },
        "StorageClass": {}
      }
    },
    "S52": {
      "type": "structure",
      "members": {
        "NoncurrentDays": {
          "type": "integer"
        },
        "StorageClass": {}
      }
    },
    "S53": {
      "type": "structure",
      "members": {
        "NoncurrentDays": {
          "type": "integer"
        }
      }
    },
    "S54": {
      "type": "structure",
      "members": {
        "DaysAfterInitiation": {
          "type": "integer"
        }
      }
    },
    "S58": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Status"
        ],
        "members": {
          "Expiration": {
            "shape": "S4v"
          },
          "ID": {},
          "Prefix": {
            "deprecated": true
          },
          "Filter": {
            "type": "structure",
            "members": {
              "Prefix": {},
              "Tag": {
                "shape": "S3h"
              },
              "And": {
                "type": "structure",
                "members": {
                  "Prefix": {},
                  "Tags": {
                    "shape": "S3k",
                    "flattened": true,
                    "locationName": "Tag"
                  }
                }
              }
            }
          },
          "Status": {},
          "Transitions": {
            "locationName": "Transition",
            "type": "list",
            "member": {
              "shape": "S50"
            },
            "flattened": true
          },
          "NoncurrentVersionTransitions": {
            "locationName": "NoncurrentVersionTransition",
            "type": "list",
            "member": {
              "shape": "S52"
            },
            "flattened": true
          },
          "NoncurrentVersionExpiration": {
            "shape": "S53"
          },
          "AbortIncompleteMultipartUpload": {
            "shape": "S54"
          }
        }
      },
      "flattened": true
    },
    "S5i": {
      "type": "structure",
      "required": [
        "TargetBucket",
        "TargetPrefix"
      ],
      "members": {
        "TargetBucket": {},
        "TargetGrants": {
          "type": "list",
          "member": {
            "locationName": "Grant",
            "type": "structure",
            "members": {
              "Grantee": {
                "shape": "S37"
              },
              "Permission": {}
            }
          }
        },
        "TargetPrefix": {}
      }
    },
    "S5q": {
      "type": "structure",
      "required": [
        "Id"
      ],
      "members": {
        "Id": {},
        "Filter": {
          "type": "structure",
          "members": {
            "Prefix": {},
            "Tag": {
              "shape": "S3h"
            },
            "And": {
              "type": "structure",
              "members": {
                "Prefix": {},
                "Tags": {
                  "shape": "S3k",
                  "flattened": true,
                  "locationName": "Tag"
                }
              }
            }
          }
        }
      }
    },
    "S5t": {
      "type": "structure",
      "required": [
        "Bucket"
      ],
      "members": {
        "Bucket": {
          "location": "uri",
          "locationName": "Bucket"
        }
      }
    },
    "S5u": {
      "type": "structure",
      "members": {
        "TopicConfiguration": {
          "type": "structure",
          "members": {
            "Id": {},
            "Events": {
              "shape": "S5x",
              "locationName": "Event"
            },
            "Event": {
              "deprecated": true
            },
            "Topic": {}
          }
        },
        "QueueConfiguration": {
          "type": "structure",
          "members": {
            "Id": {},
            "Event": {
              "deprecated": true
            },
            "Events": {
              "shape": "S5x",
              "locationName": "Event"
            },
            "Queue": {}
          }
        },
        "CloudFunctionConfiguration": {
          "type": "structure",
          "members": {
            "Id": {},
            "Event": {
              "deprecated": true
            },
            "Events": {
              "shape": "S5x",
              "locationName": "Event"
            },
            "CloudFunction": {},
            "InvocationRole": {}
          }
        }
      }
    },
    "S5x": {
      "type": "list",
      "member": {},
      "flattened": true
    },
    "S65": {
      "type": "structure",
      "members": {
        "TopicConfigurations": {
          "locationName": "TopicConfiguration",
          "type": "list",
          "member": {
            "type": "structure",
            "required": [
              "TopicArn",
              "Events"
            ],
            "members": {
              "Id": {},
              "TopicArn": {
                "locationName": "Topic"
              },
              "Events": {
                "shape": "S5x",
                "locationName": "Event"
              },
              "Filter": {
                "shape": "S68"
              }
            }
          },
          "flattened": true
        },
        "QueueConfigurations": {
          "locationName": "QueueConfiguration",
          "type": "list",
          "member": {
            "type": "structure",
            "required": [
              "QueueArn",
              "Events"
            ],
            "members": {
              "Id": {},
              "QueueArn": {
                "locationName": "Queue"
              },
              "Events": {
                "shape": "S5x",
                "locationName": "Event"
              },
              "Filter": {
                "shape": "S68"
              }
            }
          },
          "flattened": true
        },
        "LambdaFunctionConfigurations": {
          "locationName": "CloudFunctionConfiguration",
          "type": "list",
          "member": {
            "type": "structure",
            "required": [
              "LambdaFunctionArn",
              "Events"
            ],
            "members": {
              "Id": {},
              "LambdaFunctionArn": {
                "locationName": "CloudFunction"
              },
              "Events": {
                "shape": "S5x",
                "locationName": "Event"
              },
              "Filter": {
                "shape": "S68"
              }
            }
          },
          "flattened": true
        }
      }
    },
    "S68": {
      "type": "structure",
      "members": {
        "Key": {
          "locationName": "S3Key",
          "type": "structure",
          "members": {
            "FilterRules": {
              "locationName": "FilterRule",
              "type": "list",
              "member": {
                "type": "structure",
                "members": {
                  "Name": {},
                  "Value": {}
                }
              },
              "flattened": true
            }
          }
        }
      }
    },
    "S6s": {
      "type": "structure",
      "required": [
        "Role",
        "Rules"
      ],
      "members": {
        "Role": {},
        "Rules": {
          "locationName": "Rule",
          "type": "list",
          "member": {
            "type": "structure",
            "required": [
              "Status",
              "Destination"
            ],
            "members": {
              "ID": {},
              "Priority": {
                "type": "integer"
              },
              "Prefix": {
                "deprecated": true
              },
              "Filter": {
                "type": "structure",
                "members": {
                  "Prefix": {},
                  "Tag": {
                    "shape": "S3h"
                  },
                  "And": {
                    "type": "structure",
                    "members": {
                      "Prefix": {},
                      "Tags": {
                        "shape": "S3k",
                        "flattened": true,
                        "locationName": "Tag"
                      }
                    }
                  }
                }
              },
              "Status": {},
              "SourceSelectionCriteria": {
                "type": "structure",
                "members": {
                  "SseKmsEncryptedObjects": {
                    "type": "structure",
                    "required": [
                      "Status"
                    ],
                    "members": {
                      "Status": {}
                    }
                  }
                }
              },
              "ExistingObjectReplication": {
                "type": "structure",
                "required": [
                  "Status"
                ],
                "members": {
                  "Status": {}
                }
              },
              "Destination": {
                "type": "structure",
                "required": [
                  "Bucket"
                ],
                "members": {
                  "Bucket": {},
                  "Account": {},
                  "StorageClass": {},
                  "AccessControlTranslation": {
                    "type": "structure",
                    "required": [
                      "Owner"
                    ],
                    "members": {
                      "Owner": {}
                    }
                  },
                  "EncryptionConfiguration": {
                    "type": "structure",
                    "members": {
                      "ReplicaKmsKeyID": {}
                    }
                  },
                  "ReplicationTime": {
                    "type": "structure",
                    "required": [
                      "Status",
                      "Time"
                    ],
                    "members": {
                      "Status": {},
                      "Time": {
                        "shape": "S7c"
                      }
                    }
                  },
                  "Metrics": {
                    "type": "structure",
                    "required": [
                      "Status",
                      "EventThreshold"
                    ],
                    "members": {
                      "Status": {},
                      "EventThreshold": {
                        "shape": "S7c"
                      }
                    }
                  }
                }
              },
              "DeleteMarkerReplication": {
                "type": "structure",
                "members": {
                  "Status": {}
                }
              }
            }
          },
          "flattened": true
        }
      }
    },
    "S7c": {
      "type": "structure",
      "members": {
        "Minutes": {
          "type": "integer"
        }
      }
    },
    "S7t": {
      "type": "structure",
      "required": [
        "HostName"
      ],
      "members": {
        "HostName": {},
        "Protocol": {}
      }
    },
    "S7w": {
      "type": "structure",
      "required": [
        "Suffix"
      ],
      "members": {
        "Suffix": {}
      }
    },
    "S7y": {
      "type": "structure",
      "required": [
        "Key"
      ],
      "members": {
        "Key": {}
      }
    },
    "S7z": {
      "type": "list",
      "member": {
        "locationName": "RoutingRule",
        "type": "structure",
        "required": [
          "Redirect"
        ],
        "members": {
          "Condition": {
            "type": "structure",
            "members": {
              "HttpErrorCodeReturnedEquals": {},
              "KeyPrefixEquals": {}
            }
          },
          "Redirect": {
            "type": "structure",
            "members": {
              "HostName": {},
              "HttpRedirectCode": {},
              "Protocol": {},
              "ReplaceKeyPrefixWith": {},
              "ReplaceKeyWith": {}
            }
          }
        }
      }
    },
    "S8y": {
      "type": "structure",
      "members": {
        "Status": {}
      }
    },
    "S91": {
      "type": "structure",
      "members": {
        "ObjectLockEnabled": {},
        "Rule": {
          "type": "structure",
          "members": {
            "DefaultRetention": {
              "type": "structure",
              "members": {
                "Mode": {},
                "Days": {
                  "type": "integer"
                },
                "Years": {
                  "type": "integer"
                }
              }
            }
          }
        }
      }
    },
    "S99": {
      "type": "structure",
      "members": {
        "Mode": {},
        "RetainUntilDate": {
          "shape": "S4w"
        }
      }
    },
    "S9g": {
      "type": "structure",
      "members": {
        "BlockPublicAcls": {
          "locationName": "BlockPublicAcls",
          "type": "boolean"
        },
        "IgnorePublicAcls": {
          "locationName": "IgnorePublicAcls",
          "type": "boolean"
        },
        "BlockPublicPolicy": {
          "locationName": "BlockPublicPolicy",
          "type": "boolean"
        },
        "RestrictPublicBuckets": {
          "locationName": "RestrictPublicBuckets",
          "type": "boolean"
        }
      }
    },
    "Sad": {
      "type": "structure",
      "members": {
        "ID": {},
        "DisplayName": {}
      }
    },
    "Sae": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Prefix": {}
        }
      },
      "flattened": true
    },
    "Saw": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Key": {},
          "LastModified": {
            "type": "timestamp"
          },
          "ETag": {},
          "Size": {
            "type": "integer"
          },
          "StorageClass": {},
          "Owner": {
            "shape": "S32"
          }
        }
      },
      "flattened": true
    },
    "Sbe": {
      "type": "structure",
      "members": {
        "Grants": {
          "shape": "S35",
          "locationName": "AccessControlList"
        },
        "Owner": {
          "shape": "S32"
        }
      }
    },
    "Sc1": {
      "type": "structure",
      "required": [
        "TagSet"
      ],
      "members": {
        "TagSet": {
          "shape": "S3k"
        }
      }
    },
    "Scr": {
      "type": "structure",
      "members": {
        "CSV": {
          "type": "structure",
          "members": {
            "FileHeaderInfo": {},
            "Comments": {},
            "QuoteEscapeCharacter": {},
            "RecordDelimiter": {},
            "FieldDelimiter": {},
            "QuoteCharacter": {},
            "AllowQuotedRecordDelimiter": {
              "type": "boolean"
            }
          }
        },
        "CompressionType": {},
        "JSON": {
          "type": "structure",
          "members": {
            "Type": {}
          }
        },
        "Parquet": {
          "type": "structure",
          "members": {}
        }
      }
    },
    "Sd6": {
      "type": "structure",
      "members": {
        "CSV": {
          "type": "structure",
          "members": {
            "QuoteFields": {},
            "QuoteEscapeCharacter": {},
            "RecordDelimiter": {},
            "FieldDelimiter": {},
            "QuoteCharacter": {}
          }
        },
        "JSON": {
          "type": "structure",
          "members": {
            "RecordDelimiter": {}
          }
        }
      }
    }
  }
}
`));
