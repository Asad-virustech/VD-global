import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Badge } from '../ui/Badge';

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  badge?: string;
};

export function PageHeader({ eyebrow, title, description, badge }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-white">
      <div className="absolute inset-0 bg-radial-teal" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="container-px relative py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {badge && (
            <Badge className="mb-4" tone="teal">
              {badge}
            </Badge>
          )}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
