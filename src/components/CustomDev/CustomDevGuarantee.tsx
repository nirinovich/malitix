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
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[#2ca3bd]/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto mb-12 sm:mb-16 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${
          theme === 'dark'
            ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/20'
            : 'bg-[#2ca3bd]/5 border-[#2ca3bd]/20'
        }`}>
          <div className="flex items-start gap-4">
            <AlertTriangle className={`flex-shrink-0 ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}`} size={28} />
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

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Garanties Béton
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Nous Inversons{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}>
              le Risque
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className={`group backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
                    : 'bg-gradient-to-br from-[#2ca3bd]/5 to-white border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
                }`}
              >
                <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 inline-block ${
                  theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
                }`}>
                  <Icon size={36} />
                </div>
                
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {guarantee.title}
                </h3>
                
                <p className={`text-sm sm:text-base leading-relaxed mb-4 font-semibold ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                }`}>
                  {guarantee.description}
                </p>

                <p className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                }`}>
                  {guarantee.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
