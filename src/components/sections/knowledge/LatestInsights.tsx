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

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function ArticleCard({ category, readTime, title, description }: Article) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex w-fit items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
          {category}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
          <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
          {readTime} read
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
        Continue Reading
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </span>
    </motion.article>
  );
}

export function LatestInsights() {
  return (
    <Section id="insights" className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Latest Insights"
          title="Fresh Thinking on Authority."
          description="Practical, education-first writing designed to help you make better decisions — whether or not you ever work with us."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
