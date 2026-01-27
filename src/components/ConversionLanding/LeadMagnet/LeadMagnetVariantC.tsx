import { useState } from 'react';
import { Sliders } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

export default function LeadMagnetVariantC() {
  const { theme } = useTheme();
  const [teamSize, setTeamSize] = useState(5);
  const monthlySavings = teamSize * 2500;

  return (
    <section id="lead-magnet" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center gap-2 text-[#2ca3bd] text-xs uppercase tracking-[0.2em] font-semibold">
            <Sliders size={16} />
            Lead Magnet
          </div>
          <h2 className={`mt-4 text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Le slider de prix Digital Factory
          </h2>
          <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Ajustez la taille d'équipe et visualisez l'impact immédiatement.
          </p>

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

          <div className={`mt-6 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {monthlySavings.toLocaleString('fr-FR')} € / mois
          </div>
        </div>
      </div>
    </section>
  );
}
