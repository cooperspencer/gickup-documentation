---
sidebar_position: 10
---

# Azure Blob

```yaml title="config"
destination:
  azureblob:
    - url: https://yourstorageaccount.blob.core.windows.net
      container: your-container-name
      useclicredential: false
      tenantid: your-tenant-id
      clientid: your-client-id
      clientsecret: your-client-secret
      structured: true
      zip: false
      datecreatedir: false
```
- `url`: the blob storage endpoint for your storage account. Can also be a SAS URL.
- `container`: the name of your blob container.
- `useclicredential`: if set to `true`, uses Azure CLI credentials to authenticate.
- `tenantid`: required when authenticating with `clientid` and `clientsecret`.
- `clientid`: the client ID of your app registration.
- `clientsecret`: the client secret of your app registration.
- `structured`: if set to `true`, it checks out the repos in a more structured way, like `hoster/user|organization/repository`.
- `zip`: if set to `true`, zips the entire git repository into a single zip file and uploads that instead.
- `datecreatedir`: if set to `true`, gickup will create a directory for the backup named after the creation date.
