---
slug: codeberg-mirror
title: Mirror to Codeberg
authors: [cooperspencer]
tags: [gickup, mirror, codeberg]
---

[Codeberg](https://codeberg.org) is an alternative to Github, powered by open source. They use [Forgejo](https://forgejo.org), which is also developed by them.

By default, the mirroring feature is disabled on Codeberg, but with the latest changes in Gickup you can still mirror your repository to Codeberg.
For this example, I'll try to mirror gickup to Codeberg.

As for now, I have no repositories on Codeberg.
![No Repos](./pictures/codeberg_empty.png)

First of all we need to create a token for Gickup.
"Read and Write" for user and repository should suffice.
![Token](./pictures/generate_token.png)

This configuration will show that mirrors are disabled by default.
```yaml title=conf.yml
source:
  github:
    - include: ["gickup"]
destination:
  gitea:
    - url: https://codeberg.org/
      token: <Top Secret>
```

Here is the error message.
![Error](./pictures/bad_attempt.png)


Let's fix the configuration.
```yaml title=conf.yml
source:
  github:
    - include: ["gickup"]
destination:
  gitea:
    - url: https://codeberg.org/
      token: <Top Secret>
      mirror:
        enabled: true
```

The second attempt looks way better.
![Success](./pictures/good_attempt.png)

Gickup is now **mirrored** to Codeberg.
![Mirrored](./pictures/codeberg_mirrored.png)