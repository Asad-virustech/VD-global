import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'glass';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  // Liquid-glass teal — translucent + blurred with a bright inner edge, still
  // legible (white text over saturated teal) on both dark and light surfaces.
  primary:
    'border border-white/15 bg-gradient-to-b from-teal-500/90 to-teal-700/90 text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.22)] backdrop-blur-md hover:from-teal-400/90 hover:to-teal-600/90 hover:border-white/25 hover:shadow-teal-glow active:scale-[0.98]',
  secondary:
    'bg-gradient-to-b from-ink-800/90 to-ink-900/90 text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.12)] backdrop-blur-md hover:from-ink-700/90 hover:to-ink-900/90 active:scale-[0.98]',
  ghost: 'text-ink-700 hover:bg-ink-100 hover:text-ink-900',
  outline:
    'border border-ink-200 bg-white/70 text-ink-800 backdrop-blur-md hover:border-teal-300 hover:bg-teal-50/80 hover:text-teal-800 active:scale-[0.98]',
  glass:
    'border border-white/20 bg-white/5 text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.10)] backdrop-blur-md hover:border-white/30 hover:bg-white/10 active:scale-[0.98]',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: 'button';
  };

type ButtonAsLink = CommonProps & {
  as: 'link';
  to: string;
};

type ButtonAsAnchor = CommonProps & {
  as: 'a';
  href: string;
  /** Force a download instead of navigation (optionally sets the filename). */
  download?: boolean | string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className = '' } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.as === 'link') {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if (props.as === 'a') {
    return (
      <a
        href={props.href}
        className={classes}
        download={props.download}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
