# aj-landing

Personal technical hub for AJ.

The site is intentionally small and modular: a dark landing page with routes into projects, writing, papers, resources and a standalone print-friendly résumé.

## Routes

- `/` — landing page
- `/projects` — project/repository links
- `/blog` — writing and notes
- `/papers` — technical papers and future LaTeX/PDF documents
- `/resources` — useful external links and references
- `/resume` — standalone résumé copied from `Ajsensai/aj-resume`

## Stack

- Astro
- native `.astro` components
- static output
- plain CSS
- GitHub Actions
- GitHub Pages

## Structure

- `src/components/` — reusable UI components
- `src/data/` — simple content/link data
- `src/pages/` — Astro routes
- `public/resume/` — standalone résumé HTML/CSS

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Deployment

Pushes to `main` build the Astro site and deploy `dist/` using GitHub Pages.

The site currently targets the GitHub Pages test path. The custom `ajtech.au` domain can be moved across later once the landing site is ready.
