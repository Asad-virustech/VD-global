/**
 * Centralized SEO configuration — the single source of truth for the site's
 * absolute URLs and per-page metadata.
 *
 * This module is deliberately free of React / lucide imports so it can be
 * consumed both by the runtime (the `usePageSeo` hook) and by the build
 * (the Vite plugin that emits sitemap.xml / robots.txt and resolves the
 * `__SITE_URL__` token in index.html).
 */

/**
 * Production domain. Set this ONE constant to the final production URL before
 * launch — nothing else hardcodes a domain. No trailing slash.
 *
 * NOTE: `index.html` uses the literal token `__SITE_URL__`, which the Vite SEO
 * plugin replaces with this value at build time, so the domain lives here only.
 */
export const SITE_URL = 'https://vd-global-kappa.vercel.app';

/** Social share image, served from /public. Absolute URL = SITE_URL + this. */
export const OG_IMAGE_PATH = '/og-image.png';

import { ARTICLES, articlePath } from './articles';

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  type: 'website' | 'article';
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  /** Included in the sitemap and indexable. Set false to exclude (e.g. 404). */
  index: boolean;
};

const FIRM_NAME = 'VD Globals';

/** Every real, indexable route. Keyed by path. One entry per canonical URL. */
export const PAGES: Record<string, PageSeo> = {
  '/': {
    path: '/',
    title: 'VD Globals — Authority Advisory for Founders and Businesses',
    description:
      'An authority advisory firm helping founders and businesses build recognition, credibility, and trust through ethical PR, media strategy, and Wikipedia advisory.',
    type: 'website',
    priority: 1.0,
    changefreq: 'monthly',
    index: true,
  },
  '/about': {
    path: '/about',
    title: 'About — VD Globals',
    description: `${FIRM_NAME} is an authority advisory firm that helps credible founders and businesses earn recognition, credibility, and trust through honest, long-term advisory.`,
    type: 'website',
    priority: 0.8,
    changefreq: 'monthly',
    index: true,
  },
  '/solutions': {
    path: '/solutions',
    title: 'Solutions — VD Globals',
    description: `${FIRM_NAME} helps businesses build long-term authority through strategy, PR, Wikipedia advisory, executive positioning, digital reputation, and thought leadership. Advisory-first, never predefined packages.`,
    type: 'website',
    priority: 0.9,
    changefreq: 'monthly',
    index: true,
  },
  '/assessment': {
    path: '/assessment',
    title: 'Authority Assessment — VD Globals',
    description: `Understand how your business is currently perceived. ${FIRM_NAME}'s complimentary Authority Assessment evaluates your credibility, media presence, search visibility, and reputation, with practical, honest recommendations.`,
    type: 'website',
    priority: 0.9,
    changefreq: 'monthly',
    index: true,
  },
  '/knowledge': {
    path: '/knowledge',
    title: 'Knowledge Hub — VD Globals',
    description: `A knowledge library from ${FIRM_NAME}: practical insights on authority, reputation, media visibility, Wikipedia readiness, and long-term credibility. Education-first, free to read.`,
    type: 'website',
    priority: 0.7,
    changefreq: 'weekly',
    index: true,
  },
  '/case-studies': {
    path: '/case-studies',
    title: 'Case Studies — VD Globals',
    description: `How ${FIRM_NAME} approaches real authority challenges: the strategic thinking behind strengthening credibility, visibility, and long-term reputation. Educational scenarios, no fabricated metrics.`,
    type: 'website',
    priority: 0.7,
    changefreq: 'monthly',
    index: true,
  },
  '/contact': {
    path: '/contact',
    title: 'Contact — VD Globals',
    description: `Start a conversation with ${FIRM_NAME}. Request a complimentary consultation to discuss your authority goals. Advisory-first, no obligation.`,
    type: 'website',
    priority: 0.8,
    changefreq: 'monthly',
    index: true,
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy — VD Globals',
    description: 'How VD Globals handles the information you share through this website.',
    type: 'website',
    priority: 0.3,
    changefreq: 'yearly',
    index: true,
  },
  '/terms': {
    path: '/terms',
    title: 'Terms & Conditions — VD Globals',
    description: 'The terms governing use of the VD Globals website.',
    type: 'website',
    priority: 0.3,
    changefreq: 'yearly',
    index: true,
  },
  '/cookies': {
    path: '/cookies',
    title: 'Cookie Policy — VD Globals',
    description: 'How VD Globals uses cookies and similar technologies.',
    type: 'website',
    priority: 0.3,
    changefreq: 'yearly',
    index: true,
  },
};

/** Article routes, derived from the Knowledge Hub article data. */
export const ARTICLE_PAGES: PageSeo[] = ARTICLES.map((a) => ({
  path: articlePath(a),
  title: `${a.title} — VD Globals`,
  description: a.excerpt,
  type: 'article' as const,
  priority: 0.6,
  changefreq: 'monthly' as const,
  index: true,
}));

/** Every indexable page: static routes plus articles. */
export const ALL_PAGES: PageSeo[] = [...Object.values(PAGES), ...ARTICLE_PAGES];

/** Look up a page's SEO by path (static route or article). */
export function getPageSeo(path: string): PageSeo | undefined {
  return PAGES[path] ?? ARTICLE_PAGES.find((p) => p.path === path);
}

/** Absolute URL for a path, from the single SITE_URL constant. */
export function absoluteUrl(path: string, siteUrl: string = SITE_URL): string {
  if (path === '/') return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

/** Build a production sitemap.xml from PAGES. Called at build time. */
export function buildSitemap(siteUrl: string = SITE_URL, lastmod?: string): string {
  const date = lastmod ?? new Date().toISOString().slice(0, 10);
  const urls = ALL_PAGES.filter((p) => p.index)
    .map(
      (p) =>
        `  <url>\n    <loc>${absoluteUrl(p.path, siteUrl)}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/** Build a permissive production robots.txt. Public pages are never blocked. */
export function buildRobots(siteUrl: string = SITE_URL): string {
  return [
    '# VD Globals - all crawlers, including AI and LLM crawlers, are welcome.',
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');
}
