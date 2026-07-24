import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { IconTile } from '../ui/IconTile';

export type TimelineStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type StepTimelineProps = {
  steps: TimelineStep[];
  /** Show a zero-padded index above each title. */
  numbered?: boolean;
  className?: string;
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

/**
 * Canonical vertical timeline: a gradient rail with icon nodes and cards.
 * Standardizes the pattern used across the site's process sections.
 */
export function StepTimeline({ steps, numbered = true, className = '' }: StepTimelineProps) {
  return (
    <div className={`relative mx-auto max-w-3xl ${className}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-teal-300/70 via-teal-200/50 to-teal-100/30 sm:left-7"
      />

      <motion.ol
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-5"
      >
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.li key={step.title} variants={item} className="relative flex gap-5 sm:gap-6">
              <div className="z-10 shrink-0">
                <IconTile size="md" ring className="sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                </IconTile>
              </div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="flex-1 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-colors duration-300 hover:border-teal-200 sm:p-6"
              >
                <div className="flex items-center gap-2">
                  {numbered && (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {step.description}
                </p>
              </motion.div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  );
}
