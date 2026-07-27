import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Sprout, TrendingUp, Building2, Check } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Stage = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  priorities: string[];
};

const STAGES: Stage[] = [
  {
    icon: Sprout,
    label: 'Early Stage',
    title: 'Ideal for founders beginning to build credibility.',
    description:
      'The focus is on establishing a trustworthy foundation before pursuing broader visibility.',
    priorities: [
      'A clear, consistent public profile',
      'Early credibility signals that verify',
      'Understanding what to build first',
    ],
  },
  {
    icon: TrendingUp,
    label: 'Growing Business',
    title: 'Organizations expanding visibility and authority.',
    description:
      'The focus shifts toward earning recognition and turning momentum into durable reputation.',
    priorities: [
      'Credible media and coverage',
      'Stronger search and positioning',
      'Consistent messaging as you scale',
    ],
  },
  {
    icon: Building2,
    label: 'Established Brand',
    title: 'Businesses strengthening long-term recognition and reputation.',
    description:
      'The focus is on protecting authority already earned and compounding it over time.',
    priorities: [
      'Reputation management and resilience',
      'Thought leadership at the top of the field',
      'Wikipedia and lasting authority assets',
    ],
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function StageColumn({ stage, index, featured }: { stage: Stage; index: number; featured: boolean }) {
  const Icon = stage.icon;
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={
        featured
          ? 'relative z-10 flex h-full flex-col overflow-hidden rounded-2xl border border-teal-200 bg-white p-8 shadow-card-hover ring-1 ring-teal-100 sm:p-9 lg:-my-4 lg:py-11'
          : 'relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white/70 p-7 shadow-card backdrop-blur-sm sm:p-8'
      }
    >
      {featured && (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600"
          />
          <span className="absolute right-6 top-7 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-700">
            Most common start
          </span>
        </>
      )}

      <span
        className={
          featured
            ? 'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-teal-500 to-teal-700 text-white shadow-teal-glow'
            : 'flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100'
        }
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
        {String(index + 1).padStart(2, '0')} · {stage.label}
      </span>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-ink-900">{stage.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{stage.description}</p>

      <div className="mt-6 border-t border-ink-100 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          Common priorities
        </p>
        <ul className="mt-3 space-y-2.5">
          {stage.priorities.map((priority) => (
            <li key={priority} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <Check className="h-3 w-3" strokeWidth={2.5} />
              </span>
              {priority}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function ChoosingStrategy() {
  return (
    <Section className="relative bg-white bg-aurora">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Where You Are Today"
          title="Choosing the Right Strategy."
          description="Authority looks different at every stage. These are the priorities we most often see — not packages to pick from, but a sense of where businesses like yours tend to focus."
          className="mb-12 sm:mb-14"
        />

        {/* Continuum labels + spine */}
        <div className="mx-auto mb-10 hidden max-w-3xl items-center gap-4 md:flex">
          {['Early', 'Growing', 'Established'].map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-4">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {label}
                </span>
              </div>
              {i < 2 && (
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-gradient-to-r from-teal-300/70 to-teal-300/30"
                />
              )}
            </div>
          ))}
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {STAGES.map((stage, i) => (
            <StageColumn key={stage.label} stage={stage} index={i} featured={i === 1} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
