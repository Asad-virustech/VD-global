import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { CONTACT_METHODS } from '../../../../content/contact';
import type { ContactMethod } from '../../../../content/contact';

const [primary, ...secondary] = CONTACT_METHODS;

const panel: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const cell: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function PlaceholderBadge() {
  return (
    <span className="rounded-full border border-ink-200 bg-ink-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-400">
      Placeholder
    </span>
  );
}

function MethodValue({ value, href, className }: { value: string; href?: string; className: string }) {
  const isRealLink = href && href !== '#';
  return isRealLink ? (
    <a href={href} className={`${className} transition-colors hover:text-teal-700`}>
      {value}
    </a>
  ) : (
    <p className={className}>{value}</p>
  );
}

function SecondaryMethod({ icon: Icon, label, value, href, note, placeholder }: ContactMethod) {
  return (
    <motion.div variants={cell} className="bg-white p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        {placeholder && <PlaceholderBadge />}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
        {label}
      </p>
      <MethodValue
        value={value}
        href={href}
        className="mt-1 block text-base font-semibold text-ink-900"
      />
      {note && <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{note}</p>}
    </motion.div>
  );
}

export function WaysToReachUs() {
  const PrimaryIcon = primary.icon;

  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Ways to Reach Us"
          title="Prefer to Reach Out Directly?"
          description="The form is the easiest way to start, but you're welcome to reach us however suits you best."
          className="mb-12 sm:mb-14"
        />

        {/* A single concierge "contact desk" — email promoted, the rest beneath */}
        <motion.div
          variants={panel}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
        >
          <span aria-hidden="true" className="block h-1 bg-gradient-to-r from-teal-400 to-teal-600" />

          {/* Primary — email */}
          <div className="p-7 sm:p-9">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
                <PrimaryIcon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  {primary.label}
                </p>
                <MethodValue
                  value={primary.value}
                  href={primary.href}
                  className="mt-1 block text-lg font-semibold text-ink-900 sm:text-xl"
                />
                {primary.note && (
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{primary.note}</p>
                )}
              </div>
            </div>
          </div>

          {/* Secondary — 2×2 hairline grid */}
          <motion.div
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-px border-t border-ink-100 bg-ink-100 sm:grid-cols-2"
          >
            {secondary.map((method) => (
              <SecondaryMethod key={method.label} {...method} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
