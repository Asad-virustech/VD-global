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
    description:
      'The foundation everything else builds on. We develop a roadmap based on your goals, industry and reputation — deciding what to build, in what order, and why it matters for the credibility you want to be known for.',
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

const [lead, ...rest] = CAPABILITIES;

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function AuthorityEcosystem() {
  const LeadIcon = lead.icon;

  return (
    <Section className="relative surface-base">
      <Container>
        <SectionHeading
          eyebrow="Our Authority Ecosystem"
          title="One Connected System, Not Separate Services."
          description="Authority isn't built through a single tactic. Each capability strengthens the others — which is why we advise on the whole ecosystem, then focus where it creates the most long-term value for you."
          className="mb-14 sm:mb-16"
        />

        {/* Featured lead capability — the "lead story" of the well */}
        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-b from-white to-ink-50/60 p-8 shadow-card sm:p-10 lg:p-12"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-100/50 blur-[100px]"
          />
          {/* Oversized ghost numeral */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 top-2 select-none font-heading text-[8rem] font-bold leading-none text-ink-100/70 sm:text-[10rem]"
          >
            01
          </span>

          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-teal-500 to-teal-700 text-white shadow-teal-glow">
              <LeadIcon className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                Where every engagement starts
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl text-balance">
                {lead.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {lead.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
                Learn more
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </span>
            </div>
          </div>
        </motion.article>

        {/* The rest — an editorial index, not a card grid */}
        <div className="mt-12 sm:mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
            The wider ecosystem
          </p>
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-4 border-t border-ink-100"
          >
            {rest.map((capability, i) => {
              const Icon = capability.icon;
              return (
                <motion.li key={capability.title} variants={row}>
                  <div className="group flex flex-col gap-3 border-b border-ink-100 py-6 sm:flex-row sm:items-center sm:gap-8 sm:py-7">
                    <span className="w-10 shrink-0 font-heading text-2xl font-bold tabular-nums text-ink-200 transition-colors duration-300 group-hover:text-teal-500">
                      {String(i + 2).padStart(2, '0')}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h4 className="shrink-0 text-lg font-semibold text-ink-900 sm:w-56">
                      {capability.title}
                    </h4>
                    <p className="flex-1 text-sm leading-relaxed text-ink-500">
                      {capability.description}
                    </p>
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden h-5 w-5 shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-teal-600 sm:block"
                      strokeWidth={1.75}
                    />
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}
