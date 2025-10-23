import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroAnimated from './components/HeroAnimated';
import ServicesBento from './components/ServicesBento';
import TrustStats from './components/TrustStats';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      {/* Main Content */}
      <Navbar theme={theme} />
      
      {/* Hero Section */}
      <HeroAnimated />
      
      {/* Services Section */}
      <ServicesBento />
      
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
