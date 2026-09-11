---
sidebar_position: 8
---

# Opengist

Back up gists from an Opengist instance. The server must have Git over HTTP enabled (`OG_HTTP_GIT_ENABLED=true`) so Gickup can clone the gists.

```yaml title="config"
source:
  opengist:
    - url: https://gist.example.com
      token: OPENGIST_TOKEN
      # token_file: opengist-token.txt
      # user: some-user
      exclude:
        - unwanted-gist
      # include:
      #   - my-gist
```

- `url`: required base URL of the Opengist instance.
- `token`: personal access token (`og_...`), or the name of an environment variable containing it, without a `$` prefix. Used for API access and cloning private gists.
- `token_file`: alternative file containing the token, relative to the working directory.
- `user`: optional user whose gists to list. With a token and no `user`, Gickup backs up the token owner's own gists. With neither `user` nor a token, it lists public gists.
- `include`: only back up the listed gist slugs. If a gist has no slug, use its ID.
- `exclude`: skip the listed gist slugs or fallback IDs. Exclusions take precedence over inclusions.

For private gists, Gickup obtains the clone username from the token owner, even when `user` selects another user's gists.
