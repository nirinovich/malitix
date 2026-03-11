import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router'; // Adjust if using react-router-dom
import { CTA_TEXT } from '~/utils/constants';
import { useTheme } from '~/context/ThemeContext';

const SERVICES_MENU = [
  { label: 'Sprint Commando', href: '/sprint-commando', description: 'Déblocage garanti en 14 jours' },
  { label: 'Externalisation', href: '/externalisation', description: 'Équipe senior opérationnelle en 72h' },
  { label: 'Développement Sur Mesure', href: '/developpement-sur-mesure', description: 'Application web & mobile en 90 jours' },
  { label: 'Développement Mobile', href: '/developpement-mobile', description: 'iOS & Android native & cross-platform' },
  { label: 'Refonte SI', href: '/refonte-si', description: 'Modernisation de système d\'information' },
];

export function Navbar() {
  const { toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const pendingHashRef = useRef<string | null>(null);
  const isBlogActive = location.pathname.startsWith('/blog');

  // 1. Instant Scroll Listener (Fixes the 1-second delay and micro-freezing)
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

  // 2. Safe Hash Navigation (Prevents yanking back to top)
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      if (window.scrollY < 50) {
        pendingHashRef.current = location.hash.replace('#', '');
        
        requestAnimationFrame(() => {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }
  }, [location]);

  // 3. Bulletproof Intersection Observer (Fixes first launch active state & TBT)
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const sectionIds = ['home', 'services', 'about', 'contact'];
    let timeoutId: number;

    // Helper: Calculate active section manually if observer is delayed on first load
    const forceCheckActiveSection = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i]!.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          setActiveSection(sections[i]!.id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length === 0) return;

        const entry = visibleEntries[0];
        const id = entry.target.getAttribute('id');
        if (!id) return;

        if (pendingHashRef.current && pendingHashRef.current !== id) return;
        if (pendingHashRef.current === id) pendingHashRef.current = null;

        setActiveSection(id);
        const newHash = `#${id}`;
        
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, '', newHash);
          }
        }, 150);
      },
      {
        rootMargin: '-15% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    const observed = new Set<string>();
    
    // Aggressive Polling: Check the DOM every 100ms until components render
    const intervalId = window.setInterval(() => {
      let foundNew = false;
      
      sectionIds.forEach((id) => {
        if (!observed.has(id)) {
          const element = document.getElementById(id);
          if (element) {
            observer.observe(element);
            observed.add(id);
            foundNew = true;
          }
        }
      });

      if (foundNew && observed.size === sectionIds.length) {
        forceCheckActiveSection();
        window.clearInterval(intervalId);
      }
    }, 100);

    // Initial check just in case they loaded instantly
    forceCheckActiveSection();

    // Failsafe: Stop polling after 3 seconds to prevent memory leaks
    const failsafeTimeout = setTimeout(() => window.clearInterval(intervalId), 3000);

    return () => {
      window.clearInterval(intervalId);
      clearTimeout(failsafeTimeout);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesMobileOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/' + href);
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
          }
        }, 100);
      } else {
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

  return (
    <nav
      data-app-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
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
              prefetch="intent"
              className="relative block h-10 w-40 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/mx_dark.webp"
                alt="Malitix dark logo"
                width={160}
                height={40}
                fetchPriority="high"
                decoding="sync"
                className="logo-dark absolute inset-0 h-10 w-auto"
              />
              <img
                src="/mx_light.webp"
                alt="Malitix light logo"
                width={160}
                height={40}
                fetchPriority="high"
                decoding="sync"
                className="logo-light absolute inset-0 h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Accueil */}
            <button
              onClick={() => handleNavClick('#home')}
              aria-current={activeSection === 'home' ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${activeSection === 'home' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              Accueil
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>

            {/* Services Dropdown - Pure CSS Hover */}
            <div className="relative group">
              <button
                className={`nav-link relative py-2 transition-colors flex items-center gap-2 cursor-pointer leading-none ${activeSection === 'services' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                aria-haspopup="menu"
                type="button"
              >
                Services
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 flex-shrink-0 -rotate-90 group-hover:rotate-0"
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                    activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>

              {/* Desktop Dropdown Menu - CSS Only Visibility */}
              <div
                className="absolute top-full left-0 pt-3 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              >
                <div className="dropdown-menu w-72 rounded-2xl shadow-2xl border overflow-hidden bg-white dark:bg-gray-900">
                  <div className="p-2">
                    {SERVICES_MENU.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        prefetch="intent"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="dropdown-item block w-full text-left px-4 py-3 rounded-xl transition-all group/item cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-sm mb-1 group-hover/item:text-[var(--brand-text)] transition-colors">
                              {service.label}
                            </div>
                            <div className="dropdown-desc text-xs text-gray-500">
                              {service.description}
                            </div>
                          </div>
                          <div className="text-[#2ca3bd] opacity-0 group-hover/item:opacity-100 transition-opacity">
                            →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* À propos */}
            <button
              onClick={() => handleNavClick('#about')}
              aria-current={activeSection === 'about' ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${activeSection === 'about' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
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
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${activeSection === 'contact' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </button>

            {/* Separator */}
            <div className="h-5 w-px bg-[var(--text-secondary)]/20"></div>

            {/* Blog */}
            <Link
              to="/blog"
              prefetch="intent"
              aria-current={isBlogActive ? 'page' : undefined}
              className={`nav-link relative group py-2 transition-colors cursor-pointer ${isBlogActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              Blog
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#2ca3bd] transition-all duration-300 ${
                  isBlogActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="theme-toggle p-2 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Basculer le thème"
              suppressHydrationWarning
            >
              <Sun size={20} className="theme-icon-sun" />
              <Moon size={20} className="theme-icon-moon" />
            </button>

            <button
              aria-label="Devis Gratuit - Contactez-nous"
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
            className="mobile-menu-btn md:hidden h-11 w-11 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-t mobile-menu bg-white dark:bg-gray-900 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => handleNavClick('#home')}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${
              activeSection === 'home' ? 'text-[var(--brand-text)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            Accueil
          </button>

          {/* Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
              className="mobile-nav-item w-full text-left py-3 font-medium flex items-center justify-between text-[var(--text-secondary)]"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isServicesMobileOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isServicesMobileOpen ? 'max-h-96 mt-2' : 'max-h-0'
              }`}
            >
              <div className="space-y-2 pl-4 border-l-2 border-[#2ca3bd]/20">
                {SERVICES_MENU.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    prefetch="intent"
                    onClick={() => {
                      setIsServicesMobileOpen(false);
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mobile-nav-item block w-full text-left py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('#about')}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${
              activeSection === 'about' ? 'text-[var(--brand-text)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            À propos
          </button>

          <button
            onClick={() => handleNavClick('#contact')}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${
              activeSection === 'contact' ? 'text-[var(--brand-text)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            Contact
          </button>

          <Link
            to="/blog"
            prefetch="intent"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-nav-item block w-full text-left py-3 font-medium border-t border-[var(--text-secondary)]/10 ${
              isBlogActive ? 'text-[var(--brand-text)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            Blog
          </Link>

          {/* Action Buttons Mobile */}
          <div className="pt-4 flex items-center justify-between gap-4 border-t border-[var(--text-secondary)]/10">
            <button
              onClick={toggleTheme}
              className="mobile-theme-toggle p-3 rounded-lg flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Basculer le thème"
              suppressHydrationWarning
            >
              <Sun size={20} className="theme-icon-sun" />
              <Moon size={20} className="theme-icon-moon" />
            </button>

            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion('#contact');
                }
                handleNavClick('#contact');
              }}
              className="flex-1 bg-[#2ca3bd] hover:bg-[#248fa5] text-white py-3 rounded-xl font-semibold text-center transition-all"
            >
              {CTA_TEXT.primary}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}