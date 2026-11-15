# chungyingchang.github.io

Personal website of Joey (Chung-Ying) Chang, served by GitHub Pages at <https://chungyingchang.github.io>.

A single static page with no build step. It uses a blue-and-gold palette with Libre Baskerville and Open Sans.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole site: markup, CSS and the small nav script |
| `photo.jpg` | Headshot (800×800). If it's missing, the initials "JC" show instead |
| `resume.pdf` | CV. The "View Resume" button opens it in a new tab |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is, without running Jekyll |

## Editing

- **Content:** edit the sections in `index.html` directly (About, Resume, Projects, Contact).
- **Colors:** change the CSS variables in `:root` at the top of `index.html`.
- **Resume:** replace `resume.pdf` and keep the same filename.
- **Preview:** run `python3 -m http.server`, then open <http://localhost:8000>.

## Changelog

### 2026-11-14 — Rebuild

- Replaced the old Jekyll site, built on the HTML5 UP "Strata" template, with a single static `index.html` in a blue-and-gold design.
- Removed the Jekyll config, theme assets, Font Awesome, jQuery and the old `images/` folder. All of them are still in git history.
- Added the headshot (`photo.jpg`), the CV (`resume.pdf`) and the contact email.
- Changed the resume button to "View Resume". It opens the PDF in a new tab instead of downloading it.
- Added `.gitignore` entries for OS and editor files (`.DS_Store` and similar) and `.nojekyll`.
