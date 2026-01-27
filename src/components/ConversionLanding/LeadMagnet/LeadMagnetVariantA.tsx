import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

export default function LeadMagnetVariantA() {
  const { theme } = useTheme();
  const [teamSize, setTeamSize] = useState(3);
  const monthlySavings = teamSize * 2500;

  return (
    <section id="lead-magnet" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Lead Magnet</div>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Simulez vos économies en quelques secondes
          </h2>
          <p className={`mt-3 text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Le slider de prix (Digital Factory) pour estimer votre ROI.
          </p>
        </div>

        <div className={`mt-10 rounded-3xl border p-8 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center gap-3 text-[#2ca3bd]">
            <Calculator size={20} />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">Simulation</span>
          </div>

          <div className="mt-6">
            <label className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Taille d'équipe cible
            </label>
            <input
              type="range"
              min={1}
              max={10}
              value={teamSize}
              onChange={(event) => setTeamSize(Number(event.target.value))}
              className="mt-4 w-full accent-[#2ca3bd]"
            />
            <div className={`mt-2 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              {teamSize} développeur(s)
            </div>
          </div>

          <div className={`mt-6 rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'}`}>
            <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Économies mensuelles estimées
            </div>
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {monthlySavings.toLocaleString('fr-FR')} €
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
