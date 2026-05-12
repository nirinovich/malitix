import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, Zap, Globe, Code, Smartphone, Database, BarChart, ShieldCheck } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';
import { CTA_TEXT } from '../../utils/constants';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  theme?: 'dark' | 'light';
}

const SERVICES_MENU = [
  { label: 'Sprint Commando', href: '/sprint-commando', description: 'Déblocage garanti en 14 jours', icon: Zap },
  { label: 'Externalisation', href: '/externalisation', description: 'Équipe senior opérationnelle en 72h', icon: Globe },
  { label: 'Développement Sur Mesure', href: '/developpement-sur-mesure', description: 'Application web & mobile en 90 jours', icon: Code },
  { label: 'Développement Mobile', href: '/developpement-mobile', description: 'iOS & Android native & cross-platform', icon: Smartphone },
  { label: 'Refonte SI', href: '/refonte-si', description: 'Modernisation de système d\'information', icon: Database },
  { label: 'SOC Monitoring', href: '/soc-monitoring', description: 'Surveillance et opérations de sécurité 24/7', icon: ShieldCheck },
];

const SOLUTIONS_MENU = [
  { label: 'BI Advisor', href: '/bi-advisor', description: 'Assistant Décisionnel Intelligent par l\'IA', icon: BarChart },
];

export default function Navbar({ theme: propTheme }: NavbarProps) {
  const { theme: contextTheme, toggleTheme } = useTheme();
  const theme = propTheme || contextTheme;
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isSolutionsMobileOpen, setIsSolutionsMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isBlogActive = location.pathname.startsWith("/blog");
  const isContactActive = location.pathname === "/contact";
  const isAboutActive = location.pathname === "/qui-sommes-nous";

  const isServicesActive = SERVICES_MENU.some(s => location.pathname === s.href);
  const isSolutionsActive = SOLUTIONS_MENU.some(s => location.pathname === s.href);

  // Force dark mode aesthetics for the BI Advisor landing page
  const isBIAdvisor = location.pathname === '/bi-advisor';
  const effectiveTheme = isBIAdvisor ? 'dark' : theme;

  useEffect(() => {
    let isCurrentlyScrolled = window.scrollY > 20;
    setIsScrolled(isCurrentlyScrolled);

    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 20;
      if (shouldBeScrolled !== isCurrentlyScrolled) {
        isCurrentlyScrolled = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesMobileOpen(false);
    setIsSolutionsMobileOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    if (location.pathname !== href) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActiveHash = (hash: string) => {
    if (location.pathname === '/' && location.hash === hash) return true;
    if (location.pathname === '/' && location.hash === '' && hash === '#home') return true;
    return false;
  };

  const textClassList = `nav-link py-2 transition-colors flex items-center gap-1 cursor-pointer ${
    effectiveTheme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
  }`;

  const linkClassList = `nav-link group py-2 flex items-center transition-colors cursor-pointer ${
    effectiveTheme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
  }`;

  const dropdownContainerClass = `w-96 rounded-2xl shadow-2xl border overflow-hidden ${
    effectiveTheme === 'dark' ? 'bg-[#060705]/98 backdrop-blur-xl border-white/10' : 'bg-surface backdrop-blur-xl border-gray-200'
  }`;
  
  const dropdownItemClass = `block w-full text-left px-4 py-3 rounded-xl transition-all group/item cursor-pointer ${
    effectiveTheme === 'dark' ? 'hover:bg-white/10 text-white/80 hover:text-white' : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
  }`;

  return (
    <nav
      data-app-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      style={isScrolled ? { 
        backgroundColor: effectiveTheme === 'dark' ? 'rgba(6, 7, 5, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: effectiveTheme === 'dark' ? '0 0 40px rgba(44, 163, 189, 0.1)' : '0 10px 40px rgba(0, 0, 0, 0.1)'
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="relative block h-10 w-40 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/mx_dark.webp"
                alt="Malitix dark logo"
                className={`absolute inset-0 h-10 w-auto transition-opacity duration-200 ${effectiveTheme === 'dark' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                style={{ zIndex: effectiveTheme === 'dark' ? 0 : 1 }}
              />
              <img
                src="/mx_light.webp"
                alt="Malitix light logo"
                className={`absolute inset-0 h-10 w-auto transition-opacity duration-200 ${effectiveTheme === 'dark' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ zIndex: effectiveTheme === 'dark' ? 1 : 0 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Accueil */}
            <button
              onClick={() => handleNavClick('#home')}
              className={linkClassList}
            >
              <span className="relative">
                Accueil
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all duration-300 ${isActiveHash('#home') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </span>
            </button>

            {/* Nos Services Dropdown */}
            <div className="relative group">
              <button className={textClassList} type="button">
                <span className="relative">
                  Services
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all duration-300 ${isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
                <ChevronDown size={16} className="transition-transform duration-200 flex-shrink-0 -rotate-90 group-hover:rotate-0 ml-1" />
              </button>

              <div className="absolute top-full left-0 pt-3 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className={dropdownContainerClass}>
                  <div className="p-2">
                    {SERVICES_MENU.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={dropdownItemClass}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            theme === 'dark' ? 'bg-[#2ca3bd]/20 text-[#2ca3bd] group-hover/item:bg-[#2ca3bd] group-hover/item:text-white' : 'bg-[#2ca3bd]/10 text-[#2ca3bd] group-hover/item:bg-[#2ca3bd] group-hover/item:text-white'
                          }`}>
                            <service.icon size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm mb-1 transition-colors group-hover/item:text-brand">
                              {service.label}
                            </div>
                            <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                              {service.description}
                            </div>
                          </div>
                          <div className="ml-auto text-brand opacity-0 group-hover/item:opacity-100 transition-opacity translate-x-[-4px] group-hover/item:translate-x-0">
                            →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nos Solutions Dropdown */}
            <div className="relative group">
              <button className={textClassList} type="button">
                <span className="relative">
                  Solutions
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all duration-300 ${isSolutionsActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
                <ChevronDown size={16} className="transition-transform duration-200 flex-shrink-0 -rotate-90 group-hover:rotate-0 ml-1" />
              </button>

              <div className="absolute top-full left-0 pt-3 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className={dropdownContainerClass}>
                  <div className="p-2">
                    {SOLUTIONS_MENU.map((solution) => (
                      <Link
                        key={solution.href}
                        to={solution.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={dropdownItemClass}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            theme === 'dark' ? 'bg-[#2ca3bd]/20 text-[#2ca3bd] group-hover/item:bg-[#2ca3bd] group-hover/item:text-white' : 'bg-[#2ca3bd]/10 text-[#2ca3bd] group-hover/item:bg-[#2ca3bd] group-hover/item:text-white'
                          }`}>
                            <solution.icon size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm mb-1 transition-colors group-hover/item:text-brand">
                              {solution.label}
                            </div>
                            <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                              {solution.description}
                            </div>
                          </div>
                          <div className="ml-auto text-brand opacity-0 group-hover/item:opacity-100 transition-opacity translate-x-[-4px] group-hover/item:translate-x-0">
                            →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Qui sommes-nous */}
            <Link
              to="/qui-sommes-nous"
              className={linkClassList}
            >
              <span className="relative">
                Qui sommes-nous ?
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all duration-300 ${isAboutActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={linkClassList}
            >
              <span className="relative">
                Contact
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all duration-300 ${isContactActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </span>
            </Link>

            {/* Separator */}
            <div className={`h-5 w-px ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`}></div>

            {/* Blog */}
            <Link
              to="/blog"
              className={linkClassList}
            >
              <span className="relative">
                Blog
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all duration-300 ${isBlogActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </span>
            </Link>
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {!isBIAdvisor && (
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  theme === 'dark' 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-surface hover:bg-gray-100 text-gray-900 border border-gray-200'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion('/contact');
                }
                handleNavClick('/contact');
              }}
              className="bg-brand hover:bg-[#248fa5] text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {CTA_TEXT.primary}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              effectiveTheme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
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
            : 'bg-surface backdrop-blur-xl border-gray-200'
        } ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => handleNavClick('#home')}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/5'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            } ${isActiveHash('#home') ? 'text-brand' : ''}`}
          >
            Accueil
          </button>

          {/* Services Mobile */}
          <div>
            <button
              onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>Services</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isServicesMobileOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isServicesMobileOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
              <div className="space-y-2 pl-4 border-l-2 border-brand/20 ml-4">
                {SERVICES_MENU.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    onClick={() => {
                      setIsServicesMobileOpen(false);
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`flex items-center gap-3 w-full text-left py-3 px-2 rounded-lg transition-all cursor-pointer ${
                      theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <service.icon size={18} className="text-brand" />
                    <span>{service.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Mobile */}
          <div>
            <button
              onClick={() => setIsSolutionsMobileOpen(!isSolutionsMobileOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isSolutionsMobileOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isSolutionsMobileOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
              <div className="space-y-2 pl-4 border-l-2 border-brand/20 ml-4">
                {SOLUTIONS_MENU.map((solution) => (
                  <Link
                    key={solution.href}
                    to={solution.href}
                    onClick={() => {
                      setIsSolutionsMobileOpen(false);
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`flex items-center gap-3 w-full text-left py-3 px-2 rounded-lg transition-all cursor-pointer ${
                      theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <solution.icon size={18} className="text-brand" />
                    <span>{solution.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/qui-sommes-nous"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/5'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            } ${isAboutActive ? 'text-brand' : ''}`}
          >
            Qui sommes-nous ?
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white hover:bg-white/5'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            } ${isContactActive ? 'text-brand' : ''}`}
          >
            Contact
          </Link>

          <Link
            to="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all border-t ${
              theme === 'dark'
                ? 'border-white/10 text-white/80 hover:text-white hover:bg-white/5'
                : 'border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            } ${isBlogActive ? 'text-brand' : ''}`}
          >
            Blog
          </Link>

          <div className="pt-4 px-4 flex gap-4">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg flex items-center justify-center transition-all ${
                theme === 'dark' 
                  ? 'bg-white/10 text-white' 
                  : 'bg-gray-100 text-gray-900 border border-gray-200'
              }`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion('/contact');
                }
                handleNavClick('/contact');
              }}
              className="flex-1 bg-brand hover:bg-[#248fa5] text-white text-center py-3 rounded-xl font-semibold shadow-lg shadow-brand/30 transition-all cursor-pointer"
            >
              {CTA_TEXT.primary}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
