# Public Assets

Place these files here before deploying:

- `favicon.ico` — 32×32 site icon
- `og-image.jpg` — 1200×630 Open Graph share image (dark, premium car photo + Veloce logo)
- `logo.svg` — Vector logo
- `apple-touch-icon.png` — 180×180

All car images are loaded from Unsplash CDN via `next/image` with remote pattern allowlist.
Replace URLs in `data/cars.ts` with your own hosted assets for production.
