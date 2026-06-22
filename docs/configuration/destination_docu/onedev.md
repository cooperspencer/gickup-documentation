---
sidebar_position: 6
---

# OneDev

```yaml title="config"
destination:
  onedev:
    - token: some-token
      token_file: token.txt
      url: http(s)://url-to-onedev
      organization: myorg
      force: true
```
- `token`: your OneDev token.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `url`: if empty, https://code.onedev.io is used.
- `organization`: name of the parent project you want to back up to.
- `force`: enable force push.
