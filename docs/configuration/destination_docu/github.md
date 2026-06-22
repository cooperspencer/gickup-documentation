---
sidebar_position: 2
---

# GitHub

```yaml title="config"
destination:
  github:
    - token: some-token
      token_file: token.txt
      organization: myorg
      force: true
      visibility:
        repositories: private
    - app_id: 123456
      app_installation_id: 78901234
      app_private_key_file: /path/to/private.pem
      organization: myorg
      force: false
      visibility:
        repositories: private
```
- `token`: your GitHub token.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `organization`: name of the organization you want to back up to.
- `force`: enable force push.
- `app_id`: GitHub App ID. Use it with `app_installation_id` and `app_private_key_file` to authenticate as a GitHub App instead of using `token`.
- `app_installation_id`: installation ID of the GitHub App.
- `app_private_key_file`: path to the GitHub App RSA private key PEM file.
- `visibility`: set the visibility of created organizations and repositories.
    - `repositories`: can be `private` or `public`, default is `private`.
