import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const { theme } = useTheme();
  const variant = useABTestVariant('faq');

  if (variant === 'A') {
    return <FAQVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <FAQVariantB theme={theme} />;
  } else {
    return <FAQVariantC theme={theme} />;
  }
}

const FAQ_ITEMS = [
  {
    question: 'How long does it take to build a mobile app?',
    answer: 'Timeline depends on complexity. An MVP takes 8-10 weeks, a full-featured app takes 16-20 weeks. We use agile sprints with weekly deliverables to keep you updated.',
  },
  {
    question: 'Should I choose native or cross-platform development?',
    answer: 'Native offers peak performance and platform-specific features. Cross-platform (React Native/Flutter) offers faster development and cost savings. We recommend native for consumer apps, cross-platform for MVPs and quick launches.',
  },
  {
    question: 'What happens after the app is launched?',
    answer: 'We provide post-launch support included in every package. This includes bug fixes, app store optimization, performance monitoring, and updates for new OS versions. Extended support packages are available.',
  },
  {
    question: 'How much will my app cost?',
    answer: 'MVPs start at $15K, full-featured apps range from $35K-$75K depending on complexity. Enterprise solutions are custom quoted. All prices are fixed with no hidden fees.',
  },
  {
    question: 'Do you help with app store submission?',
    answer: 'Yes, app store submission and optimization are included in all our packages. We handle the entire process including screenshots, descriptions, keywords, and submissions to both Apple App Store and Google Play.',
  },
  {
    question: 'Can you integrate with existing systems?',
    answer: 'Absolutely. We specialize in integrating with third-party APIs, payment gateways, backends, databases, and existing systems. Custom integrations are handled by our expert team.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'Changes are part of our ongoing support. Bug fixes and minor updates are included. Major feature additions can be added as paid enhancements through our maintenance packages.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We use rigorous testing (unit, integration, UAT), code reviews, and continuous deployment. Every feature is tested on real devices. We also conduct user testing to validate UX before launch.',
  },
];

// =============================================
// VARIANT A: Traditional Accordion
// =============================================
function FAQVariantA({ theme }: { theme: 'dark' | 'light' }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Everything you need to know about our mobile development services.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className={`w-full text-left transition-all duration-300`}
            >
              <div
                className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                  expandedIndex === idx
                    ? `${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/10' : 'bg-gradient-to-br from-[#2ca3bd]/15 to-[#1e7a8f]/5'} border-[#2ca3bd]/40`
                    : `${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40' : 'bg-gradient-to-br from-white to-slate-50/70 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'}`
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#2ca3bd] transition-transform ${
                      expandedIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {expandedIndex === idx && (
                <div
                  className={`mt-2 p-6 rounded-2xl backdrop-blur-xl border border-[#2ca3bd]/20 ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-[#2ca3bd]/5'
                  }`}
                >
                  <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                    {item.answer}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 p-8 rounded-2xl text-center ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border border-[#2ca3bd]/20'
              : 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#1e7a8f]/10 border border-[#2ca3bd]/20'
          }`}
        >
          <p className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Don't see your question?
          </p>
          <button className="px-6 py-3 bg-[#2ca3bd] text-white rounded-lg font-semibold hover:bg-[#1e7a8f] transition-all flex items-center gap-2 mx-auto">
            Contact Our Team <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Tabs with Content Panels
// =============================================
function FAQVariantB({ theme }: { theme: 'dark' | 'light' }) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { name: 'Getting Started', questions: FAQ_ITEMS.slice(0, 3) },
    { name: 'Development', questions: FAQ_ITEMS.slice(3, 5) },
    { name: 'Support & Maintenance', questions: FAQ_ITEMS.slice(5) },
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Questions & Answers
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Find answers organized by topic.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 bg-gradient-to-r from-[#2ca3bd]/5 to-[#1e7a8f]/5 p-2 rounded-2xl border border-[#2ca3bd]/20 w-fit mx-auto">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === idx
                  ? `bg-[#2ca3bd] text-white shadow-lg`
                  : `text-white/70 hover:text-white ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-white/10'}`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {categories[activeTab].questions.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
                  : 'bg-gradient-to-br from-white to-slate-50/70 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'
              }`}
            >
              <h3 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {item.question}
              </h3>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: FAQ Grid + Search
// =============================================
function FAQVariantC({ theme }: { theme: 'dark' | 'light' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredFAQs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Find Your Answers
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Search our knowledge base or browse by category.
          </p>

          {/* Search Box */}
          <div className={`mt-8 relative max-w-2xl mx-auto ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
              : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
          } rounded-2xl p-4 flex items-center gap-3`}>
            <Search size={20} className="text-[#2ca3bd]" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`flex-1 bg-transparent outline-none ${
                theme === 'dark' ? 'text-white placeholder-white/50' : 'text-gray-900 placeholder-gray-600'
              }`}
            />
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredFAQs.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className={`text-left transition-all duration-300 rounded-2xl p-6 backdrop-blur-xl border ${
                expandedIndex === idx
                  ? `${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/10' : 'bg-gradient-to-br from-[#2ca3bd]/15 to-[#1e7a8f]/5'} border-[#2ca3bd]/40`
                  : `${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40' : 'bg-gradient-to-br from-white to-slate-50/70 border-[#2ca3bd]/20 hover:border-[#2ca3bd]/40'}`
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-[#2ca3bd] flex-shrink-0 transition-transform ${
                    expandedIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {expandedIndex === idx && (
                <p className={`mt-4 text-base leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {item.answer}
                </p>
              )}
            </button>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              No results found. Try a different search or contact our team.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
