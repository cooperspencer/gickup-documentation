---
sidebar_position: 6
---

# Bitbucket

```yaml title="config"
source:
  bitbucket:
    - url: http(s)://url-to-bitbucket
      user: some-user
      token: your-token # basically the app password
      token_file: token.txt
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
:::tip
if you want to get everything from your user, leave out the `user` parameter and just use the token.
:::
:::warning
for the clone process, either use:
 - username + password
 - sshkey
 - nothing, if you only clone public repositories
:::
- `username`: user that will be used for the clone process.
- `password`: password for said user.
- `token`: this is an app password.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `ssh`: boolean value if the clone should be done via ssh.
- `sshkey`: if empty, it uses your home directories' .ssh/id_rsa.
- `exclude`: you can exclude repositories.
- `include`: only clone those specific repositories.
- `excludeorgs`: leave out specific workspaces of the user.
- `includeorgs`: only clone those specific workspace repositories.
- `filter`:
  - `lastactivity`: only repos that were active in this time frame are cloned (y, M, d, h, m, s)
