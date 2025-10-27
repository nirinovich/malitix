import { Check, Zap, Shield, Users, FileCheck, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const offers = [
  {
    name: 'Sprint Starter',
    price: 'Sur devis',
    description: 'Idéal pour débloquer une feature clé',
    features: [
      'Livrable concret en 14 jours',
      '1 développeur expert dédié',
      'Méthodologie Sprint éprouvée',
      'Point quotidien (15min)',
      'Documentation technique',
      'Passation complète',
    ],
    icon: Zap,
    highlighted: false,
  },
  {
    name: 'Sprint Commando',
    price: 'Sur devis',
    description: 'Pour accélérer drastiquement votre projet',
    features: [
      'Tout du Sprint Starter +',
      '2-3 développeurs experts dédiés',
      'Multiples livrables en parallèle',
      'Support technique prioritaire',
      'Architecture & code review',
      'Garantie satisfaction à 100%',
    ],
    icon: Shield,
    highlighted: true,
    badge: 'Le plus populaire',
  },
  {
    name: 'Sprint Elite',
    price: 'Sur devis',
    description: 'Transformation complète et accompagnement',
    features: [
      'Tout du Sprint Commando +',
      'Équipe complète (4-6 experts)',
      'Chef de projet dédié',
      'Architecture système complète',
      'Formation de vos équipes',
      'Support 24/7 pendant 30 jours',
    ],
    icon: Users,
    highlighted: false,
  },
];

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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            Nos Formules Sprint
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Choisissez votre niveau d'intervention
          </h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Du déblocage rapide à la transformation complète, nous avons la solution adaptée
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className={`relative backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 ${
                  offer.highlighted
                    ? `scale-105 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#2ca3bd]/5 border-2 border-[#2ca3bd] shadow-2xl shadow-[#2ca3bd]/30'
                          : 'bg-gradient-to-br from-blue-50 to-white border-2 border-blue-400 shadow-2xl shadow-blue-200/50'
                      }`
                    : theme === 'dark'
                      ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50'
                      : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400'
                }`}
              >
                {/* Badge */}
                {offer.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2ca3bd] text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {offer.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  offer.highlighted
                    ? 'bg-[#2ca3bd]'
                    : theme === 'dark'
                      ? 'bg-[#2ca3bd]/10'
                      : 'bg-blue-100'
                }`}>
                  <Icon 
                    size={28} 
                    className={offer.highlighted ? 'text-white' : 'text-[#2ca3bd]'}
                  />
                </div>

                {/* Title & Price */}
                <h3 className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {offer.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {offer.description}
                </p>
                <div className={`text-3xl font-bold mb-6 ${
                  offer.highlighted ? 'text-[#2ca3bd]' : theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {offer.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        className={`flex-shrink-0 mt-0.5 ${
                          offer.highlighted ? 'text-[#2ca3bd]' : theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                        }`}
                      />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                    offer.highlighted
                      ? 'bg-[#2ca3bd] text-white hover:bg-[#2ca3bd]/90 shadow-lg hover:shadow-xl'
                      : theme === 'dark'
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Demander un devis
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Benefits Section */}
        <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ce que vous obtenez avec chaque Sprint
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileCheck,
                title: 'Livrable Concret',
                desc: 'Feature codée, bug écrasé ou API intégrée qui débloque immédiatement votre business',
              },
              {
                icon: Users,
                title: 'Équipe Commando Dédiée',
                desc: 'Nos meilleurs experts focalisés uniquement sur votre succès pendant 14 jours',
              },
              {
                icon: Zap,
                title: 'Méthodologie Sprint',
                desc: 'Process unique pour livrer en temps record ce qui prendrait des mois en interne',
              },
              {
                icon: MessageSquare,
                title: 'Communication Transparente',
                desc: 'Point quotidien simple. Vous savez exactement où on en est',
              },
              {
                icon: FileCheck,
                title: 'Documentation & Passation',
                desc: 'Code propre et documenté. Votre équipe reprend la main facilement',
              },
              {
                icon: Shield,
                title: 'Garantie Zéro Risque',
                desc: 'Si on ne livre pas, vous ne payez pas. Le risque est 100% pour nous',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 p-2 rounded-lg h-fit ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-100'
                  }`}>
                    <Icon size={24} className="text-[#2ca3bd]" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {benefit.title}
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-600'
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
