import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

type Article = {
  category: string;
  title: string;
  description: string;
};

const ARTICLES: Article[] = [
  {
    category: 'Wikipedia',
    title: 'Is your business ready for Wikipedia?',
    description:
      'What notability actually means, the misconceptions that trip people up, and how to prepare before you pursue a page.',
  },
  {
    category: 'Public Relations',
    title: 'Choosing the right press strategy',
    description:
      'Not every press release builds authority. How considered media planning earns coverage that lasts.',
  },
  {
    category: 'Authority',
    title: 'Authority vs. visibility',
    description:
      'Being visible is valuable. Being trusted is what creates lasting opportunities. The difference is the whole point.',
  },
];

const CTA = {
  title: 'Explore the Knowledge Hub',
  description:
    'Practical guides and considered insights on how authority is built, written to be useful whether or not you ever work with us.',
  button: 'Read the Knowledge Hub',
};

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function ArticleRow({ category, title, description }: Article) {
  return (
    <motion.article variants={card}>
      <div className="group grid gap-x-8 gap-y-3 border-b border-ink-900/10 py-8 sm:grid-cols-[0.7fr_1.6fr] sm:py-9 lg:gap-x-12">
        <div>
          <span className="inline-flex w-fit items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            {category}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold leading-snug tracking-tight text-ink-900 transition-colors duration-300 group-hover:text-teal-800 sm:text-2xl text-balance">
            {title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-500">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
            Continue reading
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function KnowledgeHubPreview() {
  return (
    <>
      <Section className="surface-base">
        <Container>
        <SectionHeading
          align="center"
          eyebrow="Knowledge Hub"
          title="Learn how authority is built."
          description="The Knowledge Hub helps founders, executives, and growing businesses understand PR, media visibility, reputation, and Wikipedia readiness. The aim is simple: better-informed decisions, whether or not you ever work with us."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-4xl border-t border-ink-900/10"
        >
          {ARTICLES.map((article) => (
            <ArticleRow key={article.title} {...article} />
          ))}
        </motion.div>
      </Container>
    </Section>

    {/* Bottom CTA — full-width dark band, horizontal spotlit invitation */}
    <Section bleed className="relative overflow-hidden surface-night">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
          className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
              <BookOpen className="h-4 w-4" strokeWidth={1.75} />
              Knowledge Hub
            </span>
            <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.25rem] text-balance">
              {CTA.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
              {CTA.description}
            </p>
          </div>
          <div className="shrink-0">
            <Button as="link" to="/knowledge" size="lg" variant="primary">
              {CTA.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
    </>
  );
}
