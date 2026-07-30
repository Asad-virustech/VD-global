import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '../ui/Button';

type HeroAction = {
  label: string;
  /** Internal route (react-router). Provide either `to` or `href`. */
  to?: string;
  /** Anchor href — e.g. an in-page `#section`. */
  href?: string;
  icon?: LucideIcon;
};

type PageHeroProps = {
  /** Small eyebrow label (the page name). */
  label: string;
  /** Retained for call-site compatibility; no longer rendered. */
  index?: string;
  /** Headline — pass a teal-accented `<span>` inline for the highlight word. */
  title: ReactNode;
  subtitle: string;
  primary: HeroAction;
  secondary?: HeroAction;
  /** Short trust/meta items rendered along the bottom border-line. */
  meta?: string[];
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

function PrimaryButton({ action }: { action: HeroAction }) {
  const inner = (
    <>
      {action.label}
      <ArrowRight className="h-4 w-4" />
    </>
  );
  return action.href ? (
    <Button as="a" href={action.href} size="md" variant="primary">
      {inner}
    </Button>
  ) : (
    <Button as="link" to={action.to ?? '/'} size="md" variant="primary">
      {inner}
    </Button>
  );
}

function SecondaryButton({ action }: { action: HeroAction }) {
  const Icon = action.icon;
  const inner = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {action.label}
    </>
  );
  return action.href ? (
    <Button as="a" href={action.href} size="md" variant="glass">
      {inner}
    </Button>
  ) : (
    <Button as="link" to={action.to ?? '/'} size="md" variant="glass">
      {inner}
    </Button>
  );
}

/**
 * The canonical internal-page hero — same premium language as the homepage
 * Hero: a clean cinematic dark surface (grain + smooth wash + a teal-lit orb +
 * a light arc), a giant Swiss headline on the left, a supporting detail on the
 * right, and the CTAs + trust anchored to the hero's bottom border-line.
 */
export function PageHero({ label, title, subtitle, primary, secondary, meta }: PageHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-ink-950 text-white">
      {/* Clean cinematic background */}
      <div className="pointer-events-none absolute inset-0 -z-30 surface-night" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(120% 90% at 80% 8%, rgba(20,184,166,0.15) 0%, transparent 55%), radial-gradient(90% 80% at 0% 100%, rgba(13,148,136,0.09) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Light arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 -right-[30%] top-1/2 h-[1100px] w-[1100px] -translate-y-1/2 rounded-full border border-teal-300/12"
        style={{ boxShadow: 'inset 0 0 160px rgba(45,212,191,0.12)' }}
      />

      {/* Orb */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' as const, delay: 0.2 }}
        className="pointer-events-none absolute -z-10 right-[9%] top-[16%] hidden h-48 w-48 rounded-full lg:block xl:h-56 xl:w-56"
        style={{
          background:
            'radial-gradient(circle at 34% 30%, rgba(153,246,228,0.5), rgba(13,148,136,0.26) 42%, rgba(2,6,23,0.85) 76%)',
          boxShadow: '0 0 120px 10px rgba(45,212,191,0.16)',
        }}
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
          style={{ boxShadow: 'inset 0 0 60px rgba(94,234,212,0.26)' }}
        />
      </motion.div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink-950"
        aria-hidden="true"
      />

      {/* Main — headline left, detail right */}
      <div className="container-px relative flex flex-1 items-center pb-14 pt-44">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid w-full gap-14 lg:grid-cols-12 lg:items-end lg:gap-10"
        >
          <div className="lg:col-span-8">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              {label}
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-10 text-[2.75rem] font-bold leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.25rem] text-balance"
            >
              {title}
            </motion.h1>
          </div>

          <motion.div variants={item} className="lg:col-span-4 lg:pb-3">
            <span aria-hidden="true" className="block h-px w-12 bg-teal-400/50" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border-line — CTAs left, trust right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.55 }}
        className="container-px relative"
      >
        <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton action={primary} />
            {secondary && <SecondaryButton action={secondary} />}
          </div>

          {meta && meta.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-400">
              {meta.map((entry) => (
                <li key={entry} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  {entry}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </section>
  );
}
