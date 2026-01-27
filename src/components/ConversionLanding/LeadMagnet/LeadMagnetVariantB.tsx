import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

export default function LeadMagnetVariantB() {
  const { theme } = useTheme();
  const [teamSize, setTeamSize] = useState(4);
  const monthlySavings = teamSize * 2500;
  const timeSaved = teamSize * 40;

  return (
    <section id="lead-magnet" className={`py-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Lead Magnet</div>
            <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Le slider de prix Digital Factory
            </h2>
            <p className={`mt-3 text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Ajustez la taille d'équipe et visualisez l'impact immédiat.
            </p>
          </div>

          <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'}`}>
            <div className="flex items-center gap-2 text-[#2ca3bd] text-xs uppercase tracking-[0.2em] font-semibold">
              <TrendingUp size={16} />
              Simulation
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
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className={`rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Économies mensuelles</div>
                <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {monthlySavings.toLocaleString('fr-FR')} €
                </div>
              </div>
              <div className={`rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Heures économisées</div>
                <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {timeSaved} h/mois
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
