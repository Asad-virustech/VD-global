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
    title: 'Is Your Business Ready for Wikipedia?',
    description:
      'Learn what notability really means, common misconceptions, and how to prepare before applying for a Wikipedia article.',
  },
  {
    category: 'Public Relations',
    title: 'Choosing the Right Press Strategy',
    description:
      'Not every press release creates long-term authority. Learn how strategic media planning delivers better outcomes.',
  },
  {
    category: 'Authority',
    title: 'Authority vs. Visibility',
    description:
      'Being visible is valuable, but becoming trusted creates lasting business opportunities. Discover the difference.',
  },
];

const CTA = {
  title: 'Explore the Knowledge Hub',
  description:
    'Discover practical guides, educational resources, and strategic insights designed to help businesses build lasting authority.',
  button: 'Visit Knowledge Hub',
};

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function ArticleCard({ category, title, description }: Article) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <span className="relative inline-flex w-fit items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
        {category}
      </span>

      <h3 className="mt-5 text-xl font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
        Read insight
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
      </span>
    </motion.article>
  );
}

export function KnowledgeHubPreview() {
  return (
    <>
      <Section className="bg-ink-50/40">
        <Container>
        <SectionHeading
          align="center"
          eyebrow="Knowledge Hub"
          title="Learn How Authority Is Built."
          description="Authority is built through informed decisions. Our Knowledge Hub is designed to help founders, executives, and growing businesses understand PR, media visibility, reputation, Wikipedia readiness, and long-term authority strategies. Whether you work with us or not, we believe better education creates better decisions."
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

    {/* Bottom CTA — full-width dark band */}
    <Section bleed className="relative overflow-hidden bg-ink-900">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[110px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-teal-400 ring-1 ring-inset ring-white/10">
            <BookOpen className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.25rem] text-balance">
            {CTA.title}
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {CTA.description}
          </p>
          <div className="mt-8 flex justify-center">
            <Button as="link" to="/knowledge" size="lg" variant="primary">
              {CTA.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.figure>
      </Container>
    </Section>
    </>
  );
}
