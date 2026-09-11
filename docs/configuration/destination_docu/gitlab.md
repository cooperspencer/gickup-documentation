---
sidebar_position: 3
---

# GitLab

```yaml title="config"
destination:
  gitlab:
    - token: some-token
      token_file: token.txt
      url: http(s)://url-to-gitlab
      user: my-group
      visibility:
        repositories: private
      force: false
      mirror:
        enabled: true
```
- `token`: your GitLab token.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `url`: if empty, https://gitlab.com is used.
- `user`: target namespace for Gickup-managed mirroring (`mirror.enabled: true`), normally the authenticated user or an existing group. Use the full group path for subgroups. Defaults to the authenticated user's namespace.
- `visibility.repositories`: `private` or `public` for newly created repositories. If omitted, follows the source repository's privacy.

With `mirror.enabled: true`, Gickup clones locally and pushes on each backup run, including on GitLab Community Edition. With `false`, it requests a GitLab-managed import and pull mirror; ongoing synchronization depends on the destination server's support for that feature.
- `force`: enable force push.
- `mirror`: handle the mirror functionality
  - `enabled`: if set to `false` gitlab will handle the mirror process itself, if set to `true` gickup will clone the repo locally and push it to gitlab.
