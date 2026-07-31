import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

type CtaAction = {
  label: string;
  /** Internal route (react-router). Provide either `to` or `href`. */
  to?: string;
  /** Anchor href — e.g. an in-page `#section` or an external URL. */
  href?: string;
  icon?: LucideIcon;
};

type CtaBandProps = {
  eyebrow?: string;
  /** Supports line breaks via `\n`. */
  title: string;
  /** Supports paragraph breaks via `\n\n`. */
  description?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  /** Optional supporting content rendered below the actions (e.g. trust cards). */
  children?: ReactNode;
};

/**
 * The canonical full-screen dark call-to-action band used to close pages.
 * Standardized so every page's final CTA shares one implementation.
 */
export function CtaBand({ eyebrow, title, description, primary, secondary, children }: CtaBandProps) {
  const SecondaryIcon = secondary?.icon;

  return (
    <Section bleed className="relative overflow-hidden surface-night">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[110px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut' as const }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance whitespace-pre-line"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              {description.split('\n\n').map((paragraph) => (
                <p key={paragraph} className="text-balance">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            {primary.href ? (
              <Button as="a" href={primary.href} size="lg" variant="primary">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button as="link" to={primary.to ?? '/'} size="lg" variant="primary">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {secondary &&
              (secondary.href ? (
                <Button as="a" href={secondary.href} size="lg" variant="outline">
                  {SecondaryIcon && <SecondaryIcon className="h-4 w-4" />}
                  {secondary.label}
                </Button>
              ) : (
                <Button as="link" to={secondary.to ?? '/'} size="lg" variant="outline">
                  {SecondaryIcon && <SecondaryIcon className="h-4 w-4" />}
                  {secondary.label}
                </Button>
              ))}
          </motion.div>
        </div>

        {children}
      </Container>
    </Section>
  );
}
