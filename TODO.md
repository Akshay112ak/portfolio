# TODO — Personal Portfolio → Vercel Launch

Checklist from current state (working Next.js portfolio: fixed sidebar,
scroll-spy nav, About/Experience/Projects/Contact populated from your
resume) through to a deployed, polished personal site.

## 1. Content — fill in the placeholders

- [ ] Add real GitHub and LinkedIn URLs in `lib/data.ts` (`socials` — both
      are `"#"` right now)
- [ ] Replace the 4 project cards in `lib/data.ts` (`projects`) with real
      side projects if you have any — repo link, live link, and ideally a
      screenshot. Right now they're your resume achievements reworded, which
      works but real shipped projects will land better with hiring managers
- [ ] Double check phone number / email / location in `lib/data.ts`
      (`profile`) are what you want public
- [ ] Confirm `public/Akshay_S_Resume.pdf` is your latest resume version

## 2. Design polish

- [ ] Add a hover/focus state to project cards' tech tags if you want them
      clickable (e.g. filter by tech) — currently plain text
- [ ] Consider a subtle avatar/photo in the sidebar under your name (optional
      — brittanychiang.com doesn't use one, many similar sites do)
- [ ] Tune spacing on the Experience tab list for very long company names on
      mobile (currently horizontal-scrolls, works but untested past 2 jobs)
- [ ] Decide whether GSAP fade-ins are subtle enough — currently a plain
      `opacity/y` fade per section, matches "premium: slow, not bouncy"

## 3. Accessibility

- [ ] Add `aria-current="page"` or similar to the active sidebar nav link
      (currently only visually distinguished via color/underline width)
- [ ] Confirm keyboard tab order: sidebar nav → resume button → main content
      → experience tabs → project cards → contact button
- [ ] Check color contrast: `--slate` (#8892b0) body text on `--navy`
      (#0a192f) background — verify it passes WCAG AA at your body font size
- [ ] `prefers-reduced-motion`: wrap the GSAP scroll fade-ins so users who
      request reduced motion get no animation instead

## 4. Responsiveness

- [ ] Test at 375px, 768px, 1024px, 1440px+ — the sidebar switches from
      inline (mobile) to fixed (`lg:` breakpoint, 1024px) — confirm that
      transition looks right on tablet widths specifically
- [ ] Verify the Experience tab bar's horizontal scroll on narrow phones
      doesn't clip the active tab's underline

## 5. Performance & SEO

- [ ] Run Lighthouse — target 90+ across Performance/Accessibility/Best
      Practices/SEO
- [ ] Add Open Graph / Twitter card metadata in `app/layout.tsx` (title,
      description already set; add `openGraph` + `twitter` fields and an OG
      image so shared links look good)
- [ ] Add a favicon that isn't the Next.js default (`app/favicon.ico`)
- [ ] Add `robots.txt` / basic `sitemap.xml` since this should be indexed

## 6. Repo & deploy

- [ ] `git init` in `C:\NewPortfolio` and make the first commit
- [ ] Push to a GitHub repo
- [ ] Import the repo at [vercel.com/new](https://vercel.com/new) — Next.js
      is auto-detected, no build config needed
- [ ] Point a custom domain at it if you have one (Project Settings →
      Domains), otherwise the `.vercel.app` URL is fine to share
- [ ] Re-run Lighthouse against the live Vercel URL, not just localhost

## 7. Final pass

- [ ] Proofread every section against the resume one more time for typos
- [ ] Click every link (resume download, mailto, socials, project cards)
      on the deployed site — placeholders (`#`) should all be filled in by
      this point
- [ ] Full scroll-through on desktop and mobile on the live URL
