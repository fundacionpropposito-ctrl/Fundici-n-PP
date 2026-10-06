# Feature: donaciones-page

## Objective

Add a "Donaciones" call-to-action next to the "Contáctanos" button and a dedicated `/donaciones` page that explains why donating matters and what the foundation accepts.

## Problem / Why

The site has no way to invite visitors to donate. The foundation receives money and in-kind help (groceries, medicines, blankets, clothing and other useful items) and wants a polished page that communicates this.

## Scope

- New `donate` variant in `src/components/ui/Button.tsx` with a warm, donation-themed color (same size as the existing buttons).
- "Donaciones" button beside "Contáctanos" in `src/components/layout/Navbar.tsx` (desktop and mobile menu), linking to `/donaciones`.
- New route `src/app/donaciones/page.tsx`: importance of donating, accepted donation types (money, groceries, medicines, blankets, clothing, other items), real foundation photos from `public/imagenes/`, and a contact block.
- Page metadata and sitemap entry consistent with the existing SEO setup.

## Constraints

- No bank account exists yet: the page shows the existing contact number (`siteInfo.telefonos`, `whatsappNumber` in `src/data/site.ts`) as the way to coordinate donations. Do not invent bank or payment data.
- UI copy in neutral, professional Spanish, matching the rest of the site.
- Next.js 16.3.3: read the relevant guide in `node_modules/next/dist/docs/` before writing code.
- Reuse existing UI primitives (`Container`, `SectionTitle`, `Reveal`, `Button`) and `next/image`.
- Out of scope: payment gateway, forms, bank details.

## TDD

- Mode: strict TDD enabled (source: user global configuration).
- Runner: none configured in this repository (`package.json` has only `lint` and `build`). RED/GREEN cannot be observed; no test framework is added without user authorization. Functional checks below apply instead.

## Delivery

- Strategy: `ask-on-risk`. Forecast: ~300 authored changed lines.
- RDD: off (decided by global) — no native review.

## Tasks

- [x] T1 — `donate` Button variant + "Donaciones" button in Navbar (desktop and mobile). Route: delegated direct (writer trigger: 2+ non-trivial files across the feature).
- [ ] T2 — `/donaciones` page with content, images, contact block, metadata, sitemap entry. Route: delegated direct (same writer).

## Acceptance criteria

- "Donaciones" sits beside "Contáctanos", same size, visually distinct warm color, in desktop nav and mobile menu.
- Clicking it opens `/donaciones`.
- The page explains the importance of donating, lists money and in-kind donations, uses foundation photos, and offers the contact number (call and WhatsApp) while the bank account is pending.
- Page is responsive and consistent with the site's look.

## Checks

- `npm run lint`
- `npm run build`

## Progress / Evidence

- T1 done (route: delegated direct). Color: new tokens `brand-rose` #e11d48 / `brand-rose-dark` #be123c (white text contrast ~4.7:1, AA). Button got optional `onClick`; mobile menu closes on navigation. Desktop nav gap reduced to gap-6 below xl to avoid overflow at lg.
  - `npm run lint`: passed, no output
  - `npm run build`: passed

## Next step

- T2
