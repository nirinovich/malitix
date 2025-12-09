import { BarChart3, Users, TrendingDown, AlertCircle, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';

export default function MobileAppProblem() {
  const { theme } = useTheme();
  const variant = useABTestVariant('problem');

  if (variant === 'A') {
    return <ProblemVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <ProblemVariantB theme={theme} />;
  } else {
    return <ProblemVariantC theme={theme} />;
  }
}

// =============================================
// VARIANT A: Grid Cards with Icons and Statistics
// =============================================
function ProblemVariantA({ theme }: { theme: 'dark' | 'light' }) {
  const problems = [
    {
      icon: TrendingDown,
      title: 'High User Abandonment',
      description: 'Over 25% of apps are deleted after first use. Poor performance is the #1 reason.',
      stat: '25%',
      color: 'from-red-500/20 to-red-600/20',
    },
    {
      icon: Clock,
      title: 'Slow Time-to-Market',
      description: 'Custom development takes months. Your competitors ship faster with better solutions.',
      stat: '6-9 months',
      color: 'from-orange-500/20 to-orange-600/20',
    },
    {
      icon: Users,
      title: 'Low User Retention',
      description: 'Apps fail due to poor UX and lack of feature updates. Retention drops after week 1.',
      stat: '90% churn',
      color: 'from-yellow-500/20 to-yellow-600/20',
    },
    {
      icon: BarChart3,
      title: 'Scaling Challenges',
      description: 'Your app works for 100 users but crashes at 10,000. Infrastructure cost explodes.',
      stat: '10x cost',
      color: 'from-purple-500/20 to-purple-600/20',
    },
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            The Mobile App Reality Check
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Most mobile apps fail within the first year. Here's why—and how we solve it.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark'
                  ? `bg-gradient-to-br ${problem.color} border border-[#2ca3bd]/20 shadow-lg`
                  : `bg-gradient-to-br ${problem.color} border border-[#2ca3bd]/20 shadow-md`
              }`}
            >
              {/* Icon */}
              <div className="bg-[#2ca3bd] p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {problem.title}
              </h3>
              <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {problem.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-black text-[#2ca3bd]">{problem.stat}</div>
                <div className={`text-xs font-semibold ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  Industry Impact
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 p-8 rounded-2xl text-center ${
            theme === 'dark' ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border border-[#2ca3bd]/20' : 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border border-[#2ca3bd]/20'
          }`}
        >
          <p className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            But here's the good news...
          </p>
          <p className={`text-base ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            We've solved these problems for 50+ clients. Our strategic, user-focused approach ensures your app succeeds from day one.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Numbered List with Visual Indicators
// =============================================
function ProblemVariantB({ theme }: { theme: 'dark' | 'light' }) {
  const problems = [
    {
      number: '01',
      icon: TrendingDown,
      title: 'Apps Are Deleted Within Days',
      description: 'Without great UX and lightning-fast performance, 25% of users abandon your app immediately.',
    },
    {
      number: '02',
      icon: Clock,
      title: 'Traditional Development Takes Forever',
      description: 'Waterfall processes mean 6-9 months before launch. Your competitors ship in weeks.',
    },
    {
      number: '03',
      icon: Users,
      title: 'User Retention Drops Fast',
      description: '90% churn rate in the first week is common. Poor UX, missing features, and broken experiences.',
    },
    {
      number: '04',
      icon: AlertCircle,
      title: 'Scaling Is Expensive',
      description: 'Your MVP works great at 100 users but crashes at 10,000. Infrastructure costs become prohibitive.',
    },
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Why Mobile Apps Fail
          </h2>
          <p
            className={`text-xl max-w-3xl ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Understanding the critical challenges in mobile development is the first step to success.
          </p>
        </div>

        {/* Problems List */}
        <div className="space-y-8">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className={`group relative flex gap-6 p-8 rounded-2xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#0a0e0d] to-[#0f1412] border border-[#2ca3bd]/15 hover:border-[#2ca3bd]/40'
                  : 'bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-[#2ca3bd]/40'
              }`}
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#2ca3bd]/20 border-2 border-[#2ca3bd]">
                  <span className="text-2xl font-black text-[#2ca3bd]">{problem.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <problem.icon className="text-[#2ca3bd] mt-1 flex-shrink-0" size={24} />
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {problem.title}
                  </h3>
                </div>
                <p className={`text-base ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  {problem.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-8 bg-gradient-to-b from-[#2ca3bd]/50 to-[#2ca3bd]/0"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom insights */}
        <div
          className={`mt-16 p-8 rounded-2xl text-center border-2 ${
            theme === 'dark'
              ? 'border-[#2ca3bd]/30 bg-[#2ca3bd]/5'
              : 'border-[#2ca3bd]/30 bg-[#2ca3bd]/5'
          }`}
        >
          <AlertCircle className="text-[#2ca3bd] mx-auto mb-4" size={32} />
          <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            The Pattern Is Clear
          </h3>
          <p className={`text-base ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Apps fail when built without a clear mobile-first strategy, proper architecture, and user research. 
            Our approach addresses each of these from day one.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Alternating Image-Text Layout
// =============================================
function ProblemVariantC({ theme }: { theme: 'dark' | 'light' }) {
  const problems = [
    {
      icon: TrendingDown,
      title: 'User Abandonment Crisis',
      description: 'Most apps are deleted within 24 hours. Poor performance, slow load times, and broken UX are the main culprits.',
      points: ['25% deleted after first use', 'Slow performance is #1 complaint', 'Bad UX design kills retention'],
    },
    {
      icon: Clock,
      title: 'Time-to-Market Disadvantage',
      description: 'Traditional development cycles take 6-9 months. While you build, competitors launch and capture market share.',
      points: ['6-9 month development cycles', 'Legacy processes slow innovation', 'Opportunity cost is massive'],
    },
    {
      icon: BarChart3,
      title: 'Scaling & Cost Nightmares',
      description: 'Your MVP works perfectly until it doesn\'t. Infrastructure costs explode when users actually start using your app.',
      points: ['10x infrastructure costs at scale', 'Unpredictable server downtime', 'User experience degrades'],
    },
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            The Hard Truth About Mobile Development
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Understanding where most apps fail helps us ensure yours succeeds.
          </p>
        </div>

        {/* Alternating Sections */}
        <div className="space-y-16">
          {problems.map((problem, idx) => (
            <div key={idx} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Visual Icon/Illustration */}
              <div className={`flex items-center justify-center h-80 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/15 to-[#1e7a8f]/10 border border-[#2ca3bd]/20' : 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#1e7a8f]/5 border border-[#2ca3bd]/20'}`}>
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full blur-2xl -z-10 ${theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[#2ca3bd]/15'}`}></div>
                  <problem.icon size={120} className="text-[#2ca3bd]/40" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className={`text-3xl sm:text-4xl font-black ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {problem.title}
                </h3>
                <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                  {problem.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-3">
                  {problem.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#2ca3bd] rounded-full flex-shrink-0"></div>
                      <span className={`text-base ${theme === 'dark' ? 'text-white/75' : 'text-gray-700'}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 p-10 rounded-2xl text-center ${theme === 'dark' ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border border-[#2ca3bd]/20' : 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border border-[#2ca3bd]/20'}`}>
          <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            We've Cracked the Code
          </h3>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
            With a data-driven approach and 50+ successful launches, we know exactly how to build mobile apps that engage users, scale effortlessly, and drive real business results.
          </p>
        </div>
      </div>
    </section>
  );
}

// Arrow Icon Component
function ArrowRightIcon() {
  return (
    <svg className="w-6 h-6 text-[#2ca3bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
