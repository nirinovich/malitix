import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const headline = 'OFFRE Q1 : LE "TEST DRIVE" SANS RISQUE';
const body = "Nous sommes tellement sûrs de la qualité de notre code que nous prenons le risque pour vous. Engagez un développeur Malitix pendant 2 semaines. S'il ne valide pas vos tickets ou ne s'intègre pas à votre culture : Vous ne payez rien. Nous le remplaçons immédiatement.";
const cta = "DÉMARRER MA PÉRIODE D'ESSAI";

export default function GrandSlamOfferVariantB() {
  const { theme } = useTheme();

  return (
    <section id="grand-slam-offer" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-orange-500/10 text-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              L'Offre Irrésistible
            </div>
            <h2 className={`mt-5 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {headline}
            </h2>
            <p className={`mt-4 text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              {body}
            </p>
          </div>

          <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
            <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
              Test Drive - Sans Risque
            </div>
            <div className={`mt-4 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Vous ne payez rien
            </div>
            <div className={`mt-2 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Si le développeur ne valide pas vos tickets ou ne s'intègre pas à votre culture.
            </div>
            <a
              href="#lead-form"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-[#2ca3bd]/30 transition-all"
            >
              {cta}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
