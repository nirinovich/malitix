import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';
import { ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  const { theme } = useTheme();
  const variant = useABTestVariant('cta');

  if (variant === 'A') {
    return <FinalCTAVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <FinalCTAVariantB theme={theme} />;
  } else {
    return <FinalCTAVariantC theme={theme} />;
  }
}

// =============================================
// VARIANT A: Dual Buttons (CTA + Secondary)
// =============================================
function FinalCTAVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section
      className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#060705] via-[#0a0e0d] to-[#060705]'
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[#2ca3bd]/15'
          }`}
        ></div>
        <div
          className={`absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[#2ca3bd]/15'
          }`}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Headline */}
        <h2
          className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Ready to Build Your{' '}
          <span className="text-[#2ca3bd]">Mobile Success?</span>
        </h2>

        {/* Subheading */}
        <p
          className={`text-xl sm:text-2xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/75' : 'text-gray-700'
          }`}
        >
          Get a free 30-minute consultation with our mobile experts. We'll discuss your vision and create a roadmap to success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            className={`group relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                : 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Schedule Your Consultation
              <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>

          <button
            className={`px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 border-2 ${
              theme === 'dark'
                ? 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
                : 'border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10'
            }`}
          >
            <span className="flex items-center gap-2 justify-center">
              View Pricing
            </span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 flex-wrap">
          {['50+ Apps Launched', '4.8★ Client Rating', '98% Retention Rate'].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#2ca3bd]" />
              <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Single Prominent CTA with Benefits
// =============================================
function FinalCTAVariantB({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section
      className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#0a0e0d] to-[#060705]'
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2
              className={`text-5xl sm:text-6xl font-black leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's Build Something <span className="text-[#2ca3bd]">Amazing</span>
            </h2>

            <p
              className={`text-xl ${
                theme === 'dark' ? 'text-white/75' : 'text-gray-700'
              }`}
            >
              Your vision deserves world-class execution. Let's turn your mobile app idea into a thriving product.
            </p>

            <ul className="space-y-4">
              {[
                'Expert team with 50+ successful launches',
                'Fixed pricing, no surprises',
                '6-month post-launch support included',
                'Agile development with weekly updates',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-[#2ca3bd] flex-shrink-0 mt-1" />
                  <span className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA Card */}
          <div
            className={`p-12 rounded-3xl backdrop-blur-xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/10 border-2 border-[#2ca3bd]'
                : 'bg-gradient-to-br from-[#2ca3bd]/15 to-[#1e7a8f]/5 border-2 border-[#2ca3bd]'
            } space-y-6`}
          >
            <h3 className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Start Your Journey Today
            </h3>

            <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Get a free consultation with our mobile experts. No commitment, just great advice.
            </p>

            <div className="space-y-4">
              <button className="w-full px-6 py-4 bg-[#2ca3bd] text-white rounded-xl font-bold hover:bg-[#1e7a8f] transition-all text-lg flex items-center justify-center gap-2">
                Schedule Free Call
                <ArrowRight size={20} />
              </button>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-3 border-2 border-[#2ca3bd] text-[#2ca3bd] rounded-lg font-semibold hover:bg-[#2ca3bd]/10 transition-all flex items-center justify-center gap-2">
                  <Mail size={18} />
                  Email Us
                </button>
                <button className="flex-1 px-4 py-3 border-2 border-[#2ca3bd] text-[#2ca3bd] rounded-lg font-semibold hover:bg-[#2ca3bd]/10 transition-all flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call
                </button>
              </div>
            </div>

            <p className={`text-xs text-center ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
              We typically respond within 2 hours during business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Form Integration (Email Signup)
// =============================================
function FinalCTAVariantC({ theme }: { theme: 'dark' | 'light' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#060705] via-[#0a0e0d] to-[#0f1412]'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}
    >
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[#2ca3bd]/15'
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]/15' : 'bg-[#2ca3bd]/10'
          }`}
        ></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
        {/* Headline */}
        <h2
          className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Transform Your{' '}
          <span className="text-[#2ca3bd]">Mobile Vision</span>
        </h2>

        {/* Subheading */}
        <p
          className={`text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/75' : 'text-gray-700'
          }`}
        >
          Join 50+ companies that trust us to build world-class mobile apps. Get your free mobile strategy guide today.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <div
            className={`relative flex rounded-2xl overflow-hidden backdrop-blur-xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                : 'bg-gradient-to-br from-white to-slate-50 border border-[#2ca3bd]/20'
            }`}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`flex-1 px-6 py-4 bg-transparent outline-none ${
                theme === 'dark' ? 'text-white placeholder-white/50' : 'text-gray-900 placeholder-gray-600'
              }`}
            />
            <button
              type="submit"
              className="px-6 py-4 bg-[#2ca3bd] text-white font-bold hover:bg-[#1e7a8f] transition-all flex items-center gap-2"
            >
              {submitted ? '✓' : <ArrowRight size={20} />}
            </button>
          </div>
          {submitted && (
            <p className="text-[#2ca3bd] font-semibold mt-3">Check your email for the strategy guide!</p>
          )}
        </form>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-6 pt-8">
          {[
            { icon: '📊', text: 'Mobile Strategy Guide' },
            { icon: '💡', text: 'Tech Stack Recommendations' },
            { icon: '🎯', text: 'Cost & Timeline Estimates' },
          ].map((benefit) => (
            <div
              key={benefit.text}
              className={`p-6 rounded-xl backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                  : 'bg-[#2ca3bd]/5 border border-[#2ca3bd]/20'
              }`}
            >
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trust */}
        <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
          No spam. We respect your privacy. 50+ companies trust us with their mobile apps.
        </p>
      </div>
    </section>
  );
}
