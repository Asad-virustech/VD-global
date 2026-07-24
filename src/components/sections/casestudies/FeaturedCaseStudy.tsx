import { motion } from 'framer-motion';
import { ArrowRight, Building2, Lightbulb } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { Button } from '../../ui/Button';
import { CASE_STUDIES } from '../../../../content/caseStudies';

const featured = CASE_STUDIES.find((study) => study.featured);

const BLOCKS = [
  { label: 'Challenge', key: 'challenge' as const },
  { label: 'Approach', key: 'approach' as const },
  { label: 'Outcome', key: 'outcome' as const },
];

export function FeaturedCaseStudy() {
  if (!featured) return null;

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Featured Case Study"
          title="Anatomy of an Authority Problem."
          className="mb-12 sm:mb-14"
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-teal-400 to-teal-600"
          />
          <div className="grid lg:grid-cols-5">
            {/* Editorial panel */}
            <div className="relative overflow-hidden bg-ink-900 p-8 sm:p-10 lg:col-span-2 lg:flex lg:flex-col lg:justify-between">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[90px]"
              />
              <div className="relative">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-teal-300">
                  <Building2 className="h-3.5 w-3.5" strokeWidth={2} />
                  {featured.industry}
                </span>
                <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl text-balance">
                  {featured.title}
                </h3>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              <div className="space-y-6">
                {BLOCKS.map((block) => (
                  <div key={block.key}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                      {block.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">
                      {featured[block.key]}
                    </p>
                  </div>
                ))}

                {featured.insights && featured.insights.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                      Key Insights
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {featured.insights.map((insight) => (
                        <li key={insight} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600 sm:text-base">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                            <Lightbulb className="h-3 w-3" strokeWidth={2} />
                          </span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <Button as="button" size="lg" variant="primary">
                  Read Full Story
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
