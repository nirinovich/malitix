import { useNavigate, useLocation } from "react-router";
import { ArrowRight, Code, Database, Cpu, Sparkles } from "lucide-react";
import { HERO_CONTENT, CTA_TEXT } from "~/utils/constants";

export function HeroSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // 1. Trigger GTM tracking if applicable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag_report_conversion(href);
    }

    // 2. Handle smooth scroll if on same page
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-[var(--hero-gradient-bg)]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--hero-orb-primary)]"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[var(--hero-orb-secondary)]"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[image:var(--hero-grid-pattern)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Decorative Elements */}
          <div className="relative hidden lg:block">
            {/* Floating Cards */}
            <div className="relative h-[600px]">
              {/* Main floating card - Code snippet */}
              <div
                className="absolute top-20 left-10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-float bg-[var(--card-bg)] border border-[var(--brand-primary)]/20 shadow-[var(--brand-primary)]/20"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[var(--brand-primary)] p-2 rounded-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">
                      Web & Mobile
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)]">React • TypeScript</div>
                  </div>
                </div>
                <div className="rounded-lg p-3 font-mono text-xs space-y-1 bg-[var(--card-code-bg)]">
                  <div className="text-[var(--brand-text)]">{"<Component>"}</div>
                  <div className="pl-4 text-[var(--text-secondary)]">{"Innovation"}</div>
                  <div className="text-[var(--brand-text)]">{"</Component>"}</div>
                </div>
              </div>

              <div
                className="absolute top-32 right-10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-float bg-[var(--card-bg)] border border-[var(--brand-primary)]/20 shadow-[var(--brand-primary)]/20"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[var(--brand-primary)] p-2 rounded-lg">
                    <Database className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">
                      Data Platform
                    </div>
                    <div className="text-[var(--brand-text)] text-xs font-mono">99.9% uptime</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-32 left-20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-float bg-[var(--card-bg)] border border-[var(--brand-primary)]/20 shadow-[var(--brand-primary)]/20"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[var(--brand-primary)] p-2 rounded-lg">
                    <Cpu className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">
                      IA Métier
                    </div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-[var(--brand-primary)] rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div
                className="absolute bottom-16 right-16 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-float bg-[var(--card-bg)] border border-[var(--brand-primary)]/20 shadow-[var(--brand-primary)]/20"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="text-[var(--brand-text)]" size={32} />
                  <div>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">600+</div>
                    <div className="text-sm text-[var(--text-tertiary)]">Projets réussis</div>
                  </div>
                </div>
              </div>

              {/* Connecting lines that float with cards */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none animate-float"
                style={{ zIndex: -1, animationDelay: "0s" }}
              >
                <line
                  x1="35%"
                  y1="25%"
                  x2="65%"
                  y2="30%"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(44,163,189,0)" />
                    <stop offset="50%" stopColor="rgba(44,163,189,0.5)" />
                    <stop offset="100%" stopColor="rgba(44,163,189,0)" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none animate-float"
                style={{ zIndex: -1, animationDelay: "1s" }}
              >
                <line
                  x1="65%"
                  y1="35%"
                  x2="32%"
                  y2="68%"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(44,163,189,0)" />
                    <stop offset="50%" stopColor="rgba(44,163,189,0.5)" />
                    <stop offset="100%" stopColor="rgba(44,163,189,0)" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none animate-float"
                style={{ zIndex: -1, animationDelay: "2s" }}
              >
                <line
                  x1="40%"
                  y1="70%"
                  x2="65%"
                  y2="75%"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(44,163,189,0)" />
                    <stop offset="50%" stopColor="rgba(44,163,189,0.5)" />
                    <stop offset="100%" stopColor="rgba(44,163,189,0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-right in-view">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.375rem] font-extrabold tracking-tight leading-[1.1] text-[var(--text-primary)]">
              {HERO_CONTENT.animated.headline.split("\n").map((line, lineIndex) => (
                <span
                  key={line}
                  className={`block animate-on-scroll in-view stagger-${lineIndex + 1}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg max-w-xl leading-relaxed text-[var(--text-secondary)] animate-on-scroll in-view stagger-5">
              {HERO_CONTENT.animated.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => handleCTAClick(e, "#contact")}
                className="group bg-[var(--brand-primary)] hover:bg-[#248fa5] text-white px-6 py-3 rounded-full font-semibold shadow-xl shadow-[var(--brand-primary)]/30 hover:shadow-[var(--brand-primary)]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {CTA_TEXT.primary}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleCTAClick(e, "#services")}
                className="backdrop-blur-xl px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] border border-[var(--border-primary)] text-[var(--text-primary)]"
              >
                {CTA_TEXT.secondary}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[var(--border-primary)]">
              {[
                { label: "Projets", value: "600+" },
                { label: "Ingénieurs", value: "350+" },
                { label: "Support", value: "24/7" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl rounded-2xl p-4 bg-[var(--card-bg)] border border-[var(--brand-primary)]/20 text-center animate-on-scroll in-view"
                  style={{ transitionDelay: `${0.6 + i * 0.1}s` }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-[var(--brand-text)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
