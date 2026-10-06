# CLAUDE.md

## Purpose

This repository powers `ajtech.au`, Anthony Bale's personal technical landing page.

It is intentionally a hub rather than a conventional portfolio. The root page should quickly explain who Anthony is and provide clear routes into résumé, projects, writing, papers and resources.

## Stack

- Astro
- static output only
- plain CSS
- GitHub Actions deployment to GitHub Pages

Keep the site lightweight. Do not introduce a UI framework, client-side JavaScript library or component system unless a future feature clearly requires it.

## Routes

- `/` — main landing page
- `/resume`
- `/projects`
- `/blog`
- `/papers`
- `/resources`

The non-root routes are intentionally placeholders initially. Preserve those URLs as content is added.

## Design direction

The site should feel technical, restrained and personal rather than corporate.

Priorities:
- strong typography and spacing;
- clear information hierarchy;
- minimal decoration;
- subtle technical/terminal influence without becoming a hacker cliché;
- responsive behaviour;
- fast static pages;
- accessible semantic HTML.

Avoid:
- generic SaaS gradients;
- animated particle backgrounds;
- excessive glassmorphism;
- stock imagery;
- skill-progress bars;
- long lists of technology logos;
- unnecessary motion.

## Development

Install and run locally:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Before merging changes, ensure `npm run build` succeeds and verify the main page plus all route placeholders at desktop and mobile widths.

## Content philosophy

Prefer concise, specific copy. Projects and writing should explain what was built, why it mattered, what was learned and where useful artefacts live.

This site should be allowed to feel incomplete while it grows. Do not fill empty sections with invented projects or filler content.
