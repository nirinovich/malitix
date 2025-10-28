import { useState, useEffect } from 'react';
import HeroVariantA from './HeroVariantA';
import HeroVariantB from './HeroVariantB';
import HeroVariantC from './HeroVariantC';
import { useTheme } from '../context/ThemeContext';

type HeroVariant = 'A' | 'B' | 'C';

export default function HeroABTest() {
  const [selectedVariant, setSelectedVariant] = useState<HeroVariant>('A');
  const [showControls, setShowControls] = useState(true);
  const { theme } = useTheme();

  // Charge la variante sauvegardée ou assigne aléatoirement
  useEffect(() => {
    const savedVariant = localStorage.getItem('hero-variant') as HeroVariant;
    if (savedVariant && ['A', 'B', 'C'].includes(savedVariant)) {
      setSelectedVariant(savedVariant);
    } else {
      // Attribution aléatoire pour A/B testing
      const variants: HeroVariant[] = ['A', 'B', 'C'];
      const randomVariant = variants[Math.floor(Math.random() * variants.length)];
      setSelectedVariant(randomVariant);
      localStorage.setItem('hero-variant', randomVariant);
    }
  }, []);

  // Sauvegarde quand l'utilisateur change manuellement
  const handleVariantChange = (variant: HeroVariant) => {
    setSelectedVariant(variant);
    localStorage.setItem('hero-variant', variant);
    
    // Track l'événement (à connecter avec votre analytics)
    console.log(`A/B Test: Variant ${variant} selected`);
  };

  // Raccourci clavier pour afficher/masquer les contrôles (Ctrl+Shift+T)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        setShowControls(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const variants = {
    A: HeroVariantA,
    B: HeroVariantB,
    C: HeroVariantC
  };

  const SelectedHero = variants[selectedVariant];

  return (
    <div className="relative">
      {/* Composant Hero sélectionné */}
      <SelectedHero />

      {/* Contrôles A/B Testing - Position fixe en bas à droite */}
      {showControls && (
        <div className={`fixed bottom-6 right-6 z-50 ${
          theme === 'dark' 
            ? 'bg-[#060705]/95 border border-[#2ca3bd]/30' 
            : 'bg-white/95 border border-gray-200'
        } backdrop-blur-lg rounded-2xl shadow-2xl p-4 transition-all duration-300`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                A/B Testing
              </span>
            </div>
            <button
              onClick={() => setShowControls(false)}
              className={`text-xs ${
                theme === 'dark' ? 'text-white/40 hover:text-white/80' : 'text-gray-400 hover:text-gray-700'
              } transition-colors`}
            >
              ✕
            </button>
          </div>

          {/* Sélecteur de variante */}
          <div className="space-y-2">
            <div className={`text-xs mb-3 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
              Variante active : <span className="font-bold text-[#2ca3bd]">{selectedVariant}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {(['A', 'B', 'C'] as HeroVariant[]).map((variant) => (
                <button
                  key={variant}
                  onClick={() => handleVariantChange(variant)}
                  className={`px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    selectedVariant === variant
                      ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-lg scale-105'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Descriptions des variantes */}
          <div className={`mt-4 pt-4 border-t ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200'
          }`}>
            <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
              {selectedVariant === 'A' && '📐 Minimaliste et Direct'}
              {selectedVariant === 'B' && '🔥 Bold avec Urgence'}
              {selectedVariant === 'C' && '📊 Split avec Stats'}
            </div>
          </div>

          {/* Info raccourci */}
          <div className={`mt-3 text-[10px] ${theme === 'dark' ? 'text-white/30' : 'text-gray-400'}`}>
            Ctrl+Shift+T pour masquer
          </div>
        </div>
      )}

      {/* Bouton pour réafficher les contrôles si masqués */}
      {!showControls && (
        <button
          onClick={() => setShowControls(true)}
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full ${
            theme === 'dark' 
              ? 'bg-[#2ca3bd] hover:bg-[#1e7a8f]' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center font-bold`}
        >
          {selectedVariant}
        </button>
      )}
    </div>
  );
}
