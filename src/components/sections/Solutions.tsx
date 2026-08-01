import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Compass, Newspaper, BookOpen, Route, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const solutions: Solution[] = [
  {
    icon: Compass,
    title: 'Authority Advisory',
    description:
      'Understand where your public reputation stands today and receive strategic recommendations before investing in PR or Wikipedia.',
  },
  {
    icon: Newspaper,
    title: 'Strategic PR',
    description:
      'Increase visibility through carefully selected media opportunities that strengthen trust instead of chasing vanity metrics.',
  },
  {
    icon: BookOpen,
    title: 'Wikipedia Readiness',
    description:
      'Evaluate your notability, reputation, and available sources before considering Wikipedia, with honest recommendations instead of false promises.',
  },
  {
    icon: Route,
    title: 'Authority Roadmap',
    description:
      'Receive a long-term strategy that aligns media coverage, reputation, digital presence, and credibility into one growth plan.',
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

/** The tall teal feature panel — the entry-point service. */
function FeatureSolution({ icon: Icon, title, description }: Solution) {
  return (
    <motion.article
      variants={cardVariant}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-teal-400/25 bg-teal-400/[0.06] p-8 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-md lg:col-span-2 lg:p-9"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-teal-500/20 blur-[80px]"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="relative mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
        Where authority starts
      </span>
      <h3 className="relative mt-2 text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
        {title}
      </h3>
      <p className="relative mt-4 text-base leading-relaxed text-ink-300">{description}</p>
      <span className="relative mt-auto pt-8 text-sm text-ink-400">
        Every engagement begins here.
      </span>
    </motion.article>
  );
}

/** A horizontal glass row for the supporting services. */
function SolutionRow({ icon: Icon, title, description }: Solution) {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06)] backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-7"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:bg-white/10">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-300">{description}</p>
      </div>
    </motion.article>
  );
}

export function Solutions() {
  return (
    <Section className="relative overflow-hidden surface-night">
      <Container>
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="Solutions"
          title="The right next step depends on where you stand."
          description="Every business starts from a different position. Some need media recognition; others need stronger credibility, or a clear roadmap before they invest in anything at all. We help you see where you stand today and recommend the strategy that compounds over the long term."
          className="mb-12 sm:mb-14"
        />

        {/* Editorial split — a tall feature panel + three stacked glass rows */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 lg:grid-cols-5 lg:gap-6"
        >
          <FeatureSolution {...solutions[0]} />
          <div className="grid gap-5 lg:col-span-3">
            {solutions.slice(1).map((solution) => (
              <SolutionRow key={solution.title} {...solution} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.1 }}
          className="mt-14 flex flex-col items-center text-center sm:mt-16"
        >
          <Button as="link" to="/assessment" size="md" variant="primary">
            Start your free authority assessment
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-300">
            We&rsquo;ll read your current authority, name the opportunities we see, and recommend
            the next step worth taking.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
