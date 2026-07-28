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
  /** Oversized ghost wordmark set behind the headline. */
  ghost: string;
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
 * The canonical internal-page hero: a centered "editorial masthead" on the dark
 * cinematic surface. Deliberately distinct from the homepage hero (which is a
 * left-aligned, two-column layout with floating glass cards) so internal pages
 * share one identity that reads as the same brand without cloning the home page.
 */
export function PageHero({ label, ghost, title, subtitle, primary, secondary, meta }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[72vh] flex-col justify-center overflow-hidden bg-ink-950 text-white">
      {/* Cinematic layered background */}
      <div className="pointer-events-none absolute inset-0 -z-20 surface-night" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -z-10 left-1/2 top-[-22%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-teal-500/15 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-ink-950"
        aria-hidden="true"
      />

      {/* Oversized ghost wordmark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.035]"
      >
        {ghost}
      </span>

      <div className="container-px relative w-full py-24">
        {/* Masthead rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto flex max-w-4xl items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-400"
        >
          <span className="text-teal-300">VD Global</span>
          <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
          <span>{label}</span>
        </motion.div>

        {/* Centered editorial block */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto mt-12 max-w-4xl text-center sm:mt-14"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg text-balance"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <PrimaryButton action={primary} />
            {secondary && <SecondaryButton action={secondary} />}
          </motion.div>
        </motion.div>

        {/* Bottom meta rule */}
        {meta && meta.length > 0 && (
          <motion.ul
            variants={item}
            initial="hidden"
            animate="show"
            className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 sm:mt-16"
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
