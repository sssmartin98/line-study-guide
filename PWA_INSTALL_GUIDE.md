# Install and update Line Study

Line Study is a Progressive Web App (PWA): it can be installed like a normal
app, works offline after its shell has been cached, and keeps production data
on the device. The current project is hosted with GitHub Pages at:

`https://sssmartin98.github.io/line-study-guide/`

The public site contains the app shell and the built-in public-domain play.
Personal notes, edits, grades, and added plays stay in that browser's local
storage unless the user deliberately exports a backup file.

## Install the app

### iPhone or iPad

1. Open the address in Safari.
2. Tap Share.
3. Choose Add to Home Screen, then Add.

### Android

1. Open the address in Chrome.
2. Use the Install app prompt, or open the menu and choose Install app / Add to
   Home screen.

### Windows, macOS, or Linux

1. Open the address in Chrome or Edge.
2. Select the install icon in the address bar.
3. Confirm Install.

## Saving and moving work

- The app autosaves notes, cuts, rewordings, inserts, recasting, presets,
  grades, and view settings on the current device when browser storage is
  available.
- Save to file exports the open play's production overlay.
- Back up everything exports the entire library and all overlays.
- Export bundle packages one user-added play together with its overlay.
- Load file / Add from file restores those exports.
- Devices do not synchronize automatically. Export on one device and import on
  the other.
- Link backup file is supported by compatible desktop Chromium browsers. The
  app remembers the handle and asks for one Relink permission tap after
  reopening before silent overwrites resume.

Keep file backups after serious work. Browser autosave is convenient, not a
substitute for a separate recovery copy.

## Source project versus published files

The editable source project contains `template.html`, `play.json`, tests,
builders, release tooling, documentation, and the source PDF. The published
GitHub Pages root contains only the deployable shell:

- `index.html`
- `sw.js`
- `manifest.webmanifest`
- `version.json`
- `icon-192.png`
- `icon-512.png`
- `icon-maskable.png`
- this installation guide

Do not edit generated `index.html` directly. Change `template.html`, test, and
regenerate through the release workflow.

## Publish an update

Public versions continue from `1.0.x`. Never publish a `9.x` version.

1. Ensure `release.py` can locate the deployment shell at `../pwa_app_5`, or
   select it explicitly with `--pwa-dir`. A missing PWA folder is a release
   blocker, not something to skip.
2. Update `CHANGELOG.md` with an honest user-facing entry.
3. Run the complete behavioral and stress suites.
4. Run `release.py` with the next public semantic version and release notes,
   for example:

   `python3 release.py 1.0.2 --notes "Brief user-facing summary"`

5. Verify the generated standalone file and PWA `index.html` match, and verify
   the HTML version, `version.json`, and service-worker cache version agree.
6. Verify both generated ZIP archives from a clean extraction.
7. Keep the source kit private/local. Commit only the deployment-shell files to
   the public GitHub repository, preferably through a reviewed branch or pull
   request. Maintain a separate private backup of the source kit.
8. After GitHub Pages deploys, confirm that every PWA asset returns successfully
   and perform an online/offline browser smoke test.

The app checks `version.json` at most once a day and also offers Check for
updates in the Library. Update now creates a full backup, removes the old app
shell, and reloads it. Local production data is not intentionally deleted by an
update, but a separate backup is still required before publishing or installing
major changes.

## Roll back a bad release

Never make the hosted version number lower. Instead, restore the last known-good
source content and publish it as a new, higher patch version. For example, if
`1.0.2` is faulty, restore the good content and publish it as `1.0.3`. This lets
installed apps recognize the repaired build as a newer update.

## Troubleshooting

- No install option: confirm the page uses HTTPS and try Safari on iOS or
  Chrome/Edge elsewhere.
- Old shell after deployment: confirm `APP_VERSION`, `version.json`, and the
  `sw.js` cache name all match, then use Library > App health or Repair & reload.
- Missing work: check that the same browser/profile is being used, then restore
  the most recent exported backup.
- Offline startup fails: verify every shell asset is present and that `sw.js`
  is non-empty, registered, and using the current cache name.
