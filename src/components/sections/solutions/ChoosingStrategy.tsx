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

const band: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function StagePhase({ icon: Icon, label, title, description, priorities, index }: Stage & { index: number }) {
  return (
    <motion.div variants={item} className="relative">
      {/* Node sitting on the growth line */}
      <div className="flex items-center gap-4">
        <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-700 shadow-card ring-4 ring-white">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="font-heading text-2xl font-bold tabular-nums text-teal-600/80 sm:hidden">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
        {String(index + 1).padStart(2, '0')} · {label}
      </span>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>

      <ul className="mt-5 space-y-2.5">
        {priorities.map((priority) => (
          <li key={priority} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            {priority}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ChoosingStrategy() {
  return (
    <Section className="relative surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Where You Are Today"
          title="Choosing the Right Strategy."
          description="Authority looks different at every stage. These are the priorities we most often see — not packages to pick from, but a sense of where businesses like yours tend to focus."
          className="mb-14 sm:mb-16"
        />

        {/* One connected growth spectrum — nodes rising along a single ascending
            line (lighter → stronger = growing authority), not separate cards. */}
        <motion.div
          variants={band}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-7 right-7 top-7 hidden h-px bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 sm:block"
          />
          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-14">
            {STAGES.map((stage, i) => (
              <StagePhase key={stage.label} index={i} {...stage} />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
