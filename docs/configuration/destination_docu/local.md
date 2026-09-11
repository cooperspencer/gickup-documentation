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
- `zip`: zips the repository and removes the unpacked backup after archiving.
- `keep`: when greater than zero, creates timestamped backups and keeps the newest specified number per repository. When omitted or zero, updates the same backup location. Retention groups directories, ZIP archives, and issue files with the same numeric timestamp as one backup; entries without a numeric timestamp prefix are ignored.
- `bare`: clones it as bare.
- `mirror`: clones it as a mirror.
- `lfs`: uses Git and Git LFS for cloning and updating. Bare and mirror backups fetch all LFS objects, including objects outside the default branch.
:::warning
With `lfs: true`, `git` and `git-lfs` must be installed on your system.
:::
