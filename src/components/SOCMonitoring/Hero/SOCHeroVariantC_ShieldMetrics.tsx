/**
 * Variant C — Animated Shield & Metrics
 *
 * Inline SVG shield with concentric rings and a rotating scan line,
 * flanked by 3 animated stat counters. All motion is gated by
 * the `usePrefersReducedMotion` hook.
 */
import { useEffect, useState, useRef } from 'react';
import { Shield } from 'lucide-react';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';

/* ─── Animated Counter (local — mirrors the pattern already in SOCMonitoring.tsx) ─── */
function useAnimatedCounter(end: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const startTime = performance.now();
    let raf: number;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return count;
}

/* ─── Data ─── */
const metrics = [
  { value: 2847, suffix: '', label: 'Alertes traitées' },
  { value: 15, suffix: ' min', label: 'Temps moyen' },
  { value: 99, suffix: '.7%', label: 'SLA respecté' },
];

export default function SOCHeroVariantC_ShieldMetrics() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative flex flex-col items-center gap-8" aria-hidden="true" role="presentation">
      {/* Glow behind shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--brand-primary)]/15 rounded-full blur-[80px]" />

      {/* Shield container */}
      <div className="relative w-56 h-56 flex items-center justify-center">
        {/* Concentric rings */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          {/* Outer ring */}
          <circle cx="100" cy="100" r="96" stroke="var(--border-secondary)" strokeWidth="1" opacity="0.5" />
          {/* Middle ring */}
          <circle cx="100" cy="100" r="75" stroke="var(--brand-primary)" strokeWidth="1.5" opacity="0.3" />
          {/* Inner ring */}
          <circle cx="100" cy="100" r="54" stroke="var(--brand-primary)" strokeWidth="2" opacity="0.5" />

          {/* Scan line — rotating arc */}
          <circle
            cx="100"
            cy="100"
            r="85"
            stroke="var(--brand-primary)"
            strokeWidth="2"
            strokeDasharray="40 494"
            strokeLinecap="round"
            opacity="0.7"
            className={reducedMotion ? '' : 'animate-[spin_4s_linear_infinite]'}
            style={{ transformOrigin: '100px 100px' }}
          />

          {/* Small dots on mid ring */}
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const cx = 100 + 75 * Math.cos(rad);
            const cy = 100 + 75 * Math.sin(rad);
            return (
              <circle
                key={deg}
                cx={cx}
                cy={cy}
                r="3"
                fill="var(--brand-primary)"
                opacity="0.5"
              />
            );
          })}
        </svg>

        {/* Center shield icon */}
        <div className={`relative z-10 p-5 rounded-2xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30 ${reducedMotion ? '' : 'animate-pulse-subtle'}`}>
          <Shield size={48} className="text-[var(--brand-primary)]" />
        </div>
      </div>

      {/* Stat counters row */}
      <div className="grid grid-cols-3 gap-4 w-full">
        {metrics.map((m) => (
          <MetricCard key={m.label} metric={m} reducedMotion={reducedMotion} />
        ))}
      </div>
    </div>
  );
}

function MetricCard({ metric, reducedMotion }: { metric: typeof metrics[number]; reducedMotion: boolean }) {
  const count = useAnimatedCounter(metric.value, reducedMotion ? 0 : 1400);

  return (
    <div className="text-center rounded-xl border border-[var(--border-primary)] bg-[var(--surface-elevated)] backdrop-blur-md px-3 py-4">
      <div className="text-2xl font-bold text-[var(--text-primary)]">
        {reducedMotion ? metric.value : count}
        {metric.suffix}
      </div>
      <div className="text-[11px] text-[var(--text-muted)] mt-1">{metric.label}</div>
    </div>
  );
}
