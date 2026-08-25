---
sidebar_position: 11
---

# Radicle

## Prerequisites

1. You need the `rad` Command Line Interface (CLI) installed. Follow the 
   instructions [here](https://radicle.network/cli)
2. You need to have a Radicle identity created with `rad auth`. The identity is created in `~/.radicle` by default, 
   unless you set a different value to the `RAD_HOME` environment variable. 
3. Before running `gickup`:
  - if you selected a non-default path to create your Radicle identity in, set `RAD_HOME` to that path, 
  - if you defined a keyphrase for your Radicle key, set `RAD_PASSPHRASE` to that value.

## Config

```yaml title="config"
destination:
  radicle:
    - force: true
      prune: true
      visibility: source
      issues: false

```
- `force`: if set to true, refs that diverged from upstream are overwritten (non-fast-forward updates).
- `prune`: if set to true, refs that no longer exist upstream are deleted from the mirror.
- `visibility`: can be "public", "private" or "source". "source" follows the visibility of the source repository. default: source
- `issues`: [COMING SOON] recreate the source repo's issues as Radicle issues (the source must also have issues: true).
