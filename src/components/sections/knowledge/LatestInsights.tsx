import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Article = {
  category: string;
  readTime: string;
  title: string;
  description: string;
};

const ARTICLES: Article[] = [
  {
    category: 'Wikipedia',
    readTime: '6 min',
    title: 'Is Your Business Ready for Wikipedia?',
    description:
      'What notability really means, the misconceptions that trip businesses up, and how to prepare before you apply.',
  },
  {
    category: 'Strategic PR',
    readTime: '5 min',
    title: 'Choosing the Right Press Strategy',
    description:
      'Not every press release builds authority. How strategic media planning delivers outcomes that actually last.',
  },
  {
    category: 'Reputation',
    readTime: '7 min',
    title: 'Owning the First Page of Your Name',
    description:
      'Search is where reputation is decided. A practical look at shaping what people find when they look you up.',
  },
  {
    category: 'Executive Branding',
    readTime: '6 min',
    title: 'Credibility Beyond the Company',
    description:
      'Why a founder’s personal authority compounds the organization’s — and how to build it without vanity.',
  },
  {
    category: 'Thought Leadership',
    readTime: '8 min',
    title: 'Having a Point of View Worth Following',
    description:
      'Thought leadership isn’t volume. It’s a consistent, defensible perspective that earns attention over time.',
  },
  {
    category: 'Authority Strategy',
    readTime: '5 min',
    title: 'When the Right Answer Is “Not Yet”',
    description:
      'Patience is a strategy. How to tell whether you’re ready for a move — or better served by strengthening first.',
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function ArticleRow({ category, readTime, title, description }: Article) {
  return (
    <motion.article variants={row}>
      <div className="group border-b border-ink-200/70 py-8 sm:py-9">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
            {readTime} read
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-ink-900 transition-colors duration-300 group-hover:text-teal-800 sm:text-2xl text-balance">
          {title}
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-500">{description}</p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
          Continue Reading
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </span>
      </div>
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
          title="Fresh Thinking on Authority."
          description="Practical, education-first writing designed to help you make better decisions — whether or not you ever work with us."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-4xl border-t border-ink-200/70"
        >
          {ARTICLES.map((article) => (
            <ArticleRow key={article.title} {...article} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
