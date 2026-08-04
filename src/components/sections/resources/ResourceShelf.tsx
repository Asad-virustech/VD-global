import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { BookOpen, ListChecks, LayoutGrid, FileText, ScrollText, ArrowRight } from 'lucide-react';
import type { Resource } from '../../../../content/resources';
import { resourcePath } from '../../../../content/resources';

/** Resolve a resource's icon key to a lucide component (content stays React-free). */
const ICONS: Record<Resource['icon'], LucideIcon> = {
  guide: BookOpen,
  checklist: ListChecks,
  framework: LayoutGrid,
  template: FileText,
  whitepaper: ScrollText,
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const MotionLink = motion(Link);

function ResourceRow({ resource, first }: { resource: Resource; first: boolean }) {
  const Icon = ICONS[resource.icon];
  return (
    <MotionLink
      to={resourcePath(resource)}
      variants={row}
      aria-label={`${resource.title} — ${resource.type}. Open the resource page to download.`}
      className={`group flex w-full items-center gap-5 p-6 text-left transition-colors duration-300 hover:bg-ink-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-500 sm:gap-6 sm:p-7 ${
        first ? '' : 'border-t border-ink-100'
      }`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <div className="min-w-0 flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {resource.type}
        </span>
        <h3 className="mt-1 text-base font-semibold leading-snug text-ink-900 sm:text-lg">
          {resource.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{resource.excerpt}</p>
      </div>

      <span className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800 sm:inline-flex">
        View
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
      </span>
    </MotionLink>
  );
}

/**
 * A framed "resource shelf" — one library, not floating cards. Each row links to
 * the resource's dedicated page, where the PDF download lives. Reused by the
 * Knowledge Hub and by the related-resources rail on resource pages.
 */
export function ResourceShelf({ resources }: { resources: Resource[] }) {
  return (
    <motion.div
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
    >
      {resources.map((resource, i) => (
        <ResourceRow key={resource.slug} resource={resource} first={i === 0} />
      ))}
    </motion.div>
  );
}
