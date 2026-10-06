# fveiga

Portfolio of Felipe Veiga — live at https://lzfelipe.github.io/fveiga/

Built with React 19, React Router 7, styled-components 6 and framer-motion, bundled with [Vite](https://vite.dev).

## Scripts

```bash
npm ci --ignore-scripts   # install exactly what's in package-lock.json
npm run dev               # dev server at http://localhost:5173/fveiga/
npm run build             # production build in ./build
npm run preview           # serve the production build locally
```

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which audits the dependencies,
builds the site and publishes it to GitHub Pages.

## Dependency policy

- Versions are pinned exactly in `package.json`; transitive pins live in `overrides`.
- Before bumping anything, generate the lockfile without installing
  (`npm install --package-lock-only --ignore-scripts`) and make sure `npm audit` is clean.
