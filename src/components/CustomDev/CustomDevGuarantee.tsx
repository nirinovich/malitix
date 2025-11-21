import { DollarSign, Calendar, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const guarantees = [
  {
    icon: DollarSign,
    title: 'Budget Fixe & Forfaitaire',
    description: 'Pas de surprise à la fin du mois.',
    details: 'Un devis clair et transparent. Vous connaissez le prix exact avant de commencer.',
  },
  {
    icon: CheckCircle2,
    title: 'Garantie de Fonctionnement 12 Mois',
    description: 'Le moindre bug découvert dans l\'année suivant la livraison est corrigé gratuitement et immédiatement.',
    details: 'Support technique inclus pendant 12 mois après la mise en production.',
  },
  {
    icon: Calendar,
    title: 'Pénalités de Retard',
    description: 'Si nous ne livrons pas à la date convenue, nous vous payons pour chaque jour de retard.',
    details: 'Notre engagement contractuel : vos délais sont sacrés.',
  },
];

export default function CustomDevGuarantee() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-green-500/10' : 'bg-green-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Warning Banner - IT Projects Have Bad Reputation */}
        <div className={`max-w-4xl mx-auto mb-12 sm:mb-16 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${
          theme === 'dark'
            ? 'bg-yellow-500/10 border-yellow-500/30'
            : 'bg-yellow-50 border-yellow-200'
        }`}>
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-yellow-500 flex-shrink-0" size={28} />
            <div className="space-y-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Nous savons que les projets informatiques ont mauvaise réputation
              </h3>
              <p className={`text-base sm:text-lg ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                Retards, budgets explosés, effets tunnels... Nous changeons la donne.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-green-500"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-green-500">
              La Garantie
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Notre Garantie de{' '}
            <span className="text-green-500">
              Performance
            </span>
            {' '}et de Délais
          </h2>
        </div>

        {/* Guarantees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            
            return (
              <div
                key={index}
                className={`group relative backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 hover:border-green-500/50 hover:shadow-green-500/20'
                    : 'bg-gradient-to-br from-green-50 to-white border border-green-200 hover:border-green-400 hover:shadow-green-200/50'
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                  theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <Icon className="text-green-500" size={28} />
                </div>

                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className={`text-base sm:text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-700'
                }`}>
                  {guarantee.description}
                </p>

                {/* Details */}
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {guarantee.details}
                </p>

                {/* Checkmark badge */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <CheckCircle2 className="text-green-500" size={18} />
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-green-500/5 to-transparent'
                    : 'bg-gradient-to-br from-green-100/50 to-transparent'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Emphasis */}
        <div className={`max-w-4xl mx-auto text-center backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-10 border ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30'
            : 'bg-gradient-to-br from-green-50 to-white border-green-200'
        }`}>
          <div className="inline-flex items-center justify-center mb-4">
            <div className={`p-4 rounded-full ${
              theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
            }`}>
              <CheckCircle2 className="text-green-500" size={40} />
            </div>
          </div>
          <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            La Garantie Malitix
          </h3>
          <p className={`text-base sm:text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-700'
          }`}>
            Notre réputation repose sur notre capacité à livrer dans les temps, dans le budget, 
            et avec la qualité promise. C'est pourquoi nous mettons notre argent là où sont nos promesses.
          </p>
        </div>
      </div>
    </section>
  );
}
