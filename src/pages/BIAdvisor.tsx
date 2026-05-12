import { useRef, useState, useEffect } from 'react';
import BIAdvisorContact from '../components/BIAdvisor/BIAdvisorContact';
import { Helmet } from 'react-helmet-async';
import {
  TrendingUp,
  LineChart,
  MessageSquare,
  BellRing,
  PackageSearch,
  ArrowRight,
  ArrowUpRight,
  Send,
  CheckCircle,
  XCircle,
  ChevronDown,
  Shield,
  Star,
  Zap
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

/* ─── Section Reveal Wrapper ─── */
function RevealSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { hasBeenInView } = useInView(ref, { threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: hasBeenInView ? 1 : 0,
        transform: hasBeenInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedStat({
  value,
  suffix,
  label,
  prefix = '',
}: {
  value: string;
  suffix?: string;
  label: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { hasBeenInView } = useInView(ref, { threshold: 0.3 });

  return (
    <div ref={ref} className="text-center p-6 border-b sm:border-b-0 sm:border-r last:border-0 border-[var(--border-primary)]">
      <div
        className={`text-5xl md:text-6xl font-black text-[#1e7a8f] transition-all duration-1000 ${hasBeenInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
      >
        {prefix}
        {value}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2 font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
}

/* ─── FAQ Item ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-primary)] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-center justify-between gap-4 cursor-pointer hover:text-[#2ca3bd] transition-colors"
      >
        <span className="text-xl font-bold text-[var(--text-primary)]">{question}</span>
        <ChevronDown
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">{answer}</p>
      </div>
    </div>
  );
}

/* ─── Animated Hero Chat ─── */
function HeroChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const { hasBeenInView } = useInView(ref, { threshold: 0.5 });
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const questionText = "Quel sera l'impact sur la trésorerie si la campagne Q4 augmente les ventes de +15% ?";

  useEffect(() => {
    if (hasBeenInView && step === 0) {
      const t = setTimeout(() => setStep(1), 800);
      return () => clearTimeout(t);
    }
  }, [hasBeenInView, step]);

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
    <div className="relative w-full max-w-lg mx-auto" ref={ref}>
      <div className="absolute inset-0 bg-[#2ca3bd]/20 blur-[120px] rounded-full" />
      <div className="relative bg-white dark:bg-[#1a1d1b] border border-gray-200 dark:border-white/10 p-4 sm:p-6 rounded-3xl shadow-2xl flex flex-col h-[500px] sm:h-[520px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center shadow-lg">
              <MessageSquare size={20} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight">BI Advisor AI</div>
              <div className="text-[10px] sm:text-xs text-emerald-500 flex items-center gap-1 font-bold tracking-widest uppercase mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Connecté à l'ERP
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 space-y-4 overflow-hidden flex flex-col justify-end pb-2">
          <div className="self-start bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-800 dark:text-gray-200 mr-4 sm:mr-8 shadow-sm animate-fade-in-up shrink-0">
            <span className="block mb-1 text-base">👋 <strong>Bonjour !</strong></span>
            Je suis connecté à votre ERP et prêt à analyser vos données. Que souhaitez-vous savoir aujourd'hui ?
          </div>

          {step >= 2 && (
            <div className="self-end bg-[#111] text-white rounded-2xl rounded-tr-sm p-4 text-sm ml-8 sm:ml-12 border border-[#333] shadow-lg animate-fade-in-up flex-shrink-0">
              {questionText}
            </div>
          )}

          {step === 2 && (
            <div className="self-start bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-4 w-16 mr-8 sm:mr-12 shadow-sm animate-fade-in-up flex-shrink-0" style={{ animationDelay: '0.2s' }}>
              <div className="flex gap-1.5 justify-center mt-1">
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {step >= 3 && (
            <div className="self-start bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl rounded-tl-sm p-5 text-sm text-gray-800 dark:text-gray-200 mr-4 sm:mr-8 shadow-sm relative overflow-hidden animate-fade-in-up flex-shrink-0">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#111] dark:bg-[#2ca3bd]" />
              <p className="mb-4 font-medium leading-relaxed">
                En simulant cette hausse avec nos modèles prédictifs :
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-white dark:bg-[#111] px-4 py-3 rounded-lg border border-gray-100 dark:border-[#333] shadow-sm">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">BFR additionnel</span>
                  <span className="font-black text-red-500">+ 120k €</span>
                </div>
                <div className="flex justify-between items-center bg-white dark:bg-[#111] px-4 py-3 rounded-lg border border-gray-100 dark:border-[#333] shadow-sm">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Marge nette</span>
                  <span className="font-black text-emerald-500">+ 45k €</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Zap size={12} className="text-amber-500" /> Actionnable / Généré en 1.2s
              </p>
            </div>
          )}
        </div>

        {/* Input */}
        <div
          onClick={step >= 3 ? () => document.querySelector('#bi-advisor-contact')?.scrollIntoView({ behavior: 'smooth' }) : undefined}
          className={`mt-4 flex items-center justify-between gap-3 bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-[#333] p-2 rounded-2xl shrink-0 transition-all duration-300 ${step >= 3 ? 'cursor-pointer hover:border-[#111] dark:hover:border-[#2ca3bd]' : ''
            }`}
        >
          {step >= 3 ? (
            <>
              <div className="flex-1 overflow-hidden">
                <span className="text-sm font-black text-gray-900 dark:text-white pl-3 animate-fade-in-up block truncate uppercase tracking-widest">
                  Essayer avec vos données
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#111] dark:bg-[#2ca3bd] flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform animate-fade-in-up">
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
                value={step === 1 ? typedText : ''}
                readOnly
              />
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${step >= 2 ? 'bg-transparent text-gray-300 dark:text-gray-600 scale-75' : 'bg-[#111] dark:bg-[#2ca3bd] text-white shadow-lg'
                }`}>
                <Send size={16} className={step >= 2 ? "" : "-ml-1"} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BIAdvisor() {
  const scrollToContact = () => {
    document.querySelector('#bi-advisor-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-[#0a0e0d]">
      <Helmet>
        <title>BI Advisor - L'IA qui transforme vos données en décisions | Malitix</title>
        <meta
          name="description"
          content="Divisez votre temps de décision par 10. BI Advisor transforme votre ERP en assistant IA qui parle votre langue."
        />
      </Helmet>

      {/* ═══════════════════════════════════════════════
          SECTION 1: THE HERO (Hook & Promise)
          Acquisition.com style: Dark bg, centered, huge fonts, bold CTAs
          ═══════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 bg-[#0B0D17] border-b-8 border-[#2ca3bd] overflow-hidden">
        {/* Subtle background noise/grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm20%2020h20v20H20V20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Badge & Stars */}
          <RevealSection>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="text-xl">🔥</span> INNOVATION BI : IA CONVERSATIONNELLE
              </div>
              <div className="flex items-center gap-2 bg-[#1A1C25] px-4 py-2 rounded-lg border border-white/5 shadow-xl">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <span className="text-white text-xs font-black tracking-widest">SATISFACTION CLIENT 95%</span>
              </div>
            </div>
          </RevealSection>

          {/* Headline */}
          <RevealSection delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-8 max-w-4xl">
              DIVISEZ VOTRE TEMPS DE DÉCISION PAR 10.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl font-medium leading-relaxed">
              Fini les exports Excel interminables. <span className="text-white font-bold">BI Advisor transforme votre ERP en assistant IA</span> qui répond à vos questions en langage naturel, avec des prévisions prêtes pour le board.
            </p>
          </RevealSection>

          {/* Big CTA */}
          <RevealSection delay={200} className="w-full flex flex-col items-center mb-16">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 sm:px-16 py-6 rounded-2xl font-black text-xl sm:text-2xl tracking-wide uppercase shadow-[0_0_40px_rgba(44,163,189,0.4)] hover:shadow-[0_0_60px_rgba(44,163,189,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group border border-white/20"
            >
              TESTER GRATUITEMENT SUR MES DONNÉES
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </button>
            
            {/* Social Proof Strip */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B0D17]" />
                ))}
              </div>
              <span className="text-gray-400 font-bold text-sm">REJOIGNEZ PLUS DE 30 ENTREPRISES ACCOMPAGNÉES</span>
            </div>
          </RevealSection>

          {/* Chat Demo */}
          <RevealSection delay={300} className="w-full mt-8">
            <HeroChatDemo />
          </RevealSection>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: TRUST STRIP (Authority)
          ═══════════════════════════════════════════════ */}
      <section className="py-12 bg-white dark:bg-[#111] border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mb-8 text-sm">
            DES RÉSULTATS MESURABLES, PAS DES PROMESSES
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-0">
            <AnimatedStat value="10" suffix="x" label="Décisions plus rapides" />
            <AnimatedStat value="48" suffix="h" label="POC livré sur vos données" />
            <AnimatedStat value="0" label="Compétence technique requise" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3: THE PROBLEM (PAS - Agitation)
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0e0d]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 border border-red-200 dark:border-red-900/50">
                ÇA VOUS PARLE ?
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase leading-tight">
                Vous passez plus de temps à <span className="text-red-600 line-through decoration-[6px] decoration-red-600/30">chercher</span> qu'à <span className="text-[#2ca3bd]">décider</span>.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
                Les dirigeants perdent en moyenne 15 jours par mois à attendre des reportings. Pendant ce temps, les opportunités passent et les concurrents avancent.
              </p>
            </div>
          </RevealSection>

          <div className="max-w-4xl mx-auto space-y-6">
            <RevealSection delay={100}>
              <div className="bg-white dark:bg-[#111] p-8 sm:p-10 rounded-3xl border-2 border-red-100 dark:border-red-900/20 shadow-xl flex gap-6 items-start">
                <XCircle size={40} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-wide">Des reportings obsolètes avant d'être lus</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Vous prenez des décisions stratégiques sur des données d'il y a 3 semaines. Le monde a changé depuis, mais votre tableau de bord l'ignore.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-white dark:bg-[#111] p-8 sm:p-10 rounded-3xl border-2 border-red-100 dark:border-red-900/20 shadow-xl flex gap-6 items-start">
                <XCircle size={40} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-wide">Otages de votre équipe technique</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Chaque question = un ticket IT. Chaque ticket = 3 à 7 jours d'attente. C'est comme conduire une F1 avec un GPS en retard de 15 minutes.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="bg-white dark:bg-[#111] p-8 sm:p-10 rounded-3xl border-2 border-red-100 dark:border-red-900/20 shadow-xl flex gap-6 items-start">
                <XCircle size={40} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-wide">Excel : Le cimetière de la productivité</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Vos équipes passent 60% de leur temps à fusionner des fichiers au lieu de piloter la croissance. C'est du gaspillage pur et dur.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: THE SOLUTION (Before / After Comparison)
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[#0B0D17] text-white">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="inline-block bg-[#2ca3bd]/20 text-[#2ca3bd] px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 border border-[#2ca3bd]/50">
                LA SOLUTION
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
                Avant vs. <span className="text-[#2ca3bd]">Avec BI Advisor</span>
              </h2>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-[#1A1C25] rounded-3xl overflow-hidden bg-[#0a0e0d]">
              
              {/* BEFORE */}
              <div className="p-10 sm:p-12 border-b md:border-b-0 md:border-r border-[#1A1C25] relative">
                <h3 className="text-3xl font-black text-gray-500 mb-10 uppercase tracking-widest text-center">Avant</h3>
                <div className="space-y-6">
                  {[
                    'Reporting en J+15 minimum',
                    'Export Excel manuel et chronophage',
                    "Dépendance totale envers l'IT",
                    'Zéro anticipation, zéro prédiction',
                    'Tableaux statiques incompréhensibles',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <XCircle size={24} className="text-red-500 flex-shrink-0" />
                      <span className="text-gray-400 font-bold text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AFTER */}
              <div className="p-10 sm:p-12 bg-[#2ca3bd]/5 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#2ca3bd]" />
                <h3 className="text-3xl font-black text-[#2ca3bd] mb-10 uppercase tracking-widest text-center">BI Advisor</h3>
                <div className="space-y-6">
                  {[
                    'Réponses en temps réel, en secondes',
                    'Questions en langage naturel',
                    'Autonomie totale de chaque métier',
                    'Prévisions et alertes proactives',
                    'Graphiques générés automatiquement',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <CheckCircle size={24} className="text-[#2ca3bd] flex-shrink-0" />
                      <span className="text-white font-bold text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5: WHAT YOU GET (Features as Benefits)
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase">
                POSEZ UNE QUESTION.<br />
                <span className="text-[#2ca3bd]">OBTENEZ LA RÉPONSE EN SECONDES.</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealSection delay={100}>
              <div className="bg-gray-50 dark:bg-[#1A1C25] border border-gray-200 dark:border-white/5 p-10 rounded-3xl h-full flex flex-col hover:-translate-y-2 transition-transform shadow-lg">
                <MessageSquare className="text-[#2ca3bd] mb-6" size={48} />
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white uppercase leading-tight">Parlez à vos données comme à un collègue</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-1 text-lg">
                  Posez vos questions en français, à l'écrit ou à la voix. L'IA traduit votre intention en requête technique et génère des graphiques à la volée.
                </p>
                <p className="text-[#2ca3bd] font-black uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={18} /> RÉSULTAT : AUTONOMIE TOTALE
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-gray-50 dark:bg-[#1A1C25] border border-gray-200 dark:border-white/5 p-10 rounded-3xl h-full flex flex-col hover:-translate-y-2 transition-transform shadow-lg">
                <TrendingUp className="text-[#2ca3bd] mb-6" size={48} />
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white uppercase leading-tight">Anticipez les crises avant qu'elles n'arrivent</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-1 text-lg">
                  Prévisions de trésorerie, tendances de ventes, projections de BFR — basées sur vos historiques réels et vos échéances.
                </p>
                <p className="text-[#2ca3bd] font-black uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={18} /> RÉSULTAT : PILOTAGE PROACTIF
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="bg-gray-50 dark:bg-[#1A1C25] border border-gray-200 dark:border-white/5 p-10 rounded-3xl h-full flex flex-col hover:-translate-y-2 transition-transform shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500 text-white font-black text-xs px-4 py-2 uppercase tracking-widest rounded-bl-xl">LIVE</div>
                <BellRing className="text-[#2ca3bd] mb-6" size={48} />
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white uppercase leading-tight">Ne ratez plus jamais un signal critique</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-1 text-lg">
                  Recevez une alerte dès qu'une anomalie, une chute de marge ou un seuil critique est détecté par l'algorithme.
                </p>
                <p className="text-[#2ca3bd] font-black uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={18} /> RÉSULTAT : L'IA SURVEILLE 24/7
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6: WALL OF PROOF (Use Cases)
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-gray-100 dark:bg-[#0a0e0d]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase mb-4">
                CE QUE VOS DIRECTIONS <span className="text-[#2ca3bd]">PEUVENT ENFIN DEMANDER.</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart size={32} />,
                department: "Direction Financière",
                query: "Quel est l'impact sur notre BFR prévisionnel si nous augmentons nos stocks de composants de 15% pour anticiper Q4 ?",
                after: "Généré en 1.2s"
              },
              {
                icon: <ArrowUpRight size={32} />,
                department: "Direction Commerciale",
                query: "Affiche-moi le top 10 des clients dont la marge a le plus baissé ce trimestre, et identifie les causes.",
                after: "Généré en 1.5s"
              },
              {
                icon: <PackageSearch size={32} />,
                department: "Supply Chain",
                query: "Quelles sont les références qui risquent une rupture de stock d'ici 3 semaines en croisant avec nos prévisions ?",
                after: "Alerte en 0.8s"
              }
            ].map((useCase, index) => (
              <RevealSection key={useCase.department} delay={index * 100}>
                <div className="bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-white/10 p-8 rounded-3xl h-full flex flex-col shadow-xl relative mt-8">
                  
                  {/* Floating Avatar/Icon to match testimonial style */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#111] dark:bg-[#2ca3bd] rounded-full flex items-center justify-center text-white border-4 border-gray-100 dark:border-[#0a0e0d] shadow-lg">
                    {useCase.icon}
                  </div>

                  <div className="pt-10 text-center flex-1">
                    <h3 className="font-black text-xl text-gray-900 dark:text-white uppercase tracking-widest mb-6">{useCase.department}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium italic leading-relaxed mb-8">
                      "{useCase.query}"
                    </p>
                  </div>
                  
                  <div className="bg-[#2ca3bd]/10 py-3 rounded-xl text-center">
                    <span className="text-[#2ca3bd] font-black uppercase tracking-widest">{useCase.after}</span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7: THE GUARANTEE (Risk Reversal)
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[#0B0D17] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <RevealSection>
            <Shield size={64} className="text-[#2ca3bd] mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase">
              CONÇU POUR ÉLIMINER <span className="text-[#2ca3bd]">CHAQUE OBJECTION.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
              <div className="bg-[#1A1C25] p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-black mb-4 uppercase text-[#2ca3bd]">1. Zéro Compétence</h3>
                <p className="text-gray-400 font-medium leading-relaxed">L'interface comprend votre langue métier. Du DAF au commercial, tout le monde peut piloter sans SQL ni Excel.</p>
              </div>
              <div className="bg-[#1A1C25] p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-black mb-4 uppercase text-[#2ca3bd]">2. Rapide</h3>
                <p className="text-gray-400 font-medium leading-relaxed">Connexion à votre ERP et configuration en 2 semaines. Pas de projet IT interminable de 6 mois.</p>
              </div>
              <div className="bg-[#1A1C25] p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-black mb-4 uppercase text-[#2ca3bd]">3. Sécurisé</h3>
                <p className="text-gray-400 font-medium leading-relaxed">Lecture seule. Vos données ne sont jamais modifiées. Chiffrement E2E complet.</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 8: WHO IS THIS FOR?
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase">
                CHAQUE MÉTIER Y GAGNE. <span className="text-[#2ca3bd]">CONCRÈTEMENT.</span>
              </h2>
            </div>
          </RevealSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards styled as stark bold blocks */}
            <RevealSection delay={100}>
              <div className="border-4 border-gray-900 dark:border-white p-8 rounded-3xl h-full">
                <h3 className="text-3xl font-black mb-6 text-gray-900 dark:text-white uppercase border-b-4 border-[#2ca3bd] inline-block pb-2">DAF / FINANCE</h3>
                <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-300 font-medium text-lg">
                  <li>• Suivi de trésorerie prédictif</li>
                  <li>• Optimisation du BFR</li>
                  <li>• Analyse d'écarts budgétaires</li>
                </ul>
                <div className="bg-gray-900 dark:bg-white text-white dark:text-[#111] p-4 rounded-xl font-black text-center uppercase tracking-wider">
                  VISIBILITÉ CASH J+90
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="border-4 border-gray-900 dark:border-white p-8 rounded-3xl h-full">
                <h3 className="text-3xl font-black mb-6 text-gray-900 dark:text-white uppercase border-b-4 border-[#2ca3bd] inline-block pb-2">COMMERCE</h3>
                <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-300 font-medium text-lg">
                  <li>• Rentabilité par client</li>
                  <li>• Prévision des ventes sur pipeline</li>
                  <li>• Détection d'opportunités</li>
                </ul>
                <div className="bg-gray-900 dark:bg-white text-white dark:text-[#111] p-4 rounded-xl font-black text-center uppercase tracking-wider">
                  +25% CONVERSION
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="border-4 border-gray-900 dark:border-white p-8 rounded-3xl h-full">
                <h3 className="text-3xl font-black mb-6 text-gray-900 dark:text-white uppercase border-b-4 border-[#2ca3bd] inline-block pb-2">LOGISTIQUE</h3>
                <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-300 font-medium text-lg">
                  <li>• Prévention des ruptures</li>
                  <li>• Optimisation des stocks</li>
                  <li>• Analyse de la chaîne en continu</li>
                </ul>
                <div className="bg-gray-900 dark:bg-white text-white dark:text-[#111] p-4 rounded-xl font-black text-center uppercase tracking-wider">
                  -40% DE RUPTURES
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 9: FAQ
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0e0d] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center uppercase">
              FOIRE AUX QUESTIONS
            </h2>
            <div className="bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-xl">
              <FAQItem
                question="Combien ça coûte ?"
                answer="BI Advisor fonctionne sur un modèle d'abonnement adapté à votre volume de données et au nombre d'utilisateurs. Le POC est 100% gratuit et sans engagement — vous ne payez rien avant d'être convaincu par les résultats."
              />
              <FAQItem
                question="Combien de temps pour l'implémentation ?"
                answer="2 semaines en moyenne. Nous nous connectons à votre ERP en lecture seule, importons vos historiques, et formons vos équipes. Pas de projet IT de 6 mois. Vous êtes opérationnel le jour de la livraison."
              />
              <FAQItem
                question="Est-ce que mes données sont en sécurité ?"
                answer="Absolument. BI Advisor fonctionne en lecture seule — vos données sont analysées mais jamais modifiées. Chiffrement de bout en bout (E2E), hébergement souverain, et conformité RGPD complète. Nous pouvons signer un NDA dès le premier appel."
              />
              <FAQItem
                question="Et si mon ERP n'est pas dans la liste ?"
                answer="Nos connecteurs sont universels. Si votre ERP expose une API ou une base de données, nous pouvons nous y connecter. Nous avons déjà intégré SAP, Sage, Oracle, Dynamics, Odoo, et de nombreux ERP métier."
              />
              <FAQItem
                question="Ça remplace notre BI existante ?"
                answer="Non, BI Advisor complète et amplifie vos outils existants (Power BI, Tableau, etc.). Il ajoute une couche conversationnelle et prédictive par-dessus vos données."
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10: FINAL CTA (Contact)
          ═══════════════════════════════════════════════ */}
      <BIAdvisorContact />
      
    </div>
  );
}
