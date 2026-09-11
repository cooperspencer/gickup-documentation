---
sidebar_position: 6
---

# Bitbucket

```yaml title="config"
source:
  bitbucket:
    - url: http(s)://url-to-bitbucket
      user: some-user
      token: your-token
      token_file: token.txt
      organization: some-workspace
      email: your-email@example.com
      username: your-user
      password: your-password
      ssh: true
      sshkey: /path/to/key
      exclude: # this excludes the repos "foo" and "bar"
        - foo
        - bar
      include: # this includes the repo "foobar"
        - foobar
      excludeorgs: # this excludes repos from the workspaces "foo" and "bar"
        - foo
        - bar
      includeorgs: # this includes repos from the workspaces "foo1" and "bar1"
        - foo1
        - bar1
      filter:
        lastactivity: 1y
```
- `url`: if empty, https://bitbucket.org is used.
- `user`: the user you want to clone the repositories from.
- `organization`: workspace to list repositories from.
:::tip
Set `email` for API authentication and `organization` to select the workspace. `user` falls back to `username` when omitted.
:::
:::warning
for the clone process, either use:
 - username + password
 - sshkey
 - nothing, if you only clone public repositories
:::
- `email`: email address used for Bitbucket API basic authentication together with `password`.
- `username`: user that will be used for the clone process.
- `password`: password for said user.
- `token`: API credential used as the password when `password` is omitted. Can also be the name of an environment variable containing the credential.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `ssh`: boolean value if the clone should be done via ssh.
- `sshkey`: if empty, it uses your home directories' .ssh/id_rsa.
- `exclude`: you can exclude repositories.
- `include`: only clone those specific repositories.
- `excludeorgs`: leave out specific workspaces of the user.
- `includeorgs`: only clone those specific workspace repositories.
- `filter`:
  - `lastactivity`: only repos that were active in this time frame are cloned (y, M, d, h, m, s)
