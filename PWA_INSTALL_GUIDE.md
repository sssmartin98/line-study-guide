# Install Line Study as a Real App — 10-Minute Guide

The folder inside `pwa_app.zip` is a complete installable web app (a "PWA").
Once it's hosted at a real web address, your phone and computer can install it
like any app: home-screen icon, its own window, works fully offline, keeps your
notes and edits saved. Hosting is the one step only you can do — it's free and
takes minutes. Two easy options below; Netlify is the easiest.

## Step 1 — Put the folder online (pick ONE)

### Option A: Netlify Drop (easiest, no account needed to try)
1. Unzip `pwa_app.zip` — you get a folder containing `index.html`, `sw.js`,
   `manifest.webmanifest`, and three icon files.
2. Go to **https://app.netlify.com/drop** in any browser.
3. Drag the whole unzipped folder onto the page.
4. In ~10 seconds you get a link like `https://something-random.netlify.app`.
   That's your app's address. (Make a free account to keep the site permanently
   and rename the link to something memorable.)

### Option B: GitHub Pages (if you already use GitHub)
1. Make a new repository, upload the unzipped files to its root.
2. Settings → Pages → Source: `main` branch, `/ (root)` → Save.
3. Your app appears at `https://yourname.github.io/repo-name/`.

**Privacy note:** either way the app is on the public internet at an obscure
address. It contains only the public-domain play text — your personal notes and
edits are NEVER uploaded; they live only on your own devices and in your own
`production_notes.json` files.

## Step 2 — Install it

**iPhone / iPad:** open your link in **Safari** → Share button → **Add to Home
Screen** → Add. It appears with the gold R&J icon and opens full-screen.

**Android:** open the link in **Chrome** → you'll see an "Install app" prompt,
or menu (⋮) → **Add to Home screen / Install app**.

**Computer (Windows / Mac / Linux):** open the link in **Chrome** or **Edge** →
click the install icon (⊕ or a monitor-with-arrow) at the right end of the
address bar → Install. It gets its own window, taskbar/dock icon, and works
offline.

## Saving — how it works in the installed app

- Everything autosaves on the device as you work (notes, cuts, rewords,
  inserts, flashcard progress, settings).
- **Save to file** downloads `production_notes.json` — your durable backup.
  Do this after any serious session.
- **Load file** restores a backup — and this is also how you move your work
  between phone and computer (the two devices don't sync automatically:
  save the file on one, send it to yourself, load it on the other).

## Updating the app later — now with one-tap in-app updates

Since v9.2 the app checks `version.json` on your site (once a day, or via
"⟳ Check for updates" on the Library screen) and shows an **Update now** button
when a newer version is published. Tapping it saves your work, clears the app
shell, and reloads fresh — notes are untouched. So updating is now:

1. On GitHub, upload the new `index.html` (overwrites the old one).
2. Edit `version.json` → raise the version number → Commit.
3. Optionally still bump the CACHE line in `sw.js` (belt-and-braces: it lets
   apps update even for users who never tap the button).
4. On your devices: open the app online → tap Update now when offered.

## The old manual way (still works)

When a future chat produces a new `index.html` (new features, a different play):
1. Open `sw.js` and bump the version line (`line-study-v9` → `line-study-v9`).
2. Re-upload the folder to the same Netlify site (Deploys → drag folder again)
   or replace the files on GitHub.
3. Close and reopen the installed app twice — the new version takes over.
Your notes survive updates (they're stored on the device, not in the app files)
— but Save to file first anyway. Always.

## Rolling back a bad update

If a new version misbehaves, put the old one back — GitHub keeps every version:
1. In your repo, click the clock/"commits" link → find the last good commit →
   open it → "Browse files" → download the old `index.html`, `sw.js`,
   `version.json` — or simply click "Revert" on the bad commit.
2. Re-upload those three (or commit the revert). Raise the number in
   `version.json` ABOVE the bad one (e.g. bad was 9.4.0 → set 9.4.1) so
   installed apps see the rollback as an update and offer "Update now".
3. On a stuck device: open the app → Library → "ⓘ App health" shows the running
   version and caches; the "Repair & reload" banner (or Update now) pulls the
   reverted files. Notes are never touched by any of this.

## If something doesn't work

- No install prompt? The address must start with `https://` — both options
  above provide that automatically.
- App shows an old version after updating? You skipped the `sw.js` version
  bump in step 1 of "Updating."
- Want to test before hosting? The plain `romeo_juliet_line_study_v9.html`
  file works identically (minus the icon/install) when opened in any browser.
