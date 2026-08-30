# Tushar Vaibhav — Portfolio

A static, single-page portfolio website built with **Angular 21** (standalone
components). Dark developer theme, fully responsive, deployable to GitHub Pages.

Live sections: Hero · About · Skills · Experience · Projects · Contact.

## Editing content

**All text lives in one file** — you never need to touch the templates:

```
src/app/data/portfolio-data.ts
```

Update your name, roles, summary, skills, experience, projects, and links there.

### Replacing the resume

The "Download Resume" button links to `public/assets/Tushar_Vaibhav_CV.docx`.
To use a **PDF** instead:

1. Drop your PDF at `public/assets/Tushar_Vaibhav_CV.pdf`.
2. In `src/app/data/portfolio-data.ts`, change `resumeFile` to
   `'assets/Tushar_Vaibhav_CV.pdf'`.

## Run locally

```bash
npm install
npm start          # http://localhost:4200
```

## Build

```bash
npm run build      # outputs to dist/portfolio/browser
```

## Deploy to GitHub Pages

This repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds and deploys automatically.

1. Create a GitHub repo named **`Portfolio`** and push this code to the `main`
   branch. (The `build:gh` script sets `--base-href /Portfolio/` to match — if
   you name the repo differently, update that path in `package.json` and the
   workflow.)
2. In the repo: **Settings → Pages → Build and deployment → Source →
   GitHub Actions**.
3. Push to `main`. The site publishes at
   `https://tusharvaibhavmca2020.github.io/Portfolio/`.

### Deploying to a user site instead

If you name the repo `tusharvaibhavmca2020.github.io` (served at the domain
root), change the base href to `/`:

```jsonc
"build:gh": "ng build --base-href /"
```

## Tech

Angular 21 · TypeScript · SCSS · IntersectionObserver reveal animations · no
runtime dependencies beyond Angular.
