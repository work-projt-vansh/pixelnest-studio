# PixelNest Studio Website

Production-ready Next.js agency website for PixelNest Studio with premium UI, smooth animations, and SEO-first architecture.

## Stack
- Next.js (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- GSAP
- Lucide Icons
- Lottie support

## Project Structure
```
/app
   /components
   layout.jsx
   page.jsx
   /services/page.jsx
   /portfolio/page.jsx
   /about/page.jsx
   /contact/page.jsx
/lib
/styles
/data
/public
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment values:
   ```bash
   cp .env.example .env.local
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Contact Form Backend
The contact form posts to `/api/contact`.

- Endpoint is prepped for Supabase/serverless integration.
- Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` for persistence wiring.

## Deployment (Vercel)
1. Push to GitHub.
2. Import repository in Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

## SEO Features
- Global metadata and OpenGraph tags (`app/layout.jsx`)
- Structured data for Organization
- `sitemap.xml` support (`app/sitemap.js`)
- `robots.txt` support (`app/robots.js`)

## Accessibility + UX
- Semantic page sections and labels
- Keyboard focus rings
- Reduced-motion checks for cursor/hero animation
- High-contrast futuristic color system
