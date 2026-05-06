# Zip Zap, LLC — Brand Kit

Brand identity site for **Zip Zap, LLC** — friendly, mile-high electricians in
Denver, CO.

Live: <https://samtarifflens.github.io/zipzap/>

## What's in here

- `/` — One-pager: cover, voice, palette, typography, logo family, lockup, applied surfaces
- `/#/logos` — All six logo marks at multiple sizes & contexts
- `/#/wordmark` — Wordmark variations (flat, shade, split, on-dark, on-yellow)
- `/#/apply` — Applied surfaces: t-shirt, hard-hat sticker, Instagram grid, fridge magnet

## Stack

Vite · React 18 · TypeScript · react-router-dom (HashRouter for GitHub Pages).

## Develop

```bash
npm install
npm run dev      # http://localhost:5181
npm run build    # tsc + vite build → dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.
