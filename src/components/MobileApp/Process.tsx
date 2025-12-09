import { createElement } from 'react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';
import { Compass, Palette, Code, Rocket, Check } from 'lucide-react';

export default function Process() {
  const { theme } = useTheme();
  const variant = useABTestVariant('process');

  if (variant === 'A') {
    return <ProcessVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <ProcessVariantB theme={theme} />;
  } else {
    return <ProcessVariantC theme={theme} />;
  }
}

const PROCESS_STEPS = [
  {
    number: '01',
    icon: Compass,
    title: 'Discovery & Strategy',
    duration: '2 weeks',
    description: 'We understand your vision, market, and users. Research, competitive analysis, and strategy document.',
    outcomes: ['User Research', 'Market Analysis', 'Strategy Document', 'Technical Plan'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design & Prototyping',
    duration: '3 weeks',
    description: 'Beautiful, user-tested designs. Interactive prototypes for validation before development.',
    outcomes: ['Wireframes', 'UI Design', 'Prototypes', 'Design System'],
  },
  {
    number: '03',
    icon: Code,
    title: 'Development & Testing',
    duration: '6-8 weeks',
    description: 'Full development with daily standups, weekly reviews, and continuous testing.',
    outcomes: ['API Development', 'Frontend & Backend', 'Integration', 'Quality Assurance'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Optimization',
    duration: 'Ongoing',
    description: 'App Store submission, post-launch monitoring, optimization, and 6-month support.',
    outcomes: ['App Store Submission', 'Launch Support', 'Analytics Setup', 'Performance Optimization'],
  },
];

// =============================================
// VARIANT A: Vertical Timeline
// =============================================
function ProcessVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Development Process
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            A proven 4-phase approach from concept to launch.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2ca3bd] to-[#1e7a8f]"></div>

          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative pl-32">
              {/* Dot */}
              <div className="absolute left-0 top-2 w-16 h-16 bg-[#2ca3bd] rounded-full flex items-center justify-center border-4 border-[#060705] shadow-lg">
                <step.icon className="text-white" size={28} />
              </div>

              {/* Card */}
              <div
                className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm font-semibold text-[#2ca3bd]`}>{step.duration}</p>
                  </div>
                </div>

                <p className={`mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {step.description}
                </p>

                {/* Outcomes */}
                <ul className="grid grid-cols-2 gap-2">
                  {step.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2">
                      <Check size={16} className="text-[#2ca3bd] flex-shrink-0" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Horizontal Step Indicators
// =============================================
function ProcessVariantB({ theme }: { theme: 'dark' | 'light' }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            From Vision to Launch
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            A structured 4-phase process ensuring success at every step.
          </p>
        </div>

        {/* Horizontal Steps */}
        <div className="mb-12">
          <div className="grid grid-cols-4 gap-4 mb-8">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-xl transition-all duration-300 text-center cursor-pointer ${
                  activeStep === idx
                    ? `bg-[#2ca3bd] text-white shadow-lg`
                    : `${theme === 'dark' ? 'bg-[#0f1412] border border-[#2ca3bd]/20 text-white/70 hover:border-[#2ca3bd]/50' : 'bg-white border border-[#2ca3bd]/20 text-gray-600 hover:border-[#2ca3bd]/50'}`
                }`}
              >
                <div className="text-3xl font-black mb-2">{step.number}</div>
                <div className="text-sm font-semibold">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className={`h-1 rounded-full bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f]`}
            style={{ width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
          ></div>
        </div>

        {/* Content */}
        <div className={`p-12 rounded-2xl backdrop-blur-xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
            : 'bg-gradient-to-br from-white to-slate-50 border border-[#2ca3bd]/20'
        }`}>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-[#2ca3bd] p-4 rounded-xl">
              {createElement(PROCESS_STEPS[activeStep].icon, { className: "text-white", size: 32 })}
            </div>
            <div>
              <h3 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {PROCESS_STEPS[activeStep].duration}
              </p>
            </div>
          </div>

          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            {PROCESS_STEPS[activeStep].description}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {PROCESS_STEPS[activeStep].outcomes.map((outcome) => (
              <div key={outcome} className="flex items-center gap-3">
                <Check size={20} className="text-[#2ca3bd] flex-shrink-0" />
                <span className={`font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Accordion-Style Steps
// =============================================
function ProcessVariantC({ theme }: { theme: 'dark' | 'light' }) {
  const [expandedStep, setExpandedStep] = useState(0);

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Step-by-Step Development
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Click to see what happens at each phase of development.
          </p>
        </div>

        <div className="space-y-4">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
              className={`w-full text-left transition-all duration-300`}
            >
              <div className={`p-6 rounded-2xl backdrop-blur-xl border ${
                expandedStep === idx
                  ? `${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/10' : 'bg-gradient-to-br from-[#2ca3bd]/15 to-[#1e7a8f]/5'} border-[#2ca3bd]/40`
                  : `${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40' : 'bg-gradient-to-br from-white to-slate-50/70 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'}`
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      expandedStep === idx
                        ? 'bg-[#2ca3bd] text-white'
                        : 'bg-[#2ca3bd]/20 text-[#2ca3bd]'
                    }`}>
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm font-semibold text-[#2ca3bd]`}>{step.duration}</p>
                    </div>
                  </div>
                  <div className={`transform transition-transform ${expandedStep === idx ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-[#2ca3bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedStep === idx && (
                <div className={`mt-2 p-6 rounded-2xl backdrop-blur-xl border border-[#2ca3bd]/20 ${
                  theme === 'dark'
                    ? 'bg-[#2ca3bd]/5'
                    : 'bg-[#2ca3bd]/5'
                }`}>
                  <p className={`mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    <p className={`text-sm font-semibold uppercase ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                      Key Deliverables
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-2">
                          <Check size={16} className="text-[#2ca3bd] flex-shrink-0" />
                          <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
