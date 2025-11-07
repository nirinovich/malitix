import { Check, Users, FileCheck, MessageSquare, Zap, Shield, ArrowRight } from 'lucide-react';
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

// ==========================================
// VARIANT A: Minimaliste & Élégant
// ==========================================
export function PricingGridVariantA() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            La Force d'une Armada
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Un vivier de <span className="text-[#2ca3bd]">650+ développeurs experts</span> mobilisables en 24h
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Nos équipes commandos prêtes à déployer pour votre succès
          </p>
        </div>

        <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-10 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que vous obtenez avec chaque Sprint Commando
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className={`group flex gap-4 p-6 rounded-2xl transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'hover:bg-white/5 hover:shadow-lg hover:shadow-[#2ca3bd]/5' 
                      : 'hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`flex-shrink-0 p-3 rounded-xl h-fit transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/10 group-hover:bg-[#2ca3bd]/20' : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                    <Icon size={28} className="text-[#2ca3bd]" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg mb-2 flex items-center gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <Check size={20} className="text-[#2ca3bd] flex-shrink-0" />
                      {benefit.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${
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

// ==========================================
// VARIANT B: Interactive Cards
// ==========================================
export function PricingGridVariantB() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            La Force d'une Armada
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Un vivier de <span className="text-[#2ca3bd]">650+ développeurs experts</span> mobilisables en 24h
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Nos équipes commandos prêtes à déployer pour votre succès
          </p>
        </div>

        <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-10 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que vous obtenez avec chaque Sprint Commando
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className={`group relative flex gap-4 p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer ${
                    theme === 'dark' 
                      ? 'border-white/5 hover:border-[#2ca3bd]/50 hover:bg-white/5 hover:shadow-xl hover:shadow-[#2ca3bd]/10' 
                      : 'border-gray-200 hover:border-[#2ca3bd]/50 hover:bg-white hover:shadow-xl'
                  } ${benefit.isHighlight ? 'ring-2 ring-[#2ca3bd]/20' : ''} hover:-translate-y-1`}
                >
                  {benefit.isHighlight && (
                    <div className="absolute -top-3 -right-3 bg-[#2ca3bd] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⚡ Clé
                    </div>
                  )}
                  
                  <div className={`flex-shrink-0 p-3 rounded-xl h-fit transition-all duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/10 group-hover:bg-[#2ca3bd]/20' : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                    <Icon size={28} className="text-[#2ca3bd]" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 flex items-start justify-between gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <span className="flex items-center gap-2">
                        <Check size={20} className="text-[#2ca3bd] flex-shrink-0" />
                        {benefit.title}
                      </span>
                      <ArrowRight 
                        size={20} 
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 text-[#2ca3bd] flex-shrink-0" 
                      />
                    </h4>
                    <p className={`text-sm leading-relaxed ${
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

// ==========================================
// VARIANT C: Scannable & Structuré
// ==========================================
export function PricingGridVariantC() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            La Force d'une Armada
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Un vivier de <span className="text-[#2ca3bd]">650+ développeurs experts</span> mobilisables en 24h
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Nos équipes commandos prêtes à déployer pour votre succès
          </p>
        </div>

        <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-10 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que vous obtenez avec chaque Sprint Commando
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const number = (index + 1).toString().padStart(2, '0');
              
              return (
                <div 
                  key={index} 
                  className={`relative flex gap-4 p-6 rounded-2xl transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'hover:bg-white/5' 
                      : 'hover:bg-white hover:shadow-md'
                  }`}
                >
                  {/* Barre latérale colorée */}
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[#2ca3bd] to-[#2ca3bd]/30 rounded-full"></div>
                  
                  {/* Numéro */}
                  <div className={`flex-shrink-0 text-3xl font-bold ${
                    theme === 'dark' ? 'text-[#2ca3bd]/20' : 'text-blue-200'
                  }`}>
                    {number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-100'
                      }`}>
                        <Icon size={24} className="text-[#2ca3bd]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            theme === 'dark' 
                              ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {benefit.category}
                          </span>
                          {benefit.isHighlight && (
                            <span className="text-xs px-2 py-1 rounded-full font-medium bg-[#2ca3bd] text-white">
                              Essentiel
                            </span>
                          )}
                        </div>
                        <h4 className={`font-bold text-lg flex items-center gap-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          <Check size={18} className="text-[#2ca3bd] flex-shrink-0" />
                          {benefit.title}
                        </h4>
                      </div>
                    </div>
                    <p className={`text-sm leading-relaxed pl-11 ${
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
