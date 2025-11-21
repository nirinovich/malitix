import { Star, Quote, TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            Ils ont Choisi le Sur-Mesure, <br className="hidden sm:block" />
            Ils ne Reviendront{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Jamais en Arrière
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-blue-200/50'
              }`}
            >
              {/* Quote icon */}
              <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-30 transition-opacity ${
                theme === 'dark' ? 'text-white' : 'text-gray-400'
              }`}>
                <Quote size={40} className="sm:w-12 sm:h-12" />
              </div>

              {/* Result Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
                theme === 'dark'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                  : 'bg-green-100 text-green-700 border border-green-300'
              }`}>
                <TrendingUp size={14} />
                {testimonial.result}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#2ca3bd] fill-[#2ca3bd]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-base sm:text-lg mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  theme === 'dark' ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]' : 'bg-blue-100 text-blue-700'
                }`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    {testimonial.role} • {testimonial.company}
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Logos */}
        <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-10 border ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
        }`}>
          <div className="text-center mb-6">
            <h3 className={`text-lg sm:text-xl font-bold ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              Technologies Utilisées par nos Clients
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {techLogos.map((tech, index) => (
              <div
                key={index}
                className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: tech.color }}
                ></div>
                <span className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-6 text-xs ${
            theme === 'dark' ? 'text-white/40' : 'text-gray-500'
          }`}>
            Et bien d'autres technologies selon vos besoins spécifiques
          </div>
        </div>
      </div>
    </section>
  );
}
