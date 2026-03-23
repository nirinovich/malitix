/**
 * Variant B — Trust Image
 *
 * Professional photograph with floating trust badges and gradient overlay.
 * Falls back to a branded gradient + shield icon if image fails to load.
 */
import { useState } from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';

const IMAGE_SRC = '/images/SOC.webp';

const trustBadges = [
  { icon: Clock, label: '24/7', sublabel: 'Monitoring' },
  { icon: CheckCircle, label: '99.7%', sublabel: 'SLA' },
  { icon: Shield, label: 'ISO', sublabel: '27001' },
];

export default function SOCHeroVariantB_TrustImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative" aria-hidden="true" role="presentation">
      {/* Glow behind card */}
      <div className="absolute -inset-6 bg-[var(--brand-primary)]/10 rounded-3xl blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-[var(--border-primary)] shadow-2xl">
        {/* Image or fallback */}
        {imgError ? (
          /* Branded gradient fallback */
          <div className="h-[420px] w-full bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 opacity-60">
              <Shield size={64} className="text-[var(--brand-primary)]" />
              <span className="text-sm font-semibold text-[var(--text-muted)]">Security Operations Center</span>
            </div>
          </div>
        ) : (
          <img
            src={IMAGE_SRC}
            alt=""
            className="h-[420px] w-full object-cover"
            onError={() => setImgError(true)}
          />
        )}

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Floating trust badges */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-3">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex-1 flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-3.5 py-2.5"
              >
                <Icon size={18} className="text-[var(--brand-primary)] flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white leading-tight">{badge.label}</div>
                  <div className="text-[10px] text-white/70 leading-tight">{badge.sublabel}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Top-right live indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-white">Live</span>
        </div>
      </div>
    </div>
  );
}
