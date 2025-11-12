# Noor Community Web

This repository contains the Noor Community static site built with [Vite](https://vitejs.dev/) and Material Web components. It implements the information architecture, shared layout, and content requirements from the Noor Community blueprint, including reusable hero, navigation, and footer patterns across dedicated programme, impact, join, and donor pages.

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Add your Pexels API key to VITE_PEXELS_API_KEY
   ```
   The build and runtime use the key to hydrate hero sections with authentic imagery via the Pexels API.
3. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit the printed URL (defaults to `http://localhost:5173/src/pages/index.html`) to browse the site locally. Every page under `src/pages/` imports the shared layout and composes its content with Material Web components.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Generate the production site in the `docs/` directory. |
| `npm run deploy` | Build the site and publish the `docs/` directory to GitHub Pages using `gh-pages`. |
| `npm run preview` | Preview the production build locally. |

## Deployment

GitHub Pages can serve the static output generated in `docs/`. Two deployment paths are documented:

1. **Automated** – Run `npm run deploy` to push the latest `docs/` contents to the `gh-pages` branch via the [`gh-pages`](https://github.com/tschaub/gh-pages) CLI.
2. **Manual** – Run `npm run build`, commit the `docs/` directory on the default branch, and enable GitHub Pages with the `docs/` folder as the publish source (Settings → Pages → Build and deployment → Deploy from a branch → `main` + `/docs`).

A `.nojekyll` file is included so GitHub Pages serves the pre-built assets without Jekyll processing. When GitHub Pages publishes
the repository as a project site it is mounted at `https://<org>.github.io/Noor-Community-Web/`, so the production pages live at
`https://<org>.github.io/Noor-Community-Web/<page>.html` (for example `about-approach.html`). For legacy links that still point to
`/src/pages/*.html`, the build preserves that folder structure so those URLs continue to resolve after deployment.

## Architecture highlights

- **Shared layout** – `src/components/layout.js` renders the sticky `<md-top-app-bar>` with utility navigation, the persistent donate button, and a four-column footer that covers mission, exploration, action, and trust links.
- **Dynamic enhancements** – Utility modules in `src/utils/` fetch hero imagery from the Pexels API, provide accessible accordion/tabs behaviour, and surface related stories on programme, impact, and join pages to satisfy the cross-linking mandate.
- **Content modules** – Each page under `src/pages/` imports shared helpers to build Material-driven sections (cards, lists, accordions, and tabs) with placeholder programme data, stats, testimonials, and stories.

## Project structure

```
├── public/            # Static assets copied as-is
├── src/
│   ├── components/    # Layout shell, hero/card helpers, custom top app bar
│   ├── data/          # Programme, impact, FAQ, financial, and story datasets
│   ├── pages/         # Page entry points (HTML + JS modules)
│   ├── styles/        # Global Sass styles and tokens
│   └── utils/         # Hero imagery fetcher, accordion/tab initialisers, story helpers, theme setup
├── docs/              # Production build output for GitHub Pages
├── package.json       # Scripts and dependencies
└── vite.config.js     # Vite configuration (multi-page build to docs/)
```

## Accessibility & content

- Skip links, semantic headings, and keyboard-friendly accordions ensure core navigation remains accessible despite the sticky header.
- Programme, impact, join, and donate pages surface “Related stories” blocks sourced from shared data to keep storytelling integrated across the site.
- Placeholder stats, testimonials, and partner highlights reflect the blueprint’s mandate for transparent, trust-building content that can be replaced with CMS data later.
