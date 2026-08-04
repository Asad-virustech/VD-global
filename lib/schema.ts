import { SITE_URL, OG_IMAGE_PATH, absoluteUrl } from '../content/seo';
import type { PageSeo } from '../content/seo';

/**
 * Per-page JSON-LD builders. The site-level Organization + WebSite nodes live
 * statically in index.html (so non-JS crawlers see the entity); these per-page
 * nodes reference them by @id. All values are factual.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export type FaqEntry = { question: string; answer: string };
export type ArticleMeta = {
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
};

function shortName(page: PageSeo): string {
  if (page.path === '/') return 'Home';
  return page.title.split(' — ')[0];
}

function webPageNode(page: PageSeo) {
  const url = absoluteUrl(page.path);
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: `${SITE_URL}${OG_IMAGE_PATH}`,
    inLanguage: 'en',
  };
}

function breadcrumbNode(page: PageSeo) {
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
  ];
  if (page.path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: shortName(page),
      item: absoluteUrl(page.path),
    });
  }
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(page.path)}#breadcrumb`,
    itemListElement: items,
  };
}

function faqNode(page: PageSeo, faq: FaqEntry[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(page.path)}#faq`,
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function articleNode(page: PageSeo, article: ArticleMeta) {
  const url = absoluteUrl(page.path);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    url,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    articleSection: article.category,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    inLanguage: 'en',
  };
}

/** Full per-page JSON-LD graph: WebPage + BreadcrumbList (+ BlogPosting, + FAQPage). */
export function pageGraph(page: PageSeo, opts?: { faq?: FaqEntry[]; article?: ArticleMeta }) {
  const graph: object[] = [webPageNode(page), breadcrumbNode(page)];
  if (opts?.article) graph.push(articleNode(page, opts.article));
  if (opts?.faq && opts.faq.length > 0) graph.push(faqNode(page, opts.faq));
  return { '@context': 'https://schema.org', '@graph': graph };
}
