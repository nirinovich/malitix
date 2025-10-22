import { useState } from 'react';
import { Settings } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import NavbarCentered from './components/NavbarCentered';
import NavbarMinimal from './components/NavbarMinimal';
import HeroAnimated from './components/HeroAnimated';
import HeroClean from './components/HeroClean';
import ServicesBento from './components/ServicesBento';
import ServicesReference from './components/ServicesReference';
import TrustStats from './components/TrustStats';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import type { HeroVariant, ServicesVariant, NavbarVariant } from './types';

function AppContent() {
  const { theme } = useTheme();
  const [navbarVariant, setNavbarVariant] = useState<NavbarVariant>('default');
  const [heroVariant, setHeroVariant] = useState<HeroVariant>('animated');
  const [servicesVariant, setServicesVariant] = useState<ServicesVariant>('bento');
  const [showControls, setShowControls] = useState(true);

  const renderNavbar = () => {
    switch (navbarVariant) {
      case 'centered':
        return <NavbarCentered theme={theme} />;
      case 'minimal':
        return <NavbarMinimal theme={theme} />;
      default:
        return <Navbar theme={theme} />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      {/* A/B Test Controls - Remove in production */}
      {showControls && (
        <div className={`fixed top-24 right-4 z-50 backdrop-blur-xl rounded-2xl p-4 shadow-2xl max-w-xs ${
          theme === 'dark'
            ? 'bg-[#060705]/95 border border-[#2ca3bd]/30 shadow-[#2ca3bd]/20'
            : 'bg-white/95 border border-gray-200 shadow-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Settings className="text-[#2ca3bd]" size={20} />
              <h3 className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                A/B Test Controls
              </h3>
            </div>
            <button
              onClick={() => setShowControls(false)}
              className={`transition-colors text-xs ${
                theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Masquer
            </button>
          </div>

          <div className="space-y-4">
            {/* Navbar Variant Toggle */}
            <div>
              <label className={`text-xs font-medium block mb-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Navbar:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setNavbarVariant('default')}
                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    navbarVariant === 'default'
                      ? 'bg-[#2ca3bd] text-white'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Default
                </button>
                <button
                  onClick={() => setNavbarVariant('centered')}
                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    navbarVariant === 'centered'
                      ? 'bg-[#2ca3bd] text-white'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Center
                </button>
                <button
                  onClick={() => setNavbarVariant('minimal')}
                  className={`px-2 py-2 rounded-lg text-xs font-medium transition-all ${
                    navbarVariant === 'minimal'
                      ? 'bg-[#2ca3bd] text-white'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Minimal
                </button>
              </div>
            </div>

            {/* Hero Variant Toggle */}
            <div>
              <label className={`text-xs font-medium block mb-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Hero Section:
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setHeroVariant('animated')}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    heroVariant === 'animated'
                      ? 'bg-[#2ca3bd] text-white'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Animated
                </button>
                <button
                  onClick={() => setHeroVariant('clean')}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    heroVariant === 'clean'
                      ? 'bg-[#2ca3bd] text-white'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Clean
                </button>
              </div>
            </div>

            {/* Services Variant Toggle */}
            <div>
              <label className={`text-xs font-medium block mb-2 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Services Section:
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setServicesVariant('bento')}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    servicesVariant === 'bento'
                      ? 'bg-[#2ca3bd] text-white'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Bento Grid
                </button>
                <button
                  onClick={() => setServicesVariant('reference')}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    servicesVariant === 'reference'
                      ? 'bg-[#2ca3bd] text-white'
                      : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Reference
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show Controls Button (when hidden) */}
      {!showControls && (
        <button
          onClick={() => setShowControls(true)}
          className="fixed top-24 right-4 z-50 bg-[#2ca3bd] hover:bg-[#248fa5] p-3 rounded-full shadow-xl shadow-[#2ca3bd]/30 transition-all hover:scale-110"
          aria-label="Show A/B Test Controls"
        >
          <Settings className="text-white" size={20} />
        </button>
      )}

      {/* Main Content */}
      {renderNavbar()}
      
      {/* Hero Section - Variant Based */}
      {heroVariant === 'animated' ? <HeroAnimated /> : <HeroClean />}
      
      {/* Services Section - Variant Based */}
      {servicesVariant === 'bento' ? <ServicesBento /> : <ServicesReference />}
      
      {/* Trust/Stats Section */}
      <TrustStats />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
