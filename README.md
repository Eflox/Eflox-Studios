# BREACH: Zero Hour website

Static site made of plain HTML, CSS and JS. There's no build step, so you can upload the folder as-is to any static host.

| File | What it is |
|---|---|
| `index.html` | Landing page: trailer, Wishlist on Steam, Discord, socials |
| `presskit.html` | Press kit: fact sheet, description, features, team/contact, videos, screenshots, logos, permissions |
| `css/style.css` | All styling (colors are at the top) |
| `js/main.js` | Small extras: scroll fade-ins, press kit section highlight, footer year |
| `assets/` | Favicon for now. Images go here later |

## Preview locally

Double-click `preview.bat`, or run `python -m http.server 8000` and open http://localhost:8000.

If you open `index.html` straight from disk, everything works except the trailer: YouTube won't play embeds on `file://` pages (Error 153). Once the site is hosted it plays normally.

## Still placeholder

Search the HTML for `PLACEHOLDER` to find each spot.

- Key art: the hero backgrounds are gradients (`.hero-bg` in `style.css`)
- Logo: a text version for now
- Press kit images: 6 screenshots, 3 logos, key art + 2 Steam capsules, and a team photo. They show as gradient cards marked "Soon"
- Press kit `.zip`, 1080p MP4s, gameplay footage
- Press contact email
- X / TikTok / Instagram: already in `index.html` but hidden until a URL is added
- Link-preview image: uses the trailer thumbnail for now

## Deploy

Any static host works: GitHub Pages, Netlify, Cloudflare Pages, Vercel, or your own server. `preview.bat` and `README.md` are only for you and can be left out of the upload.
