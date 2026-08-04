import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { SITE_URL, ALL_PAGES, buildSitemap, buildRobots } from './content/seo';
import { getArticleByPath } from './content/articles';
import { renderSeoTags, renderPageJsonLd } from './lib/prerender';

/**
 * SEO build plugin:
 *  - Resolves the `__SITE_URL__` token in index.html from the single SITE_URL
 *    constant, so no domain is hardcoded in static HTML.
 *  - Emits production sitemap.xml and robots.txt.
 *  - Prerenders a route-correct static index.html for every page (per-route
 *    <head> metadata + WebPage/Breadcrumb JSON-LD), so all crawlers — including
 *    non-JS AI crawlers and social scrapers — get the right tags per URL.
 */
function seoPlugin(): Plugin {
  let outDir = 'dist';
  return {
    name: 'vd-seo',
    configResolved(config) {
      outDir = config.build.outDir || 'dist';
    },
    transformIndexHtml(html) {
      return html.split('__SITE_URL__').join(SITE_URL);
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap() });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: buildRobots() });
    },
    writeBundle() {
      const base = readFileSync(join(outDir, 'index.html'), 'utf8');
      for (const page of ALL_PAGES) {
        const withSeo = base.replace(
          /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
          `<!--seo:start-->\n    ${renderSeoTags(page)}\n    <!--seo:end-->`,
        );
        const article = getArticleByPath(page.path);
        const html = withSeo.replace('</head>', `    ${renderPageJsonLd(page, article)}\n  </head>`);
        const outPath =
          page.path === '/' ? join(outDir, 'index.html') : join(outDir, page.path, 'index.html');
        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
