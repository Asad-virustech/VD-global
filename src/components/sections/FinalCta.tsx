import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { CtaBand } from './CtaBand';
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
      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-teal-400 ring-1 ring-inset ring-white/10">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{description}</p>
      </div>
    </motion.div>
  );
}

export function FinalCta() {
  return (
    <CtaBand
      eyebrow={FINAL_CTA.label}
      title={FINAL_CTA.title}
      description={FINAL_CTA.description}
      primary={{ label: FINAL_CTA.primaryButton, to: FINAL_CTA.primaryHref }}
      secondary={{ label: FINAL_CTA.secondaryButton, to: FINAL_CTA.secondaryHref, icon: BookOpen }}
    >
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
    </CtaBand>
  );
}
