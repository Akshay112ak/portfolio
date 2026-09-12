# Akshay S — Portfolio

Personal developer portfolio in the style of
[brittanychiang.com](https://brittanychiang.com): fixed dark sidebar with
scroll-spy nav, scrolling content column for About / Experience / Projects /
Contact, teal-on-navy monospace accents.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — layout, spacing, color tokens
- **GSAP + ScrollTrigger** — section fade-ins on scroll
- **Lenis** — smooth scroll, synced to GSAP's ticker
- **three / @react-three/fiber / @react-three/drei** — installed, not used
  on this page (left over from an earlier stack test; safe to remove if you
  don't plan to add any 3D)

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push this folder to a GitHub repo and import it on
[vercel.com/new](https://vercel.com/new) — zero config needed, Vercel
detects Next.js automatically.

## Project structure

```
NewPortfolio/
├─ app/
│  ├─ layout.tsx        Root layout: fonts (Inter body / JetBrains Mono for
│  │                     labels & tags), metadata, wraps children in
│  │                     <SmoothScroll>
│  ├─ page.tsx           Assembles the page: <Sidebar> + scrolling <main>
│  │                     containing About, Experience, Projects, Contact
│  ├─ globals.css        Tailwind import + color tokens (--navy/--slate/
│  │                     --lightest-slate/--accent) + font-family mapping
│  └─ favicon.ico
│
├─ components/
│  ├─ SmoothScroll.tsx   Client component: creates the Lenis instance and
│  │                     syncs it to GSAP's ticker
│  ├─ Sidebar.tsx         Fixed left column (desktop): name, role, nav with
│  │                     IntersectionObserver-driven scroll-spy highlight,
│  │                     resume download button, social links
│  ├─ About.tsx           Summary paragraph + skills list. Also exports
│  │                     `SectionHeading` (the "01. About Me" style header)
│  │                     reused by Experience/Projects
│  ├─ Experience.tsx      Tabbed job history (click a company to switch),
│  │                     bullet achievements + tech tags per role
│  ├─ Projects.tsx        Card grid of notable work, fades in on scroll
│  ├─ Contact.tsx         Closing CTA, "Say Hello" mailto button, mobile
│  │                     social links, footer credit line
│  └─ MagneticButton.tsx  Reusable magnetic-hover button/link (GSAP follows
│                         the cursor, springs back on leave) — used for the
│                         resume button and "Say Hello" CTA
│
├─ lib/
│  └─ data.ts             All resume content lives here: profile info, nav
│                         links, skills, experience, projects, education,
│                         certifications. Edit this file to update the site
│                         without touching component code
│
├─ public/
│  └─ Akshay_S_Resume.pdf  Linked from the sidebar's "Resume" button
│
├─ tailwind config          Tailwind v4 has no config file — theme tokens are
│                          declared directly in app/globals.css via @theme
├─ next.config.ts
├─ tsconfig.json
└─ package.json
```

## Where to make it yours

1. **Content** — everything text-based is in `lib/data.ts`: your summary,
   skills, jobs, and project descriptions. `socials` currently has GitHub
   and LinkedIn hrefs as `"#"` placeholders — fill those in.
2. **Projects** — the four cards in `lib/data.ts` are your resume bullets
   reframed as projects, since no personal project links were provided yet.
   Replace with real repos/live links/screenshots when you have them —
   this is the section that benefits most from real work samples.
3. **Colors** — `app/globals.css`, the CSS variables at the top (`--navy`,
   `--navy-light`, `--slate`, `--lightest-slate`, `--accent`).
4. **Resume file** — swap `public/Akshay_S_Resume.pdf` whenever your resume
   updates; the filename is referenced in `lib/data.ts` (`resumeHref`).
