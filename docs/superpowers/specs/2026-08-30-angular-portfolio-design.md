# Angular Portfolio Website — Design Spec

**Date:** 2026-08-30
**Owner:** Tushar Vaibhav

## Purpose
A static, single-page portfolio website (Angular) to link from a CV and share with
recruiters. Showcases backend/full-stack experience and featured engineering projects.

## Decisions
- **Framework:** Angular (latest), standalone components, TypeScript, SCSS.
- **Type:** Fully static SPA, single scrolling page, sticky smooth-scroll nav.
- **Style:** Modern dark developer theme — deep charcoal/navy background, neon
  cyan/green accent, monospace touches, subtle motion (fade-in-on-scroll, hover glow,
  smooth scroll). Responsive mobile → desktop.
- **Hosting:** GitHub Pages (build configured with correct base-href).
- **Animation level:** Subtle.
- **Resume button:** Yes — "Download Resume" links to a PDF placed in assets.
- **Contact email:** tusharthakurcipet@gmail.com
- **GitHub:** github.com/tusharvaibhavmca2020
- **LinkedIn:** linkedin.com/in/tushar-vaibhav-mca

## Content Source
All copy lives in a single typed `portfolio-data.ts` (one source of truth). Section
components render from it — editing text never requires touching templates.

CV metric placeholders (`[ADD number]`, `[ADD percentage]`) are **omitted** and
rephrased cleanly (e.g. "millions of records" not "[ADD number] million") so nothing
looks unfinished. Exact figures can be added later in the data file.

## Sections (top → bottom)
1. **Hero** — name, animated role (Backend Engineer | .NET & Node.js), tagline,
   CTAs (View Projects, Download Resume), social links.
2. **About** — professional summary + quick stats (4 yrs, domains, strengths).
3. **Skills** — categorized chips: Languages, Backend, Frontend, Databases,
   Architecture, Data/Integration, Cloud/DevOps, AI-Assisted.
4. **Experience** — vertical timeline: Quadrafort (client projects: IIL, LTIMindtree
   migration, CarbonCare, eForensics), Sutraa, Birdres (Eagle, CUSS).
5. **Projects** — featured cards: API Performance Analyzer, Enterprise Data Migration
   Engine — with tech tags and descriptions.
6. **Contact** — email, LinkedIn, GitHub, location + Download Resume button.
7. **Footer** — copyright, back-to-top.

## Component Structure
One standalone component per section: `navbar`, `hero`, `about`, `skills`,
`experience`, `projects`, `contact`, `footer`. A root `app` composes them. Shared
scroll-fade directive for the subtle animation. Global SCSS theme tokens
(colors, spacing, typography) in `styles.scss`.

## Deployment
- Build to `dist/` via `ng build`.
- Configure `--base-href` for GitHub Pages project site.
- Provide deploy steps (git init, push, `angular-cli-ghpages` or `docs/` folder).

## Out of Scope (YAGNI)
- No backend, forms-that-submit, CMS, analytics, or i18n.
- No blog. No routing (single page).
