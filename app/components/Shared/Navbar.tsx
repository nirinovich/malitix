import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon, Zap, Globe, Code, Smartphone, Database, BarChart, ShieldCheck } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router"; // Adjust if using react-router-dom
import { CTA_TEXT } from "../../utils/constants";
import { useTheme } from "../../context/ThemeContext";

const SOLUTIONS_MENU = [
  {
    label: "BI Advisor",
    href: "/bi-advisor",
    description: "Prenez des décisions 10x plus vite grâce à l'IA",
    icon: BarChart,
  },
];

const SERVICES_MENU = [
  {
    label: "Sprint Commando",
    href: "/sprint-commando",
    description: "Déblocage garanti en 14 jours",
    icon: Zap,
  },
  {
    label: "Externalisation",
    href: "/externalisation",
    description: "Équipe senior opérationnelle en 72h",
    icon: Globe,
  },
  {
    label: "Développement Sur Mesure",
    href: "/developpement-sur-mesure",
    description: "Application web & mobile en 90 jours",
    icon: Code,
  },
  {
    label: "Développement Mobile",
    href: "/developpement-mobile",
    description: "iOS & Android native & cross-platform",
    icon: Smartphone,
  },
  {
    label: "Refonte SI",
    href: "/refonte-si",
    description: "Modernisation de système d'information",
    icon: Database,
  },
  {
    label: "SOC Monitoring",
    href: "/soc-monitoring",
    description: "Surveillance et opérations de sécurité 24/7",
    icon: ShieldCheck,
  },
];

export function Navbar() {
  const { toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isSolutionsMobileOpen, setIsSolutionsMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isBlogActive = location.pathname.startsWith("/blog");
  const isContactActive = location.pathname === "/contact";
  const isServicesActive = SERVICES_MENU.some(s => location.pathname === s.href) || location.pathname === "/services";
  const isSolutionsActive = SOLUTIONS_MENU.some(s => location.pathname === s.href);
  const isAboutActive = location.pathname === "/qui-sommes-nous";
  const isBIAdvisorActive = location.pathname === "/bi-advisor";

  // Instant Scroll Listener (Fixes the 1-second delay and micro-freezing)
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesMobileOpen(false);
    setIsSolutionsMobileOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Sync URL hash without jumping
          window.history.pushState(null, "", href);
        }
      }
      return;
    }

    if (location.pathname !== href) {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const isActiveHash = (hash: string) => {
    if (location.pathname === "/" && location.hash === hash) return true;
    if (location.pathname === "/" && location.hash === "" && hash === "#home") return true;
    return false;
  };

  return (
    <nav
      data-app-navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${isScrolled ? "navbar-scrolled backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"

              className="relative block h-8 w-32 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/mx_dark.webp"
                alt="Malitix dark logo"
                width={128}
                height={32}
                fetchPriority="high"
                decoding="async"
                className="logo-dark absolute inset-0 h-8 w-auto"
              />
              <img
                src="/mx_light.webp"
                alt="Malitix light logo"
                width={128}
                height={32}
                fetchPriority="high"
                decoding="async"
                className="logo-light absolute inset-0 h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Accueil */}
            <button
              onClick={() => handleNavClick("#home")}
              aria-current={isActiveHash("#home") ? "page" : undefined}
              className={`nav-link group py-2 flex items-center transition-colors cursor-pointer ${isActiveHash("#home") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
            >
              <span className="relative">
                Accueil
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ${isActiveHash("#home") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </span>
            </button>

            {/* Services Dropdown - Pure CSS Hover */}
            <div className="relative group">
              <button
                className={`nav-link py-2 transition-colors flex items-center gap-2 cursor-pointer ${isServicesActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
                aria-haspopup="menu"
                type="button"
                onClick={() => handleNavClick("/services")}
              >
                <span className="relative">
                  Services
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ${isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </span>
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 flex-shrink-0 -rotate-90 group-hover:rotate-0"
                />
              </button>

              {/* Desktop Dropdown Menu - CSS Only Visibility */}
              <div className="absolute top-full left-0 pt-3 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="dropdown-menu w-[420px] rounded-2xl shadow-2xl border border-[var(--border-primary)] overflow-hidden bg-[var(--surface-primary)]">
                  <div className="p-2">
                    {SERVICES_MENU.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
          
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className="dropdown-item block w-full text-left px-4 py-3 rounded-xl transition-all group/item cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] group-hover/item:bg-[var(--brand-primary)] group-hover/item:text-white transition-colors">
                            <service.icon size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm mb-1 text-[var(--text-primary)] group-hover/item:text-[var(--brand-text)] transition-colors">
                              {service.label}
                            </div>
                            <div className="dropdown-desc text-xs text-[var(--text-secondary)] leading-relaxed">
                              {service.description}
                            </div>
                          </div>
                          <div className="ml-auto text-[var(--brand-primary)] opacity-0 group-hover/item:opacity-100 transition-opacity -translate-x-1 group-hover/item:translate-x-0">
                            →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown - Pure CSS Hover */}
            <div className="relative group">
              <button
                className={`nav-link py-2 transition-colors flex items-center gap-2 cursor-pointer ${isSolutionsActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
                aria-haspopup="menu"
                type="button"
              >
                <span className="relative">
                  Solutions
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ${isSolutionsActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </span>
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 flex-shrink-0 -rotate-90 group-hover:rotate-0"
                />
              </button>

              {/* Desktop Dropdown Menu - CSS Only Visibility */}
              <div className="absolute top-full left-0 pt-3 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="dropdown-menu w-[420px] rounded-2xl shadow-2xl border border-[var(--border-primary)] overflow-hidden bg-[var(--surface-primary)]">
                  <div className="p-2">
                    {SOLUTIONS_MENU.map((solution) => (
                      <Link
                        key={solution.href}
                        to={solution.href}
          
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className="dropdown-item block w-full text-left px-4 py-3 rounded-xl transition-all group/item cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] group-hover/item:bg-[var(--brand-primary)] group-hover/item:text-white transition-colors">
                            <solution.icon size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-sm mb-1 text-[var(--text-primary)] group-hover/item:text-[var(--brand-text)] transition-colors">
                              {solution.label}
                            </div>
                            <div className="dropdown-desc text-xs text-[var(--text-secondary)] leading-relaxed">
                              {solution.description}
                            </div>
                          </div>
                          <div className="ml-auto text-[var(--brand-primary)] opacity-0 group-hover/item:opacity-100 transition-opacity -translate-x-1 group-hover/item:translate-x-0">
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

              aria-current={isAboutActive ? "page" : undefined}
              className={`nav-link group py-2 flex items-center transition-colors cursor-pointer ${isAboutActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
            >
              <span className="relative">
                Qui sommes-nous ?
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ${isAboutActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"

              aria-label="Contactez-nous"
              aria-current={isContactActive ? "page" : undefined}
              className={`nav-link group py-2 flex items-center transition-colors cursor-pointer ${isContactActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
            >
              <span className="relative">
                Contact
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ${isContactActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </span>
            </Link>

            {/* Separator */}
            <div className="h-5 w-px bg-[var(--text-secondary)]/20"></div>

            {/* Blog */}
            <Link
              to="/blog"

              aria-current={isBlogActive ? "page" : undefined}
              className={`nav-link group py-2 flex items-center transition-colors cursor-pointer ${isBlogActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
            >
              <span className="relative">
                Blog
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ${isBlogActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </span>
            </Link>
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {!isBIAdvisorActive && (
              <button
                onClick={toggleTheme}
                className="theme-toggle p-2 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Basculer le thème"
                suppressHydrationWarning
              >
                <Sun size={20} className="theme-icon-sun" />
                <Moon size={20} className="theme-icon-moon" />
              </button>
            )}

            <button
              aria-label="Consultation Gratuite - Contactez-nous"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion("/contact");
                }
                handleNavClick("/contact");
              }}
              className="bg-[var(--brand-primary)] hover:bg-[#248fa5] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[var(--brand-primary)]/30 hover:shadow-[var(--brand-primary)]/50 hover:scale-105 transition-all duration-300 cursor-pointer"
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
        className={`md:hidden absolute top-full left-0 right-0 border-t border-[var(--border-primary)] mobile-menu bg-[var(--surface-primary)] transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => handleNavClick("#home")}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${isActiveHash("#home") ? "text-[var(--brand-text)]" : "text-[var(--text-secondary)]"
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
                className={`transition-transform duration-200 ${isServicesMobileOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isServicesMobileOpen ? "max-h-[500px] mt-2" : "max-h-0"
                }`}
            >
              <div className="space-y-2 pl-4 border-l-2 border-[var(--brand-primary)]/20">
                {SERVICES_MENU.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
      
                    onClick={() => {
                      setIsServicesMobileOpen(false);
                      setIsMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="mobile-nav-item flex items-center gap-3 w-full text-left py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    <service.icon size={18} className="text-[var(--brand-primary)]" />
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsSolutionsMobileOpen(!isSolutionsMobileOpen)}
              className="mobile-nav-item w-full text-left py-3 font-medium flex items-center justify-between text-[var(--text-secondary)]"
            >
              Solutions
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isSolutionsMobileOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isSolutionsMobileOpen ? "max-h-[500px] mt-2" : "max-h-0"
                }`}
            >
              <div className="space-y-2 pl-4 border-l-2 border-[var(--brand-primary)]/20">
                {SOLUTIONS_MENU.map((solution) => (
                  <Link
                    key={solution.href}
                    to={solution.href}
      
                    onClick={() => {
                      setIsSolutionsMobileOpen(false);
                      setIsMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="mobile-nav-item flex items-center gap-3 w-full text-left py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    <solution.icon size={18} className="text-[var(--brand-primary)]" />
                    {solution.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/qui-sommes-nous"
            prefetch="intent"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${isAboutActive ? "text-[var(--brand-text)]" : "text-[var(--text-secondary)]"
              }`}
          >
            Qui sommes-nous ?
          </Link>

          <Link
            to="/contact"
            prefetch="intent"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-nav-item block w-full text-left py-3 font-medium ${isContactActive ? "text-[var(--brand-text)]" : "text-[var(--text-secondary)]"
              }`}
          >
            Contact
          </Link>

          <Link
            to="/blog"
            prefetch="intent"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-nav-item block w-full text-left py-3 font-medium border-t border-[var(--text-secondary)]/10 ${isBlogActive ? "text-[var(--brand-text)]" : "text-[var(--text-secondary)]"
              }`}
          >
            Blog
          </Link>

          {/* Action Buttons Mobile */}
          <div className="pt-4 flex items-center justify-between gap-4 border-t border-[var(--text-secondary)]/10">
            {!isBIAdvisorActive && (
              <button
                onClick={toggleTheme}
                className="mobile-theme-toggle p-3 rounded-lg flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="Basculer le thème"
                suppressHydrationWarning
              >
                <Sun size={20} className="theme-icon-sun" />
                <Moon size={20} className="theme-icon-moon" />
              </button>
            )}

            <button
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion("/contact");
                }
                handleNavClick("/contact");
              }}
              className="flex-1 bg-[var(--brand-primary)] hover:bg-[#248fa5] text-white py-3 rounded-xl font-semibold text-center transition-all"
            >
              {CTA_TEXT.primary}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
