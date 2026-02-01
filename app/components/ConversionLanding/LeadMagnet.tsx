import { useState } from "react";
import { Calculator, Clock, Sparkles } from "lucide-react";
import { CONVERSION_LANDING_LEAD_MAGNET } from "~/utils/constants";
import { PackSelector } from "./LeadMagnet/PackSelector";
import { getPricingInfo, type PackKey } from "./LeadMagnet/pricing";

export function LeadMagnet() {
  const [pack, setPack] = useState<PackKey>("Growth");
  const [durationInWeeks, setDurationInWeeks] = useState(8);

  const { tjm, total, durationInDays, discountPercentage, basePrice } = getPricingInfo(pack, durationInWeeks);

  return (
    <section id="lead-magnet" className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border p-8 lg:p-10 border-[var(--border-primary)] bg-[var(--surface-elevated)]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
              <Calculator size={16} />
              {CONVERSION_LANDING_LEAD_MAGNET.eyebrow}
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              <span className="text-[#2ca3bd]">Calculateur</span> de prix interactif
            </h2>
            <p className="mt-3 text-lg text-[var(--text-secondary)]">
              {CONVERSION_LANDING_LEAD_MAGNET.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="space-y-8">
              <PackSelector selectedPack={pack} onSelectPack={setPack} />

              <div>
                <label className="flex items-center text-sm font-semibold text-[var(--text-secondary)]">
                  <Clock size={16} className="text-[#2ca3bd] mr-2" />
                  {CONVERSION_LANDING_LEAD_MAGNET.durationLabel} :
                  <span className="ml-2 text-[#2ca3bd] font-bold">
                    {durationInWeeks} {durationInWeeks === 1 ? "semaine" : "semaines"}
                  </span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={120}
                  value={durationInWeeks}
                  onChange={(event) => setDurationInWeeks(Number(event.target.value))}
                  className="mt-4 w-full accent-[#2ca3bd]"
                />
                <div className="mt-2 flex justify-between text-xs text-[var(--text-tertiary)]">
                  <span>1 sem</span>
                  <span>120 sem</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-6 text-white bg-gradient-to-br from-[#2ca3bd] to-[#248fa5] shadow-2xl shadow-[#2ca3bd]/30">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
                <Sparkles size={16} />
                {CONVERSION_LANDING_LEAD_MAGNET.estimateLabel}
              </div>
              <div className="mt-6 text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">{CONVERSION_LANDING_LEAD_MAGNET.tjmLabel}</div>
                <div className="text-4xl font-bold mt-2">
                  {tjm.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </div>
                <div className="text-xs text-white/70 mt-1">
                  {CONVERSION_LANDING_LEAD_MAGNET.basePriceLabel}: {basePrice.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}/j
                </div>
              </div>

              <div className="mt-6 border-t border-white/30 pt-4 space-y-2 text-sm text-white/90">
                <div className="flex justify-between">
                  <span>Remise appliquée</span>
                  <span className="font-semibold bg-white/20 px-2 py-0.5 rounded-full">
                    {discountPercentage.toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Projet total ({durationInDays} jours)</span>
                  <span className="font-semibold">
                    {total.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                  </span>
                </div>
              </div>

              <a
                href="#lead-form"
                className="mt-6 block text-center bg-white text-[#2ca3bd] font-semibold py-3 rounded-full hover:scale-[1.02] transition-all cursor-pointer"
              >
                {CONVERSION_LANDING_LEAD_MAGNET.actionLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
