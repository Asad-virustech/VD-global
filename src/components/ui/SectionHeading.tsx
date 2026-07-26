import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** Use `dark` on dark/cinematic surfaces to flip text colors. */
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const dark = tone === 'dark';

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark ? 'text-teal-300' : 'text-teal-700'
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl text-balance ${
          dark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={`mt-4 text-base leading-relaxed sm:text-lg text-balance ${
            dark ? 'text-ink-300' : 'text-ink-500'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
