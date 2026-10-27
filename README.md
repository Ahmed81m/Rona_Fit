# Home Fit with Rona

Static marketing website for **Home Fit with Rona**, coach **Captain Rona** — a
fitness and nutrition coach for women. Built with Next.js (static export),
TypeScript, and Tailwind CSS. Deploys to **GitHub Pages only** — there is no
backend, database, or server of any kind.

## Tech stack

- Next.js 14 (App Router, `output: "export"`)
- TypeScript
- Tailwind CSS
- Plain WhatsApp deep links (`wa.me`) — no WhatsApp API, no server

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

This generates a fully static site in `out/`. You can open `out/index.html`
directly or serve the folder with any static file server.

## GitHub Pages deployment

Deployment is automatic via `.github/workflows/deploy.yml`:

1. Push this project to a GitHub repository named `Rona_Fit` (or update
   `REPO_NAME` in `next.config.mjs` and `siteUrl` in
   `src/data/siteConfig.ts` if you use a different name).
2. In the repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to the `main` branch.
4. Wait for the "Deploy to GitHub Pages" workflow to finish (check the
   **Actions** tab).
5. Your site will be live at:
   `https://ahmed81m.github.io/Rona_Fit/`

No manual build step is required — GitHub Actions builds and deploys on
every push to `main`.

## Updating content

Everything content-related lives in `src/data/` and `public/images/` — you
should never need to touch component code to make routine updates.

### Change the WhatsApp number, Instagram, or site URL
Edit `src/data/siteConfig.ts`.

### Add / remove / edit a service
Edit `src/data/services.ts`. Each entry needs an `id`, `title`,
`description`, a few `points`, and an `image` path. Drop the matching image
in `public/images/services/`.

### Add / remove / edit a goal card
Edit `src/data/goals.ts`.

### Replace the coach photo or hero photo
Replace these files directly (same filenames, any real photo):
- `public/images/hero/hero.jpg`
- `public/images/brand/coach.jpg`

### Replace the Open Graph / social preview image
Replace `public/images/og-image.jpg` (1200×630 recommended).

## Testimonial privacy workflow — read this before adding a review

**Only fully anonymized WhatsApp screenshots may ever be placed in
`public/images/testimonials/`.** Before adding any new screenshot:

1. Open the raw screenshot and check the entire image: the chat header,
   every sender name above every message, quoted/replied messages, and
   group names — names and phone numbers can appear more than once.
2. Cover every real name with a neutral replacement (e.g. "Privacy
   Customer") and every phone number with a non-identifying placeholder.
   Keep the edit visually consistent with the screenshot — don't crop
   destructively or leave a visibly botched patch.
3. Save the anonymized image into `public/images/testimonials/` using a
   generic filename (e.g. `review-07.jpg`).
4. Add a matching entry to `src/data/testimonials.ts`:

   ```ts
   {
     id: "review-07",
     image: "/images/testimonials/review-07.jpg",
     alt: "وصف قصير للشهادة — لا يذكر اسم العميلة",
     category: "weight-loss",
   }
   ```

5. Never place a raw, unprocessed screenshot in `public/` — keep raw
   screenshots outside the repository entirely once you're done editing.

The gallery on the site is fully data-driven from this file, so the UI
never needs to change — only the data and the image.

## Notes on the current build

- The coach photo, hero photo, and service images shipped in this project
  are **placeholder graphics** (solid color panels with a label), since no
  real photography was provided. Replace them with real photos before
  going live — the site will pick them up automatically once the files are
  swapped in place.
- No certifications, years of experience, client counts, or results
  percentages are claimed anywhere on the site, since none were provided.
  Add these once you have them to share, in `src/sections/About.tsx`.
