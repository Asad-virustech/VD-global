import { useEffect } from 'react';
import { SITE_URL, OG_IMAGE_PATH, absoluteUrl, getPageSeo } from '../content/seo';
import type { PageSeo } from '../content/seo';
import { pageGraph } from './schema';
import type { FaqEntry, ArticleMeta } from './schema';

type UsePageSeoArgs = {
  /** Route path, e.g. '/about'. Used for canonical URL and PAGES lookup. */
  path: string;
  /** Override title/description (for routes not in PAGES, e.g. the 404 page). */
  title?: string;
  description?: string;
  /** Exclude from indexing (404, thin utility pages). */
  noindex?: boolean;
  /** FAQ entries on the page — emitted as FAQPage structured data. */
  faq?: FaqEntry[];
  /** Article metadata — emitted as BlogPosting structured data. */
  article?: ArticleMeta;
};

const SITE_NAME = 'VD Global';
const OG_IMAGE = `${SITE_URL}${OG_IMAGE_PATH}`;
const JSONLD_ID = 'page-jsonld';

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function metaByName(name: string, content: string) {
  upsertMeta(`meta[name="${name}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('name', name);
    return m;
  }, content);
}

function metaByProp(property: string, content: string) {
  upsertMeta(`meta[property="${property}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute('property', property);
    return m;
  }, content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets all per-route SEO for a page: title, description, canonical, robots,
 * Open Graph, Twitter Card, and JSON-LD (WebPage + BreadcrumbList + FAQ). The
 * site-level entity graph lives statically in index.html; this enriches each
 * route for crawlers that execute JavaScript.
 */
export function usePageSeo({ path, title, description, noindex, faq, article }: UsePageSeoArgs) {
  const fallback: PageSeo = {
    path,
    title: title ?? SITE_NAME,
    description: description ?? '',
    type: 'website',
    priority: 0.5,
    changefreq: 'monthly',
    index: !noindex,
  };
  const page = getPageSeo(path) ?? fallback;
  const resolvedTitle = title ?? page.title;
  const resolvedDescription = description ?? page.description;
  const url = absoluteUrl(path);

  // Stable deps without re-running on every render.
  const faqKey = faq ? faq.map((f) => f.question).join('|') : '';
  const articleKey = article ? article.title : '';

  useEffect(() => {
    const previousTitle = document.title;
    document.title = resolvedTitle;

    metaByName('description', resolvedDescription);
    metaByName('robots', noindex ? 'noindex, follow' : 'index, follow');
    setCanonical(url);

    metaByProp('og:title', resolvedTitle);
    metaByProp('og:description', resolvedDescription);
    metaByProp('og:url', url);
    metaByProp('og:type', page.type);
    metaByProp('og:site_name', SITE_NAME);
    metaByProp('og:image', OG_IMAGE);

    metaByName('twitter:card', 'summary_large_image');
    metaByName('twitter:title', resolvedTitle);
    metaByName('twitter:description', resolvedDescription);
    metaByName('twitter:image', OG_IMAGE);

    // Per-page JSON-LD.
    let script = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = JSONLD_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(pageGraph(page, { faq, article }));

    return () => {
      document.title = previousTitle;
      document.getElementById(JSONLD_ID)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, resolvedTitle, resolvedDescription, noindex, faqKey, articleKey]);
}
