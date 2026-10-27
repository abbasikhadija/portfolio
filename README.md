# Khadija Abbasi — portfolio

React, TypeScript, Vite, Tailwind CSS v4, React Router and Lucide. Self-hosted Fraunces and DM Sans fonts; no third-party font requests, form delivery service, analytics, or heavyweight visualization engine.

## Run

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npx vite preview --host 127.0.0.1
```

The build renders five static HTML routes, adds per-page metadata, structured data, canonical URLs, sitemap and robots configuration, and checks gzip budgets (JavaScript ≤110 KB, CSS ≤12 KB). React mounts the interactive experience over the static content when loaded. Native details and essential narratives remain available without JavaScript.

Project content lives in `src/data/projects.ts`; interface and explanatory diagrams in `src/App.tsx`; design tokens and responsive styles in `src/style.css`. `scripts/prerender.mjs` owns the deployment origin and search metadata. Update that origin if hosting changes. `.openai/hosting.json` retains the private Sites identity.

See `docs/CONTENT_AUDIT.md` for provenance and `docs/VALIDATION.md` for measured checks and outstanding manual verification. Authentic screenshots retain their source repository attribution in each case study. Do not imply the conceptual interactions are connected to the source applications.

## Content maintenance

Confirm graduation year, availability and personal contributions with Khadija before presenting stronger claims. Recheck public deployments when updating status. Test source applications separately before claiming verified functionality. Contact uses a real mailto link; there is no simulated form submission.

## GitHub Pages

The public site is deployed from `main` by `.github/workflows/pages.yml`.
The workflow builds with `VITE_BASE_PATH=/portfolio/` and
`SITE_URL=https://abbasikhadija.github.io/portfolio` before uploading `dist`.
Each case study is a real prerendered directory, so direct links and refreshes work
without a GitHub Pages SPA rewrite. Both trailing-slash and client-side URLs work.
Default local/Sites builds continue to use `/` and the private Sites origin.

To preview the Pages variant in PowerShell:

```powershell
$env:VITE_BASE_PATH='/portfolio/'
$env:SITE_URL='https://abbasikhadija.github.io/portfolio'
npm run build
npx vite preview --host 127.0.0.1
```

Open the printed URL followed by `/portfolio/`.

