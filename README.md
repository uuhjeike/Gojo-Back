# Gojo Back

A premium, dark, cinematic personal profile — built to feel like a real social profile, not a landing page or portfolio. The approved profile image defines the identity; the approved background video defines the living atmosphere behind it. Posts are loaded from an external content file so they can be edited without ever touching the website code.

## Project Structure

```
index.html   — page structure (profile header + feed container)
style.css    — the complete visual system (colors, type, layout, motion)
script.js    — loads/parses posts, renders the feed, manages smart media loading
README.md    — this file
text 1.txt   — the post content file
```

**`text 1.txt` is not website code.** It is not JavaScript, not HTML, not part of the implementation. It is a plain external data file that holds every post in the feed. `script.js` fetches it and parses it at load time — you never edit `index.html`, `style.css`, or `script.js` to add, remove, or change a post.

## Adding Posts

Every post lives inside `text 1.txt`, separated by delimiter lines. A delimiter line is a line that contains only a single `-` character.

```
-
This is the newest post.
-

-
This is another post.
-

-
This is an older post.
-
```

Rules:
- Each block of text between a pair of `-` lines becomes exactly one post.
- The `-` lines themselves are never shown on the site — they only mark where one post ends and the next begins.
- Blank blocks are ignored.
- Line breaks inside a post are preserved exactly as written.
- URLs, image/video/audio links, and social links are preserved and become live, working elements (see **Media** and **Button Links** below).

You do not need to touch any code file to update the feed — just edit `text 1.txt` and re-upload it.

## Post Order

**Store your posts in `text 1.txt` from oldest to newest** (oldest post first in the file, newest post last). The website automatically reverses this when rendering, so visitors always see:

```
NEWEST POST   ← top of the page
↓
older post
↓
OLDEST POST   ← bottom of the page
```

This is the documented convention `script.js` relies on. If you'd rather write newest-first directly in the file, you can — just tell whoever maintains `script.js` next, since the reversal step assumes oldest-first storage.

## Button Links

Any line that is *only* a URL followed by `(button)` is converted into a clickable button instead of a plain link:

```
https://example.com (Open Website)
```

Anything inside the parentheses becomes the button's label (`Open Website` in the example above, or literally `Open Link` if you just write `(button)`). A URL on its own line with no `(...)` suffix is shown as a normal clickable link instead.

## Media

Lines that contain *only* a single URL are inspected by file extension and rendered as real, working media:

- Images — `.png .jpg .jpeg .gif .webp .avif .svg`
- Video — `.mp4 .webm .mov .m4v`
- Audio — `.mp3 .wav .ogg .m4a .flac`

Multiple media URLs placed back-to-back in the same post are grouped into a compact grid, matching how a normal social post displays multiple photos. Any other link (Facebook, Instagram, YouTube, Pinterest, a ZIP file, a plain website, etc.) is shown as a normal working link and opens in a new tab. If one piece of media fails to load, only that item is hidden — the rest of the feed keeps working.

## Smart Loading

With potentially hundreds or thousands of posts, the page never loads every image, video, and audio file up front. `script.js` uses `IntersectionObserver` to:

- Defer every media element until it's about to scroll into view.
- Autoplay video only while it's actually visible on screen, muted, and pause it the moment it scrolls out of view.
- Render posts themselves in small batches (instead of building the entire feed's DOM at once) so scrolling stays smooth even with a very large feed.
- Gracefully skip any post or media item that fails, without breaking the rest of the page.

The background video follows the same discipline — it pauses automatically when the browser tab isn't visible, and falls back to the profile image if the video can't load or autoplay at all.

## GitHub Pages Setup

1. Create (or open) your repository on GitHub.
2. Upload `index.html`.
3. Upload `style.css`.
4. Upload `script.js`.
5. Upload `README.md`.
6. Upload `text 1.txt` — it must sit in the same root folder as `index.html`.
7. Also upload the approved profile image and the approved background video into that same root folder, matching the filenames referenced in `index.html`.
8. In your repository settings, enable **GitHub Pages** for the branch/folder you uploaded to.
9. Open the generated Pages URL — your profile is live.

Because this is a fully static site, changing `text 1.txt` and re-uploading it is the *only* step needed to change what posts appear. No rebuild, no server, no database.

## Important Rules

- Don't rename `text 1.txt` unless `script.js`'s `POSTS_FILE` constant is updated to match.
- Don't remove the `-` delimiter lines — without them, posts can't be told apart.
- Don't put post content directly inside `index.html`.
- Don't put post content directly inside `script.js`.
- Keep the profile image and background video filenames in `index.html` in sync with whatever you actually upload.
