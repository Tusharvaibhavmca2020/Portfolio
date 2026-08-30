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

## Viewing the built site locally

`npm run build` outputs static files to `dist/portfolio/browser/`. Because the
app uses an absolute base path, opening `index.html` by double-click won't load
its assets. To preview the built folder, serve it over HTTP, e.g.:

```bash
npx http-server dist/portfolio/browser
```

For day-to-day editing just use `npm start` (http://localhost:4200).

## Tech

Angular 21 · TypeScript · SCSS · IntersectionObserver reveal animations · no
runtime dependencies beyond Angular.
