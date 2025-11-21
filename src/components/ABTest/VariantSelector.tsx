import { useState } from 'react';
import { Settings, X, BarChart3, Eye } from 'lucide-react';
import { useABTest } from '../../context/ABTestContext';
import { useTheme } from '../../context/ThemeContext';

export default function VariantSelector() {
  const { variants, setVariant, getAnalytics, isDevMode, toggleDevMode } = useABTest();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  if (!isDevMode) {
    return (
      <button
        onClick={toggleDevMode}
        className={`fixed bottom-4 right-4 z-[9999] p-3 rounded-full shadow-lg transition-all hover:scale-110 ${
          theme === 'dark'
            ? 'bg-[#2ca3bd] text-white'
            : 'bg-blue-600 text-white'
        }`}
        title="Enable A/B Testing"
      >
        <Settings size={20} />
      </button>
    );
  }

  const components = [
    { key: 'hero', label: 'Hero' },
    { key: 'problem', label: 'Problem' },
    { key: 'solution', label: 'Solution' },
    { key: 'stack', label: 'Stack' },
    { key: 'testimonial', label: 'Testimonials' },
    { key: 'guarantee', label: 'Guarantee' },
    { key: 'cta', label: 'CTA' },
  ] as const;

  const variantOptions: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];

  const calculateCTR = (impressions: number, clicks: number) => {
    if (impressions === 0) return 0;
    return ((clicks / impressions) * 100).toFixed(2);
  };

  const calculateConversionRate = (clicks: number, conversions: number) => {
    if (clicks === 0) return 0;
    return ((conversions / clicks) * 100).toFixed(2);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-[9999] p-3 rounded-full shadow-lg transition-all hover:scale-110 ${
          theme === 'dark'
            ? 'bg-[#2ca3bd] text-white'
            : 'bg-blue-600 text-white'
        }`}
        title="A/B Test Settings"
      >
        {isOpen ? <X size={20} /> : <Settings size={20} />}
      </button>

      {/* Control Panel */}
      {isOpen && (
        <div
          className={`fixed bottom-20 right-4 z-[9999] w-96 max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl border ${
            theme === 'dark'
              ? 'bg-[#060705]/98 backdrop-blur-xl border-white/10'
              : 'bg-white/98 backdrop-blur-xl border-gray-200'
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3
                className={`text-lg font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                A/B Test Control Panel
              </h3>
              <button
                onClick={() => setShowAnalytics(!showAnalytics)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-white/10 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Toggle Analytics"
              >
                {showAnalytics ? <Eye size={18} /> : <BarChart3 size={18} />}
              </button>
            </div>
            <button
              onClick={toggleDevMode}
              className={`text-xs px-3 py-1.5 rounded-full ${
                theme === 'dark'
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              Disable Dev Mode
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {!showAnalytics ? (
              // Variant Selector
              <>
                {components.map((component) => (
                  <div key={component.key} className="space-y-2">
                    <label
                      className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {component.label}
                    </label>
                    <div className="flex gap-2">
                      {variantOptions.map((variant) => (
                        <button
                          key={variant}
                          onClick={() =>
                            setVariant(component.key as any, variant as any)
                          }
                          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                            variants[component.key as keyof typeof variants] ===
                            variant
                              ? theme === 'dark'
                                ? 'bg-[#2ca3bd] text-white'
                                : 'bg-blue-600 text-white'
                              : theme === 'dark'
                              ? 'bg-white/5 text-white/70 hover:bg-white/10'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Variant {variant}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Analytics View
              <>
                {components.map((component) => {
                  const analytics = getAnalytics(
                    component.key as keyof typeof variants
                  );
                  
                  return (
                    <div
                      key={component.key}
                      className={`p-4 rounded-xl border ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <h4
                        className={`text-sm font-bold mb-3 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {component.label}
                      </h4>
                      {analytics.length === 0 ? (
                        <p
                          className={`text-xs ${
                            theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                          }`}
                        >
                          No data yet
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {analytics.map((data) => (
                            <div
                              key={data.variant}
                              className={`text-xs space-y-1 p-2 rounded ${
                                theme === 'dark'
                                  ? 'bg-white/5'
                                  : 'bg-white'
                              }`}
                            >
                              <div
                                className={`font-semibold ${
                                  theme === 'dark'
                                    ? 'text-[#2ca3bd]'
                                    : 'text-blue-600'
                                }`}
                              >
                                Variant {data.variant}
                              </div>
                              <div
                                className={`grid grid-cols-2 gap-2 ${
                                  theme === 'dark'
                                    ? 'text-white/70'
                                    : 'text-gray-600'
                                }`}
                              >
                                <div>Views: {data.impressions}</div>
                                <div>Clicks: {data.clicks}</div>
                                <div>
                                  CTR:{' '}
                                  {calculateCTR(data.impressions, data.clicks)}%
                                </div>
                                <div>
                                  Conv:{' '}
                                  {calculateConversionRate(
                                    data.clicks,
                                    data.conversions
                                  )}
                                  %
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
