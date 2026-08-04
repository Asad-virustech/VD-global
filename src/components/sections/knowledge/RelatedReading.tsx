import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ResourceShelf } from '../resources/ResourceShelf';
import type { Article } from '../../../../content/articles';
import { readMinutes, articlePath } from '../../../../content/articles';
import type { Resource } from '../../../../content/resources';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rowV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const MotionLink = motion(Link);

function ArticleRow({ article, first }: { article: Article; first: boolean }) {
  return (
    <MotionLink
      to={articlePath(article)}
      variants={rowV}
      aria-label={`Read: ${article.title}`}
      className={`group flex w-full items-center gap-5 p-6 text-left transition-colors duration-300 hover:bg-ink-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-500 sm:gap-6 sm:p-7 ${
        first ? '' : 'border-t border-ink-100'
      }`}
    >
      <div className="min-w-0 flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {article.category} · {readMinutes(article)} min read
        </span>
        <h3 className="mt-1 text-base font-semibold leading-snug text-ink-900 sm:text-lg">
          {article.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{article.excerpt}</p>
      </div>
      <span className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800 sm:inline-flex">
        Read
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
      </span>
    </MotionLink>
  );
}

/**
 * Editorial "related reading" rail shown at the foot of an article: curated
 * links to related articles, plus any Resource Center resources the piece
 * references. Reuses the framed-shelf language already used for resources.
 */
export function RelatedReading({
  articles,
  resources,
}: {
  articles: Article[];
  resources: Resource[];
}) {
  if (articles.length === 0 && resources.length === 0) return null;

  return (
    <Section className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Related reading"
          title="Keep exploring."
          description="A few pieces that build naturally on this one, and the practical resources that go with them."
          className="mb-12 sm:mb-14"
        />

        {articles.length > 0 && (
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
          >
            {articles.map((article, i) => (
              <ArticleRow key={article.slug} article={article} first={i === 0} />
            ))}
          </motion.div>
        )}

        {resources.length > 0 && (
          <div className="mx-auto mt-12 max-w-4xl sm:mt-14">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
              Referenced resources
            </p>
            <ResourceShelf resources={resources} />
          </div>
        )}
      </Container>
    </Section>
  );
}
