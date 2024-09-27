---
sidebar_position: 4
---

# Onedev

```yaml title="config"
source:
  onedev:
    - token: some-token
      token_file: token.txt
      url: http(s)://url-to-onedev
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
      issues: true
      filter:
        lastactivity: 1y
        excludeforks: true
```
- `token`: your onedev token. You don't need one, if you backup only public repositories. It can also be an environment variable.
- `token_file`: alternatively, specify the token in a file, relative to current working directory when executed.
- `url`: if empty, https://code.onedev.io is used.
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
- `ssh`: boolean value if the clone should be done via ssh.
- `sshkey`: if empty, it uses your home directories' .ssh/id_rsa.
- `exclude`: you can exclude repositories.
- `include`: only clone those specific repositories.
- `excludeorgs`: leave out specific organizations of the user.
- `includeorgs`: only clone those specific organizations repositories.
- `issues`: creates a backup of the issues of the repositorie. works only with a local destination.
- `filter`:
  - `lastactivity`: only repos that were active in this time frame are cloned (y, M, d, h, m, s)
  - `excludeforks`: do not clone forked repos