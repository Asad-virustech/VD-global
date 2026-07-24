import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Compass, Search, ClipboardCheck, Map, PhoneCall, FileText } from 'lucide-react';
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
    title: 'Discovery',
    description:
      'We start with your goals, your market, and where you believe your reputation stands today.',
  },
  {
    icon: Search,
    title: 'Research',
    description:
      'We gather how you currently appear across search, media, and the public record.',
  },
  {
    icon: ClipboardCheck,
    title: 'Analysis',
    description:
      'We evaluate each authority dimension and identify the gaps that matter most for your goals.',
  },
  {
    icon: Map,
    title: 'Recommendations',
    description:
      'We outline practical, prioritized next steps — including what to wait on, and why.',
  },
  {
    icon: PhoneCall,
    title: 'Strategy Call',
    description:
      'We walk through the findings together and answer your questions in plain terms.',
  },
  {
    icon: FileText,
    title: 'Final Report',
    description:
      'You keep a clear written summary of your position and the recommended path forward.',
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export function AssessmentFramework() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Process"
          title="How an Assessment Works."
          description="A structured, transparent process. No obligations, no pressure — just a clear read of where you stand and what to do next."
          className="mb-12 sm:mb-14"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical rail aligned to the icon centres */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-teal-300/70 via-teal-200/50 to-teal-100/30 sm:left-7"
          />

          <motion.ol
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.li
                  key={stage.title}
                  variants={item}
                  className="relative flex gap-5 sm:gap-6"
                >
                  <div className="z-10 shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="flex-1 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-colors duration-300 hover:border-teal-200 sm:p-6"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-semibold text-ink-900">{stage.title}</h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-500 sm:text-base">
                      {stage.description}
                    </p>
                  </motion.div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </Container>
    </Section>
  );
}
