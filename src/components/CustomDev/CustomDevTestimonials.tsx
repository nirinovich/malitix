import { useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTest } from '../../context/ABTestContext';

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

const techLogos = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'TypeScript', color: '#3178C6' },
];

export default function CustomDevTestimonials() {
  const { theme } = useTheme();
  const { trackImpression } = useABTest();

  useEffect(() => {
    trackImpression('testimonial', 'A');
  }, [trackImpression]);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
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
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
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
                  : 'bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-400'
              }`}
            >
              <Quote className={`mb-4 ${theme === 'dark' ? 'text-[#2ca3bd]/40' : 'text-blue-300'}`} size={32} />
              
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

                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${
                  theme === 'dark' ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]' : 'bg-blue-100 text-blue-600'
                }`}>
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className={`inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6 ${
            theme === 'dark' ? 'bg-white/5 text-white/60' : 'bg-gray-100 text-gray-600'
          }`}>
            Technologies de Pointe
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-white/5 text-white' : 'bg-white text-gray-900'
                }`}
                style={{ borderLeft: `4px solid ${tech.color}` }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

