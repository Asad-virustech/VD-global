import { SITE_URL, OG_IMAGE_PATH, absoluteUrl } from '../content/seo';
import type { PageSeo } from '../content/seo';
import { pageGraph } from './schema';
import type { ArticleMeta } from './schema';

/**
 * Build-time helpers used by the Vite SEO plugin to prerender a correct <head>
 * for every route. React-free so the build can import it. Reuses the same
 * SITE_URL and schema builders as the runtime, so static and client output agree.
 */

const OG_IMAGE = `${SITE_URL}${OG_IMAGE_PATH}`;

/** Escape a string for safe use inside a double-quoted HTML attribute. */
function attr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** The per-route SEO tags that replace the <!--seo:start-->…<!--seo:end--> block. */
export function renderSeoTags(page: PageSeo): string {
  const url = absoluteUrl(page.path);
  const title = attr(page.title);
  const description = attr(page.description);
  const robots = page.index ? 'index, follow' : 'noindex, follow';
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta name="author" content="VD Global" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${page.type}" />`,
    `<meta property="og:site_name" content="VD Global" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="VD Global — Authority. Recognition. Trust." />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n    ');
}

/**
 * Per-page JSON-LD script (WebPage + BreadcrumbList). Shares the id 'page-jsonld'
 * with the runtime hook, so on hydration the client reuses this node (adding FAQ
 * where applicable) rather than duplicating it.
 */
export function renderPageJsonLd(page: PageSeo, article?: ArticleMeta): string {
  const json = JSON.stringify(pageGraph(page, { article })).replace(/</g, '\\u003c');
  return `<script type="application/ld+json" id="page-jsonld">${json}</script>`;
}
