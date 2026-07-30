import { motion } from 'framer-motion';

type AuthorityRingsProps = {
  /** Ordered inner→outer authority layers (foundation → compounding outcome). */
  layers: string[];
  className?: string;
};

const CX = 190;
const CY = 234;
const RADII = [42, 80, 118, 156, 190]; // inner → outer

function arcPath(r: number): string {
  return `M ${CX - r} ${CY} A ${r} ${r} 0 0 1 ${CX + r} ${CY}`;
}

/**
 * VD Global's signature visual language: concentric authority rings (the hero
 * motif) carried into content as a consulting framework — layers radiating from
 * a core of recognition out to long-term growth, each layer labelled on its
 * ring. A framework object, not a chart, not fake data.
 */
export function AuthorityRings({ layers, className = '' }: AuthorityRingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className={`relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-b from-white to-ink-50/50 p-8 shadow-card sm:p-10 ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-100/50 blur-[80px]"
      />
      <div className="relative">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
          The Authority Model
        </span>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          Authority compounds outward — from recognition at the core to lasting growth.
        </p>
      </div>

      <svg viewBox="0 0 380 250" className="relative mt-6 w-full" role="img" aria-label="Concentric authority model">
        <defs>
          <linearGradient id="ar-stroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5eead4" />
            <stop offset="1" stopColor="#0d9488" />
          </linearGradient>
        </defs>

        {/* Baseline */}
        <line x1="0" y1={CY} x2="380" y2={CY} stroke="rgb(15 23 42 / 0.08)" strokeWidth="1" />

        {RADII.map((r, i) => (
          <g key={r}>
            <path
              d={arcPath(r)}
              fill="none"
              stroke="url(#ar-stroke)"
              strokeWidth={i === 0 ? 2.5 : 1.5}
              opacity={0.9 - i * 0.09}
            />
            <circle cx={CX} cy={CY - r} r="2.5" fill="#0d9488" />
            <text
              x={CX}
              y={CY - r - 9}
              textAnchor="middle"
              className="fill-ink-800 font-heading text-[13px] font-semibold"
            >
              {layers[i]}
            </text>
          </g>
        ))}

        {/* Bright core */}
        <circle cx={CX} cy={CY} r="6" fill="#0f766e" />
        <circle cx={CX} cy={CY} r="6" fill="none" stroke="#5eead4" strokeWidth="1.5" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
