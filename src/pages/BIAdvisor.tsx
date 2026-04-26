import { useRef, useState } from 'react';
import BIAdvisorContact from '../components/BIAdvisor/BIAdvisorContact';
import { Helmet } from 'react-helmet-async';
import {
  BarChart4,
  Brain,
  Zap,
  Shield,
  Clock,
  Database,
  TrendingUp,
  LineChart,
  MessageSquare,
  BellRing,
  PackageSearch,
  ArrowRight,
  Send,
  CheckCircle,
  XCircle,
  ChevronDown,
  Quote,
  Timer,
  Users,
  Target,
  Lock,
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
    <div ref={ref} className="text-center">
      <div
        className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] transition-all duration-1000 ${
          hasBeenInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        {prefix}
        {value}
        {suffix}
      </div>
      <p className="text-sm text-[var(--text-secondary)] mt-2 font-medium">{label}</p>
    </div>
  );
}

/* ─── FAQ Item ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-[var(--border-primary)] rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'bg-[var(--surface-elevated)] shadow-lg shadow-[#2ca3bd]/5' : 'bg-transparent hover:bg-[var(--surface-elevated)]/50'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className="text-lg font-bold text-[var(--text-primary)]">{question}</span>
        <ChevronDown
          className={`text-[#2ca3bd] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={22}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-5 text-[var(--text-secondary)] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function BIAdvisor() {
  const scrollToContact = () => {
    document.querySelector('#bi-advisor-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>BI Advisor - Prenez des décisions 10x plus vite grâce à l'IA | Malitix</title>
        <meta
          name="description"
          content="Divisez votre temps de décision par 10. BI Advisor transforme votre ERP en assistant IA qui parle votre langue. Prévisions instantanées, alertes proactives. POC gratuit en 48h."
        />
      </Helmet>

      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO — "What's In It For Me?"
          Dream Outcome + Time Period + Emotional Payoff
          ═══════════════════════════════════════════════ */}
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
          {/* Ambient glow */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#2ca3bd]/8 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 w-full">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            <RevealSection>
              {/* HEADLINE: End Result + Time Period + Emotional Payoff */}
              <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-black leading-[1.1] tracking-tighter text-[var(--text-primary)] mb-6">
                Divisez votre temps de décision par 10{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f]">
                  et reprenez le contrôle de votre business.
                </span>
              </h1>

              {/* SUB-HEADLINE: Pain Point + Specific USPs/Solution */}
              <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-xl font-light">
                Fini les exports Excel interminables et l'attente de l'équipe data.{' '}
                <span className="text-[var(--text-primary)] font-medium">
                  BI Advisor transforme votre ERP en assistant IA
                </span>{' '}
                qui répond à vos questions en langage naturel, avec des prévisions prêtes pour le board.
              </p>

              {/* CTA + Anti-FUDs */}
              <div className="flex flex-col gap-4 w-full max-w-md">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-[#00687a] to-[#2ca3bd] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#2ca3bd]/25 hover:scale-105 hover:shadow-2xl hover:shadow-[#2ca3bd]/30 active:scale-95 transition-all flex items-center justify-center gap-3 group border border-white/10 w-full"
                >
                  Tester gratuitement sur mes données
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Anti-FUDs — Eradicate Fear, Uncertainty, Doubt */}
                <div className="flex items-center justify-center gap-6 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Lock size={12} className="text-[#2ca3bd]" />
                    Données chiffrées
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield size={12} className="text-[#2ca3bd]" />
                    Zéro engagement
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Timer size={12} className="text-[#2ca3bd]" />
                    POC en 48h
                  </span>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Right: Interactive Chat Demo */}
          <div className="hidden lg:flex flex-col justify-center relative">
            <RevealSection delay={200}>
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#2ca3bd]/15 blur-[100px] rounded-full" />

                <div className="relative bg-[var(--surface-primary)]/90 backdrop-blur-xl border border-[var(--border-primary)] p-6 rounded-3xl shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ca3bd] to-[#00687a] flex items-center justify-center shadow-lg">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">BI Advisor AI</div>
                        <div className="text-xs text-emerald-500 flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Connecté à votre
                          ERP
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[var(--surface-elevated)] rounded-2xl rounded-tr-sm p-4 text-sm text-[var(--text-secondary)] ml-8 border border-[var(--border-primary)]">
                      Quel sera l'impact sur la trésorerie si la campagne Q4 augmente les ventes de +15% ?
                    </div>

                    <div className="bg-[#2ca3bd]/10 border border-[#2ca3bd]/20 rounded-2xl rounded-tl-sm p-5 text-sm text-[var(--text-primary)] mr-8 shadow-inner relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1 bg-[#2ca3bd]" />
                      <p className="mb-4 font-light leading-relaxed">
                        En simulant cette hausse avec nos modèles prédictifs :
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center bg-[var(--surface-elevated)] px-3 py-2 rounded-lg border border-[var(--border-primary)]/50">
                          <span className="text-[var(--text-secondary)]">Besoin en fonds de roulement</span>
                          <span className="font-bold text-red-500">+ 120k €</span>
                        </div>
                        <div className="flex justify-between items-center bg-[var(--surface-elevated)] px-3 py-2 rounded-lg border border-[var(--border-primary)]/50">
                          <span className="text-[var(--text-secondary)]">Marge nette prévisionnelle</span>
                          <span className="font-bold text-emerald-600">+ 45k €</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#2ca3bd] font-semibold flex items-center gap-1">
                        <Zap size={12} className="fill-[#2ca3bd]" /> Généré en 1.2s
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-2 rounded-2xl">
                    <input
                      type="text"
                      placeholder="Posez votre question à vos données..."
                      className="bg-transparent border-none shadow-none text-[var(--text-primary)] text-sm w-full focus:ring-0 focus:outline-none placeholder:text-[var(--text-muted)] pl-3"
                      readOnly
                    />
                    <div className="bg-[#2ca3bd] w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#2ca3bd]/20 hover:scale-105 transition-transform cursor-pointer">
                      <Send size={16} className="-ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: TRUST STRIP — Credibility Numbers
          ═══════════════════════════════════════════════ */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat value="10" suffix="x" label="Décisions plus rapides" />
          <AnimatedStat value="48" suffix="h" label="POC livré" />
          <AnimatedStat value="0" label="Compétence technique requise" />
          <AnimatedStat value="95" suffix="%" label="Satisfaction clients" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3: PAIN POINT — PAS Framework
          Problem → Agitate → Solve
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-20">
              {/* PROBLEM: Call out so they say "That's me" */}
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-4 block">
                Ça vous parle ?
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6 max-w-4xl mx-auto">
                Vous passez plus de temps à{' '}
                <span className="text-red-500 line-through decoration-red-500/40">chercher des données</span> qu'à{' '}
                <span className="text-[#2ca3bd]">prendre des décisions</span>.
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Les dirigeants perdent en moyenne 15 jours par mois à attendre des reportings. Pendant ce temps, les
                opportunités passent et les concurrents avancent.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* AGITATE: The Visual showing the problem */}
            <RevealSection delay={200} className="order-2 lg:order-1">
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-4 sm:p-8 rounded-3xl shadow-xl w-full overflow-hidden">
                <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0">
                  <h4 className="font-bold text-base sm:text-lg text-[var(--text-primary)]">La Latence Décisionnelle</h4>
                  <span className="text-[10px] sm:text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    Risque Stratégique
                  </span>
                </div>

                <div className="relative h-48 sm:h-64 w-full flex items-end justify-between gap-2 sm:gap-4">
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-t-lg h-12 relative overflow-hidden flex items-end">
                      <div className="w-full bg-[#2ca3bd]/20 h-full" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase text-[var(--text-tertiary)] text-center">
                      Données
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-t-lg h-32 relative overflow-hidden group">
                      <div className="absolute bottom-0 w-full bg-[#2ca3bd]/40 h-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white bg-slate-800 px-2 py-1 rounded shadow-sm">
                          +15 jours
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase text-[var(--text-tertiary)] text-center">
                      Extraction
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-red-500/10 rounded-t-lg h-60 relative overflow-hidden border-x border-t border-red-500/30 animate-pulse">
                      <div className="absolute bottom-0 w-full bg-red-500/40 h-full" />
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-red-500 font-black text-xl lg:text-3xl tracking-tighter uppercase px-2 text-center">
                        Gap
                        <span className="text-[10px] lg:text-xs tracking-normal">Décisionnel</span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase text-red-500 text-center">
                      Opportunité Perdue
                    </span>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* AGITATE: Pain Points with emotional copy */}
            <div className="space-y-8 order-1 lg:order-2">
              <RevealSection delay={100}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                    <BarChart4 className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                      Des reportings obsolètes avant d'être lus
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Vous prenez des décisions stratégiques sur des données d'il y a 3 semaines. Le monde a changé
                      depuis, mais votre tableau de bord l'ignore.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                    <Database className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                      Otages de votre équipe technique
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Chaque question = un ticket IT. Chaque ticket = 3 à 7 jours d'attente. C'est comme conduire une
                      F1 avec un GPS en retard de 15 minutes.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={300}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                    <Clock className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                      Excel : le cimetière de votre productivité
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Vos équipes passent 60% de leur temps à fusionner des fichiers au lieu de piloter la croissance.
                      C'est du gaspillage pur.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: VALUE PROPOSITION — "The Inner Workings"
          How BI Advisor delivers the Dream Outcome
          Every feature → "So What?" → Emotional Benefit
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-[var(--border-primary)] pb-12">
              <div className="max-w-3xl">
                <span className="text-[#2ca3bd] font-bold tracking-widest text-xs uppercase mb-4 block">
                  La Solution
                </span>
                {/* Headline sells even for scanners (20% rule) */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
                  Posez une question.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] italic">
                    Obtenez la réponse en secondes.
                  </span>
                </h2>
                <p className="text-[var(--text-secondary)] text-lg">
                  Plus besoin de SQL, d'Excel ou d'attendre l'équipe IT. BI Advisor comprend vos questions et vous livre
                  des réponses actionnables.
                </p>
              </div>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 — Chatbot BI */}
            <RevealSection delay={100}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#2ca3bd]/30 transition-all duration-500 group h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-8 group-hover:bg-[#2ca3bd] transition-colors duration-500">
                  <MessageSquare
                    className="text-[#2ca3bd] group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                {/* Headline sells the benefit, not the feature */}
                <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                  Parlez à vos données comme à un collègue
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  Posez vos questions en français, à l'écrit ou à la voix. L'IA traduit votre intention en requête
                  technique et génère des graphiques à la volée.
                </p>
                {/* "So What?" → The real benefit */}
                <div className="mt-auto pt-4 border-t border-[var(--border-primary)]">
                  <p className="text-sm text-[#2ca3bd] font-semibold flex items-center gap-2">
                    <Target size={14} />
                    Résultat : Autonomie totale de vos équipes métier
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Feature 2 — Forecasting */}
            <RevealSection delay={200}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#2ca3bd]/30 transition-all duration-500 group h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-8 group-hover:bg-[#2ca3bd] transition-colors duration-500">
                  <TrendingUp
                    className="text-[#2ca3bd] group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                  Anticipez les crises avant qu'elles n'arrivent
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  Prévisions de trésorerie, tendances de ventes, projections de BFR — basées sur vos historiques réels
                  et vos échéances.
                </p>
                <div className="mt-auto pt-4 border-t border-[var(--border-primary)]">
                  <p className="text-sm text-[#2ca3bd] font-semibold flex items-center gap-2">
                    <Target size={14} />
                    Résultat : Pilotage proactif, plus jamais dans le rétroviseur
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Feature 3 — Alerting */}
            <RevealSection delay={300}>
              <div className="bg-[#2ca3bd]/5 border border-[#2ca3bd]/20 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#2ca3bd]/40 transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 bg-[#2ca3bd] text-white text-[10px] font-bold rounded-bl-xl uppercase tracking-widest">
                  Live
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors duration-500 shadow-inner">
                  <BellRing
                    className="text-[#2ca3bd] group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                  Ne ratez plus jamais un signal critique
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  Recevez une alerte (WhatsApp/Push) dès qu'une anomalie, une chute de marge ou un seuil critique est
                  détecté par l'algorithme.
                </p>
                <div className="mt-auto pt-4 border-t border-[#2ca3bd]/20">
                  <p className="text-sm text-[#2ca3bd] font-semibold flex items-center gap-2">
                    <Target size={14} />
                    Résultat : Dormez tranquille, votre IA surveille 24/7
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5: BEFORE / AFTER COMPARISON
          "The Implacable Comparison" — Visual proof
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
                Avant vs. <span className="text-[#2ca3bd]">Après</span> BI Advisor
              </h2>
              <p className="text-[var(--text-secondary)] text-lg">
                La différence est mesurable, pas hypothétique.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* BEFORE */}
              <div className="bg-[var(--surface-elevated)] border border-red-500/20 p-8 rounded-3xl relative">
                <div className="absolute -top-4 left-6 bg-red-500/10 text-red-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-red-500/20">
                  Avant
                </div>
                <div className="space-y-5 mt-4">
                  {[
                    'Reporting en J+15 minimum',
                    'Export Excel manuel et chronophage',
                    "Dépendance totale envers l'IT",
                    'Zéro anticipation, zéro prédiction',
                    'Tableaux statiques incompréhensibles',
                    "Décisions basées sur l'intuition",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AFTER */}
              <div className="bg-[var(--surface-elevated)] border-2 border-[#2ca3bd]/30 p-8 rounded-3xl relative shadow-xl shadow-[#2ca3bd]/5">
                <div className="absolute -top-4 left-6 bg-[#2ca3bd] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  Avec BI Advisor
                </div>
                <div className="space-y-5 mt-4">
                  {[
                    'Réponses en temps réel, en secondes',
                    'Questions en langage naturel (voix/texte)',
                    'Autonomie totale de chaque métier',
                    'Prévisions et alertes proactives',
                    'Graphiques générés automatiquement',
                    'Décisions pilotées par la data',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#2ca3bd] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-primary)] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6: MID-PAGE CTA — Re-engage scrollers
          ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-r from-[#00687a] to-[#2ca3bd] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm20%2020h20v20H20V20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Prêt à transformer votre ERP en arme stratégique ?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Rejoignez les +30 entreprises qui ont divisé leur temps de décision par 10. Le POC est offert, sur vos
              données réelles.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-[#00687a] px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group mx-auto"
            >
              Demander mon POC gratuit
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center justify-center gap-6 text-xs text-white/60 mt-4">
              <span>✓ Résultats en 48h</span>
              <span>✓ Zéro engagement</span>
              <span>✓ Données chiffrées E2E</span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7: RISK REDUCTION — Zero Friction
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6">
                Conçu pour éliminer <span className="text-[#2ca3bd]">chaque objection</span>.
              </h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Chaque friction que vous imaginez, nous l'avons anticipée et résolue.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealSection delay={100} className="lg:col-span-2">
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-10 rounded-3xl h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
                    Zéro compétence technique requise
                  </h3>
                  <p className="text-[var(--text-secondary)] max-w-sm">
                    Plus besoin de maîtriser SQL ou Excel. L'interface comprend votre langue métier. Du DAF au
                    commercial, tout le monde peut piloter.
                  </p>
                </div>
                <div className="mt-8">
                  <Brain
                    size={48}
                    className="text-[#2ca3bd]/40 group-hover:text-[#2ca3bd] transition-colors"
                  />
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-gradient-to-br from-[#00687a] to-[#2ca3bd] text-white p-8 rounded-3xl h-full flex flex-col justify-between shadow-lg shadow-[#2ca3bd]/20 group hover:scale-105 transition-transform">
                <div>
                  <h3 className="text-xl font-bold mb-3">Opérationnel en 2 semaines</h3>
                  <p className="text-white/80 text-sm">
                    Connexion à votre ERP, configuration et formation de vos équipes. Pas 6 mois. 2 semaines.
                  </p>
                </div>
                <Zap
                  size={40}
                  className="text-white/40 group-hover:text-amber-400 group-hover:fill-amber-400 mt-4 transition-all"
                />
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Sécurité Maximale</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Lecture seule. Vos données sont analysées mais jamais modifiées. Chiffrement E2E.
                  </p>
                </div>
                <Shield
                  size={40}
                  className="text-[#2ca3bd]/30 group-hover:text-[#2ca3bd] mt-4 transition-colors"
                />
              </div>
            </RevealSection>

            <RevealSection delay={400} className="lg:col-span-4">
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 group text-center md:text-left">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Intégration Universelle</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Connecteurs natifs prêts à l'emploi. Branchez, configurez, pilotez.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
                  {['SAP', 'Sage', 'Oracle', 'Dynamics', 'Excel', 'CRM'].map((erp) => (
                    <span
                      key={erp}
                      className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl font-mono text-xs sm:text-sm font-bold text-[var(--text-primary)] shadow-sm hover:border-[#2ca3bd]/30 transition-colors"
                    >
                      {erp}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 8: BENEFITS BY ROLE — "So What?" for each persona
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
                Chaque métier y gagne.{' '}
                <span className="text-[#2ca3bd]">Concrètement.</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Des résultats mesurables, pas des promesses vagues.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealSection delay={100}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-3xl p-8 h-full hover:border-[#2ca3bd]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-6 group-hover:bg-[#2ca3bd] transition-colors">
                  <LineChart className="text-[#2ca3bd] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">DAF / Finance</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Suivi de trésorerie prédictif, optimisation du BFR et analyse d'écarts budgétaires — à la
                  demande, en temps réel.
                </p>
                <p className="text-sm text-[#2ca3bd] font-semibold">→ Visibilité cash à J+90 au lieu de J+15</p>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-3xl p-8 h-full hover:border-[#2ca3bd]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-6 group-hover:bg-[#2ca3bd] transition-colors">
                  <TrendingUp className="text-[#2ca3bd] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Commerce / Sales</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Analyse de rentabilité par client, prévision des ventes basées sur la pipeline, détection
                  d'opportunités cachées.
                </p>
                <p className="text-sm text-[#2ca3bd] font-semibold">→ +25% de taux de conversion pipeline</p>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-3xl p-8 h-full hover:border-[#2ca3bd]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-6 group-hover:bg-[#2ca3bd] transition-colors">
                  <PackageSearch className="text-[#2ca3bd] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Logistique / Ops</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Prévention des ruptures de stocks, optimisation des approvisionnements, analyse de la chaîne
                  logistique en continu.
                </p>
                <p className="text-sm text-[#2ca3bd] font-semibold">→ -40% de ruptures de stock</p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 9: STRATEGIC SOCIAL PROOF
          "Helping X customers achieve [Dream Outcome]"
          Never "Our Reviews" or "Testimonials"
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              {/* NEVER use "Nos Avis" or "Témoignages" */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
                +30 entreprises ont accéléré leur prise de décision{' '}
                <span className="text-[#2ca3bd]">avec BI Advisor</span>.
              </h2>
            </div>
          </RevealSection>

          {/* Wall of Love — Dense Grid of Proof */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "On est passé de 3 semaines de reporting à des réponses en temps réel. Le board est impressionné.",
                name: 'Marc D.',
                role: 'DAF',
                company: 'Groupe Industriel, +500 salariés',
                metric: 'Temps de décision divisé par 15',
              },
              {
                quote:
                  "Mes commerciaux posent directement leurs questions à l'IA au lieu de harceler l'IT. Tout le monde est plus efficace.",
                name: 'Sophie L.',
                role: 'Directrice Commerciale',
                company: 'Distribution B2B',
                metric: '+32% de productivité équipe',
              },
              {
                quote:
                  "L'alerte WhatsApp sur la chute de marge nous a sauvé 80k€ en un trimestre. Le ROI est immédiat.",
                name: 'Thomas R.',
                role: 'CEO',
                company: 'E-commerce, CA 15M€',
                metric: 'ROI en moins de 30 jours',
              },
              {
                quote:
                  "Intégré à notre Sage en 10 jours. L'implémentation la plus fluide qu'on ait connue pour un outil data.",
                name: 'Nathalie P.',
                role: 'DSI',
                company: 'PME Tech, 120 salariés',
                metric: 'Mise en place en 10 jours',
              },
              {
                quote:
                  "Je peux enfin avoir une vision cash à 90 jours sans dépendre de mon contrôleur de gestion. C'est libérateur.",
                name: 'Jean-Pierre M.',
                role: 'Directeur Général',
                company: 'Groupe de Services',
                metric: 'Visibilité tréso x6',
              },
              {
                quote:
                  "Zéro rupture de stock depuis 6 mois grâce aux alertes prédictives. Avant, on en avait 3 par mois.",
                name: 'Karim B.',
                role: 'Responsable Supply Chain',
                company: 'Retail, 45 points de vente',
                metric: 'Ruptures stock → 0',
              },
            ].map((testimonial, index) => (
              <RevealSection key={testimonial.name} delay={index * 100}>
                <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-6 rounded-2xl h-full flex flex-col hover:border-[#2ca3bd]/20 transition-colors">
                  {/* Metric badge */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#2ca3bd] bg-[#2ca3bd]/10 px-3 py-1 rounded-full">
                      {testimonial.metric}
                    </span>
                  </div>

                  <Quote size={20} className="text-[#2ca3bd]/30 mb-3" />
                  <p className="text-[var(--text-secondary)] leading-relaxed flex-1 mb-4 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="pt-4 border-t border-[var(--border-primary)]">
                    <p className="font-bold text-[var(--text-primary)] text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10: FAQ — The Friction Reducer
          Dismantle objections before final CTA
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
                Les questions que vous vous posez{' '}
                <span className="text-[#2ca3bd]">(et les réponses franches)</span>
              </h2>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="space-y-4">
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
                answer="Nos connecteurs sont universels. Si votre ERP expose une API ou une base de données, nous pouvons nous y connecter. Nous avons déjà intégré SAP, Sage, Oracle, Dynamics, Odoo, et de nombreux ERP métier. Contactez-nous, la réponse est souvent 'oui'."
              />
              <FAQItem
                question="Ça remplace notre BI existante ?"
                answer="Non, BI Advisor complète et amplifie vos outils existants (Power BI, Tableau, etc.). Il ajoute une couche conversationnelle et prédictive par-dessus vos données, rendant les insights accessibles à tous — pas seulement aux data analysts."
              />
              <FAQItem
                question="Mon équipe n'est pas technique, c'est un problème ?"
                answer="C'est exactement le point. BI Advisor a été conçu pour les non-techniciens. Vos équipes posent des questions en français, à l'écrit ou à la voix, et obtiennent des réponses visuelles instantanées. Zéro SQL, zéro Excel, zéro formation complexe."
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 11: FINAL CTA — Contact Form
          ═══════════════════════════════════════════════ */}
      <BIAdvisorContact />
    </>
  );
}
