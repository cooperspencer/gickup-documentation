---
sidebar_position: 1
---

# GitHub

```yaml title="config"
source:
  github:
    - token: some-token
      token_file: token.txt
      user: some-user
      username: your-user
      password: your-password
      ssh: true
      sshkey: /path/to/key
      exclude: # this excludes the repos "foo" and "bar"
        - foo
        - bar
      include: # this includes the repo "foobar"
        - foobar
      excludeorgs: # this excludes repos from the organizations "foo" and "bar"
        - foo
        - bar
      includeorgs: # this includes repos from the organizations "foo1" and "bar1"
        - foo1
        - bar1
      wiki: true
      starred: true
      issues: true
      gists: true
      filter:
        lastactivity: 1y
        stars: 100
        excludearchived: true
        excludeforks: true
        languages:
          - go
          - whatever
    - app_id: 123456
      app_installation_id: 78901234
      app_private_key_file: /path/to/private.pem
      user: some-user
      ssh: false
```

- `token`: your GitHub token. You don't need one if you back up only public repositories, although it is possible to hit the GitHub API limit. It can also be an environment variable.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `user`: the user you want to clone the repositories from.
:::tip
if you want to get everything from your user, leave out the `user` parameter and just use the token.
:::
:::warning
for the clone process, either use:
 - username + password
 - sshkey
 - token
 - nothing, if you only clone public repositories
:::
- `username`: user that will be used for the clone process.
- `password`: password for said user.
- `ssh`: boolean value if the clone should be done via ssh.
- `sshkey`: if empty, it uses your home directories' .ssh/id_rsa.
- `exclude`: you can exclude repositories.
- `include`: only clone those specific repositories.
- `excludeorgs`: leave out specific organizations of the user.
- `includeorgs`: only clone those specific organizations repositories.
- `wiki`: also clone the wikis of the repositories.
- `starred`: also clone the starred repositories of the `user`.
- `issues`: creates a backup of the issues of the repository. Works only with a local destination.
- `gists`: also clone the gists of the `user`.
- `app_id`: GitHub App ID. Use it with `app_installation_id` and `app_private_key_file` to authenticate as a GitHub App instead of using `token`.
- `app_installation_id`: installation ID of the GitHub App on the target account or organization.
- `app_private_key_file`: path to the GitHub App RSA private key PEM file.
:::warning
Contributed repositories are not supported with GitHub App authentication.
:::
- `filter`:
  - `lastactivity`: only repos that were active in this time frame are cloned (y, M, d, h, m, s)
  - `stars`: clone repos with at least x stars.
  - `excludearchived`: do not clone archived repos.
  - `excludeforks`: do not clone forked repos
  - `languages`: only clone repos of said languages.
