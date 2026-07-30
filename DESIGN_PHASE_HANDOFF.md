# VD Global — Design Phase Handoff

**Purpose:** Bring the planning assistant up to date on the full visual redesign of VD Global so the next sprint prompt can be adjusted. This documents what changed during the "make it premium" design phase (the restructure prompt from Phase 2/3). All content pages were already built; this phase was **visual identity only** — no messaging, IA, or business-objective changes.

**Stack (unchanged):** Vite + React 18 + TypeScript + Tailwind 3 + Framer Motion 12 + Lucide + react-router-dom 7. Supabase installed but unused. **Still React — the React→Next.js migration has NOT happened and must remain a separate, later, explicitly-instructed sprint.**

**Status:** typecheck ✅ · lint ✅ · build ✅ throughout. **Everything is UNCOMMITTED / not pushed** — the owner runs `git push origin main` manually.

---

## 1. Design language adopted

Target tier: Linear / Vercel / Stripe / Raycast / OpenAI / Anthropic. Six pillars drove every decision:

1. **Bento UI** — asymmetric big-card grids (primary, loved).
2. **Swiss / editorial typography** — large, tight-tracked headings.
3. **Apple-smooth motion** — Framer scroll-reveals + spring hovers.
4. **Glassmorphism** — frosted surfaces on dark/nav/CTAs (scoped, not everywhere).
5. **Luxury-minimal spacing** — generous breathing room.
6. **Aurora / noise texture** — film grain on dark, dot pattern on light.

---

## 2. Global design system now in place

**Color**
- Brand: Deep Teal `#0F766E` (primary) + Charcoal/`ink` neutrals. Fonts: Manrope (headings) / Inter (body).
- Light tinted surface = `.surface-alt` → whitish-teal `#dcebe6` (green-leaning, never blue).
- Plain light surface = `.surface-base` → white. **All white `<Section>`s were switched from `bg-white` to `surface-base`.**
- Dark surfaces = `.surface-night` + variants `-dawn` / `-edge` / `-spot` (each a different light direction), film grain (`--noise`) baked in.

**Global light-section pattern**
- A shared `--page-pattern` (subtle dot matrix) is baked into BOTH `surface-base` and `surface-alt`, so every light section carries one consistent, faint texture. `surface-alt` also has soft teal corner-glows.

**Buttons** (`ui/Button.tsx`)
- Shape: **round-edged rectangles** (`rounded-xl`), NOT pills — owner finds rectangles more premium.
- Primary = "liquid-glass teal" (translucent teal gradient + backdrop-blur + inner-highlight edge), legible on light and dark.
- Secondary / outline / glass variants also got blur + inner-highlight.

**Navbar** (`layout/Navbar.tsx`)
- Floating frosted-glass capsule, **permanently dark** (owner preference), inner-highlight edge, `backdrop-blur-2xl`; only opacity firms on scroll for legibility over light sections.

**Section spacing** (`ui/Section.tsx`)
- Padding increased site-wide to `py-20 sm:py-28 lg:py-32` for breathing room.

**Headings** (`ui/SectionHeading.tsx`)
- Swiss scale: `lg:text-[3.25rem]`, tracking `-0.02em`, tight leading, wider max-width.

**Hero system** (`sections/Hero.tsx` = homepage, `sections/PageHero.tsx` = all 6 internal pages, shared `sections/HeroBackdrop.tsx`)
- Full height (`min-h-screen`), composition = **giant Swiss headline left · teal-ruled supporting detail right · CTAs + trust indicators anchored to the hero's bottom border-line**.
- Backdrop = **large concentric teal rings** radiating from a soft light bloom (per-page position), on dark grained surface with cinematic vignette. Static/geometric (adapted from an owner-supplied "concentric circles, clean & premium" reference). **This is the most-iterated element and may still change — the owner may supply more reference images.**
- Dark glass nav sits over it; live status pill; slim glass CTAs.

**Footer** (`layout/Footer.tsx`)
- Premium dark, compact; brand-pillars signature (Authority · Recognition · Trust), Explore nav, Connect column, dark-glass social tiles.

---

## 3. Bento rollout

Bento (big `rounded-3xl` cards, a feature tile — teal or dark — + wide tiles, hover lift) was applied to card-grid/collection sections, **while each page keeps ONE unique signature moment**:

- Converted to bento: homepage **AuthorityFramework** (tall dark feature + 2×2) & **WhyVdGlobal**; **About → WhoWeWorkWith**; **Assessment → CommonAuthorityGaps** (dark feature); **Case Studies → IndustriesWeSupport**.
- Signatures preserved (NOT bento'd): Case Studies **broadsheet** (CaseStudyLibrary), Assessment **diagnostic sheet** (WhatWeAssess), Solutions **dark ribbon** (SolutionsFlow) + **featured-lead ecosystem** (AuthorityEcosystem), all pull-quotes/dark bands, About **numbered index** (WhatMakesUsDifferent).

---

## 4. Page-by-page state (all redesigned & verified)

- **Homepage** — dark ring hero → AuthorityGap (editorial ledger, tinted) → **Solutions** (editorial split: tall teal feature panel + 3 stacked glass rows; twice-redesigned after "cheap" feedback) → AuthorityFramework (bento) → Philosophy (numbered index + dark left pull-quote band) → WhyVdGlobal (bento + dark asymmetric band) → KnowledgeHubPreview (editorial feed + dark spotlit band) → Faq → Assessment (light) → FinalCta (dark closer).
- **About / Solutions / Assessment / Knowledge Hub / Case Studies / Contact** — each opens with the new concentric-ring PageHero, then its previously-approved editorial sections, with the bento conversions above. Dark statement/CTA bands were all differentiated by lighting so no two read the same.

The internal pages now speak the **same premium language as the homepage** (this was a key fix — they previously lagged).

---

## 5. Design rules that MUST be preserved

- **No fabricated authenticity:** no AI/stock people or faces, no fake clients/testimonials/logos/awards, no fake dashboards/graphs/metrics/percentages, no authority-wheels/radar/network diagrams. Non-human, code-generated abstract visuals only.
- **Hero backgrounds are coded abstract art**, not photography. If real imagery is ever wanted, provide an Image Direction spec for the owner to source licensed photos — do not fabricate.
- **Preserve copy, messaging, information hierarchy, navigation, business objectives.** Visual presentation only.
- **Stay in React** until a dedicated migration sprint is explicitly authorized.
- Forms remain **client-side only** (no backend wired); Supabase is present but unused.

---

## 6. Locked vs still-iterating

- **Locked:** the design system (colors, surfaces, buttons, navbar, footer, spacing, typography), bento rollout, all page section compositions.
- **Still open / may change:** the **hero backdrop** (concentric rings — pending possible new reference images); **dot-pattern intensity** on light sections (currently subtle); a dedicated **motion-polish** pass was deferred (site motion is currently at a clean baseline).

---

## 7. Outstanding / candidate next-sprint focus areas

(For the planner to choose — not yet started.)

1. **Finalize hero backdrop** against any new reference images; optional motion-polish pass.
2. **Real content population** — replace clearly-marked placeholder business info (email, phone, addresses, case-study specifics) with real data.
3. **Form backend** — wire the contact / newsletter / assessment forms (Supabase is installed; submit seam stubbed in `lib/`).
4. **SEO / performance / accessibility audit** — meta, structured data, image optimization, prefers-reduced-motion coverage, focus states, Lighthouse.
5. **React → Next.js migration** (the long-planned separate sprint) — only when explicitly chosen.
6. **Commit & deploy** — the entire redesign is uncommitted; a push publishes it via git-connected Vercel.

---

## 8. How to give feedback that converges fast

The design executor works effectively **blind** (reviews via the owner's live dev server + screenshots). Specific, comparative feedback converges quickly ("headline too big vs X", "cards read flat", "too much teal"); vague feedback ("still dull") does not. One page/element at a time.
