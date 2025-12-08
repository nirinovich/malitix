import { Check, Users, FileCheck, MessageSquare, Zap, Shield } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const benefits = [
  {
    icon: FileCheck,
    title: 'Le livrable concret',
    desc: 'La feature codée, le bug écrasé, l\'API intégrée qui débloque immédiatement votre business. Fini l\'attente, place à l\'action.',
    category: 'Livrable',
    isHighlight: true,
  },
  {
    icon: Users,
    title: 'Une Équipe d\'Experts "Commando" Dédiée à 100%',
    desc: 'Pas de juniors, pas de temps partiel. Nos meilleurs éléments focalisés uniquement sur votre succès pendant 14 jours. Vous n\'avez rien à gérer, on s\'occupe de tout.',
    category: 'Équipe',
    isHighlight: false,
  },
  {
    icon: Zap,
    title: 'Méthodologie "Sprint" Éprouvée',
    desc: 'Notre process unique pour couper le gras, aller droit au but et livrer en un temps record ce qui prendrait des mois en interne. Zéro perte de temps.',
    category: 'Process',
    isHighlight: false,
  },
  {
    icon: MessageSquare,
    title: 'Communication Transparente et Quotidienne',
    desc: 'Un point simple chaque jour. Vous savez exactement où on en est, sans perdre votre temps en réunions inutiles.',
    category: 'Communication',
    isHighlight: false,
  },
  {
    icon: FileCheck,
    title: 'Passation Claire et Documentation Concise',
    desc: 'On ne vous laisse pas avec une boîte noire. Le code est propre, documenté, et votre équipe peut reprendre la main facilement après notre intervention.',
    category: 'Documentation',
    isHighlight: false,
  },
  {
    icon: Shield,
    title: 'Notre Garantie Zéro Risque Béton',
    desc: 'Si on ne livre pas, vous ne payez pas. Le risque est 100% pour nous.',
    category: 'Garantie',
    isHighlight: true,
  },
];

export default function BenefitsShowcase() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/40'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              La Force d'une Armada
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Un vivier de <span className="text-[#2ca3bd]">350+ développeurs experts</span> mobilisables en 24h
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl px-4 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Nos équipes commandos prêtes à déployer pour votre succès
          </p>
        </div>

        <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-10 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que vous obtenez avec chaque Sprint Commando
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className={`group relative flex gap-3 sm:gap-4 p-5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 border-2 cursor-pointer ${
                    theme === 'dark' 
                      ? 'border-white/5 hover:border-[#2ca3bd]/50 hover:bg-white/5 hover:shadow-xl hover:shadow-[#2ca3bd]/10' 
                      : 'border-gray-200 hover:border-[#2ca3bd]/50 hover:bg-white hover:shadow-xl'
                  } ${benefit.isHighlight ? 'ring-2 ring-[#2ca3bd]/20' : ''} hover:-translate-y-1`}
                >
                  {benefit.isHighlight && (
                    <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-[#2ca3bd] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                      ⚡ Clé
                    </div>
                  )}
                  
                  <div className={`flex-shrink-0 p-2 sm:p-3 rounded-lg sm:rounded-xl h-fit transition-all duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/10 group-hover:bg-[#2ca3bd]/20' : 'bg-slate-100 group-hover:bg-slate-200/70'
                  }`}>
                    <Icon size={24} className="text-[#2ca3bd] sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-base sm:text-lg mb-2 flex items-center gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <Check size={18} className="text-[#2ca3bd] flex-shrink-0 sm:w-5 sm:h-5" />
                      {benefit.title}
                    </h4>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
