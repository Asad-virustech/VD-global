import { motion } from 'framer-motion';

const NODES = [
  { label: 'Recognition', angle: -90 },
  { label: 'Trust', angle: -18 },
  { label: 'Credibility', angle: 54 },
  { label: 'Media Presence', angle: 126 },
  { label: 'Authority', angle: 198 },
];

const SIZE = 460;
const CENTER = SIZE / 2;
const RADIUS = 168;
const NODE_R = 34;

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

const points = NODES.map((n) => polar(n.angle, RADIUS));

export function AuthorityFramework() {
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
        className="w-full h-auto"
        role="img"
        aria-label="Authority framework connecting recognition, trust, credibility, media presence and authority"
      >
        <defs>
          <radialGradient id="af-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(20 184 166 / 0.22)" />
            <stop offset="70%" stopColor="rgb(20 184 166 / 0)" />
          </radialGradient>
          <linearGradient id="af-node" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="af-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(20 184 166 / 0.35)" />
            <stop offset="100%" stopColor="rgb(13 148 136 / 0.15)" />
          </linearGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r={RADIUS + 30} fill="url(#af-glow)" />

        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="url(#af-ring)"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.7"
        />

        {points.map((p, i) => {
          const next = points[(i + 1) % points.length];
          return (
            <line
              key={`edge-${i}`}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke="rgb(13 148 136 / 0.22)"
              strokeWidth="1"
            />
          );
        })}

        {points.map((p, i) => (
          <line
            key={`spoke-${i}`}
            x1={CENTER}
            y1={CENTER}
            x2={p.x}
            y2={p.y}
            stroke="rgb(13 148 136 / 0.18)"
            strokeWidth="1"
          />
        ))}

        <circle cx={CENTER} cy={CENTER} r="10" fill="url(#af-node)" />
        <circle cx={CENTER} cy={CENTER} r="18" fill="none" stroke="rgb(20 184 166 / 0.4)" strokeWidth="1" />
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
