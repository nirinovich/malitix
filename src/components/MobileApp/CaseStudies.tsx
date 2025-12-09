import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CaseStudies() {
  const { theme } = useTheme();
  const variant = useABTestVariant('caseStudies');

  if (variant === 'A') {
    return <CaseStudiesVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <CaseStudiesVariantB theme={theme} />;
  } else {
    return <CaseStudiesVariantC theme={theme} />;
  }
}

const CASE_STUDIES = [
  {
    title: 'FinTech Startup',
    description: 'Mobile banking app with real-time transactions',
    metrics: '500K+ downloads, 4.8★ rating',
    result: '300% user growth in 6 months',
    tech: 'React Native, Firebase',
    timeline: '120 days',
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Cross-platform shopping experience',
    metrics: '1M+ active users, $50M+ in sales',
    result: '45% increase in mobile revenue',
    tech: 'Native iOS & Android',
    timeline: '150 days',
    color: 'from-purple-500/20 to-purple-600/20',
  },
  {
    title: 'Health & Wellness',
    description: 'Fitness tracking and coaching app',
    metrics: '100K+ daily active users',
    result: '85% retention rate',
    tech: 'Flutter, Cloud Functions',
    timeline: '90 days',
    color: 'from-green-500/20 to-green-600/20',
  },
];

// =============================================
// VARIANT A: Card Grid with Images
// =============================================
function CaseStudiesVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Success Stories
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Real results from real clients. See how we've transformed their mobile presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.title}
              className={`group rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark'
                  ? `bg-gradient-to-br ${study.color} border border-[#2ca3bd]/20`
                  : `bg-gradient-to-br ${study.color} border border-[#2ca3bd]/20`
              }`}
            >
              {/* Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${study.color} border-b border-[#2ca3bd]/20 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20 font-bold text-[#2ca3bd]">📱</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {study.title}
                </h3>
                <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3 mb-6 pb-6 border-b border-[#2ca3bd]/20">
                  <div>
                    <p className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                      Metrics
                    </p>
                    <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white/90' : 'text-gray-900'}`}>
                      {study.metrics}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase text-[#2ca3bd]`}>Result</p>
                    <p className="text-sm font-bold text-[#2ca3bd]">{study.result}</p>
                  </div>
                </div>

                {/* Tech & Timeline */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                      Tech
                    </p>
                    <p className={`text-xs font-bold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {study.tech}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                      Timeline
                    </p>
                    <p className={`text-xs font-bold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {study.timeline}
                    </p>
                  </div>
                </div>

                <button className="w-full mt-6 py-2 px-4 rounded-lg bg-[#2ca3bd] text-white hover:bg-[#1e7a8f] transition-all text-sm font-semibold flex items-center justify-center gap-2">
                  View Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Carousel Slider
// =============================================
function CaseStudiesVariantB({ theme }: { theme: 'dark' | 'light' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Client Success Stories
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Proven results across diverse industries and app types.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className={`p-12 rounded-2xl backdrop-blur-xl ${
            theme === 'dark'
              ? `bg-gradient-to-br ${CASE_STUDIES[currentIndex].color} border border-[#2ca3bd]/20`
              : `bg-gradient-to-br ${CASE_STUDIES[currentIndex].color} border border-[#2ca3bd]/20`
          }`}>
            <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {CASE_STUDIES[currentIndex].title}
            </h3>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
              {CASE_STUDIES[currentIndex].description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-[#2ca3bd]/20">
              <div>
                <p className={`text-sm font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'} mb-2`}>
                  Results
                </p>
                <p className="text-2xl font-black text-[#2ca3bd] mb-4">
                  {CASE_STUDIES[currentIndex].result}
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {CASE_STUDIES[currentIndex].metrics}
                </p>
              </div>
              <div>
                <p className={`text-sm font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'} mb-2`}>
                  Technology & Timeline
                </p>
                <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {CASE_STUDIES[currentIndex].tech}
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  Completed in {CASE_STUDIES[currentIndex].timeline}
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
              {CASE_STUDIES.map((_, idx) => (
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

        <button className="w-full mt-8 py-4 px-6 bg-[#2ca3bd] text-white rounded-xl font-bold hover:bg-[#1e7a8f] transition-all flex items-center justify-center gap-2">
          Explore Full Case Study <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Horizontal Scroll Cards
// =============================================
function CaseStudiesVariantC({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Proven Track Record
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Scroll to see our portfolio of successful apps.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.title}
              className={`flex-shrink-0 w-full sm:w-96 p-6 rounded-2xl backdrop-blur-xl ${
                theme === 'dark'
                  ? `bg-gradient-to-br ${study.color} border border-[#2ca3bd]/20`
                  : `bg-gradient-to-br ${study.color} border border-[#2ca3bd]/20`
              }`}
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {study.title}
              </h3>
              <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {study.description}
              </p>

              <div className="space-y-3">
                <div>
                  <p className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Key Result
                  </p>
                  <p className="font-bold text-[#2ca3bd]">{study.result}</p>
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Tech Stack
                  </p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-white/75' : 'text-gray-700'}`}>
                    {study.tech}
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
