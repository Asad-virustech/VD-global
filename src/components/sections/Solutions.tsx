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

function SolutionCard({ icon: Icon, title, description }: Solution) {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-xl backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:bg-white/10">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-300">{description}</p>
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
          title="Build Authority Through The Right Strategy."
          description="Every business starts from a different position. Some need media recognition. Some need stronger credibility. Some are preparing for Wikipedia. Others simply need a clear authority roadmap. We help you understand where you stand and recommend the strategy that creates the greatest long-term impact."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7"
        >
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.1 }}
          className="mt-14 flex flex-col items-center text-center sm:mt-16"
        >
          <Button as="link" to="/assessment" size="lg" variant="primary">
            Start Your Free Authority Assessment
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-300">
            We&rsquo;ll review your current authority, identify opportunities, and recommend
            the next strategic step.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
