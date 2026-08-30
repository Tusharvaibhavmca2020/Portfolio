# Owner Editing via GitHub-as-Store — Design Spec

**Date:** 2026-08-30
**Owner:** Tushar Vaibhav
**Builds on:** [2026-08-30-angular-portfolio-design.md](./2026-08-30-angular-portfolio-design.md)

## Goal
Let the owner (only) edit the live portfolio — change profile picture, upload a
new CV, and add/edit/remove projects — with changes visible to all public
visitors. Public visitors get a view-only page and can download the CV. **No
database:** content is stored as plain files in the GitHub repo; GitHub is both
the storage and the write API.

## Decisions (confirmed)
- **Store:** GitHub repo files (no DB).
- **Login:** paste a GitHub **fine-grained personal access token** scoped to this
  one repo (Contents: read/write). No backend/server.
- **Hosting:** GitHub Pages (public repo — required so visitors can fetch content).
- **Token storage:** browser `sessionStorage` only; never committed, never shown
  to visitors.

## Architecture — GitHub as headless store

**Content files in the repo (`content/`):**
- `content/portfolio.json` — the editable subset: `projects[]`, `profileImage`
  (filename), `cvFile` (filename), `updatedAt` (ISO string, used for cache-busting).
- `content/profile.jpg` — profile photo (optional; falls back to initials avatar).
- `content/cv.<ext>` — resume (pdf or docx).

**Static (baked into build, not UI-editable):** name, roles, tagline, summary,
stats, skills, experience — remain in `src/app/data/portfolio-data.ts` and act as
the seed/defaults.

**Read path (public):** on load, `PortfolioService` fetches
`raw.githubusercontent.com/<owner>/<repo>/<branch>/content/portfolio.json`
(with `?t=updatedAt` cache-bust). On 404/failure it falls back to the baked
defaults. Profile image and CV resolve to raw URLs when present, else to the
bundled defaults (initials avatar / bundled docx).

**Write path (owner):** `/admin` editor calls the **GitHub Contents API**:
- `GET /repos/{owner}/{repo}/contents/{path}` → current content + `sha`.
- `PUT /repos/{owner}/{repo}/contents/{path}` with `{message, content(base64),
  sha?, branch}` → create/update. Binary files (image, CV) are base64-encoded.
- Auth header `Authorization: Bearer <token>`.

Because visitors read directly from the repo, edits are live on next page load —
**no rebuild required for content changes.**

## Routing
- `/` → portfolio (public).
- `/admin` → editor (login gate).
- GitHub Pages SPA deep-link support via `404.html` = `index.html` copy in the
  deploy workflow. Base href `/Portfolio/`.

## Admin editor (`/admin`)
1. **Login gate:** if no token in session, show a token input + "Verify". Verify
   calls `GET /repos/{owner}/{repo}` with the token; on success store token in
   sessionStorage and reveal the dashboard. Clear instructions + link to the
   token-creation page, listing the exact scope needed.
2. **Profile picture:** current preview + file picker (image) → on Save, PUT
   `content/profile.jpg`, then update `portfolio.json` (`profileImage`,
   `updatedAt`).
3. **CV:** current filename + file picker (pdf/docx) → on Save, PUT
   `content/cv.<ext>`, update `portfolio.json` (`cvFile`, `updatedAt`).
4. **Projects:** list with edit + delete; "Add project" form (name, tagline,
   description, tags[]). Save writes updated `projects[]` to `portfolio.json`.
5. **Logout:** clears sessionStorage token.
6. Status feedback (success/error) after every commit; disable buttons while a
   commit is in flight.

## Components / services
- `PortfolioService` — fetches + caches content; exposes signals for projects,
  profileImageUrl, cvUrl/cvName; provides defaults on failure.
- `GitHubService` — Contents API wrapper: `getFile(path)`, `putFile(path, bytes,
  message)`, `verifyAccess()`. Reads token from `AuthStore`.
- `AuthStore` — token in sessionStorage; `isAuthed` signal; `login/logout`.
- `admin/` components: `admin` (shell + login gate), `project-editor`,
  `asset-uploader` (reused for photo + CV).
- Hero gains a profile-picture element (uploaded image or initials avatar).
- Projects section + resume buttons read from `PortfolioService` instead of the
  static import.
- `site.config.ts` — `{ owner: 'tusharvaibhavmca2020', repo: 'Portfolio',
  branch: 'main', contentDir: 'content' }`.

## Deploy
- Re-add `.github/workflows/deploy.yml` (Angular build → Pages), with
  `paths-ignore: ['content/**']` so content commits don't trigger rebuilds.
- `build:gh` script with `--base-href /Portfolio/`, and `404.html` copy step.

## Security model & caveats
- Only the token holder can write; visitors never receive it.
- Fine-grained token scoped to one repo (Contents R/W) → minimal blast radius.
- `sessionStorage` clears on tab close.
- Honest caveat: a backend-less editor requires the token in the owner's browser.
  True one-click OAuth would need a serverless function — a documented future
  upgrade, structured for but out of scope now.
- Repo must be public for raw content reads.

## Out of scope (YAGNI)
- Editing name/skills/experience/summary via UI (stay in code for now).
- OAuth/serverless login, image cropping, multi-user roles, draft/preview,
  version history UI (git history already covers audit).
