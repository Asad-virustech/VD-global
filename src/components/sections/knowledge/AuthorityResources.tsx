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

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function ResourceRow({ icon: Icon, type, title, description, first }: Resource & { first: boolean }) {
  return (
    <motion.button
      type="button"
      variants={row}
      aria-label={`Download ${title} (${type})`}
      className={`group flex w-full items-center gap-5 p-6 text-left transition-colors duration-300 hover:bg-ink-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-500 sm:gap-6 sm:p-7 ${
        first ? '' : 'border-t border-ink-100'
      }`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <div className="min-w-0 flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {type}
        </span>
        <h3 className="mt-1 text-base font-semibold leading-snug text-ink-900 sm:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>

      <span className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800 sm:inline-flex">
        <Download className="h-4 w-4" strokeWidth={1.75} />
        Download
      </span>
    </motion.button>
  );
}

export function AuthorityResources() {
  return (
    <Section className="surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Authority Resources"
          title="Tools you can actually use."
          description="Guides, checklists, and frameworks: the same thinking we bring to advisory, made practical for you to apply."
          className="mb-12 sm:mb-14"
        />

        {/* A framed "resource shelf" — one library, not five floating cards */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
        >
          {RESOURCES.map((resource, i) => (
            <ResourceRow key={resource.title} first={i === 0} {...resource} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
