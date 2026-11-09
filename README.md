# Vibrant Care Home Health — website

Rebuild of [vibrantcare.health](https://vibrantcare.health/) as a React + Vite + Tailwind site, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

Import this repo in Vercel. It detects Vite automatically (build: `npm run build`, output: `dist`). `vercel.json` sends every route to the single-page app so `/services`, `/contact` and the rest work on refresh.

## Where to edit things

| What | Where |
| --- | --- |
| Page text (all pages, copied from the live site) | `src/content/pages.json` |
| Phone, email, address, hours, insurers, image paths | `src/content/site.ts` |
| Brand colors | `src/index.css` (`:root` variables) |
| Fonts | `index.html` (Google Fonts link) and `tailwind.config.js` |
| Pages | `src/pages/` |

## To finish before going live

- **Images:** `public/images/*.svg` are blue placeholders. Add real photos and update the paths in `images` in `src/content/site.ts`. The live site's photos are Getty stock licensed through GoDaddy, which may not cover use outside GoDaddy.
- **Logo:** `src/components/Logo.tsx` is a text logo. Swap in your logo image.
- **Social links:** fill in `site.social` in `src/content/site.ts`. Icons appear only once a URL is set.
- **Contact and job forms:** it currently opens the visitor's email app addressed to admin@vibrantcare.health. To receive submissions directly, connect a form service or a Vercel function.
- **Privacy Policy / Terms:** `src/pages/Legal.tsx` holds placeholder text.
- **Check facts:** the live copy says both "Serving Houston Since 2010" and "3+ Years in Houston". Confirm the team members on the About page are real.
