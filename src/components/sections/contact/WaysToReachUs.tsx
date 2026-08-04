import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { IconTile } from '../../ui/IconTile';
import { CONTACT_METHODS } from '../../../../content/contact';
import type { ContactMethod } from '../../../../content/contact';

const [primary, ...secondary] = CONTACT_METHODS;

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

/** Faint concentric-ring "ripple" texture for the top-right corner of a card. */
const rippleStyle = {
  backgroundImage:
    'repeating-radial-gradient(circle at 72% 26%, rgba(13,148,136,0.12) 0px, rgba(13,148,136,0.12) 1.5px, transparent 1.5px, transparent 15px)',
  WebkitMaskImage: 'radial-gradient(circle at 72% 26%, #000, transparent 72%)',
  maskImage: 'radial-gradient(circle at 72% 26%, #000, transparent 72%)',
} as const;

function MethodValue({ value, href, className }: { value: string; href?: string; className: string }) {
  const isRealLink = href && href !== '#';
  const isExternal = href?.startsWith('http');
  return isRealLink ? (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${className} transition-colors hover:text-teal-700`}
    >
      {value}
    </a>
  ) : (
    <p className={className}>{value}</p>
  );
}

function MethodCard({ method, feature = false }: { method: ContactMethod; feature?: boolean }) {
  const Icon = method.icon;
  return (
    <motion.article
      variants={cell}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7 ${
        feature ? 'sm:col-span-2' : ''
      }`}
    >
      {/* Teal gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white to-white"
      />
      {/* Soft corner glow, warms on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-teal-200/40 blur-2xl transition-colors duration-300 group-hover:bg-teal-300/50"
      />
      {/* Ring-ripple motif (the brand signature) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-4 h-44 w-44"
        style={rippleStyle}
      />

      <div className={`relative ${feature ? 'flex items-start gap-5' : ''}`}>
        <IconTile size="md" ring hover>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </IconTile>
        <div className={feature ? 'flex-1' : ''}>
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400 ${
              feature ? 'mt-1' : 'mt-4'
            }`}
          >
            {method.label}
          </p>
          <MethodValue
            value={method.value}
            href={method.href}
            className={`mt-1 block font-semibold text-ink-900 ${feature ? 'text-lg sm:text-xl' : 'text-base'}`}
          />
          {method.note && (
            <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{method.note}</p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function WaysToReachUs() {
  return (
    <Section className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Ways to Reach Us"
          title="Prefer to reach out directly?"
          description="The form is the easiest way to start, but you're welcome to reach us however suits you best."
          className="mb-12 sm:mb-14"
        />

        {/* Lively cards — email promoted as a wide feature, the rest in a 2×2 */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5"
        >
          <MethodCard method={primary} feature />
          {secondary.map((method) => (
            <MethodCard key={method.label} method={method} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
