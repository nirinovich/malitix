import { useTheme } from '../../../context/ThemeContext';
import type { LandingSectionKey, LandingVariant, LandingVariantConfig } from '../../../types';
import { LANDING_SECTIONS, LANDING_VARIANT_OPTIONS } from '../../../utils/landingVariants';

interface VariantControlsProps {
  variants: LandingVariantConfig;
  onChange: (section: LandingSectionKey, variant: LandingVariant) => void;
}

export default function VariantControls({ variants, onChange }: VariantControlsProps) {
  const { theme } = useTheme();

  return (
    <div className="fixed right-6 top-28 z-40 hidden xl:block">
      <div
        className={`w-72 rounded-2xl border shadow-xl backdrop-blur-xl p-4 space-y-4 ${
          theme === 'dark'
            ? 'bg-[#0b0f0e]/90 border-white/10 text-white'
            : 'bg-white/90 border-gray-200 text-gray-900'
        }`}
      >
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
            Variants
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Choisissez la version par section
          </p>
        </div>

        <div className="space-y-3">
          {LANDING_SECTIONS.map((section) => (
            <div key={section.key} className="space-y-2">
              <div className={`text-xs font-semibold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {section.label}
              </div>
              <div className="flex items-center gap-2">
                {LANDING_VARIANT_OPTIONS.map((option) => {
                  const isActive = variants[section.key] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => onChange(section.key, option)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
                        isActive
                          ? 'bg-[#2ca3bd] text-white border-[#2ca3bd] shadow-md shadow-[#2ca3bd]/30'
                          : theme === 'dark'
                            ? 'border-white/10 text-white/70 hover:text-white hover:border-white/30'
                            : 'border-gray-200 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
