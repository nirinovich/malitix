import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const headline = 'OFFRE Q1 : LE "TEST DRIVE" SANS RISQUE';
const body = "Nous sommes tellement sûrs de la qualité de notre code que nous prenons le risque pour vous. Engagez un développeur Malitix pendant 2 semaines. S'il ne valide pas vos tickets ou ne s'intègre pas à votre culture : Vous ne payez rien. Nous le remplaçons immédiatement.";
const cta = "DÉMARRER MA PÉRIODE D'ESSAI";

export default function GrandSlamOfferVariantA() {
  const { theme } = useTheme();

  return (
    <section id="grand-slam-offer" className={`py-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border p-10 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'}`}>
          <div className="flex items-center gap-3 text-[#2ca3bd] text-xs uppercase tracking-[0.2em] font-semibold">
            <Sparkles size={16} />
            L'Offre Irrésistible
          </div>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {headline}
          </h2>
          <p className={`mt-4 text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            {body}
          </p>
          <div className="mt-8">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 text-base sm:text-lg font-semibold shadow-xl shadow-[#2ca3bd]/30 transition-all duration-300"
            >
              {cta}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
