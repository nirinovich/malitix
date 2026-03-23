/**
 * Variant D — Dramatic Before / After Transformation
 *
 * A visually striking split illustration with:
 * - SVG arc gauges showing metric contrast (red → green)
 * - Central lightning-bolt divider implying transformation
 * - Animated progress bars and bold numbers
 * - Glow effects per panel for dramatic contrast
 */
import { useEffect, useState, useRef } from 'react';
import { Zap } from 'lucide-react';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';

/* ─── Animated counter ─── */
function useAnimatedCounter(end: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const t0 = performance.now();
    let raf: number;
    const step = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return count;
}

/* ─── SVG Arc Gauge ─── */
function ArcGauge({
  percent,
  color,
  trackColor,
  size = 72,
  strokeWidth = 6,
  animated,
}: {
  percent: number;
  color: string;
  trackColor: string;
  size?: number;
  strokeWidth?: number;
  animated: boolean;
}) {
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={trackColor}
        strokeWidth={strokeWidth}
        opacity={0.2}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={animated ? offset : circumference}
        style={animated ? { transition: 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)' } : undefined}
      />
    </svg>
  );
}

/* ─── Data ─── */
const beforeMetrics = [
  { label: 'Budget gaspillé', value: 42, unit: 'K€', pct: 78, barPct: 85 },
  { label: 'Temps perdu', value: 20, unit: '%', pct: 60, barPct: 70 },
  { label: 'SLA tenu', value: 72, unit: '%', pct: 72, barPct: 72 },
];

const afterMetrics = [
  { label: 'Économies', value: 21, unit: 'K€', pct: 95, barPct: 50 },
  { label: 'Productivité', value: 20, unit: '%', pct: 90, barPct: 92 },
  { label: 'SLA garanti', value: 99, unit: '.7%', pct: 99, barPct: 99 },
];

export default function SOCHeroVariantD_BeforeAfter() {
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const animate = mounted && !reducedMotion;

  return (
    <div className="relative" aria-hidden="true" role="presentation">
      {/* Background glows */}
      <div className="absolute -inset-8 rounded-3xl blur-3xl pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/8 rounded-l-3xl" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/8 rounded-r-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[var(--border-primary)] shadow-2xl bg-[var(--surface-elevated)]">
        {/* ─── Top header bar ─── */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-primary)] bg-[var(--bg-primary)]/50">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">IMPACT ANALYSIS</span>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr]">
          {/* ── BEFORE Panel ── */}
          <div className="p-5 space-y-4 relative">
            {/* Red ambient glow */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/10 rounded-full blur-[60px]" />

            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-6 bg-red-400 rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-red-400">Avant</span>
            </div>

            {/* Metrics with gauges */}
            {beforeMetrics.map((m, i) => (
              <BeforeMetricRow
                key={m.label}
                metric={m}
                animated={animate}
                reducedMotion={reducedMotion}
                delay={i * 150}
              />
            ))}

            {/* Bottom summary */}
            <div className="pt-2 mt-2 border-t border-red-500/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[var(--text-muted)]">Score global</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-16 h-1.5 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-400 to-red-500"
                      style={{
                        width: animate ? '35%' : '0%',
                        transition: animate ? 'width 1.2s ease-out 0.6s' : 'none',
                      }}
                    />
                  </div>
                  <span className="text-xs font-bold text-red-400">D</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Central Lightning Divider ── */}
          <div className="relative flex flex-col items-center justify-center w-12">
            {/* Vertical line */}
            <div className="absolute inset-y-0 w-px bg-gradient-to-b from-red-500/30 via-[var(--brand-primary)]/50 to-emerald-500/30" />

            {/* Lightning icon */}
            <div className={`relative z-10 p-2 rounded-full bg-[var(--brand-primary)] shadow-lg shadow-[var(--brand-primary)]/40 ${!reducedMotion ? 'animate-pulse-subtle' : ''}`}>
              <Zap size={16} className="text-white fill-white" />
            </div>

            {/* Decorative dots along divider */}
            <div className="absolute top-6 w-1.5 h-1.5 rounded-full bg-red-400/60" />
            <div className="absolute top-14 w-1 h-1 rounded-full bg-[var(--brand-primary)]/40" />
            <div className="absolute bottom-14 w-1 h-1 rounded-full bg-[var(--brand-primary)]/40" />
            <div className="absolute bottom-6 w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
          </div>

          {/* ── AFTER Panel ── */}
          <div className="p-5 space-y-4 relative">
            {/* Green ambient glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px]" />

            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-6 bg-emerald-400 rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Après</span>
            </div>

            {/* Metrics with gauges */}
            {afterMetrics.map((m, i) => (
              <AfterMetricRow
                key={m.label}
                metric={m}
                animated={animate}
                reducedMotion={reducedMotion}
                delay={i * 150}
              />
            ))}

            {/* Bottom summary */}
            <div className="pt-2 mt-2 border-t border-emerald-500/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[var(--text-muted)]">Score global</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-16 h-1.5 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-[var(--brand-primary)]"
                      style={{
                        width: animate ? '95%' : '0%',
                        transition: animate ? 'width 1.2s ease-out 0.6s' : 'none',
                      }}
                    />
                  </div>
                  <span className="text-xs font-bold text-emerald-400">A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom savings banner ─── */}
        <div className="border-t border-[var(--border-primary)] bg-gradient-to-r from-[var(--brand-primary)]/5 via-[var(--brand-primary)]/10 to-[var(--brand-primary)]/5 px-5 py-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">Économie annuelle estimée</span>
            <SavingsCounter animated={animate} reducedMotion={reducedMotion} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ─── */

function BeforeMetricRow({
  metric,
  animated,
  reducedMotion,
  delay,
}: {
  metric: typeof beforeMetrics[number];
  animated: boolean;
  reducedMotion: boolean;
  delay: number;
}) {
  const count = useAnimatedCounter(metric.value, reducedMotion ? 0 : 1200);

  return (
    <div className="flex items-center gap-3">
      <ArcGauge
        percent={metric.pct}
        color="#f87171"
        trackColor="#f87171"
        size={52}
        strokeWidth={5}
        animated={animated}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-black text-red-400 tabular-nums">
            {reducedMotion ? metric.value : count}
          </span>
          <span className="text-xs font-bold text-red-400/70">{metric.unit}</span>
        </div>
        <p className="text-[10px] text-[var(--text-muted)] leading-tight">{metric.label}</p>
        {/* Mini progress bar */}
        <div className="mt-1.5 h-1 rounded-full bg-[var(--bg-primary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-red-400/60"
            style={{
              width: animated ? `${metric.barPct}%` : '0%',
              transition: animated ? `width 1s ease-out ${delay}ms` : 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function AfterMetricRow({
  metric,
  animated,
  reducedMotion,
  delay,
}: {
  metric: typeof afterMetrics[number];
  animated: boolean;
  reducedMotion: boolean;
  delay: number;
}) {
  const count = useAnimatedCounter(metric.value, reducedMotion ? 0 : 1200);

  return (
    <div className="flex items-center gap-3">
      <ArcGauge
        percent={metric.pct}
        color="#34d399"
        trackColor="#34d399"
        size={52}
        strokeWidth={5}
        animated={animated}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-black text-emerald-400 tabular-nums">
            {reducedMotion ? metric.value : count}
          </span>
          <span className="text-xs font-bold text-emerald-400/70">{metric.unit}</span>
        </div>
        <p className="text-[10px] text-[var(--text-muted)] leading-tight">{metric.label}</p>
        {/* Mini progress bar */}
        <div className="mt-1.5 h-1 rounded-full bg-[var(--bg-primary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-[var(--brand-primary)]"
            style={{
              width: animated ? `${metric.barPct}%` : '0%',
              transition: animated ? `width 1s ease-out ${delay}ms` : 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function SavingsCounter({ animated, reducedMotion }: { animated: boolean; reducedMotion: boolean }) {
  const count = useAnimatedCounter(42000, reducedMotion ? 0 : 2000);
  const displayed = reducedMotion || !animated ? '42 000' : count.toLocaleString('fr-FR');

  return (
    <div className="flex items-baseline gap-1">
      <span className="text-lg font-black text-[var(--brand-primary)] tabular-nums">+{displayed}</span>
      <span className="text-xs font-bold text-[var(--brand-primary)]/70">€</span>
    </div>
  );
}
