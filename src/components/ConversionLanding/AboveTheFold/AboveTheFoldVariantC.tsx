import { ArrowRight, Rocket, ShieldCheck, Users } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const headlinePrimary = 'Arrêtez de Recruter. Commencez à Livrer.';
const headlineSecondary = 'Votre équipe senior opérationnelle en 72h.';
const subHeadline = 'Accédez au top 1% React Native & Web sans coût de recrutement, sans gestion RH, avec remplacement garanti.';
const ctaLabel = 'VOIR LES PROFILS DISPONIBLES MAINTENANT';
const ctaSubtext = 'Audit de besoin gratuit - Aucune carte bancaire requise';

export default function AboveTheFoldVariantC() {
  const { theme } = useTheme();

  return (
    <section id="above-the-fold" className={`pt-28 pb-20 overflow-hidden ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div className="space-y-6">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {headlinePrimary}
              <span className="block text-[#2ca3bd]">{headlineSecondary}</span>
            </h1>
            <p className={`text-lg sm:text-xl leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              {subHeadline}
            </p>

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

          <div className="grid gap-4">
            {[
              { icon: Rocket, title: 'Démarrage en 72h', desc: 'Une équipe senior prête à livrer rapidement.' },
              { icon: Users, title: 'Top 1% des ingénieurs', desc: 'React Native & Web, déjà validés.' },
              { icon: ShieldCheck, title: 'Garantie 7 jours', desc: 'Remplacement immédiat si besoin.' },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 flex gap-4 transition-all duration-500 hover:-translate-y-1 ${
                  theme === 'dark' ? 'border-white/10 bg-white/5 text-white/70' : 'border-gray-200 bg-white text-gray-700'
                }`}
              >
                <item.icon className="text-[#2ca3bd]" size={24} aria-hidden="true" />
                <div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </div>
                  <div className="text-sm mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
            <div className={`rounded-2xl border p-5 transition-all duration-500 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[#2ca3bd]/15 flex items-center justify-center">
                  <ShieldCheck className="text-[#2ca3bd]" size={20} />
                </div>
                <div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Sécurité opérationnelle
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Tech Lead dédié + reporting hebdo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
