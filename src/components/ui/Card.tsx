import type { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
  as?: 'div' | 'article';
};

export function Card({
  children,
  interactive = false,
  as: Tag = 'div',
  className = '',
  ...rest
}: CardProps) {
  const base = 'rounded-2xl border border-ink-100 bg-white shadow-card';
  const interactiveCls = interactive
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-teal-200'
    : '';

  if (interactive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <Tag className={`${base} ${interactiveCls} ${className}`} {...(rest as HTMLAttributes<HTMLElement>)}>
          {children}
        </Tag>
      </motion.div>
    );
  }

  return (
    <Tag className={`${base} ${interactiveCls} ${className}`} {...(rest as HTMLAttributes<HTMLElement>)}>
      {children}
    </Tag>
  );
}
