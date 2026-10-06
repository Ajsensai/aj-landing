# aj-landing

Personal landing page for [ajtech.au](https://ajtech.au).

The site is intentionally a hub rather than a traditional portfolio: a concise introduction, a small amount of current context, and clear routes into work, writing, notes and resources.

## Routes

- `/` — landing page
- `/resume` — résumé (reserved)
- `/blog` — writing and notes (reserved)
- `/projects` — project write-ups (reserved)
- `/papers` — papers and longer-form technical work (reserved)
- `/resources` — useful links, tools and references (reserved)

## Stack

- Astro
- static output
- plain CSS
- GitHub Actions
- GitHub Pages

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

The custom domain `ajtech.au` must also be configured under **Settings → Pages → Custom domain** in GitHub.
