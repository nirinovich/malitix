import { useState } from 'react';
import { Calculator, Clock } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import PackSelector from './PackSelector';
import { getPricingInfo, type PackKey } from './pricing';

export default function LeadMagnetVariantC() {
  const { theme } = useTheme();
  const [pack, setPack] = useState<PackKey>('Growth');
  const [durationInWeeks, setDurationInWeeks] = useState(6);

  const { tjm, total, durationInDays, discountPercentage, basePrice } = getPricingInfo(pack, durationInWeeks);

  return (
    <section id="lead-magnet" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border p-8 lg:p-10 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'}`}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
              <Calculator size={16} />
              Simulation ROI
            </div>
            <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Le calculateur Digital Factory
            </h2>
            <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Visualisez votre budget en ajustant le pack et la durée.
            </p>
          </div>

          <div className="mt-10 space-y-8">
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

            <div className="grid md:grid-cols-3 gap-4">
              <div className={`rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>TJM après remise</div>
                <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {tjm.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </div>
                <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                  Prix de base: {basePrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}/j
                </div>
              </div>
              <div className={`rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Remise appliquée</div>
                <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {discountPercentage.toFixed(2)}%
                </div>
                <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                  Sur {durationInDays} jours
                </div>
              </div>
              <div className={`rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Projet total</div>
                <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </div>
              </div>
            </div>

            <a
              href="#lead-form"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-[#2ca3bd]/30 transition-all"
            >
              🚀 Je me lance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
