/**
 * Variant A — SOC Dashboard Illustration
 *
 * Extracted from the original SOCMonitoring.tsx hero right column.
 * Shows a live-looking SOC dashboard: stats grid (4 cards), bar chart,
 * and a pulsing "live" dot. Uses semantic tokens throughout.
 */
export default function SOCHeroVariantA_Dashboard() {
  return (
    <div className="relative" aria-hidden="true" role="presentation">
      {/* Glow behind card */}
      <div className="absolute -inset-6 bg-[var(--brand-primary)]/10 rounded-3xl blur-2xl" />

      <div className="relative bg-[var(--surface-elevated)] backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl p-8 space-y-6 shadow-2xl">
        {/* Dashboard header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[var(--text-primary)]">SOC Dashboard — Live</span>
          </div>
          <span className="text-xs text-[var(--text-tertiary)]">Temps réel</span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Alertes traitées', value: '2,847', change: '+12%', up: true },
            { label: 'Temps moyen', value: '< 15min', change: '-34%', up: false },
            { label: 'SLA respecté', value: '99.7%', change: '+2.1%', up: true },
            { label: 'Coût / alerte', value: '17 €', change: '-56%', up: false },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-4 hover:border-[var(--brand-primary)]/40 transition-all duration-300"
            >
              <p className="text-xs text-[var(--text-tertiary)] mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</p>
              <p className={`text-xs font-semibold mt-1 ${stat.up ? 'text-emerald-400' : 'text-[var(--brand-primary)]'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-[var(--text-secondary)]">Économies mensuelles</p>
          <div className="flex items-end gap-1.5 h-16">
            {[35, 52, 48, 65, 58, 72, 80, 75, 88, 92, 85, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[var(--brand-primary)] rounded-t-sm transition-all duration-500 hover:bg-[var(--brand-primary-light)]"
                style={{
                  height: `${h}%`,
                  opacity: 0.4 + (i / 12) * 0.6,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-[var(--text-muted)]">
            <span>Jan</span>
            <span>Déc</span>
          </div>
        </div>
      </div>
    </div>
  );
}
