---
sidebar_position: 7
---

# Sourcehut

```yaml title="config"
destination:
  sourcehut:
    - token: some-token
      token_file: token.txt
      url: http(s)://url-to-sourcehut
      sshkey: /path/to/key
      force: true
      visibility:
        repositories: private
```
- `token`: your sourcehut token.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `url`: if empty, https://git.sr.ht is used.
:::tip
`Sourcehut` uses SSH to manage write access for repositories, so you need to employ an SSH key to mirror a repository.
:::
- `sshkey`: if empty, it uses your home directories' .ssh/id_rsa.
- `force`: enable force push.
- `visibility`: set the visibility of created organizations and repositories
    - `repositories`: can be `private` or `public`, default is `private`