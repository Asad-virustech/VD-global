import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { Button } from '../../ui/Button';

const FEATURED = {
  category: 'Authority Strategy',
  readTime: '9 min',
  title: 'Authority vs. Visibility: Why Being Seen Isn’t Enough',
  summary:
    'Visibility gets you noticed; authority gets you trusted. This piece breaks down the difference, why the two are often confused, and how credible businesses turn attention into lasting recognition — without resorting to hype.',
};

export function FeaturedInsight() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Featured Insight"
          title="Start Here."
          className="mb-12 sm:mb-14"
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600"
          />
          <div className="grid lg:grid-cols-5">
            {/* Editorial panel */}
            <div className="relative hidden overflow-hidden bg-ink-900 p-10 lg:col-span-2 lg:flex lg:flex-col lg:justify-between">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[90px]"
              />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-teal-300">
                <Star className="h-3.5 w-3.5" strokeWidth={2} />
                Editor’s Pick
              </span>
              <p className="relative mt-8 text-lg font-semibold leading-snug text-white/90 text-balance">
                “Authority is what remains after the attention fades.”
              </p>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                  {FEATURED.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {FEATURED.readTime} read
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-ink-900 sm:text-3xl text-balance">
                {FEATURED.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {FEATURED.summary}
              </p>

              <div className="mt-8">
                <Button as="button" size="lg" variant="primary">
                  Continue Reading
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.article>
      </Container>
    </Section>
  );
}
