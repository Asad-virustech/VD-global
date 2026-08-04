import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ARTICLES, readMinutes, articlePath } from '../../../../content/articles';
import type { Article } from '../../../../content/articles';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function ArticleRow({ article }: { article: Article }) {
  return (
    <motion.article variants={row}>
      <Link to={articlePath(article)} className="group block border-b border-ink-900/10 py-8 sm:py-9">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
            {readMinutes(article)} min read
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-ink-900 transition-colors duration-300 group-hover:text-teal-800 sm:text-2xl text-balance">
          {article.title}
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-500">{article.excerpt}</p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
          Continue reading
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </span>
      </Link>
    </motion.article>
  );
}

export function LatestInsights() {
  return (
    <Section id="insights" className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Latest Insights"
          title="Fresh thinking on authority."
          description="Practical, education-first writing designed to help you make better decisions, whether or not you ever work with us."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-4xl border-t border-ink-900/10"
        >
          {ARTICLES.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
