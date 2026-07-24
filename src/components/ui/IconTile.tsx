import type { ReactNode } from 'react';

type IconTileProps = {
  /** sm = 44px (h-11), md = 48px (h-12). */
  size?: 'sm' | 'md';
  /** Inset teal ring around the tile. */
  ring?: boolean;
  /** Deepen the background on parent `.group` hover. */
  hover?: boolean;
  /** Prevent the tile from shrinking in a flex row. */
  shrink?: boolean;
  className?: string;
  children: ReactNode;
};

const sizes: Record<'sm' | 'md', string> = {
  sm: 'h-11 w-11',
  md: 'h-12 w-12',
};

/**
 * The teal icon tile used throughout the site's cards and steps. Standardizes
 * a pattern that was previously hand-written in every section.
 */
export function IconTile({
  size = 'md',
  ring = false,
  hover = false,
  shrink = false,
  className = '',
  children,
}: IconTileProps) {
  return (
    <span
      className={[
        'flex items-center justify-center rounded-xl bg-teal-50 text-teal-700',
        sizes[size],
        shrink ? 'shrink-0' : '',
        ring ? 'ring-1 ring-inset ring-teal-100' : '',
        hover ? 'transition-colors duration-300 group-hover:bg-teal-100' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
