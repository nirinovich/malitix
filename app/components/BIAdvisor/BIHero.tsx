import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Send,
  Star,
  Zap,
  FileSpreadsheet,
} from "lucide-react";
import { useInView } from "~/hooks/useInView";

/* ─── Section Reveal Wrapper ─── */
function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView({ once: true, threshold: 0.08 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Animated Hero Chat ─── */
function HeroChatDemo() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.5 });
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const questionText =
    "Quel sera l'impact sur la trésorerie si la campagne Q4 augmente les ventes de +15% ?";

  useEffect(() => {
    if (isInView && step === 0) {
      const t = setTimeout(() => setStep(1), 800);
      return () => clearTimeout(t);
    }
  }, [isInView, step]);

  useEffect(() => {
    if (step === 1) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(questionText.slice(0, i + 1));
        i++;
        if (i >= questionText.length) {
          clearInterval(interval);
          setTimeout(() => setStep(2), 600);
        } else if (inputRef.current) {
          inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        }
      }, 40);
      return () => clearInterval(interval);
    }
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 1500);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div className="relative w-full max-w-lg mx-auto" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="relative bg-white/90 dark:bg-[#1a1d1b]/90 backdrop-blur-2xl border border-gray-200 dark:border-white/10 p-4 sm:p-6 rounded-3xl shadow-2xl flex flex-col h-[500px] sm:h-[520px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)] flex items-center justify-center text-white">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">
                BI Advisor AI
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
                  Connecté à l&apos;ERP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 space-y-4 overflow-hidden flex flex-col justify-end pb-2">
          <div className="self-start bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-800 dark:text-gray-200 mr-4 sm:mr-8 shadow-sm animate-fade-in-up shrink-0">
            <span className="block mb-1 text-base">
              👋 <strong>Bonjour !</strong>
            </span>
            Je suis connecté à votre ERP et prêt à analyser vos données. Que
            souhaitez-vous savoir aujourd&apos;hui ?
          </div>

          {step >= 2 && (
            <div className="self-end bg-[#111] text-white rounded-2xl rounded-tr-sm p-4 text-sm ml-8 sm:ml-12 border border-[#333] shadow-lg animate-fade-in-up flex-shrink-0">
              {questionText}
            </div>
          )}

          {step === 2 && (
            <div
              className="self-start bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-4 w-16 mr-8 sm:mr-12 shadow-sm animate-fade-in-up flex-shrink-0"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex gap-1.5 justify-center mt-1">
                <div
                  className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          )}

          {step >= 3 && (
            <div className="self-start bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-5 text-sm text-gray-800 dark:text-gray-200 mr-4 sm:mr-8 shadow-sm relative overflow-hidden animate-fade-in-up flex-shrink-0">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#111] dark:bg-[var(--brand-primary)]" />
              <p className="mb-4 font-medium leading-relaxed">
                En simulant cette hausse avec nos modèles prédictifs :
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white dark:bg-[#111] px-4 py-3 rounded-lg border border-gray-100 dark:border-[#333] shadow-sm">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    BFR additionnel
                  </span>
                  <span className="font-black text-red-500">+ 120k €</span>
                </div>
                <div className="flex justify-between items-center bg-white dark:bg-[#111] px-4 py-3 rounded-lg border border-gray-100 dark:border-[#333] shadow-sm">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Marge nette
                  </span>
                  <span className="font-black text-emerald-500">+ 45k €</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Zap size={12} className="text-amber-500" /> Actionnable / Généré
                en 1.2s
              </p>
            </div>
          )}
        </div>

        {/* Input */}
        <div
          onClick={
            step >= 3
              ? () =>
                  document
                    .querySelector("#bi-advisor-contact")
                    ?.scrollIntoView({ behavior: "smooth" })
              : undefined
          }
          className={`mt-4 flex items-center justify-between gap-3 bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-[#333] p-2 rounded-2xl shrink-0 transition-all duration-300 ${
            step >= 3
              ? "cursor-pointer hover:border-[#111] dark:hover:border-[var(--brand-primary)]"
              : ""
          }`}
        >
          {step >= 3 ? (
            <>
              <div className="flex-1 overflow-hidden">
                <span className="text-sm font-black text-gray-900 dark:text-white pl-3 animate-fade-in-up block truncate uppercase tracking-widest">
                  Essayer avec vos données
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#111] dark:bg-[var(--brand-primary)] flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform animate-fade-in-up">
                <ArrowRight size={16} />
              </div>
            </>
          ) : (
            <>
              <input
                ref={inputRef}
                type="text"
                placeholder={step === 0 ? "Posez votre question..." : ""}
                className="bg-transparent border-none shadow-none text-gray-900 dark:text-white font-medium text-sm w-full focus:ring-0 focus:outline-none placeholder:text-gray-400 pl-3"
                value={step === 1 ? typedText : ""}
                readOnly
              />
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                  step >= 2
                    ? "bg-transparent text-gray-300 dark:text-gray-600 scale-75"
                    : "bg-[#111] dark:bg-[var(--brand-primary)] text-white shadow-lg"
                }`}
              >
                <Send size={16} className={step >= 2 ? "" : "-ml-1"} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Hero Section ─── */
export default function BIHero() {
  const scrollToContact = () => {
    document
      .querySelector("#bi-advisor-contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 px-6 sm:px-12 bg-[#0B0D17] border-b-8 border-[var(--brand-primary)] overflow-hidden">
      {/* Subtle background noise/grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm20%2020h20v20H20V20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge & Stars */}
          <RevealSection>
            <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
              <div className="flex items-center gap-2 bg-[#1A1C25] px-4 py-2 rounded-lg border border-white/5 shadow-xl">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <span className="text-white text-xs font-black tracking-widest uppercase">
                  Satisfaction Client 95%
                </span>
              </div>
            </div>
          </RevealSection>

          {/* Headline */}
          <RevealSection delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              DIVISEZ VOTRE TEMPS DE DÉCISION PAR 10.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl font-medium leading-relaxed">
              Fini les exports Excel interminables.{" "}
              <span className="text-white font-bold">
                BI Advisor transforme votre ERP en assistant IA
              </span>{" "}
              qui répond à vos questions en langage naturel.
            </p>
          </RevealSection>

          {/* Big CTA & Social Proof */}
          <RevealSection
            delay={200}
            className="w-full flex flex-col items-center lg:items-start"
          >
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-8 sm:px-12 py-6 rounded-2xl font-black text-xl tracking-wide uppercase shadow-[0_0_40px_rgba(44,163,189,0.3)] hover:shadow-[0_0_60px_rgba(44,163,189,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group border border-white/10 cursor-pointer"
            >
              TESTER GRATUITEMENT
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={24}
              />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-[#0B0D17]"
                  />
                ))}
              </div>
              <span className="text-gray-400 font-bold text-sm uppercase tracking-wider">
                Rejoignez 30+ entreprises
              </span>
            </div>
          </RevealSection>
        </div>

        {/* Right Section: Video Showcase */}
        <RevealSection
          delay={300}
          className="w-full relative mt-12 lg:mt-0 flex justify-center lg:justify-end lg:pl-12 lg:scale-[1.15] lg:translate-x-8"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--brand-primary)]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Floating Badge: Excel */}
          <div className="hidden sm:flex absolute -top-6 -left-4 md:-left-8 lg:-left-4 z-30 bg-white dark:bg-[#1A1C25] p-3 sm:p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl items-center gap-3 animate-float transition-transform hover:scale-110 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <FileSpreadsheet size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Connecté
              </div>
              <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                Excel Live
              </div>
            </div>
          </div>

          {/* Floating Badge: Odoo / ERP */}
          <div
            className="hidden sm:flex absolute -bottom-6 -right-4 md:-right-8 lg:-right-4 z-30 bg-white dark:bg-[#1A1C25] p-3 sm:p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl items-center gap-3 animate-float transition-transform hover:scale-110 cursor-default"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Zap size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                ERP Sync
              </div>
              <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                Odoo &amp; Sage
              </div>
            </div>
          </div>

          {/* Video Container with refined proportions */}
          <div className="relative z-10 w-full max-w-[550px] lg:max-w-[600px] aspect-[16/10] lg:aspect-video rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-8 sm:border-[12px] border-[#1A1C25] shadow-[0_0_50px_rgba(0,0,0,0.5)] lg:shadow-[0_0_80px_rgba(0,0,0,0.6)] bg-[#0a0e0d] group">
            <video
              src="/demo-bi.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Glass Effect */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl sm:rounded-[2.5rem]" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

export { RevealSection, HeroChatDemo };
