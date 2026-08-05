import { motion } from 'framer-motion';
import { Building2, Lightbulb } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { CASE_STUDIES } from '../../../../content/caseStudies';
import type { CaseStudy } from '../../../../content/caseStudies';

/** The narrative beats, in order. Execution is rendered as a list between them. */
const BEATS_BEFORE = [
  { label: 'Situation', key: 'situation' as const },
  { label: 'Discovery', key: 'discovery' as const },
  { label: 'The real problem', key: 'realProblem' as const },
  { label: 'Recommendation', key: 'recommendation' as const },
];
const BEATS_AFTER = [
  { label: 'Outcome', key: 'outcome' as const },
  { label: 'Lesson', key: 'lesson' as const },
];

function Beat({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">{text}</p>
    </div>
  );
}

function Engagement({ study }: { study: CaseStudy }) {
  return (
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
              {study.industry}
            </span>
            <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl text-balance">
              {study.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">{study.summary}</p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-ink-400">
              Client · {study.client}
            </p>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative */}
        <div className="p-8 sm:p-10 lg:col-span-3">
          <div className="space-y-6">
            {BEATS_BEFORE.map((beat) => (
              <Beat key={beat.key} label={beat.label} text={study[beat.key]} />
            ))}

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                Execution
              </p>
              <ul className="mt-3 space-y-2.5">
                {study.execution.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600 sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Lightbulb className="h-3 w-3" strokeWidth={2} />
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {BEATS_AFTER.map((beat) => (
              <Beat key={beat.key} label={beat.label} text={study[beat.key]} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedEngagements() {
  return (
    <Section className="surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Selected Engagements"
          title="Anatomy of an authority problem."
          description="Three real engagements, told the way we actually work through them: the situation, what the research revealed, and the recommendation that followed the real problem, not the request."
          className="mb-12 sm:mb-14"
        />

        <div className="space-y-8 sm:space-y-10">
          {CASE_STUDIES.map((study) => (
            <Engagement key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
