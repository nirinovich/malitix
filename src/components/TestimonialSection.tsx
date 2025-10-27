import { Star, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'CTO',
    company: 'TechFlow',
    image: '👩‍💼',
    quote: "Nous étions bloqués depuis 3 mois sur une intégration API critique. Malitix a résolu le problème en 10 jours. Incroyable!",
    rating: 5,
  },
  {
    name: 'Marc Dupont',
    role: 'CEO',
    company: 'InnovCorp',
    image: '👨‍💼',
    quote: "Le Sprint Commando nous a permis de livrer notre MVP en temps record. L'équipe est ultra-compétente et réactive.",
    rating: 5,
  },
  {
    name: 'Julie Bernard',
    role: 'Product Manager',
    company: 'DataFirst',
    image: '👩‍💻',
    quote: "Bug critique résolu en 1 semaine au lieu des 2 mois estimés en interne. Malitix a sauvé notre roadmap Q4!",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            Témoignages
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ils Étaient Bloqués, <br className="hidden sm:block" />
            <span className="text-[#2ca3bd]">Nous Avons Livré</span>
          </h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Des résultats concrets pour des entreprises qui nous ont fait confiance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-blue-200/50'
              }`}
            >
              {/* Quote icon */}
              <div className={`absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity ${
                theme === 'dark' ? 'text-white' : 'text-gray-400'
              }`}>
                <Quote size={48} />
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
              <p className={`text-base mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 rounded-b-3xl bg-gradient-to-r from-transparent via-[#2ca3bd] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <p className={`text-sm ${
            theme === 'dark' ? 'text-white/50' : 'text-gray-500'
          }`}>
            Rejoignez les 600+ entreprises qui nous font confiance
          </p>
        </div>
      </div>
    </section>
  );
}
