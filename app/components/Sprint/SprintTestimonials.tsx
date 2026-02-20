import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

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

export default function SprintTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextTestimonial]);

  return (
    <section id="nos-partenaires" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl bg-[var(--accent-secondary)]"></div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 text-[var(--text-primary)]">
            Ils Étaient Bloqués, <br className="hidden sm:block" />
            <span className="text-[#2ca3bd]">Nous Avons Livré</span>
          </h2>
          <p className="text-base sm:text-lg px-4 text-[var(--text-secondary)]">
            Des résultats concrets pour des entreprises qui nous ont fait confiance
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto outline-none"
          role="region"
          aria-label="Témoignages clients"
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
              <div
                ref={slideRef}
                className={`w-full carousel-slide ${isTransitioning ? 'carousel-slide-enter' : 'carousel-slide-active'}`}
              >
                <div
                  className="group relative backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 mx-4 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-[var(--surface-primary)] to-[var(--surface-primary)] border border-[var(--border-primary)] hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20"
                >
                   {/* Quote icon */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-30 transition-opacity text-[var(--text-muted)]">
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
                  <p className="text-lg sm:text-xl mb-8 leading-relaxed italic text-[var(--text-secondary)]">
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
                      <h4 className="font-bold text-lg text-[var(--text-primary)]">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-sm text-[var(--text-tertiary)]">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full transition-all cursor-pointer bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)]"
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
                    : 'w-2 bg-[var(--border-primary)]'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
                ))}
            </div>

            <button
                onClick={nextTestimonial}
                className="p-3 rounded-full transition-all cursor-pointer bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)]"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>

            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full transition-all ml-2 cursor-pointer bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)]"
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
