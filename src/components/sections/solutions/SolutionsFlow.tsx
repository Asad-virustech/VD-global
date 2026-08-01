import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Compass, Rocket, Layers, Award, ShieldCheck } from 'lucide-react';
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
    description: 'Coverage, references, and profiles become durable proof.',
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export function SolutionsFlow() {
  return (
    <Section bleed className="relative overflow-hidden surface-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="How It Fits Together"
          title="How our solutions work together."
          description="Each stage builds on the one before it. Strategy shapes execution, execution creates assets, and assets earn the recognition and trust that compound over time."
          className="mb-16 sm:mb-20"
        />

        {/* Desktop / tablet: horizontal ribbon on a connecting spine */}
        <motion.div
          variants={flow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative hidden md:block"
          aria-label="How our solutions work together"
        >
          {/* The spine */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-teal-500/0 via-teal-400/50 to-teal-500/0"
          />
          <div className="relative grid grid-cols-5 gap-4">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div key={stage.title} variants={step} className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-teal-300 shadow-xl ring-1 ring-inset ring-white/10">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-400">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold text-white">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{stage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile: vertical ribbon on a left spine */}
        <motion.div
          variants={flow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative md:hidden"
          aria-label="How our solutions work together"
        >
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-teal-400/50 via-teal-400/30 to-transparent"
          />
          <div className="flex flex-col gap-8">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div key={stage.title} variants={step} className="relative flex items-start gap-5">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-teal-300 ring-1 ring-inset ring-white/10">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div className="pt-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-400">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-white">{stage.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{stage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
