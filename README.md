# Velocè — Premium Car Rental Website

A production-quality premium car rental website built with:

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** — page transitions, section reveals, hover interactions
- **GSAP + ScrollTrigger** — hero parallax, text reveals
- **Lenis** — cinematic smooth scroll
- **Lucide React** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, booking widget, fleet preview, why us, services, locations, testimonials |
| `/cars` | Full fleet with category filter |
| `/cars/[slug]` | Individual vehicle detail page |
| `/services` | All service types |
| `/locations` | Rental location cards |
| `/about` | Brand story, timeline, values |
| `/contact` | Contact form + details |
| `/book` | Dedicated booking form |

## Adding a New Car

Edit `data/cars.ts` — add a new entry to the `cars` array. The car immediately appears
on `/cars`, becomes filterable by category, gets its own detail page at `/cars/[slug]`,
and is included in the sitemap.

## Brand Customisation

- Colours: `tailwind.config.ts` → `theme.extend.colors.brand`
- Fonts: `app/layout.tsx` → Google Font imports
- Business name / taglines: `app/layout.tsx` metadata + component copy
- Locations: `data/content.ts` → `locations` array
- Services: `data/services.ts` → `services` array

## Production Assets

Replace placeholder Unsplash URLs in `data/cars.ts` with your own hosted images.
Add `public/og-image.jpg`, `public/favicon.ico` and `public/logo.svg` before deploying.

## Build

```bash
npm run build
npm start
```
