import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';
import { CTA_TEXT } from '../../utils/constants';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  theme?: 'dark' | 'light';
}

const USE_CASES = [
  { label: 'Externalisation', href: '/externalisation', description: 'Équipe senior opérationnelle en 72h' },
  { label: 'Sprint Commando', href: '/sprint-commando', description: 'Déblocage garanti en 14 jours' },
  { label: 'Développement Sur Mesure', href: '/developpement-sur-mesure', description: 'Application web & mobile en 90 jours' },
  { label: 'Développement Mobile', href: '/developpement-mobile', description: 'iOS & Android native & cross-platform' },
  { label: 'Refonte SI', href: '/refonte-si', description: 'Modernisation de système d\'information' },
  // Add more use cases here in the future
];

export default function Navbar({ theme: propTheme }: NavbarProps) {
  const { theme: contextTheme, toggleTheme } = useTheme();
  const theme = propTheme || contextTheme;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gérer le scroll vers la section si il y a un hash dans l'URL
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsUseCasesOpen(false);
    
    // Si c'est un hash (ancre), gérer la navigation vers la section
    if (href.startsWith('#')) {
      // Si on est sur une autre page, retourner d'abord à l'accueil avec le hash
      if (location.pathname !== '/') {
        navigate('/' + href);
        // Attendre que la navigation soit complète avant de scroller
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Si on est déjà sur l'accueil, juste scroller
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleUseCaseClick = (href: string) => {
    setIsUseCasesOpen(false);
    setIsMobileMenuOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Better dropdown handling to prevent it from closing too quickly
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsUseCasesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setIsUseCasesOpen(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <nav
      data-app-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      style={isScrolled ? { 
        backgroundColor: theme === 'dark' ? 'rgba(6, 7, 5, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: theme === 'dark' ? '0 0 40px rgba(44, 163, 189, 0.1)' : '0 10px 40px rgba(0, 0, 0, 0.1)'
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/mx_dark.webp"
                alt="Malitix dark logo"
                className={`h-10 transition-opacity duration-200 ${theme === 'dark' ? 'opacity-0 absolute pointer-events-none' : 'opacity-100 relative'}`}
                style={{ zIndex: theme === 'dark' ? 0 : 1 }}
              />
              <img
                src="/mx_light.webp"
                alt="Malitix light logo"
                className={`h-10 transition-opacity duration-200 ${theme === 'dark' ? 'opacity-100 relative' : 'opacity-0 absolute pointer-events-none'}`}
                style={{ zIndex: theme === 'dark' ? 1 : 0 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Accueil */}
            <button
              onClick={() => handleNavClick('#home')}
              className={`relative group py-2 transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Services */}
            <button
              onClick={() => handleNavClick('#services')}
              className={`relative group py-2 transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Use Cases Dropdown - Now after Services */}
            <div 
              className="relative group"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`relative py-2 transition-colors flex items-center gap-1 cursor-pointer ${
                  theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Use Cases
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isUseCasesOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Dropdown Menu - Improved with proper spacing */}
              <div
                className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                  isUseCasesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className={`w-72 rounded-2xl shadow-2xl border overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-[#060705]/98 backdrop-blur-xl border-white/10'
                    : 'bg-[var(--surface-primary)] backdrop-blur-xl border-gray-200'
                }`}>
                  <div className="p-2">
                    {USE_CASES.map((useCase) => (
                      <button
                        key={useCase.href}
                        onClick={() => handleUseCaseClick(useCase.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all group/item cursor-pointer ${
                          theme === 'dark'
                            ? 'hover:bg-white/10 text-white/80 hover:text-white'
                            : 'hover:bg-[var(--bg-secondary)] text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-sm mb-1 group-hover/item:text-[#2ca3bd] transition-colors">
                              {useCase.label}
                            </div>
                            <div className={`text-xs ${
                              theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                            }`}>
                              {useCase.description}
                            </div>
                          </div>
                          <div className="text-[#2ca3bd] opacity-0 group-hover/item:opacity-100 transition-opacity">
                            →
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* À propos */}
            <button
              onClick={() => handleNavClick('#about')}
              className={`relative group py-2 transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`relative group py-2 transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-[var(--bg-secondary)] hover:bg-[var(--surface-primary)] text-gray-900'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion('#contact');
                }
                handleNavClick('#contact');
              }}
              className="bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {CTA_TEXT.primary}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-[var(--bg-secondary)]'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-t transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-[#060705]/98 backdrop-blur-xl border-white/10'
            : 'bg-[var(--surface-primary)] backdrop-blur-xl border-gray-200'
        } ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Accueil */}
          <button
            onClick={() => handleNavClick('#home')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/5'
                : 'text-gray-700 hover:text-gray-900 hover:bg-[var(--bg-secondary)]'
            }`}
          >
            Accueil
          </button>

          {/* Services */}
          <button
            onClick={() => handleNavClick('#services')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/5'
                : 'text-gray-700 hover:text-gray-900 hover:bg-[var(--bg-secondary)]'
            }`}
          >
            Services
          </button>

          {/* Use Cases Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-[var(--bg-secondary)]'
              }`}
            >
              <span>Use Cases</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isUseCasesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {/* Mobile Use Cases List */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isUseCasesOpen ? 'max-h-96 mt-2' : 'max-h-0'
              }`}
            >
              <div className="space-y-2 pl-4">
                {USE_CASES.map((useCase) => (
                  <button
                    key={useCase.href}
                    onClick={() => handleUseCaseClick(useCase.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-white/5 text-white/80 hover:text-white hover:bg-white/10'
                        : 'bg-[var(--bg-secondary)] text-gray-700 hover:text-gray-900 hover:bg-[var(--surface-primary)]'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{useCase.label}</div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      {useCase.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* À propos */}
          <button
            onClick={() => handleNavClick('#about')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/5'
                : 'text-gray-700 hover:text-gray-900 hover:bg-[var(--bg-secondary)]'
            }`}
          >
            À propos
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('#contact')}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/5'
                : 'text-gray-700 hover:text-gray-900 hover:bg-[var(--bg-secondary)]'
            }`}
          >
            Contact
          </button>

          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                (window as any).gtag_report_conversion('#contact');
              }
              handleNavClick('#contact');
            }}
            className="block w-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white text-center px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#2ca3bd]/30 transition-all cursor-pointer"
          >
            {CTA_TEXT.primary}
          </button>
        </div>
      </div>
    </nav>
  );
}
