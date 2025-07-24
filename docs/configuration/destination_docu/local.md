---
sidebar_position: 0
---

# Local

```yaml title="config"
destination:
  local:
    - path: /some/path/gickup
      structured: true
      zip: true
      keep: 5
      bare: true
      mirror: true
      lfs: true
```
- `path`: path to store your backup.
:::tip
If you use Docker, don't forget to mount the path of your backup!
:::
- `structured`: if set to `true`, it checks out the repos in a more structured way, like `hoster/user|organization/repository`.
- `zip`: zips the repository.
- `keep`: keeps x latest backups.
- `bare`: clones it as bare.
- `mirror`: clones it as a mirror.
- `lfs`: uses lfs to clone repositories.
:::warning
`git` and `git-lfs` must be installed on your system.
:::
