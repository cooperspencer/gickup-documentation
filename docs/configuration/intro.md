---
sidebar_position: 0
---

# Getting started

A YAML configuration pairs one or more sources with one or more destinations. Every repository selected by a source is backed up to every destination in that configuration.

```yaml title="conf.yml"
# yaml-language-server: $schema=https://raw.githubusercontent.com/cooperspencer/gickup/refs/heads/main/gickup_spec.json
source:
  github:
    - token: GITHUB_TOKEN

destination:
  local:
    - path: ./backups
      structured: true
      mirror: true
```

Set the `GITHUB_TOKEN` environment variable to your token, then run:

```bash
./gickup conf.yml
```

Without `user`, this GitHub source selects repositories available to the authenticated account. The local destination stores them beneath `backups` by host, owner, and repository. Without `cron`, Gickup runs once and exits; add a [schedule](miscellaneous.md) to run periodically.

Provider entries are lists, so you can configure multiple accounts or destinations of the same type. See the [sources](source_docu/intro.md), [destinations](destination_docu/intro.md), and [autocomplete](autocomplete.md) pages for supported options.

## Credentials and paths

For providers supporting `token`, set it to a literal token or to the name of an environment variable, without `$` or `${...}`. Gickup uses the environment variable if it has a nonempty value; otherwise it uses the configured string literally.

Alternatively, use `token_file` to read a token from a file. Omit `token` when using `token_file`, because a nonempty `token` takes precedence. Relative file paths resolve from Gickup's working directory, not from the configuration file's directory.

Local backup paths, log directories, token files, SSH key paths, and GitHub App private key paths support a leading `~` for the home directory. In Docker, these paths refer to the container filesystem; mount the required files and backup directories into the container.

## Separate backup jobs

Use YAML documents separated by `---` when different sources should go to different destinations:

```yaml title="conf.yml"
source:
  github:
    - token: GITHUB_TOKEN
destination:
  gitea:
    - url: https://git.example.com
      token: GITEA_TOKEN
      user: backups
      mirror:
        enabled: true
cron: "0 22 * * *"
---
source:
  gitlab:
    - token: GITLAB_TOKEN
destination:
  local:
    - path: ./gitlab-backups
      structured: true
cron: "0 3 * * *"
```

You can also pass multiple files:

```bash
./gickup github.yml gitlab.yml
```

The first configuration controls whether scheduling is enabled. If it has a valid `cron`, later configurations inherit that schedule unless they provide their own valid schedule. If the first configuration has no valid schedule, all jobs run once.

Logging and the Prometheus listener use the first configuration. Configure heartbeats for each job. Within a multi-document file, later documents inherit the first document's push notifications if they do not define any push providers themselves.

While scheduling is active, Gickup checks configuration files for changes approximately every five seconds and reloads changed configuration.
