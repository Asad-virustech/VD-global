import { motion } from 'framer-motion';
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
  /** Right-hand label on the masthead rule (e.g. the page name). */
  label: string;
  /** Two-digit editorial folio for the architectural section marker (e.g. "02"). */
  index: string;
  /** Headline — pass a teal-accented `<span>` inline for the highlight word. */
  title: ReactNode;
  subtitle: string;
  primary: HeroAction;
  secondary?: HeroAction;
  /** Short trust/meta items rendered along the bottom rule. */
  meta?: string[];
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function PrimaryButton({ action }: { action: HeroAction }) {
  const inner = (
    <>
      {action.label}
      <ArrowRight className="h-4 w-4" />
    </>
  );
  return action.href ? (
    <Button as="a" href={action.href} size="lg" variant="primary">
      {inner}
    </Button>
  ) : (
    <Button as="link" to={action.to ?? '/'} size="lg" variant="primary">
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
    <Button as="a" href={action.href} size="lg" variant="glass">
      {inner}
    </Button>
  ) : (
    <Button as="link" to={action.to ?? '/'} size="lg" variant="glass">
      {inner}
    </Button>
  );
}

/**
 * The canonical internal-page hero: an asymmetric, left-aligned "architectural
 * folio" on the dark cinematic surface — headline anchored left, an oversized
 * outlined section numeral as an editorial folio on the right, and a full-width
 * measured baseline rule. Deliberately distinct from the homepage hero (a
 * two-column layout with floating glass cards) so internal pages share one
 * identity that reads as the same brand without cloning the home page.
 */
export function PageHero({ label, index, title, subtitle, primary, secondary, meta }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden bg-ink-950 text-white">
      {/* Cinematic layered background — light source pulled to the top-right for asymmetry */}
      <div className="pointer-events-none absolute inset-0 -z-20 surface-night" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -z-10 right-[-8%] top-[-18%] h-[520px] w-[760px] rounded-full bg-teal-500/15 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 left-[-6%] bottom-[-10%] h-[360px] w-[520px] rounded-full bg-teal-600/10 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-ink-950"
        aria-hidden="true"
      />

      <div className="container-px relative w-full py-24">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left — editorial content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-8"
          >
            {/* Masthead rule */}
            <motion.div
              variants={item}
              className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-400"
            >
              <span className="text-teal-300">VD Global</span>
              <span aria-hidden="true" className="h-px w-16 bg-white/15" />
              <span>{label}</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 max-w-3xl text-[2.5rem] font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[4.25rem] text-balance"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <PrimaryButton action={primary} />
              {secondary && <SecondaryButton action={secondary} />}
            </motion.div>
          </motion.div>

          {/* Right — architectural folio marker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.35 }}
            aria-hidden="true"
            className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-center"
          >
            <span className="font-heading text-[11rem] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1.5px_rgba(45,212,191,0.28)]">
              {index}
            </span>
            <span className="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-ink-400">
              <span className="h-px w-12 bg-gradient-to-l from-teal-400/50 to-transparent" />
              {label}
            </span>
          </motion.div>
        </div>

        {/* Full-width measured baseline rule */}
        {meta && meta.length > 0 && (
          <motion.ul
            variants={item}
            initial="hidden"
            animate="show"
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 sm:mt-20"
          >
            {meta.map((entry) => (
              <li key={entry} className="flex items-center gap-2.5 text-sm text-ink-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {entry}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
