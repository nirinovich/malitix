import { useRef } from 'react';
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
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

/* ─── Section Reveal Wrapper ─── */
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { hasBeenInView } = useInView(ref, { threshold: 0.1 });

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

export default function BIAdvisor() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>BI Advisor - Assistant Décisionnel Intelligent | Malitix</title>
        <meta name="description" content="Transformez votre ERP standard en Assistant Décisionnel Intelligent. Parlez à vos données et obtenez des prévisions instantanées." />
      </Helmet>

      {/* 1. HEADER (Le Hook) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            alt="Data network background"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 w-full">
          <div className="flex flex-col justify-center">
            <RevealSection>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter text-white mb-6">
                Arrêtez de piloter dans le <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 line-through decoration-red-500/50">rétroviseur.</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3bd] to-[#6ad5f0]">
                  Parlez à vos données.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
                Transformez votre ERP standard en Assistant Décisionnel Intelligent. Plus d'exports Excel. Plus d'attente d'experts. Juste des prévisions instantanées, prêtes pour le board.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-[#00687a] to-[#2ca3bd] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#2ca3bd]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group border border-white/10"
                >
                  Lancer mon test (Données réelles)
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </RevealSection>
          </div>

          <div className="hidden lg:flex flex-col justify-center relative">
            <RevealSection delay={200}>
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#2ca3bd]/20 blur-[100px] rounded-full" />

                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ca3bd] to-[#00687a] flex items-center justify-center shadow-lg">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">BI Advisor AI</div>
                        <div className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Connecté à votre ERP
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-2xl rounded-tr-sm p-4 text-sm text-slate-300 ml-8 border border-white/5">
                      Quel sera l'impact sur la trésorerie si la campagne Q4 augmente les ventes de +15% ?
                    </div>

                    <div className="bg-[#2ca3bd]/10 border border-[#2ca3bd]/20 rounded-2xl rounded-tl-sm p-5 text-sm text-white mr-8 shadow-inner relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1 bg-[#2ca3bd]" />
                      <p className="mb-4 font-light leading-relaxed">
                        En simulant cette hausse avec nos modèles prédictifs :
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center bg-black/20 px-3 py-2 rounded-lg">
                          <span className="text-slate-400">Besoin en fonds de roulement</span>
                          <span className="font-bold text-red-400">+ 120k €</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/20 px-3 py-2 rounded-lg">
                          <span className="text-slate-400">Marge nette prévisionnelle</span>
                          <span className="font-bold text-emerald-400">+ 45k €</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#2ca3bd] font-semibold flex items-center gap-1">
                        <Zap size={12} className="fill-[#2ca3bd]" /> Généré en 1.2s
                      </p>
                    </div>
                  </div>

                  {/* Chat Input Mockup */}
                  <div className="mt-6 flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-2xl">
                    <input
                      type="text"
                      placeholder="Posez votre question à vos données..."
                      className="bg-transparent border-none shadow-none text-white text-sm w-full focus:ring-0 focus:outline-none placeholder:text-slate-500 pl-3"
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

      {/* 2. LE PAIN : L'URGENTE RÉALITÉ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6">
                Votre ERP est une mine d'or inexploitée.<br className="hidden md:block" /> Pourquoi la prise de décision est-elle encore si complexe ?
              </h2>
              <div className="h-1.5 w-24 bg-[#2ca3bd] mx-auto rounded-full" />
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The Visual (Latence Critique) */}
            <RevealSection delay={200} className="order-2 lg:order-1">
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl shadow-xl">
                <div className="mb-8 flex justify-between items-end">
                  <h4 className="font-bold text-lg text-[var(--text-primary)]">La Latence Critique</h4>
                  <span className="text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase tracking-widest">Risque Stratégique</span>
                </div>

                <div className="relative h-64 w-full flex items-end justify-between gap-4">
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-t-lg h-12 relative overflow-hidden flex items-end">
                      <div className="w-full bg-[#2ca3bd]/20 h-full" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase text-[var(--text-tertiary)] text-center">Données Brutes</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-t-lg h-32 relative overflow-hidden group">
                      <div className="absolute bottom-0 w-full bg-[#2ca3bd]/40 h-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white bg-slate-800 px-2 py-1 rounded shadow-sm">+15 jours</span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase text-[var(--text-tertiary)] text-center">Extraction & Nettoyage</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-red-500/10 rounded-t-lg h-60 relative overflow-hidden border-x border-t border-red-500/30 animate-pulse">
                      <div className="absolute bottom-0 w-full bg-red-500/40 h-full" />
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-red-500 font-black text-xl lg:text-3xl tracking-tighter uppercase px-2 text-center">
                        Gap
                        <span className="text-[10px] lg:text-xs tracking-normal">Décisionnel</span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase text-red-500 text-center">Opportunité Perdue</span>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Pain Points List */}
            <div className="space-y-8 order-1 lg:order-2">
              <RevealSection delay={100}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-primary)] shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#2ca3bd]/5 transition-colors">
                    <BarChart4 className="text-[#2ca3bd] text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Reporting statique</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Vous analysez le passé au lieu d'anticiper l'avenir. Des tableaux figés qui sont obsolètes avant même d'être lus.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-primary)] shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#2ca3bd]/5 transition-colors">
                    <Database className="text-[#2ca3bd] text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Dépendance technique</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Chaque question nécessite un expert data. Vous êtes dépendant des équipes IT pour la moindre modification de vue.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={300}>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-primary)] shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#2ca3bd]/5 transition-colors">
                    <Clock className="text-[#2ca3bd] text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Temps perdu</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Le délai se compte en jours, pas en secondes. Des heures gaspillées sur Excel à fusionner des données manuelles.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LA SOLUTION : BI ADVISOR */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-[var(--border-primary)] pb-12">
              <div className="max-w-3xl">
                <span className="text-[#2ca3bd] font-bold tracking-widest text-xs uppercase mb-4 block">La Révolution Data</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4">
                  L'Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] italic">Augmentée</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-lg">
                  BI Advisor ne se contente pas d'afficher des chiffres, il les comprend et rend votre business proactif.
                </p>
              </div>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealSection delay={100}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#2ca3bd]/30 transition-all duration-500 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-8 group-hover:bg-[#2ca3bd] transition-colors duration-500">
                  <MessageSquare className="text-[#2ca3bd] group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Le Chatbot BI</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  Interrogez vos données en langage naturel. Posez vos questions comme à un collègue (texte ou voix). L'IA traduit votre intention en requête technique et génère des graphiques à la volée.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#2ca3bd]/30 transition-all duration-500 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#2ca3bd]/10 flex items-center justify-center mb-8 group-hover:bg-[#2ca3bd] transition-colors duration-500">
                  <TrendingUp className="text-[#2ca3bd] group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Forecasting</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  Anticipez les tendances de ventes et de trésorerie basées sur vos historiques et échéances réelles. Fiez-vous aux données pour prévoir votre croissance.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="bg-[#2ca3bd]/5 border border-[#2ca3bd]/20 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#2ca3bd]/40 transition-all duration-500 group h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 bg-[#2ca3bd] text-white text-[10px] font-bold rounded-bl-xl uppercase tracking-widest">
                  Live
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 dark:bg-black/10 flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors duration-500 shadow-inner">
                  <BellRing className="text-[#2ca3bd] group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Alerting Proactif</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  Ne manquez jamais un évènement critique. Recevez une alerte (WhatsApp/Push) dès qu'une anomalie ou une chute de marge est détectée par l'algorithme.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* 4. LA RÉDUCTION DU RISQUE */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6">Zero Friction. <span className="text-[#2ca3bd]">Zero Risk.</span></h2>
              <p className="text-[var(--text-secondary)] text-lg">Conçu pour s'intégrer à votre écosystème en un clin d'œil, sans douleur IT.</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealSection delay={100} className="lg:col-span-2">
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-10 rounded-3xl h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Démocratisation</h3>
                  <p className="text-[var(--text-secondary)] max-w-sm">
                    Zéro compétence technique requise. Plus besoin de maîtriser SQL ou Excel pour comprendre et piloter votre business. L'interface parle votre langue.
                  </p>
                </div>
                <div className="mt-8">
                  <Brain size={48} className="text-[#2ca3bd]/40 group-hover:text-[#2ca3bd] transition-colors" />
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-gradient-to-br from-[#00687a] to-[#2ca3bd] text-white p-8 rounded-3xl h-full flex flex-col justify-between shadow-lg shadow-[#2ca3bd]/20 group hover:scale-105 transition-transform">
                <div>
                  <h3 className="text-xl font-bold mb-3">Vitesse d'Implémentation</h3>
                  <p className="text-white/80 text-sm">
                    Mise en place rapide en moins de 2 semaines.
                  </p>
                </div>
                <Zap size={40} className="text-white/40 group-hover:text-amber-400 group-hover:fill-amber-400 mt-4 transition-all" />
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Sécurité Maximale</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Lecture seule. Vos données sont analysées mais jamais modifiées. Chiffrement de bout en bout.
                  </p>
                </div>
                <Shield size={40} className="text-[#2ca3bd]/30 group-hover:text-[#2ca3bd] mt-4 transition-colors" />
              </div>
            </RevealSection>

            <RevealSection delay={400} className="lg:col-span-4">
              <div className="bg-[var(--surface-elevated)] border border-[var(--border-primary)] p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 group">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Intégration Universelle</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Connecteurs natifs prêts à l'emploi.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl font-mono text-sm font-bold text-[var(--text-primary)] shadow-sm">ERP</span>
                  <span className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl font-mono text-sm font-bold text-[var(--text-primary)] shadow-sm">CRM</span>
                  <span className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl font-mono text-sm font-bold text-[var(--text-primary)] shadow-sm">EXCEL</span>
                  <span className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl font-mono text-sm font-bold text-[var(--text-primary)] shadow-sm">HRIS</span>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* 5. PREUVE & AUTORITÉ */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Comparison */}
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-10">
              Le Comparatif Implacable
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest">BI Traditionnelle</span>
                  <span className="text-sm font-bold text-[var(--text-secondary)]">Plusieurs jours</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-[var(--text-tertiary)]" />
                  <span className="text-xs text-[var(--text-secondary)]">Attente d'experts, export Excel</span>
                </div>
                <div className="w-full bg-[var(--bg-primary)] h-3 rounded-full overflow-hidden border border-[var(--border-primary)]">
                  <div className="bg-[var(--text-tertiary)] h-full w-[100%]" />
                </div>
              </div>

              <div className="p-6 bg-[var(--surface-elevated)] border-2 border-[#2ca3bd] rounded-2xl shadow-xl shadow-[#2ca3bd]/10 relative transform scale-105 z-10 w-[95%]">
                <div className="absolute -top-3 right-6 bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-md">
                  Vitesse Éclair
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-[#2ca3bd] uppercase tracking-widest">BI Advisor</span>
                  <span className="text-lg font-black text-[#2ca3bd]">Quelques secondes</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} className="text-[#2ca3bd] fill-[#2ca3bd]" />
                  <span className="text-xs text-[var(--text-primary)] font-bold">Temps réel</span>
                </div>
                <div className="w-full bg-[#2ca3bd]/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#2ca3bd] h-full w-[3%]" />
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Benefices metiers */}
          <RevealSection delay={200} className="space-y-12">
            <h3 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">Des bénéfices concrets par métier</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-[#2ca3bd]/30 hover:border-[#2ca3bd] transition-colors">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2 text-[var(--text-primary)]">
                  <LineChart className="text-[#2ca3bd]" />
                  Finance
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Suivi de trésorerie prédictif, optimisation du BFR, et analyse d'écarts budgétaires à la demande.
                </p>
              </div>

              <div className="relative pl-8 border-l-4 border-[#2ca3bd]/30 hover:border-[#2ca3bd] transition-colors">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2 text-[var(--text-primary)]">
                  <TrendingUp className="text-[#2ca3bd]" />
                  Commerce
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Analyse de la rentabilité par client, prévision des ventes basées sur la pipeline, détection d'opportunités.
                </p>
              </div>

              <div className="relative pl-8 border-l-4 border-[#2ca3bd]/30 hover:border-[#2ca3bd] transition-colors">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2 text-[var(--text-primary)]">
                  <PackageSearch className="text-[#2ca3bd]" />
                  Logistique
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Détection et prévention des ruptures de stocks, optimisation des approvisionnements, analyse de la chaîne.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 6. LE CLOSE */}
      <section className="py-24 px-6 sm:px-12 bg-[var(--bg-secondary)] border-t border-[var(--border-primary)] relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2ca3bd]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealSection>
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Nous ne lançons que 5 POC par mois pour garantir un accompagnement premium.
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-8 leading-tight">
              Prêt à dialoguer avec votre entreprise ?
            </h2>

            <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Lançons un Proof of Concept (POC) sur vos données historiques pour constater la valeur immédiate du système.
            </p>

            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#00687a] to-[#2ca3bd] hover:from-[#005260] hover:to-[#248fa5] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto mx-auto flex items-center justify-center gap-3 group"
            >
              Demander ma démo et mon test gratuit
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
