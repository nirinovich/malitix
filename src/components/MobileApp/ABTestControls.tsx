import { useState, useEffect } from 'react';
import { Settings, RotateCcw } from 'lucide-react';
import { AB_TESTS, resetABTests, getAllABTestVariants } from '../../hooks/useABTest';

interface ABTestControlsProps {
  onVariantChange?: () => void;
}

const ABTestControls = ({ onVariantChange }: ABTestControlsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [variants, setVariants] = useState<Record<string, string>>({});

  useEffect(() => {
    setVariants(getAllABTestVariants());
  }, []);

  const handleVariantChange = (testName: string, variant: string) => {
    const config = AB_TESTS[testName as keyof typeof AB_TESTS];
    const storageKey = `ab_test_${config.testName}`;
    localStorage.setItem(storageKey, variant);
    setVariants(prev => ({ ...prev, [testName]: variant }));
    
    // Trigger parent component re-render
    if (onVariantChange) {
      onVariantChange();
    }
  };

  const handleReset = () => {
    resetABTests();
    setVariants(getAllABTestVariants());
    
    // Trigger parent component re-render
    if (onVariantChange) {
      onVariantChange();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white p-3 rounded-full shadow-lg transition-all"
        title="A/B Test Controls"
      >
        <Settings size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg shadow-2xl p-4 w-80 max-h-[80vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-[var(--text-primary)]">A/B Test Controls</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="space-y-4">
        {Object.entries(AB_TESTS).map(([testName, config]) => (
          <div key={testName} className="border-b border-[var(--border-primary)] pb-3">
            <label className="block text-sm font-medium mb-2 capitalize text-[var(--text-primary)]">
              {testName.replace(/_/g, ' ')}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(config.variants).map(([variantKey, description]) => (
                <button
                  key={variantKey}
                  onClick={() => handleVariantChange(testName, variantKey)}
                  className={`px-3 py-2 text-xs rounded transition-all ${
                    variants[testName] === variantKey
                      ? 'bg-[#2ca3bd] text-white font-semibold'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                  }`}
                  title={description}
                >
                  {variantKey}
                </button>
              ))}
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              {config.variants[variants[testName] as keyof typeof config.variants]}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handleReset}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-all"
      >
        <RotateCcw size={16} />
        Reset All to Random
      </button>
    </div>
  );
};

export default ABTestControls;
