import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Compass, Rocket, Layers, Award, ShieldCheck, ArrowRight, ArrowDown } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Stage = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STAGES: Stage[] = [
  {
    icon: Compass,
    title: 'Authority Strategy',
    description: 'We define where you stand today and the path that fits your goals.',
  },
  {
    icon: Rocket,
    title: 'Strategic Execution',
    description: 'We act on the priorities that move credibility the most.',
  },
  {
    icon: Layers,
    title: 'Credibility Assets',
    description: 'Coverage, references and profiles become durable proof.',
  },
  {
    icon: Award,
    title: 'Public Recognition',
    description: 'The market begins to encounter you as a trusted name.',
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Trust',
    description: 'Recognition compounds into lasting authority and opportunity.',
  },
];

const flow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const connector: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

function StageCard({ icon: Icon, title, description, index }: Stage & { index: number }) {
  return (
    <motion.article
      variants={step}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-1.5 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.article>
  );
}

export function SolutionsFlow() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How It Fits Together"
          title="How Our Solutions Work Together."
          description="Each stage builds on the one before it. Strategy shapes execution, execution creates assets, and assets earn the recognition and trust that compound over time."
          className="mb-12 sm:mb-14"
        />

        {/* Desktop / tablet: horizontal flow with connectors */}
        <motion.div
          variants={flow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="hidden items-stretch gap-3 md:flex"
          aria-label="How our solutions work together"
        >
          {STAGES.map((stage, i) => (
            <div key={stage.title} className="flex flex-1 items-center">
              <div className="flex-1">
                <StageCard index={i} {...stage} />
              </div>
              {i < STAGES.length - 1 && (
                <motion.span
                  variants={connector}
                  aria-hidden="true"
                  className="mx-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 lg:mx-2"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile: vertical flow with connectors */}
        <motion.div
          variants={flow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-stretch gap-3 md:hidden"
          aria-label="How our solutions work together"
        >
          {STAGES.map((stage, i) => (
            <div key={stage.title} className="flex flex-col items-stretch">
              <StageCard index={i} {...stage} />
              {i < STAGES.length - 1 && (
                <motion.span
                  variants={connector}
                  aria-hidden="true"
                  className="mx-auto my-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600"
                >
                  <ArrowDown className="h-4 w-4" strokeWidth={2} />
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
