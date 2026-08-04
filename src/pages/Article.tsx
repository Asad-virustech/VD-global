import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { usePageSeo } from '../../lib/usePageSeo';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { CtaBand } from '../components/sections/CtaBand';
import { getArticle, readMinutes, articlePath } from '../../content/articles';
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

  return (
    <article>
      <Section className="surface-base pt-36 sm:pt-44">
        <Container>
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
            >
              <Link
                to="/knowledge"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors hover:text-teal-800"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                Knowledge Hub
              </Link>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                {article.category}
              </p>
              <h1 className="mt-4 text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] text-ink-900 sm:text-[2.75rem] text-balance">
                {article.title}
              </h1>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-400">
                <Clock className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                {readMinutes(article)} min read
              </p>
            </motion.div>

            <hr className="mt-8 border-ink-900/10" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.1 }}
              className="max-w-2xl"
            >
              {article.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </motion.div>
          </div>
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
