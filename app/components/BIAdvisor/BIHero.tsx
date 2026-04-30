import { useRef, useState, useEffect } from "react";
import {
  MessageSquare,
  Zap,
  ArrowRight,
  Send,
  Lock,
  Shield,
  Timer,
} from "lucide-react";
import { useInView } from "~/hooks/useInView";

/* ─── Animated Hero Chat Demo ─── */
function HeroChatDemo() {
  const { ref, isInView } = useInView({ once: true });
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
      <div className="absolute inset-0 bg-[var(--brand-primary)]/15 blur-[100px] rounded-full" />

      <div className="relative bg-[var(--surface-primary)]/90 backdrop-blur-xl border border-[var(--border-primary)] p-4 sm:p-6 rounded-3xl shadow-2xl flex flex-col h-[500px] sm:h-[520px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--border-primary)] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center shadow-lg">
              <MessageSquare size={20} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-[var(--text-primary)] leading-tight">
                BI Advisor AI
              </div>
              <div className="text-[10px] sm:text-xs text-emerald-500 flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Connecté à votre ERP
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 space-y-4 overflow-hidden flex flex-col justify-end pb-2">
          {/* Welcome Message */}
          <div className="self-start bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 rounded-2xl rounded-tl-sm p-3 sm:p-4 text-xs sm:text-sm text-[var(--text-primary)] mr-4 sm:mr-8 shadow-inner shrink-0">
            <span className="block mb-1 text-sm sm:text-base">
              👋 <strong>Bonjour !</strong>
            </span>
            Je suis connecté à votre ERP et prêt à analyser vos données. Que souhaitez-vous savoir
            aujourd&apos;hui ?
          </div>

          {/* Question bubble */}
          {step >= 2 && (
            <div className="self-end bg-[var(--surface-elevated)] rounded-2xl rounded-tr-sm p-3 sm:p-4 text-xs sm:text-sm text-[var(--text-primary)] ml-8 sm:ml-12 border border-[var(--border-primary)] flex-shrink-0">
              {questionText}
            </div>
          )}

          {/* Typing Indicator */}
          {step === 2 && (
            <div className="self-start bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 rounded-2xl rounded-tl-sm p-3 sm:p-4 w-14 sm:w-16 mr-8 sm:mr-12 text-[var(--text-primary)] shadow-inner flex-shrink-0">
              <div className="flex gap-1.5 justify-center mt-1">
                <div
                  className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          )}

          {/* Answer bubble */}
          {step >= 3 && (
            <div className="self-start bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 rounded-2xl rounded-tl-sm p-4 sm:p-5 text-xs sm:text-sm text-[var(--text-primary)] mr-4 sm:mr-8 shadow-inner relative overflow-hidden flex-shrink-0">
              <div className="absolute left-0 top-0 h-full w-1 bg-[var(--brand-primary)]" />
              <p className="mb-4 font-light leading-relaxed">
                En simulant cette hausse avec nos modèles prédictifs :
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-[var(--surface-elevated)] px-3 py-2 rounded-lg border border-[var(--border-primary)]/50">
                  <span className="text-[var(--text-secondary)]">BFR additionnel</span>
                  <span className="font-bold text-red-500">+ 120k €</span>
                </div>
                <div className="flex justify-between items-center bg-[var(--surface-elevated)] px-3 py-2 rounded-lg border border-[var(--border-primary)]/50">
                  <span className="text-[var(--text-secondary)]">Marge nette</span>
                  <span className="font-bold text-emerald-500">+ 45k €</span>
                </div>
              </div>
              <p className="text-xs text-[var(--brand-primary)] font-semibold flex items-center gap-1">
                <Zap size={12} className="fill-[var(--brand-primary)]" />
                Actionnable / Généré en 1.2s
              </p>
            </div>
          )}
        </div>

        {/* Input or CTA */}
        <div
          onClick={
            step >= 3
              ? () =>
                  document
                    .querySelector("#bi-advisor-contact")
                    ?.scrollIntoView({ behavior: "smooth" })
              : undefined
          }
          className={`mt-3 sm:mt-4 flex items-center justify-between gap-2 sm:gap-3 bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-1.5 sm:p-2 rounded-2xl shrink-0 transition-all duration-500 ${
            step >= 3
              ? "cursor-pointer hover:border-[var(--brand-primary)]/40 hover:bg-[var(--brand-primary)]/5 hover:shadow-lg hover:shadow-[var(--brand-primary)]/10 group ring-1 ring-transparent hover:ring-[var(--brand-primary)]/20"
              : ""
          }`}
        >
          {step >= 3 ? (
            <>
              <div className="flex-1 overflow-hidden">
                <span className="text-xs sm:text-sm font-bold text-[var(--brand-primary)] pl-2 sm:pl-3 block truncate">
                  Essayer avec vos données
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[var(--brand-primary)]/20 group-hover:scale-105 transition-transform">
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </>
          ) : (
            <>
              <input
                ref={inputRef}
                type="text"
                placeholder={step === 0 ? "Posez votre question à vos données..." : ""}
                className="bg-transparent border-none shadow-none text-[var(--text-primary)] text-sm w-full focus:ring-0 focus:outline-none placeholder:text-[var(--text-muted)] pl-3"
                value={step === 1 ? typedText : ""}
                readOnly
              />
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                  step >= 2
                    ? "bg-transparent text-[var(--text-muted)] opacity-20 scale-75"
                    : "bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-primary)]/20"
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
    document.querySelector("#bi-advisor-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Data network background"
          className="w-full h-full object-cover opacity-[0.08] dark:opacity-20 transition-opacity duration-700"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] from-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] from-5% to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--brand-primary)]/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 w-full">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center animate-on-scroll in-view">
          <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-black leading-[1.15] tracking-tight text-[var(--text-primary)] mb-6 text-balance">
            Divisez votre temps de décision par 10.
            <br />
            <span className="text-gradient">Reprenez le contrôle.</span>
          </h1>

          <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed max-w-lg font-light text-balance">
            Fini les exports Excel interminables.{" "}
            <span className="text-[var(--text-primary)] font-medium">
              BI Advisor transforme votre ERP en assistant IA
            </span>{" "}
            qui répond à vos questions en langage naturel, avec des prévisions prêtes pour le board.
          </p>

          {/* CTA + Anti-FUDs */}
          <div className="flex flex-col gap-4">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-primary)] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[var(--brand-primary)]/25 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/30 active:scale-95 transition-all flex items-center justify-center gap-3 group border border-white/10 w-full sm:w-max cursor-pointer"
            >
              Tester gratuitement sur mes données
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-5 text-xs text-[var(--text-muted)] mt-2">
              <span className="flex items-center gap-1.5">
                <Lock size={12} className="text-[var(--brand-primary)]" />
                Données chiffrées
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={12} className="text-[var(--brand-primary)]" />
                Zéro engagement
              </span>
              <span className="flex items-center gap-1.5">
                <Timer size={12} className="text-[var(--brand-primary)]" />
                POC en 48h
              </span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Chat Demo */}
        <div className="flex flex-col justify-center relative w-full pt-8 lg:pt-0 animate-on-scroll in-view stagger-2">
          <HeroChatDemo />
        </div>
      </div>
    </section>
  );
}
