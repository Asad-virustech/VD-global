import { Link } from 'react-router-dom';
import { FIRM } from '../../../content/site';

type LogoProps = {
  className?: string;
};

/**
 * Canonical brand mark + wordmark, linked to home. Shared by the Navbar and
 * Footer so the logo lives in exactly one place.
 */
export function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${FIRM.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M9 10.5 L16 22 L23 10.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-heading text-lg font-bold tracking-tight text-ink-900">
        {FIRM.name}
      </span>
    </Link>
  );
}
