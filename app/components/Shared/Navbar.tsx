import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';
import { CTA_TEXT } from '~/utils/constants';
import { useTheme } from '~/context/ThemeContext';

const USE_CASES = [
  { label: 'Sprint Commando', href: '/sprint', description: 'Déblocage garanti en 14 jours' },
  { label: 'Développement Sur Mesure', href: '/custom-dev', description: 'Application web & mobile en 90 jours' },
  { label: 'Développement Mobile', href: '/mobile-app', description: 'iOS & Android native & cross-platform' },
  { label: 'Refonte SI', href: '/si-refonte', description: 'Modernisation de système d\'information' },
];

export function Navbar() {
  const { toggleTheme } = useTheme();
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
          ? 'navbar-scrolled backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
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
                fetchPriority="high"
                className="logo-dark h-10 w-auto transition-opacity duration-200"
              />
              <img
                src="/mx_light.webp"
                alt="Malitix light logo"
                fetchPriority="high"
                className="logo-light h-10 w-auto transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Accueil */}
            <button
              onClick={() => handleNavClick('#home')}
              className="nav-link relative group py-2 transition-colors cursor-pointer"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Services */}
            <button
              onClick={() => handleNavClick('#services')}
              className="nav-link relative group py-2 transition-colors cursor-pointer"
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
                className="nav-link relative py-2 transition-colors flex items-center gap-1 cursor-pointer"
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
                <div className="dropdown-menu w-72 rounded-2xl shadow-2xl border overflow-hidden">
                  <div className="p-2">
                    {USE_CASES.map((useCase) => (
                      <button
                        key={useCase.href}
                        onClick={() => handleUseCaseClick(useCase.href)}
                        className="dropdown-item w-full text-left px-4 py-3 rounded-xl transition-all group/item cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-sm mb-1 group-hover/item:text-[var(--brand-text)] transition-colors">
                              {useCase.label}
                            </div>
                            <div className="dropdown-desc text-xs">
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
              className="nav-link relative group py-2 transition-colors cursor-pointer"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('#contact')}
              aria-label="Contactez-nous"
              className="nav-link relative group py-2 transition-colors cursor-pointer"
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
              className="theme-toggle p-2 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {<Sun size={20} className="hidden dark:inline" />}
              {<Moon size={20} className="inline dark:hidden" />}
            </button>

            {/* CTA Button */}
            <button
              aria-label="Devis Gratuit - Contactez-nous"
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag_report_conversion('#contact');
                }
                handleNavClick('#contact');
              }}
              className="bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {CTA_TEXT.primary}
            </button>
          </div>

          {/* Mobile Menu Button - 44x44px target */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn md:hidden h-11 w-11 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-t mobile-menu transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Accueil */}
           <button
            onClick={() => handleNavClick('#home')}
            className="mobile-nav-item block w-full text-left py-3 font-medium"
          >
            Accueil
          </button>

            {/* Services */}
            <button
            onClick={() => handleNavClick('#services')}
            className="mobile-nav-item block w-full text-left py-3 font-medium"
          >
            Services
          </button>

           {/* Use Cases Mobile */}
           <div className="py-2 space-y-2 pl-4 border-l-2 border-[#2ca3bd]/20">
            <div className="mobile-nav-label text-xs font-semibold uppercase tracking-wider mb-2">
              Use Cases
            </div>
            {USE_CASES.map((useCase) => (
               <button
                  key={useCase.href}
                  onClick={() => handleUseCaseClick(useCase.href)}
                  className="mobile-nav-item block w-full text-left py-3"
                >
                  {useCase.label}
                </button>
            ))}
           </div>

            {/* À propos */}
            <button
            onClick={() => handleNavClick('#about')}
            className="mobile-nav-item block w-full text-left py-3 font-medium"
          >
            À propos
          </button>

            {/* Contact */}
            <button
            onClick={() => handleNavClick('#contact')}
            className="mobile-nav-item block w-full text-left py-3 font-medium"
          >
            Contact
          </button>

           {/* Action Buttons Mobile */}
           <div className="pt-4 flex items-center justify-between gap-4 border-t border-gray-200/10">
               <button
                onClick={toggleTheme}
                className="mobile-theme-toggle p-3 rounded-lg flex items-center gap-2"
                aria-label="Toggle theme"
              >
                  {<Sun size={20} className="hidden dark:inline" />}
                  {<Moon size={20} className="inline dark:hidden" />}
                  <span className="text-sm hidden dark:inline">Mode clair</span>
                  <span className="text-sm inline dark:hidden">Mode sombre</span>
              </button>

             <button
              onClick={() => handleNavClick('#contact')}
              className="flex-1 bg-[#2ca3bd] text-white py-3 rounded-xl font-semibold text-center"
             >
               {CTA_TEXT.primary}
             </button>
           </div>
        </div>
      </div>
    </nav>
  );
}
