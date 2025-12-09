import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const { theme } = useTheme();
  const variant = useABTestVariant('testimonials');

  if (variant === 'A') {
    return <TestimonialsVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <TestimonialsVariantB theme={theme} />;
  } else {
    return <TestimonialsVariantC theme={theme} />;
  }
}

const TESTIMONIALS = [
  {
    quote: 'They built our app in 120 days. We were skeptical, but the quality is exceptional. It\'s exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStartup Inc',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    quote: 'The team understood our vision immediately and delivered exactly what we needed. The support afterward has been fantastic.',
    author: 'Michael Chen',
    role: 'Product Manager',
    company: 'FintechCorp',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    quote: 'Outstanding technical team. They could have taken shortcuts, but they didn\'t. Every detail matters to them.',
    author: 'Emma Rodriguez',
    role: 'Founder',
    company: 'HealthApp Co',
    rating: 5,
    avatar: '👩‍🔬',
  },
  {
    quote: 'Best decision we made. The app is fast, scalable, and the users love it. Highly recommended.',
    author: 'James Williams',
    role: 'CTO',
    company: 'RetailTech',
    rating: 5,
    avatar: '👨‍💻',
  },
];

// =============================================
// VARIANT A: Static Grid (3-4 cards)
// =============================================
function TestimonialsVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            What Clients Say
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Real feedback from real clients who've transformed their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.author}
              className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-base mb-6 italic ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#2ca3bd]/20">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Auto-Rotating Carousel
// =============================================
function TestimonialsVariantB({ theme }: { theme: 'dark' | 'light' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Client Testimonials
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Hear directly from teams who've worked with us.
          </p>
        </div>

        {/* Carousel */}
        <div className={`p-12 rounded-2xl backdrop-blur-xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
            : 'bg-gradient-to-br from-white to-slate-50 border border-[#2ca3bd]/20'
        }`}>
          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, idx) => (
              <Star key={idx} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <p className={`text-2xl font-light mb-8 italic ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            "{TESTIMONIALS[currentIndex].quote}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="text-5xl">{TESTIMONIALS[currentIndex].avatar}</div>
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {TESTIMONIALS[currentIndex].author}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                {TESTIMONIALS[currentIndex].role} at {TESTIMONIALS[currentIndex].company}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={previous}
            className={`p-3 rounded-full transition-all ${
              theme === 'dark'
                ? 'bg-[#2ca3bd]/10 hover:bg-[#2ca3bd]/20 text-[#2ca3bd]'
                : 'bg-[#2ca3bd]/10 hover:bg-[#2ca3bd]/20 text-[#2ca3bd]'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-[#2ca3bd] w-8'
                    : `${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className={`p-3 rounded-full transition-all ${
              theme === 'dark'
                ? 'bg-[#2ca3bd]/10 hover:bg-[#2ca3bd]/20 text-[#2ca3bd]'
                : 'bg-[#2ca3bd]/10 hover:bg-[#2ca3bd]/20 text-[#2ca3bd]'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Side-Scrolling Cards
// =============================================
function TestimonialsVariantC({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Success Stories from Our Clients
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Scroll through testimonials from teams we've helped succeed.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.author}
              className={`flex-shrink-0 w-full sm:w-96 p-8 rounded-2xl backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-base mb-6 italic leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#2ca3bd]/20">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <p className={`font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
