import type { ReactNode } from 'react';

/**
 * The VD Globals signature mark — a concentric-ring glyph, the brand's visual DNA
 * in miniature. Recurs on section labels across the whole site so a section is
 * recognisable as VD Globals without a logo. Inherits colour via `currentColor`.
 */
export function RingMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1" opacity="0.65" />
      <circle cx="8" cy="8" r="1.25" fill="currentColor" />
    </svg>
  );
}

type EyebrowProps = {
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

/**
 * The canonical editorial section label: the ring mark + a tracked uppercase
 * micro-label. One shared component so the signature is identical everywhere.
 */
export function Eyebrow({ children, tone = 'light', className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === 'dark' ? 'text-teal-300' : 'text-teal-700'
      } ${className}`}
    >
      <RingMark className="h-3.5 w-3.5 shrink-0" />
      {children}
    </span>
  );
}
