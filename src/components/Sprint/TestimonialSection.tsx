import { Star, Quote } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const testimonials = [
  {
    name: 'Selim Saadi',
    role: 'CEO & Co-founder',
    company: 'Karlisolutions',
    image: '/images/testimonials/selim-saadi.png',
    quote: "Nous avons pu développer notre solution dans sa première version (déjà très complète) avec des équipes de Malitix qui ont parfaitement compris notre besoin et notre ambition. Elles nous ont aidé à cadrer le sujet et à organiser un suivi régulier et flexible. Nous avons eu d'excellentes relations avec le chef de projet digital, les développeurs, la business analyst et les équipes commerciales.",
    rating: 5,
  },
  {
    name: 'David Bovet',
    role: 'CEO',
    company: 'Bios Analytics',
    image: '/images/testimonials/david.png',
    quote: "Malitix has been a longstanding partner since the inception of our company's first website, contributing to our online presence and technological solutions over the years.",
    rating: 5,
  },
  {
    name: 'Riad Roubache',
    role: 'CISO/CTO',
    company: 'Tersadia',
    image: '/images/testimonials/riad.png',
    quote: "Nous travaillons depuis 3 ans avec Malitix à qui nous avons confié notre supervision et monitoring 24/7 sur un périmètre assez large (Système d'informations, Cyber sécurité). Une équipe réactive, qui respecte les consignes, avec un suivi commercial précis et un respect des SLA qui nous permettent d'être confiants sur notre collaboration actuelle et future.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const { theme } = useTheme();

  return (
    <section id="nos-partenaires" className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-slate-200/40'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Témoignages
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ils Étaient Bloqués, <br className="hidden sm:block" />
            <span className="text-[#2ca3bd]">Nous Avons Livré</span>
          </h2>
          <p className={`text-base sm:text-lg px-4 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Des résultats concrets pour des entreprises qui nous ont fait confiance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
              }`}
            >
              {/* Quote icon */}
              <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-30 transition-opacity ${
                theme === 'dark' ? 'text-white' : 'text-gray-400'
              }`}>
                <Quote size={40} className="sm:w-12 sm:h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#2ca3bd] fill-[#2ca3bd] sm:w-4 sm:h-4"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className={`font-semibold text-sm sm:text-base ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-r from-transparent via-[#2ca3bd] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className={`text-xs sm:text-sm px-4 ${
            theme === 'dark' ? 'text-white/50' : 'text-gray-500'
          }`}>
            Rejoignez les 600+ entreprises qui nous font confiance
          </p>
        </div>
      </div>
    </section>
  );
}
