# VD Global — Production Audit & Roadmap

**Sprint 4.1 · Phase 4 (Production) · Internal**

Design is locked. This document does not propose design, layout, spacing, type, colour, or messaging changes. It audits the gap between the current polished prototype and a believable, launchable consulting firm's website, and sequences the work to close it.

Guiding principle throughout: **prefer removing a placeholder over inventing fake credibility.** Nothing in this plan fabricates clients, numbers, coverage, or endorsements.

---

## Section 1 — Production Audit

### READY (ships as-is)

- All seven page structures and their copy (Home, About, Solutions, Authority Assessment, Knowledge Hub, Case Studies, Contact) — voice-complete after Sprint 5A.
- Footer layout, brand pillars, positioning line, copyright.
- Navigation (primary + "More" dropdown + mobile menu), routing, scroll-to-top, lazy-loaded route code-splitting.
- Contact form **UI and success state** (`ContactForm.tsx`) — visually and interaction-complete; only the backend and validation are missing (see Section 6).
- Newsletter **UI and success state** (`Newsletter.tsx`) — same caveat.
- `theme-color`, `lang="en"`, viewport meta, favicon.svg (vector, renders in modern browsers).
- `vercel.json` SPA rewrite (deep links resolve).

### NEEDS CONTENT (writing/decisions, no engineering)

- **Knowledge Hub articles** — 7 unique placeholder articles referenced across `KnowledgeHubPreview`, `FeaturedInsight`, `LatestInsights`; none exist as pages. (Section 2.)
- **Downloadable resources** — 5 named assets in `AuthorityResources.tsx`; none exist as files. (Section 3.)
- **Case studies** — 7 fictional/composite engagements in `content/caseStudies.ts`; none are real, sourced client stories. (Section 4.)
- **Real firm facts** — business hours, LinkedIn/X/Facebook URLs, physical or "Remote · Global" confirmation, and confirmation that `hello@vdglobals.com` is a live, monitored inbox.
- **Legal copy** — Privacy Policy and Terms do not exist. Required before collecting form data.

### NEEDS FUNCTIONALITY (engineering)

- **Contact form backend** — `lib/submitContactRequest.ts` is a simulated no-op (`setTimeout`, discards data). No delivery anywhere.
- **Newsletter backend** — `Newsletter.tsx` acknowledges locally; no storage or ESP.
- **Form validation** — both forms use `noValidate` with no JS validation layer (see Section 6).
- **Spam protection** — none (honeypot / captcha / rate limit).
- **Download delivery** — "Download" buttons are inert `<button>`s with no handler or file.
- **Article routing** — "Continue reading" / "Read the full study" have no destination routes; no `/knowledge/:slug` or `/case-studies/:slug`.
- **Booking** — "Book a strategy call" anchors to the form; no Calendly/scheduling integration (a deliberate choice is fine, but decide it).
- **Real 404** — `path="*"` renders `Home` (soft 404); search engines and users get the homepage for any bad URL.
- **Per-route SEO tags** — `useDocumentMeta` updates only `<title>` and `meta[description]`; OG/Twitter/canonical are static and homepage-only.

### NEEDS REAL ASSETS (design/brand production)

- **OpenGraph / social share image** — none. `twitter:card` is `summary_large_image` with no image, so shared links render a broken/blank large card.
- **Favicon set** — only `favicon.svg`. Missing `favicon.ico` (legacy), `apple-touch-icon.png` (180×180), and PWA/manifest icons (192/512).
- **Logo asset** — the mark is an inline SVG chevron in `ui/Logo.tsx`, not the brand's stated "upward-arrow V inside a D." A finalised logo (SVG + PNG exports) is a brand-production gap. *(Brand/design decision — do not change unilaterally; design is locked.)*
- **`web app manifest`** + PWA metadata (optional, low priority).

### LOW PRIORITY (post-launch or optional)

- PWA/manifest and installability.
- `keywords` meta tag (largely ignored by search engines; harmless to keep or drop).
- Removing the unused `@supabase/supabase-js` dependency (or adopting it as the form/newsletter backend — see Section 6).
- Analytics beyond a basic pageview tool.

---

## Section 2 — Knowledge Hub (article plan)

**Current state.** The Hub renders three surfaces of article *cards* — homepage preview (`KnowledgeHubPreview`, 3), page feature (`FeaturedInsight`, 1), and page feed (`LatestInsights`, 6) — with overlapping titles, invented read-times, and invented topic counts (`BrowseByTopic`). No article pages exist; every "Continue reading" is a dead end.

**Recommendation.** Ship a small number of genuinely useful cornerstone pieces rather than a full feed of stubs. Until an article exists, its card should not imply a readable page (see Section 8). Topic counts should be derived from real published counts, not hardcoded.

**Consolidated production set** (deduped from the three surfaces; titles already on-voice from Sprint 5A). *Word counts are targets, not commitments. Do not write yet.*

| # | Title | Purpose | Target reader | Est. words | Priority |
|---|---|---|---|---|---|
| 1 | Is your business ready for Wikipedia? | Cornerstone. Reframe "how do I get a page?" to notability; set honest expectations; capture the highest-intent search topic the firm owns. | Founder/exec considering a Wikipedia page | 1,600–2,200 | **P0 (launch)** |
| 2 | Authority vs. visibility: why being seen isn't enough | Cornerstone. Defines the firm's core distinction and worldview; the "start here" featured piece. | First-time visitor evaluating the firm | 1,400–1,800 | **P0 (launch)** |
| 3 | Owning the first page of your name | Practical. Search-as-first-impression; what to do about a thin or contradictory first page. | Founder/exec who just Googled themselves | 1,400–1,800 | **P1** |
| 4 | Choosing the right press strategy | Practical. Why not every press release builds authority; strategy before placement. | Marketing lead / founder weighing PR | 1,300–1,700 | **P1** |
| 5 | Credibility beyond the company | Executive/personal authority and why it compounds the organisation's. | Founder building a personal profile | 1,200–1,600 | **P2** |
| 6 | Having a point of view worth following | Thought leadership as a defensible perspective, not volume. | Exec pursuing thought leadership | 1,200–1,600 | **P2** |
| 7 | When the right answer is "not yet" | Signature/brand piece. Patience as strategy; models the firm's honesty. | Anyone deciding whether to act now | 1,000–1,400 | **P2** |

**Cornerstone:** #1 and #2 (highest search intent + clearest brand differentiation). Ship these two before launch; the featured slot and homepage preview should point only to live pieces.

**Remain placeholder until later:** #3–#7 — keep off the site (or clearly marked as forthcoming) until written. Do not publish cards that link nowhere.

---

## Section 3 — Downloads (production roadmap)

**Current state.** `AuthorityResources.tsx` lists five resources with inert "Download" buttons and no files.

| Resource | Verdict | Rationale / action |
|---|---|---|
| The Authority Framework | **Exists now (easy win)** | The firm already owns this IP (it's the site's core model). Produce as a 1–2 page branded PDF from existing framework copy. First real download. |
| Wikipedia Notability Checklist | **Exists now (easy win)** | Natural companion to cornerstone article #1; high perceived value, low authoring cost. A genuine self-assessment checklist. |
| The Authority Readiness Guide | **Expand** | The flagship lead magnet. Meaningful guide (8–15 pp). Build after the two quick wins; can reuse article #1/#2 content. |
| Press & Positioning Template | **Merge or defer** | Overlaps the Readiness Guide. Either fold in as an appendix/section, or defer to a later batch. Don't ship an empty template. |
| Why Reputation Precedes Revenue | **Defer or convert** | A "whitepaper" is heavy to produce and easy to over-promise. Convert to a Knowledge Hub article first; only produce as a download if there's real demand. |

**Roadmap:** (1) Framework PDF + Notability Checklist as the first two live downloads → (2) Authority Readiness Guide as the lead magnet (gate behind the newsletter/email if desired) → (3) reassess Template/Whitepaper based on demand. **Until a file exists, do not show a "Download" affordance for it** (Section 8). Every download should require, at minimum: the file itself, a delivery mechanism (direct link or email-gated), and — if gated — the newsletter backend (Section 6).

---

## Section 4 — Case Studies (production approach)

**Current state.** `content/caseStudies.ts` holds seven engagements (one fully written, six summaries) across named industries. They contain no fabricated metrics (good), but the **engagements themselves are fictional/composite**, and the firm has very few public client stories. "Read the full study" links nowhere.

**Risk.** Presenting invented engagements as real client work is exactly the "fake credibility" the brand voice forbids. A prospect who asks "which client was the B2B software company?" exposes the firm.

**Recommendation — reframe from "case studies" to disclosed methodology.** In priority order:

1. **Preferred: convert to explicitly-labelled illustrative scenarios.** Keep the strong narrative structure, but frame the section honestly — e.g. a standing disclosure that these are representative scenarios drawn from common patterns, not named client accounts. This preserves the teaching value without claiming clients. *(Copy/label change within the locked design, not a redesign.)*
2. **Anonymised real stories — only where true and permitted.** If any real engagement can be described with the client's consent (even anonymised: "a B2B software company"), promote those to genuine studies and remove the rest. The existing FAQ already commits to consent-and-confidentiality — honour it.
3. **Methodology-led fallback.** If neither is ready at launch, lead the page with the problem-solving framework and lessons (already strong, real IP) and reduce the fictional library to a single clearly-illustrative featured example.

**Do not** publish detail pages for fictional studies. Point "Read the full study" only at real, consented, anonymised stories — otherwise remove the affordance.

---

## Section 5 — Footer audit

| Item | Current | Production requirement |
|---|---|---|
| Contact email | `hello@vdglobals.com` (`content/site.ts`) | Confirm the inbox is live, monitored, and deliverable (SPF/DKIM/DMARC on the domain). Confirm this is the address to publish. |
| Socials | LinkedIn / X / Facebook all `href="#"` | Replace with real profile URLs, **or remove the icons entirely** until profiles exist. Empty social links read as unfinished. Confirm which platforms the firm actually uses. |
| Legal | None | Add Privacy Policy and Terms links + pages. Required before collecting form data. |
| Navigation | Full site nav present | ✅ Ready. |
| Brand info | Mark, pillars, positioning line, `© 2026 VD Global` | Confirm legal entity name for the copyright line (e.g. "VD Global Ltd") and confirm the founding/operating year. |
| Location | "Remote · Global" | Confirm; if a registered address is legally required (company registration, contact page), source it. |

---

## Section 6 — Forms audit

### Contact form (`ContactForm.tsx` → `lib/submitContactRequest.ts`)

| Item | Status | Needed |
|---|---|---|
| UI / fields / a11y labels | ✅ Done | — |
| Success state | ✅ Done | — |
| Error state | ✅ Present (renders on thrown error) | — |
| **Delivery** | ❌ Simulated no-op | Wire a real destination: Formspree/Web3Forms (fastest), a serverless route + Resend/Postmark (email), or a CRM (HubSpot/Zoho). Seam is already documented in `submitContactRequest.ts`. |
| **Validation** | ❌ `noValidate` + no JS checks | Add real validation: required fields, email format, URL format on the optional website field. |
| **Spam protection** | ❌ None | Honeypot field (cheapest) and/or captcha; rate-limit on the endpoint. |
| **CRM/destination** | ❌ None | Decide where leads live (inbox, CRM, spreadsheet). |
| Anti-abuse / consent | ❌ None | Consent checkbox / privacy link near submit once a Privacy Policy exists. |

### Newsletter (`Newsletter.tsx`)

| Item | Status | Needed |
|---|---|---|
| UI + success | ✅ Done | — |
| Validation | ⚠️ Minimal (`if (!email) return`) | Email-format validation. |
| **ESP / storage** | ❌ None | Connect an email service (Buttondown, ConvertKit, Mailchimp, Resend Audiences). Without one, the newsletter promise can't be kept. |
| Double opt-in / GDPR | ❌ None | Confirmation email + consent; unsubscribe (legal requirement in most regions). |

### Booking

- "Book a strategy call" currently anchors to the contact form. Decide: keep form-based intake, or integrate Calendly/Cal.com. Either is fine — make it deliberate.

---

## Section 7 — Images audit

| Asset | Status | Note / action |
|---|---|---|
| Icons | ✅ Production-ready | Lucide (vector, licensed). No action. |
| Illustrations / hero graphics | ✅ Production-ready | All code-drawn (SVG/CSS: HeroBackdrop rings, AuthorityRings, portals). Consistent with the "no fake photography" direction. No action. |
| Favicon (SVG) | ✅ Present | `public/favicon.svg`. |
| Favicon (legacy/PNG) | ❌ Missing | Add `favicon.ico` + `apple-touch-icon.png` (180×180) + 192/512 PNGs for older browsers and iOS. |
| **OpenGraph image** | ❌ Missing | Produce a 1200×630 share image (can be code/design-generated from the locked visual language — a dark ring composition + wordmark). Highest-visibility gap: every shared link is currently blank/broken. |
| Twitter image | ❌ Missing | Same asset; add `twitter:image`. |
| Logo (real mark) | ⚠️ Placeholder | Inline chevron ≠ the stated brand mark. Finalise the logo (brand decision) and export SVG/PNG. |
| Social preview verification | ❌ Not testable yet | After OG image + per-route tags land, validate with LinkedIn Post Inspector / Twitter Card Validator / opengraph.xyz. |

---

## Section 8 — Microcopy placeholders

Found and classified. Because most require real data, the honest production move is often **remove the affordance until it's real**, not reword it.

| Location | Current microcopy | Recommended production move |
|---|---|---|
| `content/contact.ts` — LinkedIn | value `VD Global`, note "Profile link added in production." (`placeholder:true`) | Replace with the real URL, or remove the LinkedIn method until it exists. Don't ship a labelled-placeholder in production. |
| `content/contact.ts` — Business hours | "Placeholder hours, confirmed in production." (`placeholder:true`) | Confirm real hours, or remove the row. |
| `WaysToReachUs.tsx` — "Placeholder" badges | Renders a literal "Placeholder" badge for flagged methods | Remove the badge + its methods once real, or drop the methods. A visible "Placeholder" badge must never reach production. |
| Footer socials | `href="#"` | Real URLs or remove icons (Section 5). |
| `AuthorityResources.tsx` — "Download" | Inert buttons | Only show "Download" when a file is wired; otherwise remove or mark a resource "Coming soon" *only if* genuinely imminent. |
| Article links — "Continue reading" / "Read the full study" | No destination | Only render when a real page exists. |
| `index.html` static meta | Pre-Sprint-5A voice ("Recognition, Credibility, Authority and Trust", `&amp;`) | **Fixed this sprint** — synced to the shipped Sprint 5A voice (see below). |
| `BrowseByTopic.tsx` topic counts | Invented (12, 9, 8…) | Derive from real published counts, or remove the count badges until the library is real. |
| Article read-times ("6 min") | Invented | Compute from real article length once written. |

---

## Section 9 — Master production checklist

**Content**
- [ ] Write cornerstone articles #1 (Wikipedia readiness) and #2 (Authority vs. visibility).
- [ ] Decide + implement case-study framing (Section 4): disclosed illustrative scenarios, or anonymised real stories.
- [ ] Confirm real firm facts (email, hours, socials, location, legal entity, year).
- [ ] Draft Privacy Policy + Terms.

**Downloads**
- [ ] Produce Authority Framework PDF and Notability Checklist (first two live downloads).
- [ ] Decide gating (open vs. email-gated) and wire delivery.
- [ ] Defer/merge Template + Whitepaper per roadmap.

**Forms**
- [ ] Wire contact form to a real destination (email/CRM).
- [ ] Add JS validation to contact + newsletter.
- [ ] Add spam protection (honeypot + rate limit).
- [ ] Connect newsletter to an ESP with opt-in + unsubscribe.
- [ ] Decide booking approach (form vs. Calendly).

**Media**
- [ ] Create 1200×630 OG/Twitter share image; add `og:image` + `twitter:image`.
- [ ] Add `favicon.ico`, `apple-touch-icon.png`, 192/512 PNGs.
- [ ] Finalise real logo mark (brand decision) and export assets.

**SEO**
- [ ] Per-route OG/Twitter/canonical tags (extend `useDocumentMeta` or adopt a head manager).
- [ ] Add `og:url` + canonical once the production domain is fixed.
- [ ] Add `robots.txt` and `sitemap.xml`.
- [ ] Replace soft-404 (`*` → Home) with a real 404 route.

**Legal**
- [ ] Publish Privacy Policy + Terms pages and link them in the footer.
- [ ] Add consent/privacy reference near form submit.
- [ ] Confirm cookie/analytics disclosure if analytics are added.

**Analytics**
- [ ] Choose a privacy-respecting analytics tool (Plausible/Fathom/GA4) and install.
- [ ] Define conversion events (assessment start, form submit, newsletter signup).

**Launch**
- [ ] Fix production domain; update all absolute URLs/canonicals/OG.
- [ ] Validate social previews (LinkedIn/Twitter/opengraph.xyz).
- [ ] Lighthouse pass (perf/a11y/SEO/best-practices).
- [ ] Cross-device/browser QA.
- [ ] Remove unused deps (or adopt Supabase as backend).
- [ ] Final placeholder sweep (no "Placeholder", no `href="#"`, no dead download/read links).

---

## Section 10 — Prioritised sprint plan

Sequenced by launch impact. Rationale: a real, trustworthy, functioning site with two great articles beats a large site full of dead ends.

**Sprint 4.2 — Functional & Trustworthy Website** *(highest impact; unblocks launch)*
Form backend + validation + spam protection; newsletter ESP; real 404; legal pages (Privacy/Terms) + footer legal links; resolve every placeholder microcopy (socials, hours, LinkedIn, "Placeholder" badges) by making real or removing; remove dead download/article affordances. **Outcome:** nothing on the site lies or breaks.

**Sprint 4.3 — SEO & Share Readiness** *(cheap, high-visibility)*
Per-route OG/Twitter/canonical; OG share image; favicon/apple-touch set; `robots.txt` + `sitemap.xml`; sync static meta; validate previews. **Outcome:** the site is discoverable and shares cleanly. *(Small enough to fold into 4.2 if capacity allows.)*

**Sprint 4.4 — Cornerstone Knowledge Hub Articles**
Write and route articles #1 and #2; add `/knowledge/:slug`; wire real read-times; point featured/preview only at live pieces; derive topic counts. **Outcome:** the Hub is real and the firm demonstrates authority.

**Sprint 4.5 — Downloadable Resources**
Authority Framework PDF + Notability Checklist; wire delivery (open or email-gated via the 4.2 newsletter backend). **Outcome:** first real lead magnets.

**Sprint 4.6 — Case Studies Production**
Implement the chosen framing (disclosed scenarios or anonymised real stories); build detail routes only for real content. **Outcome:** proof without fabrication.

**Sprint 4.7 — Analytics, QA & Launch**
Analytics + events; Lighthouse + cross-device QA; domain/canonical finalisation; final placeholder sweep; go live.

---

*Prepared as a production planning document. No design, layout, or messaging was changed. The only edit made alongside this audit was syncing the stale static `index.html` meta to the shipped Sprint 5A voice.*
