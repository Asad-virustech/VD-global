import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { IconTile } from '../../ui/IconTile';
import { CONTACT_METHODS } from '../../../../content/contact';
import type { ContactMethod } from '../../../../content/contact';

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function MethodCard({ icon: Icon, label, value, href, note, placeholder }: ContactMethod) {
  const isRealLink = href && href !== '#';

  return (
    <motion.article
      variants={card}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-colors duration-300 hover:border-teal-200"
    >
      <div className="flex items-center justify-between">
        <IconTile size="md" hover>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </IconTile>
        {placeholder && (
          <span className="rounded-full border border-ink-200 bg-ink-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-400">
            Placeholder
          </span>
        )}
      </div>

      <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">{label}</h3>
      {isRealLink ? (
        <a
          href={href}
          className="mt-1 inline-block text-base font-semibold text-ink-900 transition-colors hover:text-teal-700"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-base font-semibold text-ink-900">{value}</p>
      )}

      {note && <p className="mt-2 text-sm leading-relaxed text-ink-500">{note}</p>}
    </motion.article>
  );
}

export function WaysToReachUs() {
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

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {CONTACT_METHODS.map((method) => (
            <MethodCard key={method.label} {...method} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
