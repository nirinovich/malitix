import { ArrowRight, Target } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const headlinePrimary = 'Arrêtez de Recruter. Commencez à Livrer.';
const headlineSecondary = 'Votre équipe senior opérationnelle en 72h.';
const subHeadline = 'Accédez au top 1% React Native & Web sans coût de recrutement, sans gestion RH, avec remplacement garanti.';
const ctaLabel = 'VOIR LES PROFILS DISPONIBLES MAINTENANT';
const ctaSubtext = 'Audit de besoin gratuit - Aucune carte bancaire requise';

export default function AboveTheFoldVariantB() {
  const { theme } = useTheme();

  return (
    <section id="above-the-fold" className={`pt-28 pb-20 overflow-hidden ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'bg-white/10 text-white/70' : 'bg-white text-gray-700'
            }`}>
              <Target size={14} className="text-[#2ca3bd]" />
              Livraison express
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
          </div>

          <div className="relative">
            <div className={`rounded-3xl border p-8 shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
              theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
            }`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-[#2ca3bd]/15 flex items-center justify-center">
                    <Target className="text-[#2ca3bd]" size={20} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Prêts en 72h
                    </div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                      Intégration Slack + Jira
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  {['Top 1% React Native & Web', 'Remplacement garanti en 7 jours', 'Pilotage par Tech Lead'].map((item) => (
                    <div
                      key={item}
                      className={`rounded-2xl px-4 py-3 border transition-all duration-300 ${
                        theme === 'dark'
                          ? 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-white'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: '350+', value: 'Ingénieurs prêts à coder' },
                    { label: '98%', value: 'Taux de rétention client' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-2xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'}`}
                    >
                      <div className="text-xl font-bold text-[#2ca3bd]">{stat.label}</div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-6 h-24 w-24 rounded-full bg-[#2ca3bd]/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
