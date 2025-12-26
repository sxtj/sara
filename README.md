# The Works Hair Salon by Sara LLC — Website

A sleek, calming, modern website for a boutique salon in Manitou Springs, CO, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Minimal JS, mobile‑first, and production‑ready for Vercel.

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (custom theme: cream, taupe, charcoal)
- Lightweight UI primitives (shadcn-style Button/Card/Accordion)
- Images via Next/Image (local optimized placeholders)
- Server Actions contact form (no DB)
- Optional: Vercel Analytics

## Local Development
1. Install dependencies
   - `pnpm install` (recommended) or `npm install`
2. Run dev server
   - `pnpm dev` then open http://localhost:3000
3. Type-check and lint
   - `pnpm lint`
4. Build for production
   - `pnpm build` then `pnpm start`

## Deploy to Vercel
1. Push this repo to GitHub (or import directly in Vercel).
2. In Vercel, create a new project and select this repo.
3. Use default Next.js build settings.
4. Add a custom domain (e.g., `theworkshairsalon.com`) and set it as primary.

## Site Structure
- `/` — Home (hero, brand statement, services preview, gallery preview, intro, testimonials, location, final CTA)
- `/services` — Services list (no pricing shown)
- `/about` — Story, values, and what to expect
- `/gallery` — Clean, optimized grid with hover effects
- `/contact` — Simple contact form + booking info + map placeholder
- `/privacy` — Privacy policy
- `/sitemap.xml`, `/robots.txt` — SEO support

## SEO & Local Schema
- Per-page metadata via Next Metadata API
- Local SEO keyword: “Hair salon Manitou Springs”
- JSON‑LD `HairSalon` schema added in `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts` included

## Configuration
Central business config lives in `src/config/site.ts`:
- `name`, `location`, `phone`, `email`, `bookingNote`, `description`

Update these values to rebrand. All pages/components consume this config for consistency.

## Customizing for Another Salon
- Change business details in `src/config/site.ts`.
- Replace images in `public/images/` with your own (same filenames or adjust imports).
- Edit color palette or spacing in `tailwind.config.ts` (theme.extend.colors, radii).
- Adjust fonts in `app/layout.tsx` by switching `next/font/google` imports.
- Update copy in page files under `app/`.

## Forms & Email
The contact form uses Next.js Server Actions (`app/contact/page.tsx`). It currently logs submissions server‑side. To integrate email:
- Call your email provider SDK/API inside `submitContact` (e.g., Resend, SendGrid, Postmark).
- Add any secrets via environment variables and Vercel Project Settings.

## Notes
- Minimal animations via CSS keyframes for smooth fades.
- UI primitives are simple, dependency‑free and Tailwind‑styled.
- No database; no cookies beyond optional analytics.

---
© The Works Hair Salon by Sara LLC
