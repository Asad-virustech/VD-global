import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  Newspaper,
  BookOpenCheck,
  UserRound,
  Globe,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: Compass,
    title: 'Authority Strategy',
    description: 'Develop a roadmap based on your goals, industry and reputation.',
  },
  {
    icon: Newspaper,
    title: 'Strategic PR',
    description:
      'Increase visibility through credible media opportunities and thoughtful positioning.',
  },
  {
    icon: BookOpenCheck,
    title: 'Wikipedia Advisory',
    description: 'Assess readiness and guide businesses through the Wikipedia process ethically.',
  },
  {
    icon: UserRound,
    title: 'Executive Positioning',
    description: 'Strengthen founder and leadership credibility through strategic visibility.',
  },
  {
    icon: Globe,
    title: 'Digital Reputation',
    description: 'Improve how your business is perceived across search, media and public platforms.',
  },
  {
    icon: Lightbulb,
    title: 'Thought Leadership',
    description: 'Create opportunities for your expertise to become recognized within your industry.',
  },
  {
    icon: TrendingUp,
    title: 'Authority Growth',
    description: 'Develop a long-term strategy that compounds credibility over time.',
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function CapabilityCard({ icon: Icon, title, description, index }: Capability & { index: number }) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-300">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>

      {/* Learn More — placeholder affordance until individual solution pages exist */}
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </span>
    </motion.article>
  );
}

export function AuthorityEcosystem() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Authority Ecosystem"
          title="One Connected System, Not Separate Services."
          description="Authority isn't built through a single tactic. Each capability strengthens the others — which is why we advise on the whole ecosystem, then focus where it creates the most long-term value for you."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {CAPABILITIES.map((capability, i) => (
            <CapabilityCard key={capability.title} index={i} {...capability} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
