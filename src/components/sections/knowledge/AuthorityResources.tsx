import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { BookOpen, ListChecks, LayoutGrid, FileText, ScrollText, Download } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Resource = {
  icon: LucideIcon;
  type: string;
  title: string;
  description: string;
};

const RESOURCES: Resource[] = [
  {
    icon: BookOpen,
    type: 'Guides',
    title: 'The Authority Readiness Guide',
    description: 'A plain-language walkthrough of what credibility looks like before you invest in it.',
  },
  {
    icon: ListChecks,
    type: 'Checklists',
    title: 'Wikipedia Notability Checklist',
    description: 'The signals editors look for, in a format you can honestly assess yourself against.',
  },
  {
    icon: LayoutGrid,
    type: 'Frameworks',
    title: 'The Authority Framework',
    description: 'The structured model we use to move from recognition to durable, earned trust.',
  },
  {
    icon: FileText,
    type: 'Templates',
    title: 'Press & Positioning Template',
    description: 'A starting structure for describing yourself consistently across every platform.',
  },
  {
    icon: ScrollText,
    type: 'Whitepapers',
    title: 'Why Reputation Precedes Revenue',
    description: 'A longer read on how public credibility shapes decisions long before a conversation.',
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

function ResourceCard({ icon: Icon, type, title, description }: Resource) {
  return (
    <motion.button
      type="button"
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      aria-label={`Download ${title} (${type})`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 text-left shadow-card transition-shadow duration-300 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {type}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
        <Download className="h-4 w-4" strokeWidth={1.75} />
        Download
      </span>
    </motion.button>
  );
}

export function AuthorityResources() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Authority Resources"
          title="Tools You Can Actually Use."
          description="Curated guides, checklists and frameworks — the same thinking we bring to advisory, made practical for you to apply."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
