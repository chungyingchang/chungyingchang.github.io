# chungyingchang.github.io

Personal website of Joey (Chung-Ying) Chang, served by GitHub Pages at <https://chungyingchang.github.io>.

A single static page with no build step. It uses a blue-and-gold palette with Libre Baskerville and Open Sans.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole site: markup, CSS and the small nav script |
| `images/photo.jpg` | Headshot (800×800). If it's missing, the initials "JC" show instead |
| `resume.pdf` | CV. The "View Resume" button opens it in a new tab |
| `images/gt-logo.jpg` | Georgia Tech icon (Education) |
| `images/nthu-logo.jpg` | National Tsing Hua University icon (Education, Experience) |
| `images/tsmc-logo.jpg` | TSMC icon (Experience) |
| `images/trendmicro-logo.jpg` | Trend Micro icon (Experience) |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is, without running Jekyll |

## Editing

- **Content:** edit the sections in `index.html` directly (About, Education, Experience, Skills, Projects, Contact).
- **Colors:** change the CSS variables in `:root` at the top of `index.html`.
- **Resume:** replace `resume.pdf` and keep the same filename.
- **Icons:** 160×160 square images, shown at 28px with rounded corners before each school or company name.
- **Preview:** run `python3 -m http.server`, then open <http://localhost:8000>.

## Changelog

### 2026-11-14 — Tidy-up

- Moved all JPG images (headshot and logos) into `images/` and updated their paths.
- Skills: split the single "AWS (Glue, Lambda, RDS, S3)" tag into separate AWS Glue, AWS Lambda, Amazon RDS and Amazon S3 tags.

### 2026-11-14 — Resume sync and logos

- Hero: blue-to-white gradient that flows into the white sections, uppercase serif name, headshot in a white ring with a gold border.
- Education: added the Computational Data Analytics Track and the M.S. GPA. Split NTHU into separate M.S. and B.S. lines with their own dates, spaced evenly.
- Renamed "Work" to "Experience" and synced it with the resume, in reverse chronological order with bullet points:
  TSMC Software Engineer (2023–2026), Trend Micro Software Developer Intern (2022),
  NTHU Teaching Assistant for CS3423 Operating Systems (2022), TSMC IT Engineer Intern (2021).
- Added small school and company icons (Georgia Tech, NTHU, TSMC, Trend Micro).
- Skills: grouped into ML & Statistics, Programming, Data Engineering & Cloud, Visualization and Languages.
- Projects: Pineapple Identification System, Social Media Review Analysis (ASUS), AI CUP 2021 (2nd of 118).
- Added the LinkedIn link.

### 2026-11-14 — Rebuild

- Replaced the old Jekyll site, built on the HTML5 UP "Strata" template, with a single static `index.html` in a blue-and-gold design.
- Removed the Jekyll config, theme assets, Font Awesome, jQuery and the old `images/` folder. All of them are still in git history.
- Added the headshot (`photo.jpg`), the CV (`resume.pdf`) and the contact email.
- Changed the resume button to "View Resume". It opens the PDF in a new tab instead of downloading it.
- Added `.gitignore` entries for OS and editor files (`.DS_Store` and similar) and `.nojekyll`.

## To do

- [ ] Add more projects (e.g. Groovloop, Georgia Tech course projects)
