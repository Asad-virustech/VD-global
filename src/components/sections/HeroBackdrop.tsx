/**
 * The hero backdrop: large concentric teal rings radiating from a soft light
 * source on the dark surface — a clean, premium, geometric composition (in the
 * spirit of big concentric-circle hero art) plus film grain and a vignette.
 * Each page places its rings + light from a different point.
 */

type VariantConfig = { center: string };

const VARIANTS: VariantConfig[] = [
  { center: '82% 14%' },
  { center: '16% 18%' },
  { center: '60% 8%' },
  { center: '40% 24%' },
];

export function HeroBackdrop({ variant = 0 }: { variant?: number }) {
  const { center } = VARIANTS[variant % VARIANTS.length];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink-950" aria-hidden="true">
      {/* Concentric rings — thin teal circles + subtle tonal bands between them */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-radial-gradient(circle at ${center}, rgba(45,212,191,0.09) 0px, rgba(45,212,191,0.09) 1.5px, transparent 1.5px, transparent 150px),
            repeating-radial-gradient(circle at ${center}, rgba(255,255,255,0.016) 0px, rgba(255,255,255,0.016) 75px, transparent 75px, transparent 150px)
          `,
          WebkitMaskImage: 'radial-gradient(ellipse 100% 95% at 52% 42%, #000 42%, transparent 92%)',
          maskImage: 'radial-gradient(ellipse 100% 95% at 52% 42%, #000 42%, transparent 92%)',
        }}
      />

      {/* Soft light source at the centre of the rings */}
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(46% 42% at ${center}, rgba(20,184,166,0.28) 0%, transparent 62%)` }}
      />

      {/* A second, cooler wash from the opposite side for depth */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 60% at 5% 105%, rgba(13,148,136,0.14) 0%, transparent 55%)' }}
      />

      {/* Film grain */}
      <div className="absolute inset-0 bg-noise opacity-50" />

      {/* Cinematic vignette + bottom fade */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(120% 100% at 50% 36%, transparent 54%, rgba(2,6,23,0.6) 100%)' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  );
}
