---
sidebar_position: 3
---

# Gitlab

```yaml title="config"
  gitlab:
    - token: some-token
      token_file: token.txt
      url: http(s)://url-to-gitlab
      force: true
```
- `token`: your gitlab token.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `url`: if empty, https://gitlab.com is used.
:::warning
A backup to Gitlab works in general. With the community edition, it just migrates the repository to Gitlab. Mirroring is only supported in the Enterprise Edition.
I have no access to an Enterprise Edition, therefore I can't test it properly.
:::
- `force`: enable force push.