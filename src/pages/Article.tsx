import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { usePageSeo } from '../../lib/usePageSeo';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { HeroBackdrop } from '../components/sections/HeroBackdrop';
import { CtaBand } from '../components/sections/CtaBand';
import { ARTICLES, getArticle, readMinutes, articlePath } from '../../content/articles';
import type { ArticleBlock } from '../../content/articles';
import NotFound from './NotFound';

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-12 text-2xl font-bold leading-snug tracking-tight text-ink-900 sm:mt-14 sm:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case 'p':
      return <p className="mt-6 text-lg leading-relaxed text-ink-600">{block.text}</p>;
    case 'ul':
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-ink-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="my-10 border-l-2 border-teal-500 pl-6 text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl text-balance">
          {block.text}
        </blockquote>
      );
  }
}

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

  const coverVariant = Math.max(0, ARTICLES.findIndex((a) => a.slug === article.slug));

  return (
    <article>
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
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </motion.div>
        </Container>
      </Section>

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
