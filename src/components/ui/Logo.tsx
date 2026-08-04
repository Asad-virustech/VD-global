import { Link } from 'react-router-dom';
import { FIRM } from '../../../content/site';
import { LogoMark } from './LogoMark';

type LogoProps = {
  className?: string;
  /** Render the wordmark in white for dark/transparent surfaces. */
  light?: boolean;
};

/**
 * Canonical brand mark + wordmark, linked to home. Shared by the Navbar and
 * Footer so the logo lives in exactly one place.
 */
export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${FIRM.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
        <LogoMark className="h-6 w-6" />
      </span>
      <span
        className={`font-heading text-lg font-bold tracking-tight ${light ? 'text-white' : 'text-ink-900'}`}
      >
        {FIRM.name}
      </span>
    </Link>
  );
}
