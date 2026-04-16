# PI-RADS Upgrading as a Time-to-Event Signal (React + Vite)

Interactive scientific website prototype with synthetic cohort data, survival visuals, dashboard filters, and localStorage persistence.

## Local run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push repository to Git provider.
2. Import project in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`, output directory: `dist`.
5. Ensure SPA rewrites are enabled (included in `vercel.json`).

## Persistence architecture

All client persistence uses localStorage via `useLocalStorage` hook + safe parser helper:
- theme
- dashboard filters
- selected analysis chart tab
- bookmarked references
- disclaimer dismissal
- user notes
- last visited page

If JSON parsing fails, storage helper falls back to default values.
