import { Quote } from 'lucide-react';
import { useTheme } from '~/context/ThemeContext';

const testimonials = [
  {
    name: 'Laurent Dubois',
    role: 'Directeur Logistique',
    company: 'TransportPro',
    quote: "L'application développée par Malitix nous a fait gagner 2h par jour par chauffeur. ROI atteint en 4 mois.",
    rating: 5,
    result: 'ROI en 4 mois',
    industry: 'Logistique',
  },
  {
    name: 'Sophie Martin',
    role: 'CEO',
    company: 'PayTech Solutions',
    quote: "Nous avons pu lancer notre MVP en 8 semaines et lever des fonds grâce à la robustesse de la solution.",
    rating: 5,
    result: 'MVP en 8 semaines',
    industry: 'Fintech',
  },
];

export default function CustomDevTestimonials() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-[var(--bg-primary)]'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/40'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Preuve Sociale
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Rejoignez les Entreprises qui{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}>
              Cartonnent
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
                  : 'bg-gradient-to-br from-[var(--surface-primary)] to-[var(--surface-primary)] border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
              }`}
            >
              <Quote className={`mb-4 ${theme === 'dark' ? 'text-[#2ca3bd]/40' : 'text-[#2ca3bd]/40'}`} size={32} />
              
              <blockquote className={`text-lg sm:text-xl leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-700'
              }`}>
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className={`font-bold text-lg ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
                
                <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                  theme === 'dark' 
                    ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]'
                    : 'bg-[#2ca3bd]/10 text-[#2ca3bd]'
                }`}>
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
