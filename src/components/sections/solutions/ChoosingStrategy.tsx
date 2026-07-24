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

function StageCard({ icon: Icon, label, title, description, priorities }: Stage) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
        {label}
      </span>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>

      <div className="mt-6 border-t border-ink-100 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          Common priorities
        </p>
        <ul className="mt-3 space-y-2.5">
          {priorities.map((priority) => (
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
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Where You Are Today"
          title="Choosing the Right Strategy."
          description="Authority looks different at every stage. These are the priorities we most often see — not packages to pick from, but a sense of where businesses like yours tend to focus."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {STAGES.map((stage) => (
            <StageCard key={stage.label} {...stage} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
