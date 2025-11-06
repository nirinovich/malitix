import { useState } from 'react';
import { useABTest } from '../context/ABTestContext';
import { Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ABTestPanel() {
  const { cpuVariant, setCPUVariant } = useABTest();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#2ca3bd] to-[#1a7a8a] text-white'
            : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white'
        }`}
        title="A/B Test Panel"
      >
        <Settings className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-300`} />
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-50 rounded-2xl shadow-2xl backdrop-blur-xl border p-6 w-80 max-h-[80vh] overflow-y-auto ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-white/10'
              : 'bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-200'
          }`}
        >
          <h3
            className={`text-lg font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            A/B Test Control Panel
          </h3>

          <div className="space-y-4">
            {/* Illustration Variant Selection */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                }`}
              >
                Hero Illustration Variant
              </label>
              <div className="space-y-2">
                {[
                  { value: 'countdown', label: 'Countdown Timer', emoji: '⏱️', desc: '14-day sprint countdown' },
                  { value: 'countdown2', label: 'Countdown + Team', emoji: '⏱️👥', desc: 'Timer avec équipe qui débarque' },
                  { value: 'rescue', label: 'Progress Rescue', emoji: '🔧', desc: 'Sans Malitix → Avec Malitix' },
                  { value: 'team', label: 'Team Deployment', emoji: '👥', desc: 'Expert team activation' },
                ].map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setCPUVariant(variant.value as any)}
                    className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      cpuVariant === variant.value
                        ? theme === 'dark'
                          ? 'bg-[#2ca3bd] text-white shadow-lg shadow-[#2ca3bd]/30'
                          : 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                        : theme === 'dark'
                        ? 'bg-white/5 text-white/70 hover:bg-white/10'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{variant.emoji}</span>
                      <div className="flex-1">
                        <div className="font-semibold">{variant.label}</div>
                        <div className={`text-xs ${
                          cpuVariant === variant.value 
                            ? 'opacity-90' 
                            : theme === 'dark' ? 'opacity-60' : 'opacity-70'
                        }`}>
                          {variant.desc}
                        </div>
                        {cpuVariant === variant.value && (
                          <div className="text-xs opacity-90 font-bold mt-1">✓ Active</div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div
              className={`text-xs p-3 rounded-lg ${
                theme === 'dark'
                  ? 'bg-white/5 text-white/60'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              💡 Changes are saved automatically and persist across sessions.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
