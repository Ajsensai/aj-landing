# CLAUDE.md

## Purpose

This repository powers `ajtech.au`, AJ's personal technical landing page.

It is intentionally a hub rather than a conventional portfolio. The root page should quickly explain who AJ is and provide clear routes into résumé, projects, writing, papers and resources.

## Stack

- Astro
- static output only
- plain CSS
- GitHub Actions deployment to GitHub Pages

Keep the site lightweight. Use native Astro components by default. Do not introduce React, Vue, Svelte or another client framework unless a future interactive feature clearly requires it.

## Routes

- `/` — main landing page
- `/resume`
- `/projects`
- `/blog`
- `/papers`
- `/resources`

`/projects`, `/resources` and `/papers` are data-driven. `/resume` is a standalone static copy of the generated résumé from `Ajsensai/aj-resume`, kept separate so its print/PDF styling remains unchanged.

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

## Component structure

- `src/components/LinkCard.astro` — reusable internal/external link tile.
- `src/components/PageHeading.astro` — standard page title/description.
- `src/components/PaperCard.astro` — paper entry with PDF/source links.
- `src/data/home.ts` — landing-page destinations.
- `src/data/projects.ts` — project links.
- `src/data/resources.ts` — resource links.
- `src/data/papers.ts` — paper metadata.
- `public/resume/` — standalone résumé HTML/CSS copied from the résumé repository.

Keep content in `src/data/` where practical and presentation in `src/components/`.

For papers, prefer LaTeX source + generated PDF. Compile LaTeX during CI when papers are introduced, place generated PDFs in the public output, and list them through `src/data/papers.ts`.

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

## Naming

Use `AJ` throughout the general site. Reserve `Anthony Bale` for résumé content and LinkedIn-specific references only.

## Content philosophy

Prefer concise, specific copy. Projects and writing should explain what was built, why it mattered, what was learned and where useful artefacts live.

This site should be allowed to feel incomplete while it grows. Do not fill empty sections with invented projects or filler content.
