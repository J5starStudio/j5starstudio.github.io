# J5 Star Studio

Official website for [J5 Star Studio](https://github.com/J5starStudio), built as a static site with Astro, TypeScript, and CSS.

## Local development

Requirements: Node.js 22 or later. npm works locally; the deployment workflow uses pnpm with the committed lockfile.

```bash
npm install
npm run dev
```

Astro will print the local development URL (usually `http://localhost:4321`).

## Production build

```bash
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages whenever a change is pushed to `main`. The repository's Pages source must be set to **GitHub Actions** under **Settings → Pages**.

Manual deployments can be started from **Actions → Deploy Astro site to GitHub Pages → Run workflow**.

Production URL: <https://j5starstudio.github.io>

## Content policy

Only approved public studio information belongs on this site. Do not expose unannounced game titles, private development documents, private repository information, or other confidential material.
