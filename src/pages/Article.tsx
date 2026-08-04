import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { usePageSeo } from '../../lib/usePageSeo';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { HeroBackdrop } from '../components/sections/HeroBackdrop';
import { CtaBand } from '../components/sections/CtaBand';
import { Prose } from '../components/ui/Prose';
import { ReadingProgress } from '../components/ui/ReadingProgress';
import { RelatedReading } from '../components/sections/knowledge/RelatedReading';
import { ARTICLES, getArticle, readMinutes, articlePath } from '../../content/articles';
import { getResource } from '../../content/resources';
import NotFound from './NotFound';

export default function Article() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  // Hooks must run unconditionally; guard the SEO call with a safe fallback.
  usePageSeo(
    article
      ? {
          path: articlePath(article),
          article: {
            title: article.title,
            excerpt: article.excerpt,
            category: article.category,
            publishedDate: article.publishedDate,
          },
        }
      : { path: '/knowledge', noindex: true },
  );

  if (!article) return <NotFound />;

  const idx = ARTICLES.findIndex((a) => a.slug === article.slug);
  const coverVariant = Math.max(0, idx);
  const prev = idx > 0 ? ARTICLES[idx - 1] : undefined;
  const next = idx >= 0 && idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : undefined;

  const relatedArticles = (article.related ?? [])
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const referencedResources = (article.resources ?? [])
    .map((s) => getResource(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <article>
      <ReadingProgress />
      {/* Cinematic cover — the brand's concentric-ring motif on deep night */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <HeroBackdrop variant={coverVariant} />
        <div className="container-px relative pb-16 pt-36 sm:pb-20 sm:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="mx-auto max-w-3xl"
          >
            <div>
              <Link
                to="/knowledge"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-300 transition-colors hover:text-teal-200"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                Knowledge Hub
              </Link>
            </div>

            <div className="mt-7">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {article.category}
              </span>
            </div>

            <h1 className="mt-6 text-[2.25rem] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[3rem] lg:text-[3.5rem] text-balance">
              {article.title}
            </h1>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-300">
              <Clock className="h-4 w-4 text-teal-400" strokeWidth={1.75} />
              {readMinutes(article)} min read
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body — clean, readable measure on white */}
      <Section className="surface-base">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const }}
            className="mx-auto max-w-2xl"
          >
            <Prose blocks={article.body} />
          </motion.div>

          {(prev || next) && (
            <nav
              aria-label="More articles"
              className="mx-auto mt-16 flex max-w-2xl flex-col gap-6 border-t border-ink-100 pt-8 sm:flex-row sm:justify-between sm:gap-8"
            >
              {prev ? (
                <Link to={articlePath(prev)} className="group flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Previous
                  </span>
                  <span className="mt-1.5 flex items-start gap-1.5 text-base font-semibold leading-snug text-ink-900 transition-colors group-hover:text-teal-700">
                    <ArrowLeft className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.75} />
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden flex-1 sm:block" />
              )}
              {next ? (
                <Link to={articlePath(next)} className="group flex-1 sm:text-right">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Next
                  </span>
                  <span className="mt-1.5 flex items-start gap-1.5 text-base font-semibold leading-snug text-ink-900 transition-colors group-hover:text-teal-700 sm:justify-end">
                    {next.title}
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.75} />
                  </span>
                </Link>
              ) : (
                <span className="hidden flex-1 sm:block" />
              )}
            </nav>
          )}
        </Container>
      </Section>

      <RelatedReading articles={relatedArticles} resources={referencedResources} />

      <CtaBand
        eyebrow="Where authority begins"
        title="See where you stand today."
        description="An honest read of your authority across reputation, search, credibility, and media, with a clear next step. Complimentary, no obligation."
        primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
        secondary={{ label: 'Talk with our team', to: '/contact' }}
      />
    </article>
  );
}
