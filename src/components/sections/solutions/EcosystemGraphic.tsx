import { motion } from 'framer-motion';

// An interconnected web of authority pillars, all connecting back to a central
// "Authority" hub. Decorative — reuses the homepage graphic's visual language
// (teal gradients, dashed ring, floating pills) rather than inventing a new one.
const NODES = [
  { label: 'Strategy', angle: -90 },
  { label: 'PR', angle: -30 },
  { label: 'Wikipedia', angle: 30 },
  { label: 'Positioning', angle: 90 },
  { label: 'Reputation', angle: 150 },
  { label: 'Growth', angle: 210 },
];

const SIZE = 460;
const CENTER = SIZE / 2;
const RADIUS = 158;

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

const points = NODES.map((n) => polar(n.angle, RADIUS));

export function EcosystemGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="relative mx-auto w-full max-w-[460px]"
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-auto w-full"
        role="img"
        aria-label="An interconnected ecosystem of authority pillars connecting to a central authority hub"
      >
        <defs>
          <radialGradient id="eco-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(20 184 166 / 0.22)" />
            <stop offset="70%" stopColor="rgb(20 184 166 / 0)" />
          </radialGradient>
          <linearGradient id="eco-hub" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="eco-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(20 184 166 / 0.35)" />
            <stop offset="100%" stopColor="rgb(13 148 136 / 0.15)" />
          </linearGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r={RADIUS + 32} fill="url(#eco-glow)" />

        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="url(#eco-ring)"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.7"
        />

        {/* Interconnecting chords between adjacent pillars */}
        {points.map((p, i) => {
          const next = points[(i + 1) % points.length];
          return (
            <line
              key={`edge-${i}`}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke="rgb(13 148 136 / 0.18)"
              strokeWidth="1"
            />
          );
        })}

        {/* Spokes from the central hub */}
        {points.map((p, i) => (
          <line
            key={`spoke-${i}`}
            x1={CENTER}
            y1={CENTER}
            x2={p.x}
            y2={p.y}
            stroke="rgb(13 148 136 / 0.2)"
            strokeWidth="1"
          />
        ))}

        <circle cx={CENTER} cy={CENTER} r="46" fill="url(#eco-hub)" opacity="0.12" />
        <circle cx={CENTER} cy={CENTER} r="34" fill="url(#eco-hub)" />
        <text
          x={CENTER}
          y={CENTER}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-white"
          style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}
        >
          Authority
        </text>
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {points.map((p, i) => {
          const left = `${(p.x / SIZE) * 100}%`;
          const top = `${(p.y / SIZE) * 100}%`;
          return (
            <motion.div
              key={NODES[i].label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.4 + i * 0.1 },
                y: {
                  duration: 5,
                  delay: i * 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                },
              }}
              style={{ left, top }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex items-center gap-1.5 rounded-full border border-teal-200/70 bg-white/90 px-3 py-1.5 shadow-card backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                <span className="whitespace-nowrap text-[11px] font-semibold text-ink-700">
                  {NODES[i].label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
