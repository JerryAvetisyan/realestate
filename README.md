# Aureleo — Luxury Real Estate

A visually stunning, Awwwards-style real estate website built with Next.js. Cinematic hero, smooth scrolling, scroll-triggered animations, and polished micro-interactions throughout.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- **Cinematic hero** — full-screen parallax property image with a staggered, animated headline reveal and a property search bar (location / type / price).
- **Sticky navbar** — transparent over the hero, solid on scroll, with an animated mobile menu.
- **Featured properties** — filterable grid (All / For Sale / For Rent) of 9 listings with hover zoom and scroll-in reveals.
- **About / Why Us** — split layout with a parallax image and animated count-up stats.
- **Categories** — interactive Buy / Rent / Sell cards.
- **Testimonials** — auto-playing carousel with manual controls.
- **CTA banner** — parallax "Find Your Dream Home" call to action.
- **Footer** — link columns, newsletter signup, socials, and contact info.
- **Custom animated cursor** (fine-pointer devices only), fully responsive, and `prefers-reduced-motion` aware.

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [Poppins](https://fonts.google.com/specimen/Poppins) via `next/font` (Bold for all headings)
- [lucide-react](https://lucide.dev/) icons

## 🎨 Color Palette

| Token   | Hex       | Use                       |
| ------- | --------- | ------------------------- |
| Navy    | `#1B3A5B` | Primary anchor            |
| Brown   | `#8B6F47` | Secondary accent          |
| Cream   | `#F8F6F2` | Off-white backgrounds     |
| White   | `#FFFFFF` | Breathing room            |

## 🚀 Getting Started

Requires **Node.js 18.18+**.

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout: Poppins font, smooth scroll, cursor
│   ├── page.tsx          # Home page — assembles all sections
│   └── globals.css       # Theme tokens + global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturedProperties.tsx
│   ├── PropertyCard.tsx
│   ├── About.tsx
│   ├── Categories.tsx
│   ├── Testimonials.tsx
│   ├── CTABanner.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── Reveal.tsx        # Scroll-triggered reveal wrapper
│   ├── Stat.tsx          # Count-up stat
│   ├── SmoothScroll.tsx  # Lenis provider
│   └── CustomCursor.tsx
├── data/
│   ├── properties.ts     # Listing dummy data
│   └── testimonials.ts
└── lib/
    └── utils.ts          # cn() + price formatting
```

## 🖼 Images

Placeholder imagery is served from [Unsplash](https://unsplash.com/) and avatars from [pravatar](https://pravatar.cc/). Remote hosts are allow-listed in `next.config.ts`. Swap the URLs in `src/data/*.ts` and the section components for your own assets.

## ♿ Accessibility & Performance

- Semantic landmarks, labeled controls, and visible focus states.
- Animations respect `prefers-reduced-motion`.
- `next/image` for responsive, optimized images.

---

Built as a design showcase. All listings, prices, and testimonials are fictional.
