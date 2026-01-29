import { useState } from 'react';
import { Calculator, Clock, Sparkles } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import PackSelector from './PackSelector';
import { getPricingInfo, type PackKey } from './pricing';

export default function LeadMagnetVariantA() {
  const { theme } = useTheme();
  const [pack, setPack] = useState<PackKey>('Growth');
  const [durationInWeeks, setDurationInWeeks] = useState(8);

  const { tjm, total, durationInDays, discountPercentage, basePrice } = getPricingInfo(pack, durationInWeeks);

  return (
    <section id="lead-magnet" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border p-8 lg:p-10 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
              <Calculator size={16} />
              Simulation ROI
            </div>
            <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-[#2ca3bd]">Calculateur</span> de prix interactif
            </h2>
            <p className={`mt-3 text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Choisissez votre pack et la durée pour estimer votre budget en temps réel.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="space-y-8">
              <PackSelector selectedPack={pack} onSelectPack={setPack} />

              <div>
                <label className={`flex items-center text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  <Clock size={16} className="text-[#2ca3bd] mr-2" />
                  Durée du projet :
                  <span className="ml-2 text-[#2ca3bd] font-bold">
                    {durationInWeeks} {durationInWeeks === 1 ? 'semaine' : 'semaines'}
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
                <div className={`mt-2 flex justify-between text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                  <span>1 sem</span>
                  <span>120 sem</span>
                </div>
              </div>
            </div>

            <div className={`rounded-3xl p-6 text-white bg-gradient-to-br from-[#2ca3bd] to-[#248fa5] shadow-2xl shadow-[#2ca3bd]/30`}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
                <Sparkles size={16} />
                Votre estimation
              </div>
              <div className="mt-6 text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">TJM après remise</div>
                <div className="text-4xl font-bold mt-2">
                  {tjm.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </div>
                <div className="text-xs text-white/70 mt-1">
                  Prix de base: {basePrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}/j
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
                    {total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                  </span>
                </div>
              </div>

              <a
                href="#lead-form"
                className="mt-6 block text-center bg-white text-[#2ca3bd] font-semibold py-3 rounded-full hover:scale-[1.02] transition-all cursor-pointer"
              >
                🚀 Je me lance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
