import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { IconTile } from '../../ui/IconTile';
import { HOW_WE_WORK } from '../../../../content/contact';
import type { WorkStep } from '../../../../content/contact';

const flow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const connector: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

function StepCard({ icon: Icon, title, description, index }: WorkStep & { index: number }) {
  return (
    <motion.article
      variants={step}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7"
    >
      <IconTile size="md" ring>
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </IconTile>
      <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
        Step {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-1.5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.article>
  );
}

export function HowWeWork() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How We Work"
          title="A Conversation, Then a Plan."
          description="No forms disappearing into a void. Here's the simple, transparent path from first hello to practical recommendations."
          className="mb-12 sm:mb-14"
        />

        {/* Desktop: horizontal with connectors */}
        <motion.div
          variants={flow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="hidden items-stretch gap-3 md:flex"
          aria-label="How we work"
        >
          {HOW_WE_WORK.map((workStep, i) => (
            <div key={workStep.title} className="flex flex-1 items-center">
              <div className="flex-1">
                <StepCard index={i} {...workStep} />
              </div>
              {i < HOW_WE_WORK.length - 1 && (
                <motion.span
                  variants={connector}
                  aria-hidden="true"
                  className="mx-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 lg:mx-3"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile: vertical with connectors */}
        <motion.div
          variants={flow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-stretch gap-3 md:hidden"
          aria-label="How we work"
        >
          {HOW_WE_WORK.map((workStep, i) => (
            <div key={workStep.title} className="flex flex-col items-stretch">
              <StepCard index={i} {...workStep} />
              {i < HOW_WE_WORK.length - 1 && (
                <motion.span
                  variants={connector}
                  aria-hidden="true"
                  className="mx-auto my-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600"
                >
                  <ArrowDown className="h-4 w-4" strokeWidth={2} />
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
