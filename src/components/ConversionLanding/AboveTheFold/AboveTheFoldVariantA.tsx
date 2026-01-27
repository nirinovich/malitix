import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const headlinePrimary = 'Arrêtez de Recruter. Commencez à Livrer.';
const headlineSecondary = 'Votre Équipe de Développement Senior, Opérationnelle dans Vos Sprints en 72h Chrono.';
const subHeadline = 'Ne perdez plus 3 mois à chasser des talents. Accédez immédiatement au top 1% des ingénieurs React Native & Web. Sans les coûts de recrutement. Sans la gestion RH. Garantie de remplacement sous 7 jours.';
const ctaLabel = 'VOIR LES PROFILS DISPONIBLES MAINTENANT';
const ctaSubtext = 'Audit de besoin gratuit - Aucune carte bancaire requise';

export default function AboveTheFoldVariantA() {
  const { theme } = useTheme();

  return (
    <section id="above-the-fold" className={`pt-28 pb-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd] border-[#2ca3bd]/30 bg-[#2ca3bd]/10">
              <Sparkles size={14} />
              Above the Fold
            </div>

            <div className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {headlinePrimary}
                <span className="block text-[#2ca3bd]">{headlineSecondary}</span>
              </h1>
              <p className={`text-lg sm:text-xl leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {subHeadline}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-base sm:text-lg font-semibold shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                {ctaLabel}
                <ArrowRight size={20} />
              </a>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                {ctaSubtext}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Zap, label: 'Démarrage en 72h' },
                { icon: Sparkles, label: 'Top 1% React Native & Web' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
                    theme === 'dark' ? 'border-white/10 bg-white/5 text-white/80' : 'border-gray-200 bg-white text-gray-700'
                  }`}
                >
                  <item.icon className="text-[#2ca3bd]" size={18} aria-hidden="true" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className={`rounded-3xl p-8 border shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/10'
                : 'bg-white border-gray-200'
            }`}>
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">Résultats rapides</div>
                  <h2 className={`text-2xl font-bold mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Vos sprints accélèrent dès la première semaine.
                  </h2>
                </div>
                <div className="grid gap-4">
                  {[
                    'Onboarding en 72h',
                    'Intégration Slack + Jira',
                    'Remplacement sous 7 jours',
                  ].map((item) => (
                    <div key={item} className={`rounded-2xl px-4 py-3 ${theme === 'dark' ? 'bg-white/5 text-white/70' : 'bg-gray-50 text-gray-700'}`}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={`rounded-2xl p-4 border ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                  <div className="text-sm font-semibold text-[#2ca3bd]">350+ ingénieurs prêts à coder</div>
                  <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                    98% de taux de rétention client
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-[#2ca3bd]/20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-8 left-4 h-24 w-24 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
