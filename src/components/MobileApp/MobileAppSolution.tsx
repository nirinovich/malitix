import { Code2, Smartphone, Globe, Zap, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';

export default function MobileAppSolution() {
  const { theme } = useTheme();
  const variant = useABTestVariant('solution');

  if (variant === 'A') {
    return <SolutionVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <SolutionVariantB theme={theme} />;
  } else {
    return <SolutionVariantC theme={theme} />;
  }
}

// =============================================
// VARIANT A: Three-Column Service Cards
// =============================================
function SolutionVariantA({ theme }: { theme: 'dark' | 'light' }) {
  const services = [
    {
      icon: Smartphone,
      title: 'Native iOS & Android',
      description: 'Full native development with SwiftUI and Kotlin. Maximum performance, seamless OS integration.',
      features: ['SwiftUI & Kotlin expertise', 'Native APIs & integrations', '60+ FPS performance', 'App Store optimization'],
      timeline: '120 days',
      startingPrice: '$35K',
    },
    {
      icon: Code2,
      title: 'Cross-Platform Solutions',
      description: 'React Native or Flutter for rapid deployment. Share code across iOS and Android efficiently.',
      features: ['React Native specialists', 'Code reusability (70%+)', 'Faster deployment', 'Cost-effective scaling'],
      timeline: '90 days',
      startingPrice: '$20K',
      highlighted: true,
    },
    {
      icon: Globe,
      title: 'Progressive Web Apps',
      description: 'Web technologies for universal reach. Works offline, installable, fast on any device.',
      features: ['PWA best practices', 'Offline-first design', 'Web performance', 'Easy updates & distribution'],
      timeline: '60 days',
      startingPrice: '$15K',
    },
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            We Build Mobile Apps That Win
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Specialized expertise across all platforms and technologies. We pick what's best for your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                service.highlighted
                  ? `p-8 bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/15 border-2 border-[#2ca3bd] shadow-2xl ${
                      theme === 'dark' ? 'shadow-[#2ca3bd]/30' : 'shadow-[#2ca3bd]/20'
                    }`
                  : `p-8 backdrop-blur-xl ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                        : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
                    }`
              }`}
            >
              {/* Badge */}
              {service.highlighted && (
                <div className="absolute top-4 right-4 bg-[#2ca3bd] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="bg-[#2ca3bd] p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={32} />
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-base mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check size={18} className="text-[#2ca3bd] flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/75' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Timeline & Price */}
              <div className="space-y-3 pt-6 border-t border-[#2ca3bd]/20">
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Timeline
                  </span>
                  <span className={`font-bold ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}`}>
                    {service.timeline}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Starting at
                  </span>
                  <span className={`text-xl font-black ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}`}>
                    {service.startingPrice}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  service.highlighted
                    ? 'bg-[#2ca3bd] text-white hover:bg-[#1e7a8f]'
                    : `border-2 border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10`
                }`}
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Comparison SVG Lines */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {['Rapid Development', 'Scalable Architecture', 'Future-Proof'].map((benefit, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl text-center ${
                theme === 'dark'
                  ? 'bg-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-[#2ca3bd]/5 border border-[#2ca3bd]/20'
              }`}
            >
              <Zap size={24} className="text-[#2ca3bd] mx-auto mb-2" />
              <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Tabbed Interface with Features
// =============================================
function SolutionVariantB({ theme }: { theme: 'dark' | 'light' }) {
  const tabs = [
    {
      id: 'native',
      label: 'Native Development',
      icon: Smartphone,
      content: {
        title: 'Native iOS & Android',
        description: 'Full-power native applications using the latest platform technologies.',
        features: [
          'SwiftUI & UIKit for iOS',
          'Kotlin & Jetpack for Android',
          'Native APIs & integrations',
          'Platform-specific optimizations',
          'Direct app store submission',
          'Peak performance (60+ FPS)',
        ],
      },
    },
    {
      id: 'cross',
      label: 'Cross-Platform',
      icon: Code2,
      content: {
        title: 'React Native & Flutter',
        description: 'Share code across platforms while maintaining native performance.',
        features: [
          'React Native expertise',
          'Flutter specialists',
          '70%+ code sharing',
          'Faster development cycles',
          'Cost-effective scaling',
          'Single team, both platforms',
        ],
      },
    },
    {
      id: 'web',
      label: 'Progressive Web Apps',
      icon: Globe,
      content: {
        title: 'Web-First Approach',
        description: 'Modern web technologies for universal app accessibility.',
        features: [
          'PWA best practices',
          'Offline functionality',
          'App-like experience',
          'No app store required',
          'Easy maintenance',
          'Wide device support',
        ],
      },
    },
  ];

  const [activeTab, setActiveTab] = React.useState('native');

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Mobile Development Approaches
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Choose the technology stack that fits your timeline, budget, and scale requirements.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 bg-gradient-to-r from-[#2ca3bd]/5 to-[#1e7a8f]/5 p-2 rounded-2xl border border-[#2ca3bd]/20 w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? `bg-[#2ca3bd] text-white shadow-lg`
                  : `text-white/70 hover:text-white ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-white/10'}`
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`p-12 rounded-2xl backdrop-blur-xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#1e7a8f]/5 border border-[#2ca3bd]/20'
            : 'bg-gradient-to-br from-white to-slate-50 border border-[#2ca3bd]/20'
        }`}>
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className="space-y-6 animate-fadeIn">
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-[#2ca3bd] p-4 rounded-xl">
                    <tab.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {tab.content.title}
                    </h3>
                    <p className={`text-lg mt-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      {tab.content.description}
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {tab.content.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#2ca3bd] rounded-full flex-shrink-0"></div>
                      <span className={`text-base ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-8 px-6 py-3 bg-[#2ca3bd] text-white rounded-lg font-semibold hover:bg-[#1e7a8f] transition-all duration-300 flex items-center gap-2">
                  Explore This Approach <ArrowRight size={18} />
                </button>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Timeline/Feature Comparison
// =============================================
function SolutionVariantC({ theme }: { theme: 'dark' | 'light' }) {
  const approaches = [
    {
      icon: Smartphone,
      title: 'Native-First Strategy',
      description: 'Optimal performance and user experience',
      benefits: [
        '100% platform capabilities',
        'Best user experience',
        'Highest performance',
        'Direct app store control',
      ],
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      icon: Code2,
      title: 'Hybrid Efficiency',
      description: 'Balance speed-to-market with performance',
      benefits: [
        '70%+ code sharing',
        'Single codebase maintenance',
        'Faster iterations',
        'Cost-effective scaling',
      ],
      color: 'from-purple-500/20 to-purple-600/20',
    },
    {
      icon: TrendingUp,
      title: 'Web-First Approach',
      description: 'Maximum reach and accessibility',
      benefits: [
        'No app store delays',
        'Instant updates',
        'Works everywhere',
        'Easy maintenance',
      ],
      color: 'from-green-500/20 to-green-600/20',
    },
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technology Approaches
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            We match your project requirements with the right technology stack.
          </p>
        </div>

        {/* Approaches Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark'
                  ? `bg-gradient-to-br ${approach.color} border border-[#2ca3bd]/20`
                  : `bg-gradient-to-br ${approach.color} border border-[#2ca3bd]/20`
              }`}
            >
              {/* Icon */}
              <div className="bg-[#2ca3bd] p-4 rounded-xl w-fit mb-6">
                <approach.icon className="text-white" size={32} />
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {approach.title}
              </h3>
              <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {approach.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {approach.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex items-start gap-2">
                    <Check size={16} className="text-[#2ca3bd] flex-shrink-0 mt-1" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/75' : 'text-gray-700'}`}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-[#2ca3bd]" size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className={`rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-[#2ca3bd]/20' : 'border-[#2ca3bd]/20'}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`${theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[#2ca3bd]/10'}`}>
                  <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Criteria
                  </th>
                  <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Native
                  </th>
                  <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Cross-Platform
                  </th>
                  <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Web App
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Performance', native: '⭐⭐⭐', cross: '⭐⭐⭐', web: '⭐⭐' },
                  { label: 'Development Time', native: '120 days', cross: '90 days', web: '60 days' },
                  { label: 'Cost', native: '$$$', cross: '$$', web: '$' },
                  { label: 'Platform Support', native: 'iOS/Android', cross: 'Both', web: 'All' },
                  { label: 'Code Sharing', native: '0%', cross: '70%+', web: '100%' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t ${theme === 'dark' ? 'border-[#2ca3bd]/10 hover:bg-[#2ca3bd]/5' : 'border-[#2ca3bd]/10 hover:bg-[#2ca3bd]/5'}`}
                  >
                    <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {row.label}
                    </td>
                    <td className={`px-6 py-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      {row.native}
                    </td>
                    <td className={`px-6 py-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      {row.cross}
                    </td>
                    <td className={`px-6 py-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      {row.web}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
