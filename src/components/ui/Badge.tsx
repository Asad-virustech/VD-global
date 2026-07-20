import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: 'teal' | 'neutral';
};

export function Badge({ children, className = '', tone = 'teal' }: BadgeProps) {
  const tones = {
    teal: 'bg-teal-50 text-teal-700 border-teal-100',
    neutral: 'bg-ink-100 text-ink-600 border-ink-200',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
