import { ArrowRight, Target } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const headlinePrimary = 'Arrêtez de Recruter. Commencez à Livrer.';
const headlineSecondary = 'Votre Équipe de Développement Senior, Opérationnelle dans Vos Sprints en 72h Chrono.';
const subHeadline = 'Ne perdez plus 3 mois à chasser des talents. Accédez immédiatement au top 1% des ingénieurs React Native & Web. Sans les coûts de recrutement. Sans la gestion RH. Garantie de remplacement sous 7 jours.';
const ctaLabel = 'VOIR LES PROFILS DISPONIBLES MAINTENANT';
const ctaSubtext = 'Audit de besoin gratuit - Aucune carte bancaire requise';

export default function AboveTheFoldVariantB() {
  const { theme } = useTheme();

  return (
    <section id="above-the-fold" className={`pt-28 pb-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
          theme === 'dark' ? 'bg-white/10 text-white/70' : 'bg-white text-gray-700'
        }`}>
          <Target size={14} className="text-[#2ca3bd]" />
          Above the Fold
        </div>
        <h1 className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {headlinePrimary}
          <span className="block text-[#2ca3bd]">{headlineSecondary}</span>
        </h1>
        <p className={`mt-6 text-lg sm:text-xl leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          {subHeadline}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-base sm:text-lg font-semibold shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            {ctaLabel}
            <ArrowRight size={20} />
          </a>
          <span className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
            {ctaSubtext}
          </span>
        </div>

        <div className={`mt-12 grid gap-4 sm:grid-cols-3 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          {['Démarrage express en 72h', 'Top 1% React Native & Web', 'Remplacement garanti en 7 jours'].map((item) => (
            <div
              key={item}
              className={`rounded-2xl px-4 py-4 border ${
                theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
