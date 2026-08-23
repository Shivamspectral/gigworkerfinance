# GigWorkerFinance

Money Smarts for Gig Drivers — a finance blog for US rideshare and delivery drivers (Uber, Lyft, DoorDash, Instacart, Grubhub).

This is a Next.js App Router site with file-based Markdown posts, Tailwind CSS, and a small PostgreSQL layer for newsletter and contact form submissions.

**Suggested Vercel project name:** `gigworkerfinance`

## Alternate taglines

The live site uses **Money Smarts for Gig Drivers**. Other options if you want to switch later (edit `src/lib/site.ts`):

1. Keep More of Every Fare
2. Tax-Smart Money Tips for 1099 Drivers
3. Take-Home Pay Help for Uber, Lyft & DoorDash Drivers

## Tech stack

- Next.js (App Router)
- Tailwind CSS
- Markdown posts in `/posts` (gray-matter + remark)
- Drizzle ORM + PostgreSQL for newsletter + contact form
- Ready for Google Analytics and Google AdSense via env vars

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

3. Make sure PostgreSQL is running and `DATABASE_URL` is correct.

4. Push the database tables:

   ```bash
   npx drizzle-kit push
   ```

5. Start the dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## How to add a new blog post

1. Create a new Markdown file in `/posts`. The file name becomes the URL slug.

   Example: `posts/instacart-mileage-deduction.md` → `/blog/instacart-mileage-deduction`

2. Add frontmatter at the top:

   ```md
   ---
   title: "Your headline"
   date: "2025-04-01"
   excerpt: "One or two sentences for cards and SEO."
   category: "Taxes"
   readTime: "8 min"
   author: "Alex Rivera"
   image: "/images/posts/your-image.jpg"
   ---
   ```

3. Use one of these category names so the badge and category page work:

   - `Taxes`
   - `Budgeting`
   - `Apps & Tools`
   - `Income Tips`

4. Drop an image in `public/images/posts/` if you have one. If you omit `image`, the default social image is used.

5. Write the article in Markdown. Headings become the table of contents automatically. No other code changes are required.

## Deploy to Vercel (project: gigworkerfinance)

1. Push this repo to GitHub.
2. In Vercel, **Add New Project** and import the repo.
3. Name the project `gigworkerfinance`.
4. Set environment variables:
   - `DATABASE_URL` — your production Postgres URL (Vercel Postgres, Neon, etc.)
   - `NEXT_PUBLIC_SITE_URL` — `https://gigworkerfinance.vercel.app` or your custom domain
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` — when you have GA4
   - `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` — when you have AdSense (`ca-pub-...`)
5. Deploy.
6. Run `npx drizzle-kit push` against production (or run the SQL) so `newsletter_subscribers` and `contact_messages` exist.

## Google Analytics and AdSense

Comments in `src/app/layout.tsx` mark exactly where the tracking script and AdSense verification meta tag go.

- If the env vars are set, the layout injects GA4 and the AdSense loader for you.
- Ad units themselves stay in `src/components/AdSlot.tsx`. Replace that placeholder with your `<ins class="adsbygoogle">` code when ads are approved.

## Project map

```
posts/                  Markdown articles
public/images/          Hero, OG, and post images
src/app/                Routes (home, blog, about, contact, legal, categories)
src/app/api/            Health, newsletter, contact
src/components/         Header, Footer, PostCard, AdSlot, newsletter, TOC
src/lib/posts.ts        Reads /posts — add files there, not here
src/lib/site.ts         Brand name, tagline, categories
src/db/                 Drizzle client + tables
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
