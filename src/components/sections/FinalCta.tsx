import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { FINAL_CTA, FINAL_CTA_TRUST } from '../../../content/site';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function TrustCardItem({ icon: Icon, title, description }: (typeof FINAL_CTA_TRUST)[number]) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-colors duration-300 hover:border-teal-200 sm:p-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-ink-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </motion.div>
  );
}

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200/60 to-transparent" />
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' as const }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
          >
            {FINAL_CTA.label}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance whitespace-pre-line"
          >
            {FINAL_CTA.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
            className="mt-6 space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
          >
            {FINAL_CTA.description.split('\n\n').map((para) => (
              <p key={para} className="text-balance">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button as="link" to={FINAL_CTA.primaryHref} size="lg" variant="primary">
              {FINAL_CTA.primaryButton}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="link" to={FINAL_CTA.secondaryHref} size="lg" variant="outline">
              <BookOpen className="h-4 w-4" />
              {FINAL_CTA.secondaryButton}
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-14 grid max-w-5xl gap-4 sm:mt-16 sm:grid-cols-3"
        >
          {FINAL_CTA_TRUST.map((card) => (
            <TrustCardItem key={card.title} {...card} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
