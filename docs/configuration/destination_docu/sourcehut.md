---
sidebar_position: 7
---

# SourceHut

```yaml title="config"
destination:
  sourcehut:
    - token: some-token
      token_file: token.txt
      url: http(s)://url-to-sourcehut
      user: some-name
      sshkey: /path/to/key
      force: true
      visibility:
        repositories: private
```
- `token`: your SourceHut OAuth token, sent as a bearer token.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `url`: if empty, https://git.sr.ht is used.
- `user`: the user or organization you want to back up to.
:::tip
`SourceHut` uses SSH to manage write access for repositories, so you need an SSH key to mirror a repository.
:::
- `sshkey`: if empty, it uses your home directories' .ssh/id_rsa.
- `force`: enable force push.
- `visibility`: set the visibility of created repositories
    - `repositories`: can be `public`, `unlisted` or `private`, default is `public`
