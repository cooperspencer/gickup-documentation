---
sidebar_position: 12
---

# WebDAV

Upload repository backups to a WebDAV endpoint, such as Nextcloud, Apache mod_dav, or `rclone serve webdav`.

```yaml title="config"
destination:
  webdav:
    - url: https://webdav.example.com/dav
      username: your-username
      password: your-password
      path: repos
      structured: true
      zip: false
      datecreatedir: false
```

- `url`: the WebDAV endpoint.
- `username` and `password`: HTTP Basic authentication credentials.
- `path`: subdirectory on the server in which to store backups.
- `structured`: organize backups as `hoster/user-or-organization/repository` beneath `path`.
- `zip`: upload each bare repository as a single ZIP archive instead of individual files.
- `datecreatedir`: add a directory named after the backup date.

Gickup first clones each repository into a temporary local directory, so allow enough local disk space for the backup. For uploads of individual files, it removes remote files in the repository's backup directory that no longer exist in the new backup.
