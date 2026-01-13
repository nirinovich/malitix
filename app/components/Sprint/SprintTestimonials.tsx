import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useTheme } from '~/context/ThemeContext';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Selim Saadi',
    role: 'CEO & Co-founder',
    company: 'Karlisolutions',
    image: '/images/testimonials/selim-saadi.png',
    quote: "Nous avons pu dÃ©velopper notre solution dans sa premiÃ¨re version (dÃ©jÃ  trÃ¨s complÃ¨te) avec des Ã©quipes de Malitix qui ont parfaitement compris notre besoin et notre ambition. Elles nous ont aidÃ© Ã  cadrer le sujet et Ã  organiser un suivi rÃ©gulier et flexible. Nous avons eu d'excellentes relations avec le chef de projet digital, les dÃ©veloppeurs, la business analyst et les Ã©quipes commerciales.",
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
    quote: "Nous travaillons depuis 3 ans avec Malitix Ã  qui nous avons confiÃ© notre supervision et monitoring 24/7 sur un pÃ©rimÃ¨tre assez large (SystÃ¨me d'informations, Cyber sÃ©curitÃ©). Une Ã©quipe rÃ©active, qui respecte les consignes, avec un suivi commercial prÃ©cis et un respect des SLA qui nous permettent d'Ãªtre confiants sur notre collaboration actuelle et future.",
    rating: 5,
  },
];

export default function SprintTestimonials() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextTestimonial]);

  return (
    <section id="nos-partenaires" className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-primary)]'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              TÃ©moignages
            </span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ils Ã‰taient BloquÃ©s, <br className="hidden sm:block" />
            <span className="text-[#2ca3bd]">Nous Avons LivrÃ©</span>
          </h2>
          <p className={`text-base sm:text-lg px-4 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Des rÃ©sultats concrets pour des entreprises qui nous ont fait confiance
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto outline-none"
          role="region"
          aria-label="TÃ©moignages clients"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              prevTestimonial();
              setIsPlaying(false);
            } else if (e.key === 'ArrowRight') {
              nextTestimonial();
              setIsPlaying(false);
            }
          }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onFocus={() => setIsPlaying(false)}
          onBlur={() => setIsPlaying(true)}
        >
          <div className="overflow-hidden min-h-[400px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div
                  className={`group relative backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 mx-4 transition-all duration-500 hover:shadow-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                      : 'bg-gradient-to-br from-[var(--surface-primary)] to-[var(--surface-primary)] border border-gray-200 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                  }`}
                >
                   {/* Quote icon */}
                  <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-30 transition-opacity ${
                    theme === 'dark' ? 'text-white' : 'text-gray-400'
                  }`}>
                    <Quote size={40} className="sm:w-16 sm:h-16" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-[#2ca3bd] fill-[#2ca3bd]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className={`text-lg sm:text-xl mb-8 leading-relaxed italic ${
                    theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#2ca3bd]/20"
                    />
                    {/* Author Info */}
                    <div>
                    <h4 className={`font-bold text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                        {testimonials[activeIndex].name}
                    </h4>
                    <p className={`text-sm ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                    }`}>
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
                onClick={prevTestimonial}
                className={`p-3 rounded-full transition-all cursor-pointer ${
                    theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    activeIndex === idx 
                        ? 'w-8 bg-[#2ca3bd]' 
                        : theme === 'dark' ? 'w-2 bg-white/20' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                />
                ))}
            </div>

            <button
                onClick={nextTestimonial}
                className={`p-3 rounded-full transition-all cursor-pointer ${
                    theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>

            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-3 rounded-full transition-all ml-2 cursor-pointer ${
                    theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
