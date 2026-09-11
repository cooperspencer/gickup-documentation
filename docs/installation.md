---
sidebar_position: 1
---

# Installation

## Binary

Download the [latest release](https://github.com/cooperspencer/gickup/releases/latest) for your OS and architecture from GitHub and unpack it.
Alternatively, you can copy the `gickup` binary to a directory from your `$PATH` variable, to use it globally.

Create a [configuration file](configuration/intro.md) before running the binary. If you omit the filename, Gickup reads `conf.yml` from the working directory.

## Linux/Mac

```bash
./gickup conf.yml
```

## Windows

```cmd
gickup.exe conf.yml
```

## Command-line options

| Option | Behavior |
| --- | --- |
| `--version` | Print the version and exit. |
| `--dryrun` | Discover repositories and report backup operations without performing destination backups. Still contacts source APIs. |
| `--debug` | Include debug messages. |
| `--quiet` | Limit stderr logging to warnings, errors, and fatal messages. |
| `--silent` | Suppress stderr logging. |

```bash
./gickup --dryrun conf.yml
./gickup --debug conf.yml
```

## Docker

You can grab the latest version of gickup from [GitHub](https://github.com/cooperspencer/gickup/pkgs/container/gickup) or [Docker](https://hub.docker.com/r/buddyspencer/gickup).

## Pure Docker

```bash
docker pull buddyspencer/gickup # or ghcr.io/cooperspencer/gickup
docker run -d \
  -v /path/to/conf.yml:/gickup/conf.yml:ro \
  -v /path/to/backups:/backups \
  -e TZ=Europe/Vienna \
  buddyspencer/gickup
```

Set `destination.local.path` to `/backups` when using this mount. Pass any credential environment variables used by your configuration with `-e VARIABLE_NAME`. Without `cron`, the container exits after one backup run. The repository Docker image includes Git and Git LFS.

## Docker Compose

If you prefer to use docker compose, grab the [docker-compose.yml](https://github.com/cooperspencer/gickup/blob/main/docker-compose.yml) from the repository.

```bash
docker compose up -d
```

## Compile it yourself

If you want to use the latest version of the `main` branch, you can also compile it yourself.

Prerequisites:
- [git](https://git-scm.com/)
- [go](https://go.dev/)

```bash
git clone https://github.com/cooperspencer/gickup
cd gickup
go build .
```
