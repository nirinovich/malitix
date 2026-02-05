import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';
import { CTA_TEXT } from '~/utils/constants';
import { useTheme } from '~/context/ThemeContext';

const USE_CASES = [
  { label: 'Sprint Commando', href: '/sprint-commando', description: 'Déblocage garanti en 14 jours' },
  { label: 'Externalisation', href: '/externalisation', description: 'Equipe senior opérationnelle en 72h' },
  { label: 'Développement Sur Mesure', href: '/developpement-sur-mesure', description: 'Application web & mobile en 90 jours' },
  { label: 'Développement Mobile', href: '/developpement-mobile', description: 'iOS & Android native & cross-platform' },
  { label: 'Refonte SI', href: '/refonte-si', description: 'Modernisation de système d\'information' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [isThemeReady, setIsThemeReady] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownTimeoutRef = useRef<number | null>(null);
  const pendingHashRef = useRef<string | null>(null);
  const isBlogActive = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsThemeReady(true);
  }, []);

  // Gérer le scroll vers la section si il y a un hash dans l'URL
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      pendingHashRef.current = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const sectionIds = ['home', 'services', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          if (!id) return;

          if (pendingHashRef.current && pendingHashRef.current !== id) {
            return;
          }

          if (pendingHashRef.current === id) {
            pendingHashRef.current = null;
          }

          setActiveSection(id);
          const newHash = `#${id}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, '', newHash);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    const observed = new Set<string>();
    const tryObserve = () => {
      let allFound = true;
      sectionIds.forEach((id) => {
        if (observed.has(id)) return;
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          observed.add(id);
        } else {
          allFound = false;
        }
      });
      return allFound;
    };

    const allFoundInitially = tryObserve();
    const intervalId = allFoundInitially
      ? null
      : window.setInterval(() => {
          if (tryObserve()) {
            window.clearInterval(intervalId as number);
          }
        }, 200);

    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
      observer.disconnect();
    };
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsUseCasesOpen(false);
    
    // Si c'est un hash (ancre), gérer la navigation vers la section
    if (href.startsWith('#')) {
      // Si on est sur une autre page, retourner d'abord à l'accueil avec le hash
      const targetId = href.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/' + href);
        // Attendre que la navigation soit complète avant de scroller
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
          }
        }, 100);
      } else {
        // Si on est déjà sur l'accueil, juste scroller
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        }
      }
      return;
    }

    if (location.pathname !== href) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
              aria-current={activeSection === 'home' ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${
                activeSection === 'home' ? 'text-[var(--text-primary)]' : ''
              }`}
            >
              Accueil
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>

            {/* Services */}
            <button
              onClick={() => handleNavClick('#services')}
              aria-current={activeSection === 'services' ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${
                activeSection === 'services' ? 'text-[var(--text-primary)]' : ''
              }`}
            >
              Services
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>

            {/* À propos */}
            <button
              onClick={() => handleNavClick('#about')}
              aria-current={activeSection === 'about' ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${
                activeSection === 'about' ? 'text-[var(--text-primary)]' : ''
              }`}
            >
              À propos
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('#contact')}
              aria-label="Contactez-nous"
              aria-current={activeSection === 'contact' ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${
                activeSection === 'contact' ? 'text-[var(--text-primary)]' : ''
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>

            {/* Blog */}
            <button
              onClick={() => handleNavClick('/blog')}
              aria-current={isBlogActive ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${
                isBlogActive ? 'text-[var(--text-primary)]' : ''
              }`}
            >
              Blog
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  isBlogActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>

            {/* Use Cases */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="nav-link relative py-2 transition-colors flex items-center gap-1 cursor-pointer"
                aria-expanded={isUseCasesOpen}
                aria-haspopup="menu"
                type="button"
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
                        type="button"
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
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle p-2 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
            >
              {isThemeReady ? (
                theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
              ) : (
                <span className="block h-5 w-5" aria-hidden="true" />
              )}
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
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${
              activeSection === 'home' ? 'text-[var(--brand-text)]' : ''
            }`}
          >
            Accueil
          </button>

            {/* Services */}
            <button
            onClick={() => handleNavClick('#services')}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${
              activeSection === 'services' ? 'text-[var(--brand-text)]' : ''
            }`}
          >
            Services
          </button>

            {/* À propos */}
            <button
            onClick={() => handleNavClick('#about')}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${
              activeSection === 'about' ? 'text-[var(--brand-text)]' : ''
            }`}
          >
            À propos
          </button>

              {/* Blog */}
              <button
              onClick={() => handleNavClick('/blog')}
              className={`mobile-nav-item block w-full text-left py-3 font-medium ${
                isBlogActive ? 'text-[var(--brand-text)]' : ''
              }`}
            >
              Blog
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

            {/* Contact */}
            <button
            onClick={() => handleNavClick('#contact')}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${
              activeSection === 'contact' ? 'text-[var(--brand-text)]' : ''
            }`}
          >
            Contact
          </button>

           {/* Action Buttons Mobile */}
           <div className="pt-4 flex items-center justify-between gap-4 border-t border-gray-200/10">
               <button
                onClick={toggleTheme}
                className="mobile-theme-toggle p-3 rounded-lg flex items-center gap-2"
                aria-label={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
              >
                  {isThemeReady ? (
                    theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
                  ) : (
                    <span className="block h-5 w-5" aria-hidden="true" />
                  )}
                  <span className="text-sm">{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
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
