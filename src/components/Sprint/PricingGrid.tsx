import { Check, Users, FileCheck, MessageSquare, Zap, Shield } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function PricingGrid() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

        {/* Benefits Section - EN AVANT */}
        <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que vous obtenez avec chaque Sprint Commando
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FileCheck,
                title: 'Le livrable concret',
                desc: 'La feature codée, le bug écrasé, l\'API intégrée qui débloque immédiatement votre business. Fini l\'attente, place à l\'action.',
              },
              {
                icon: Users,
                title: 'Une Équipe d\'Experts "Commando" Dédiée à 100%',
                desc: 'Pas de juniors, pas de temps partiel. Nos meilleurs éléments focalisés uniquement sur votre succès pendant 14 jours. Vous n\'avez rien à gérer, on s\'occupe de tout.',
              },
              {
                icon: Zap,
                title: 'Méthodologie "Sprint" Éprouvée',
                desc: 'Notre process unique pour couper le gras, aller droit au but et livrer en un temps record ce qui prendrait des mois en interne. Zéro perte de temps.',
              },
              {
                icon: MessageSquare,
                title: 'Communication Transparente et Quotidienne',
                desc: 'Un point simple chaque jour. Vous savez exactement où on en est, sans perdre votre temps en réunions inutiles.',
              },
              {
                icon: FileCheck,
                title: 'Passation Claire et Documentation Concise',
                desc: 'On ne vous laisse pas avec une boîte noire. Le code est propre, documenté, et votre équipe peut reprendre la main facilement après notre intervention.',
              },
              {
                icon: Shield,
                title: 'Notre Garantie Zéro Risque Béton',
                desc: 'Si on ne livre pas, vous ne payez pas. Le risque est 100% pour nous.',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl h-fit ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-100'
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
