import { useEffect, useState, useRef, useCallback } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calculator,
  TrendingDown,
  Users,
  AlertTriangle,
  Clock,
  CheckCircle,
  Star,
  Quote,
  Shield,
  Zap,
  Brain,
  Calendar,
  ArrowDown,
  ChevronRight,
  X,
  Check,
  Download,
  Loader2,
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import LogoCarousel from '../components/Utility/LogoCarousel';
import { useInView } from '../hooks/useInView';

/* ─── Animated Counter Hook ─── */
function useAnimatedCounter(end: number, duration = 1200, active = true) {
  const [count, setCount] = useState(0);
  const prevEnd = useRef(end);

  useEffect(() => {
    if (!active) return;
    prevEnd.current = end;
    let start = 0;
    const startTime = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, active]);

  return count;
}

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

/* ─── Hidden Cost Data ─── */
const hiddenCosts = [
  {
    icon: Zap,
    amount: '42K€',
    label: 'Le Coût Invisible',
    description: 'C\'est le montant net payé à des ingénieurs seniors (TJM 550 €+) pour effectuer des tâches de triage basiques qui ne demandent aucune expertise.',
    punchline: 'Vous payez un architecte pour vider les poubelles.',
    gradient: 'from-[#2ca3bd]/20 to-[#2ca3bd]/5',
  },
  {
    icon: Brain,
    amount: '8.4K€',
    label: 'Le Facteur de Distraction',
    description: 'Chaque alerte génère un "Context Switching". Il faut en moyenne 20 minutes à un cerveau humain pour retrouver un état de concentration profonde.',
    punchline: 'Vous payez 20% de surcoût en temps de cerveau inefficace.',
    gradient: 'from-amber-500/20 to-amber-500/5',
  },
  {
    icon: Calendar,
    amount: '∞',
    label: 'Le Retard de Roadmap',
    description: 'Si vos ingénieurs récupèrent 20% de leur temps, votre roadmap produit avance plus vite. Le coût d\'opportunité est incalculable.',
    punchline: 'Ça n\'a pas de prix.',
    gradient: 'from-red-500/20 to-red-500/5',
  },
];

/* ─── Before/After Data ─── */
const transformations = [
  {
    aspect: 'Productivité',
    icon: Users,
    before: 'Épuisés et distraits',
    after: 'Focus et productifs',
  },
  {
    aspect: 'Coûts opérationnels',
    icon: TrendingDown,
    before: '42 000 € / an',
    after: 'Divisés par 2',
  },
  {
    aspect: 'Roadmap produit',
    icon: Calendar,
    before: 'Retard à chaque alerte',
    after: 'Priorité n°1',
  },
];

/* ─── Testimonial Data ─── */
const testimonials = [
  {
    quote: 'Nous travaillons depuis 3 ans avec Malitix à qui nous avons confié notre supervision et monitoring 24/7 sur un périmètre assez large. Une équipe réactive, qui respecte les consignes, avec un suivi commercial précis et un respect des SLA.',
    highlights: ['supervision et monitoring 24/7', 'respect des SLA'],
    name: 'Riad Roubache',
    role: 'CISO/CTO • Tersadia',
    image: '/images/testimonials/riad.png',
  },
  {
    quote: 'Nous avons pu développer notre solution avec des équipes de Malitix qui ont parfaitement compris notre besoin et notre ambition. Elles nous ont aidé à cadrer le sujet et à organiser un suivi régulier et flexible.',
    highlights: ['parfaitement compris notre besoin'],
    name: 'Selim Saadi',
    role: 'CEO & Co-founder • Karlisolutions',
    image: '/images/testimonials/selim-saadi.png',
  },
  {
    quote: 'Malitix has been a longstanding partner since the inception of our company\'s first website, contributing to our online presence and technological solutions over the years.',
    highlights: ['longstanding partner'],
    name: 'David Bovet',
    role: 'CEO • Bios Analytics',
    image: '/images/testimonials/david.png',
  },
];

export default function SOCMonitoring() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyUrl: '',
    message: '',
  });

  // ROI Calculator State
  const [internalTJM, setInternalTJM] = useState(550);
  const [alertsPerMonth, setAlertsPerMonth] = useState(40);
  const [avgResolutionTime, setAvgResolutionTime] = useState(1.5);
  const [distractionFactor, setDistractionFactor] = useState(1.2);

  // SOC Parameters
  const socTJM = 120;
  const hoursPerDay = 7;
  const socHourlyRate = socTJM / hoursPerDay;

  // Calculations
  const internalHourlyRate = internalTJM / 7;
  const totalHoursNeeded = alertsPerMonth * avgResolutionTime;
  const internalMonthlyCost = (totalHoursNeeded * internalHourlyRate) * distractionFactor;
  const externalMonthlyCost = totalHoursNeeded * socHourlyRate;
  const monthlySavings = internalMonthlyCost - externalMonthlyCost;
  const yearlySavings = monthlySavings * 12;
  const roiPercentage = ((internalMonthlyCost - externalMonthlyCost) / externalMonthlyCost) * 100;

  const formatEuro = (val: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  // Animated counter refs
  const savingsRef = useRef<HTMLDivElement>(null);
  const { hasBeenInView: savingsVisible } = useInView(savingsRef, { threshold: 0.3 });
  const animatedYearlySavings = useAnimatedCounter(Math.round(yearlySavings), 1500, savingsVisible);
  const animatedROI = useAnimatedCounter(Math.round(roiPercentage), 1500, savingsVisible);

  // ROI Report — email capture state
  const [roiEmail, setRoiEmail] = useState('');
  const [roiEmailSent, setRoiEmailSent] = useState(false);
  const [roiLoading, setRoiLoading] = useState(false);
  const [roiError, setRoiError] = useState('');

  // Active testimonial state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = 'Externalisation SOC | Malitix';
  }, []);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(undefined);
      }

      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'SOC - Contact' }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', companyUrl: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  /* ── Generate & download client-side PDF report ── */
  const generatePDFReport = useCallback(() => {
    const doc = new jsPDF();
    const w = doc.internal.pageSize.getWidth();
    const accent = [44, 163, 189] as const; // #2ca3bd
    const dark = [20, 20, 30] as const;
    const mid = [120, 120, 140] as const;
    const today = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });

    // PDF-safe euro formatter (replace narrow no-break spaces with regular spaces)
    const pdfEuro = (val: number) =>
      new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
        .format(val)
        .replace(/[\u202F\u00A0]/g, ' ');

    // ── Header band ──
    doc.setFillColor(...accent);
    doc.rect(0, 0, w, 38, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Rapport ROI — Externalisation SOC', w / 2, 18, { align: 'center' });
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Généré le ${today}  •  malitix.com`, w / 2, 30, { align: 'center' });

    let y = 52;
    const lineH = 8;

    // Helper to draw a section title
    const sectionTitle = (title: string) => {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...accent);
      doc.text(title, 20, y);
      y += 2;
      doc.setDrawColor(...accent);
      doc.setLineWidth(0.6);
      doc.line(20, y, w - 20, y);
      y += lineH;
    };

    // Helper to draw a key-value row
    const row = (label: string, value: string, bold = false) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...mid);
      doc.text(label, 24, y);
      doc.setFont('helvetica', bold ? 'bold' : 'normal');
      doc.setTextColor(...dark);
      doc.text(value, w - 24, y, { align: 'right' });
      y += lineH;
    };

    // ── Section 1 : Your parameters ──
    sectionTitle('Vos paramètres');
    row('Alertes / mois', `${alertsPerMonth}`);
    row('Temps de résolution moyen', `${avgResolutionTime} h`);
    row('TJM interne', `${internalTJM} €`);
    row('Facteur de distraction', `+${((distractionFactor - 1) * 100).toFixed(0)} %`);
    row('Heures nécessaires / mois', `${Math.round(totalHoursNeeded)} h`);
    y += 6;

    // ── Section 2 : Coûts comparés ──
    sectionTitle('Coûts comparés');
    row('Coût mensuel interne (avec distraction)', pdfEuro(internalMonthlyCost), true);
    row('Coût mensuel externalisé (Malitix)', pdfEuro(externalMonthlyCost), true);
    row('TJM Analyste SOC Malitix', `${socTJM} €`);
    row('Coût horaire Malitix', `${socHourlyRate.toFixed(0)} €/h`);
    y += 6;

    // ── Section 3 : Résultats ──
    sectionTitle('Résultats');
    row('Économie mensuelle', `+${pdfEuro(monthlySavings)}`, true);
    row('Économie annuelle', `+${pdfEuro(yearlySavings)}`, true);
    row('ROI', `${Math.round(roiPercentage)} %`, true);
    y += 12;

    // ── Highlight box ──
    doc.setFillColor(240, 250, 252);
    doc.roundedRect(20, y, w - 40, 26, 4, 4, 'F');
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...accent);
    doc.text(`Vous pourriez économiser ${pdfEuro(yearlySavings)} / an`, w / 2, y + 11, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...mid);
    doc.text('en externalisant votre monitoring SOC chez Malitix.', w / 2, y + 20, { align: 'center' });
    y += 36;

    // ── Footer ──
    doc.setFontSize(9);
    doc.setTextColor(160, 160, 170);
    doc.text('Simulation indicative — Les coûts réels peuvent varier.', w / 2, y, { align: 'center' });
    doc.text('Malitix • 26 rue de Londres, 75009 Paris • infos@malitix.com', w / 2, y + 6, { align: 'center' });

    doc.save('Rapport-ROI-SOC-Malitix.pdf');
  }, [alertsPerMonth, avgResolutionTime, internalTJM, distractionFactor, totalHoursNeeded, internalMonthlyCost, externalMonthlyCost, monthlySavings, yearlySavings, roiPercentage, socTJM, socHourlyRate]);

  /* ── Send email to Arkedown then trigger download ── */
  const handleRoiDownload = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roiEmail) return;
    setRoiLoading(true);
    setRoiError('');

    try {
      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(undefined);
      }

      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: roiEmail,
          source: 'SOC - ROI Report',
          roiData: {
            alertsPerMonth,
            avgResolutionTime,
            internalTJM,
            distractionFactor,
            internalMonthlyCost: Math.round(internalMonthlyCost),
            externalMonthlyCost: Math.round(externalMonthlyCost),
            monthlySavings: Math.round(monthlySavings),
            yearlySavings: Math.round(yearlySavings),
            roiPercentage: Math.round(roiPercentage),
          },
        }),
      });

      if (!response.ok) throw new Error('Erreur réseau');

      setRoiEmailSent(true);
      generatePDFReport();
    } catch {
      // Download anyway even if webhook fails
      generatePDFReport();
      setRoiEmailSent(true);
    } finally {
      setRoiLoading(false);
    }
  }, [roiEmail, alertsPerMonth, avgResolutionTime, internalTJM, distractionFactor, internalMonthlyCost, externalMonthlyCost, monthlySavings, yearlySavings, roiPercentage, generatePDFReport]);

  const scrollToCalculator = useCallback(() => {
    document.querySelector('#roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToContact = useCallback(() => {
    document.querySelector('#soc-contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION — Gradient Mesh + Glow
          ═══════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden bg-[var(--bg-primary)]">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#2ca3bd]/15 blur-[120px] animate-pulse-subtle" />
          <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-[#2ca3bd]/10 blur-[100px] animate-float-subtle" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#2ca3bd]/5 blur-[150px]" />
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
            

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.12] tracking-[-0.01em] text-[var(--text-primary)]">
              Vos ingénieurs coûtent trop cher pour{' '}
              <span className="relative inline-block">
                <span className="text-[#2ca3bd]">faire les pompiers</span>
                <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                  <path d="M0 5 Q50 0, 100 5 T200 5" stroke="#2ca3bd" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Ne laissez plus vos talents seniors se noyer sous les alertes. 
              Externalisez le monitoring à nos experts SOC pour{' '}
              <span className="font-semibold text-[#2ca3bd]">diviser vos coûts par 2</span>{' '}
              et redonner <span className="font-semibold text-[#2ca3bd]">20% de productivité</span> à votre roadmap.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToCalculator}
                className="group bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#2ca3bd]/20 hover:shadow-2xl hover:shadow-[#2ca3bd]/30 hover:scale-[1.02]"
              >
                Simuler mon ROI en 30s
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="border border-[var(--border-primary)] hover:border-[#2ca3bd] text-[var(--text-primary)] hover:text-[#2ca3bd] px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-[#2ca3bd]/5"
              >
                Prendre rendez-vous
              </button>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {['/images/testimonials/riad.png', '/images/testimonials/selim-saadi.png', '/images/testimonials/david.png'].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#2ca3bd] fill-[#2ca3bd]" />
                  ))}
                </div>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">+50 000 alertes traitées</p>
              </div>
            </div>
          </div>

          {/* Right — Animated Visual / Stats Dashboard */}
          <div className="hidden lg:block">
            <div className="relative" style={{ animationDelay: '200ms' }}>
              {/* Glow behind card */}
              <div className="absolute -inset-6 bg-[#2ca3bd]/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-[var(--surface-elevated)] backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl p-8 space-y-6 shadow-2xl">
                {/* Dashboard header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-[var(--text-primary)]">SOC Dashboard — Live</span>
                  </div>
                  <span className="text-xs text-[var(--text-tertiary)]">Temps réel</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Alertes traitées', value: '2,847', change: '+12%', up: true },
                    { label: 'Temps moyen', value: '< 15min', change: '-34%', up: false },
                    { label: 'SLA respecté', value: '99.7%', change: '+2.1%', up: true },
                    { label: 'Coût / alerte', value: '17 €', change: '-56%', up: false },
                  ].map((stat, i) => (
                    <div 
                      key={i} 
                      className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-4 hover:border-[#2ca3bd]/40 transition-all duration-300"
                    >
                      <p className="text-xs text-[var(--text-tertiary)] mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</p>
                      <p className={`text-xs font-semibold mt-1 ${stat.up ? 'text-emerald-400' : 'text-[#2ca3bd]'}`}>
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[var(--text-secondary)]">Économies mensuelles</p>
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 52, 48, 65, 58, 72, 80, 75, 88, 92, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-[#2ca3bd] rounded-t-sm transition-all duration-500 hover:bg-[#3bb8d4]"
                        style={{ 
                          height: `${h}%`, 
                          opacity: 0.4 + (i / 12) * 0.6,
                          animationDelay: `${i * 100}ms` 
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-[var(--text-muted)]">
                    <span>Jan</span>
                    <span>Déc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ArrowDown size={20} className="text-[var(--text-muted)]" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROOF BAR 
          ═══════════════════════════════════════ */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="text-center text-lg text-[var(--text-tertiary)] mb-8">
              Déjà <span className="font-bold text-[#2ca3bd]">+50 000</span> alertes traitées pour des équipes tech de haut niveau
            </p>
            <LogoCarousel />
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HIDDEN COSTS — Visual Storytelling
          ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-primary)] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2ca3bd]/5 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <RevealSection>
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                  Le problème
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-primary)]">
                Les coûts <span className="text-[#2ca3bd]">cachés</span> de la gestion d'alerte
              </h2>
              <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                Ce que personne ne vous dit sur le vrai coût des alertes
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {hiddenCosts.map((cost, index) => {
              const Icon = cost.icon;
              return (
                <RevealSection key={index} delay={index * 150}>
                  <div className="group relative bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[#2ca3bd]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2ca3bd]/10 h-full">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cost.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Icon + Amount */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#2ca3bd]/10 rounded-xl group-hover:bg-[#2ca3bd]/20 transition-colors">
                          <Icon size={24} className="text-[#2ca3bd]" />
                        </div>
                        <span className="text-4xl font-black text-[#2ca3bd]">{cost.amount}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{cost.label}</h3>
                      
                      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm">
                        {cost.description}
                      </p>
                      
                      <div className="pt-4 border-t border-[var(--border-primary)]">
                        <p className="text-[#2ca3bd] font-bold text-sm flex items-center gap-2">
                          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          {cost.punchline}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ROI CALCULATOR — Revamped
          ═══════════════════════════════════════ */}
      <section id="roi-calculator" className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Background decor */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2ca3bd]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2ca3bd]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <RevealSection>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#2ca3bd]/10 border border-[#2ca3bd]/20 text-[#2ca3bd] px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <Calculator size={16} />
                <span>Simulateur d'Économies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-primary)]">
                Calculez le ROI de votre <span className="text-[#2ca3bd]">Externalisation</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Comparez le coût réel en interne face à nos analystes experts dédiés.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Parameters */}
            <RevealSection className="lg:col-span-4" delay={100}>
              <div className="space-y-6">
                <div className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3 border-b border-[var(--border-primary)] pb-5 text-[var(--text-primary)]">
                    <div className="p-2 bg-[#2ca3bd]/10 rounded-lg">
                      <Users size={20} className="text-[#2ca3bd]" />
                    </div>
                    Vos Coûts Internes
                  </h3>

                  {/* Alerts per month */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-semibold text-[var(--text-secondary)]">Alertes / mois</label>
                      <span className="text-[#2ca3bd] font-bold bg-[#2ca3bd]/10 px-3 py-1 rounded-full text-sm tabular-nums">
                        {alertsPerMonth}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5} max={500} step={5}
                      value={alertsPerMonth}
                      onChange={(e) => setAlertsPerMonth(parseFloat(e.target.value))}
                      className="w-full h-2 bg-[var(--surface-elevated)] rounded-lg appearance-none cursor-pointer accent-[#2ca3bd]"
                    />
                    <p className="text-xs text-[var(--text-muted)] mt-2">Volume moyen d'incidents nécessitant une analyse.</p>
                  </div>

                  {/* Resolution time */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-semibold text-[var(--text-secondary)]">Temps résolution</label>
                      <span className="text-[#2ca3bd] font-bold bg-[#2ca3bd]/10 px-3 py-1 rounded-full text-sm tabular-nums">
                        {avgResolutionTime}h
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0.25} max={8} step={0.25}
                      value={avgResolutionTime}
                      onChange={(e) => setAvgResolutionTime(parseFloat(e.target.value))}
                      className="w-full h-2 bg-[var(--surface-elevated)] rounded-lg appearance-none cursor-pointer accent-[#2ca3bd]"
                    />
                    <p className="text-xs text-[var(--text-muted)] mt-2">Temps passé par alerte (analyse + remédiation).</p>
                  </div>

                  {/* Internal TJM */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-semibold text-[var(--text-secondary)]">TJM Interne</label>
                      <span className="text-[#2ca3bd] font-bold bg-[#2ca3bd]/10 px-3 py-1 rounded-full text-sm tabular-nums">
                        {internalTJM} €
                      </span>
                    </div>
                    <input
                      type="range"
                      min={200} max={1200} step={50}
                      value={internalTJM}
                      onChange={(e) => setInternalTJM(parseFloat(e.target.value))}
                      className="w-full h-2 bg-[var(--surface-elevated)] rounded-lg appearance-none cursor-pointer accent-[#2ca3bd]"
                    />
                    <p className="text-xs text-[var(--text-muted)] mt-2">Coût journalier moyen de vos ressources internes.</p>
                  </div>

                  {/* Distraction factor */}
                  <div className="pt-6 border-t border-[var(--border-primary)]">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-semibold text-[var(--text-secondary)] flex items-center gap-2">
                        <AlertTriangle size={14} className="text-amber-500" />
                        Facteur Distraction
                      </label>
                      <span className="text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-full text-sm tabular-nums">
                        +{((distractionFactor - 1) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1} max={2} step={0.1}
                      value={distractionFactor}
                      onChange={(e) => setDistractionFactor(parseFloat(e.target.value))}
                      className="w-full h-2 bg-amber-500/20 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <p className="text-xs text-[var(--text-muted)] mt-2 italic leading-relaxed">
                      Surcoût lié au Context Switching lors des interruptions.
                    </p>
                  </div>
                </div>

                {/* Our Offer Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#2ca3bd] to-[#1e7a8f] rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-[#2ca3bd]/20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <CheckCircle className="text-white" size={22} />
                      Notre Offre Analyste
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-white/20 pb-3">
                        <span className="text-white/70 text-sm">TJM Analyste</span>
                        <span className="font-bold text-xl">{socTJM} €</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-3">
                        <span className="text-white/70 text-sm">Heures / jour</span>
                        <span className="font-bold text-xl">{hoursPerDay} h</span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-white/70 text-sm">Coût horaire</span>
                        <span className="font-bold text-3xl">{socHourlyRate.toFixed(0)} €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right Column: Results */}
            <RevealSection className="lg:col-span-8" delay={200}>
              <div className="space-y-6">
                {/* Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500/50 rounded-r" />
                    <h4 className="text-[var(--text-secondary)] font-medium text-sm uppercase tracking-wider mb-2">Coût Interne</h4>
                    <div className="text-3xl sm:text-4xl font-black mb-2 text-[var(--text-primary)] tabular-nums">
                      {formatEuro(internalMonthlyCost)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                      <Clock size={14} />
                      <span>{Math.round(totalHoursNeeded)}h / mois</span>
                    </div>
                  </div>

                  <div className="bg-[#2ca3bd]/5 border border-[#2ca3bd]/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#2ca3bd]/60 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2ca3bd] rounded-r" />
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <TrendingDown size={60} className="text-[#2ca3bd]" />
                    </div>
                    <h4 className="text-[#2ca3bd] font-bold text-sm uppercase tracking-wider mb-2">Avec Nous</h4>
                    <div className="text-3xl sm:text-4xl font-black text-[#2ca3bd] mb-2 tabular-nums">
                      {formatEuro(externalMonthlyCost)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#2ca3bd]">
                      <CheckCircle size={14} />
                      <span>Même charge, tarif optimisé</span>
                    </div>
                  </div>
                </div>

                {/* Visual Graph */}
                <div className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 shadow-lg">
                  <h4 className="text-lg font-bold mb-8 flex items-center gap-2 text-[var(--text-primary)]">
                    <div className="w-2 h-2 bg-[#2ca3bd] rounded-full" />
                    Comparaison Mensuelle
                  </h4>
                  
                  <div className="space-y-8">
                    {/* Internal Bar */}
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-3">
                        <span className="text-[var(--text-secondary)]">Gestion en Interne</span>
                        <span className="text-[var(--text-primary)] font-bold tabular-nums">{formatEuro(internalMonthlyCost)}</span>
                      </div>
                      <div className="h-12 w-full bg-[var(--surface-elevated)] rounded-xl overflow-hidden relative flex items-center">
                        <div className="h-full bg-gradient-to-r from-red-500/40 to-red-500/20 rounded-xl transition-all duration-700 ease-out" style={{ width: '100%' }} />
                        <div
                          className="absolute h-full bg-amber-500/60 top-0 right-0 rounded-r-xl border-l-2 border-amber-500/40 flex items-center justify-center"
                          style={{ width: `${(1 - (1/distractionFactor)) * 100}%` }}
                        >
                          <span className="hidden sm:inline text-xs font-bold text-amber-200 px-2">Context Switch</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow between */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent" />
                      <div className="bg-[#2ca3bd]/10 border border-[#2ca3bd]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#2ca3bd]">
                        -{Math.round(100 - (externalMonthlyCost / internalMonthlyCost) * 100)}%
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent" />
                    </div>

                    {/* External Bar */}
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-3">
                        <span className="text-[#2ca3bd] font-bold">Externalisation (Nous)</span>
                        <span className="text-[#2ca3bd] font-bold tabular-nums">{formatEuro(externalMonthlyCost)}</span>
                      </div>
                      <div className="h-12 w-full bg-[var(--surface-elevated)] rounded-xl overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-[#2ca3bd] to-[#2ca3bd]/70 rounded-xl transition-all duration-700 ease-out flex items-center px-4 shadow-lg shadow-[#2ca3bd]/20"
                          style={{ width: `${Math.max((externalMonthlyCost / internalMonthlyCost) * 100, 10)}%` }}
                        >
                          <span className="text-white font-bold text-sm whitespace-nowrap drop-shadow">
                            Optimisé
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total Savings & ROI — Animated */}
                <div ref={savingsRef} className="relative bg-[var(--bg-primary)] border border-[#2ca3bd]/30 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-xl shadow-[#2ca3bd]/5">
                  {/* Glow */}
                  <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#2ca3bd] rounded-full blur-[120px] opacity-10 pointer-events-none" />

                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">Économies Réalisées</h4>
                      <p className="text-[var(--text-secondary)] text-sm mb-8">En externalisant chez nous.</p>
                      
                      <div className="space-y-5">
                        <div className="flex justify-between items-center border-b border-[var(--border-primary)] pb-3">
                          <span className="text-[var(--text-secondary)] text-sm">Gain Mensuel</span>
                          <span className="text-xl font-bold text-[#2ca3bd] tabular-nums">+{formatEuro(monthlySavings)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#2ca3bd] font-semibold">Gain Annuel</span>
                          <span className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tabular-nums">
                            +{formatEuro(animatedYearlySavings)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ROI Gauge */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-44 h-44 flex items-center justify-center">
                        {/* Circular gauge */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--border-primary)" strokeWidth="8" />
                          <circle
                            cx="60" cy="60" r="50"
                            fill="none"
                            stroke="#2ca3bd"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${Math.min(roiPercentage / 5, 100) * 3.14} 314`}
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="text-center">
                          <div className="text-4xl sm:text-5xl font-black text-[#2ca3bd] tabular-nums">
                            {animatedROI}%
                          </div>
                          <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">ROI</div>
                        </div>
                      </div>

                      {/* Email capture + Download report */}
                      {roiEmailSent ? (
                        <div className="mt-6 flex flex-col items-center gap-2 animate-fade-in-up">
                          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                            <CheckCircle size={16} />
                            Rapport téléchargé !
                          </div>
                          <button
                            onClick={generatePDFReport}
                            className="text-xs text-[#2ca3bd] hover:underline"
                          >
                            Re-télécharger
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleRoiDownload} className="mt-6 w-full max-w-xs space-y-3">
                          <div className="relative">
                            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                            <input
                              type="email"
                              required
                              placeholder="votre@email.com"
                              value={roiEmail}
                              onChange={(e) => setRoiEmail(e.target.value)}
                              className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={roiLoading}
                            className="w-full bg-[#2ca3bd] hover:bg-[#248fa5] disabled:opacity-60 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2ca3bd]/20 hover:scale-[1.02]"
                          >
                            {roiLoading ? (
                              <Loader2 size={16} className="animate-spin" />
                            ) : (
                              <Download size={16} />
                            )}
                            {roiLoading ? 'Génération...' : 'Télécharger mon rapport'}
                          </button>
                          {roiError && <p className="text-red-400 text-xs text-center">{roiError}</p>}
                          <p className="text-[10px] text-[var(--text-muted)] text-center leading-relaxed">PDF généré instantanément — Sans engagement</p>
                        </form>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-center text-[var(--text-muted)] text-xs">
                  Simulation basée sur une capacité de traitement équivalente. Les coûts réels peuvent varier.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BEFORE / AFTER — Visual Cards
          ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ca3bd]/20 to-transparent" />
        
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                  Transformation
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-primary)]">
                Comment ça <span className="text-[#2ca3bd]">marche</span>
              </h2>
              <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                La transformation de votre équipe en deux états
              </p>
            </div>
          </RevealSection>

          <div className="space-y-6">
            {transformations.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealSection key={index} delay={index * 100}>
                  <div className="group bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 hover:border-[#2ca3bd]/40 transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-6 items-center">
                      {/* Aspect */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#2ca3bd]/10 rounded-xl group-hover:bg-[#2ca3bd]/20 transition-colors shrink-0">
                          <Icon size={24} className="text-[#2ca3bd]" />
                        </div>
                        <span className="text-lg font-bold text-[var(--text-primary)]">{item.aspect}</span>
                      </div>

                      {/* Before */}
                      <div className="flex items-center gap-3 justify-center">
                        <X size={18} className="text-red-500 shrink-0" />
                        <span className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-red-500/20">
                          {item.before}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:flex items-center justify-center">
                        <div className="flex items-center gap-2">
                          <div className="h-px w-8 bg-gradient-to-r from-red-500/40 to-[#2ca3bd]/40" />
                          <ArrowRight size={20} className="text-[#2ca3bd] group-hover:translate-x-1 transition-transform" />
                          <div className="h-px w-8 bg-[#2ca3bd]/40" />
                        </div>
                      </div>

                      {/* After */}
                      <div className="flex items-center gap-3 justify-center">
                        <Check size={18} className="text-emerald-400 shrink-0" />
                        <span className="bg-[#2ca3bd]/10 text-[#2ca3bd] px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-[#2ca3bd]/20">
                          {item.after}
                        </span>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS — Elevated
          ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-[#2ca3bd]/5 blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <RevealSection>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                  Témoignages
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-primary)]">
                Ils nous font <span className="text-[#2ca3bd]">confiance</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Des résultats concrets pour des équipes tech exigeantes
              </p>
            </div>
          </RevealSection>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealSection key={index} delay={index * 150}>
                <div
                  className={`group relative bg-[var(--bg-primary)] border rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2ca3bd]/10 h-full flex flex-col ${
                    activeTestimonial === index
                      ? 'border-[#2ca3bd]/50 shadow-xl shadow-[#2ca3bd]/10'
                      : 'border-[var(--border-primary)] hover:border-[#2ca3bd]/40'
                  }`}
                  onMouseEnter={() => setActiveTestimonial(index)}
                >
                  {/* Quote decor */}
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Quote size={56} className="text-[#2ca3bd]" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#2ca3bd] fill-[#2ca3bd]" />
                    ))}
                  </div>
                  
                  {/* Quote text */}
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm flex-1">
                    "{testimonial.highlights.reduce<(string | React.ReactNode)[]>(
                      (parts, highlight) => {
                        const result: (string | React.ReactNode)[] = [];
                        parts.forEach((part) => {
                          if (typeof part !== 'string') {
                            result.push(part);
                            return;
                          }
                          const splits = part.split(highlight);
                          splits.forEach((s, i) => {
                            result.push(s);
                            if (i < splits.length - 1) {
                              result.push(
                                <span key={`${highlight}-${i}`} className="text-[#2ca3bd] font-semibold">
                                  {highlight}
                                </span>
                              );
                            }
                          });
                        });
                        return result;
                      },
                      [testimonial.quote]
                    )}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-5 border-t border-[var(--border-primary)]">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#2ca3bd]/20"
                    />
                    <div>
                      <div className="font-bold text-sm text-[var(--text-primary)]">{testimonial.name}</div>
                      <div className="text-xs text-[var(--text-tertiary)]">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === i ? 'w-8 bg-[#2ca3bd]' : 'w-2 bg-[var(--border-primary)] hover:bg-[#2ca3bd]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT SECTION — Enhanced
          ═══════════════════════════════════════ */}
      <section id="soc-contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-primary)] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ca3bd]/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2ca3bd]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side */}
          <RevealSection>
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <div className="inline-flex items-center justify-center gap-2 mb-6">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                    Contact
                  </span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[var(--text-primary)]">
                  Prêt à <span className="text-[#2ca3bd]">reprendre le contrôle</span> ?
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Discutons de comment nos services SOC peuvent sécuriser vos opérations et 
                  libérer votre équipe de 20% du temps consommé par la gestion d'alertes.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'infos@malitix.com', href: 'mailto:infos@malitix.com' },
                  { icon: Phone, text: '+33 1 84 80 62 48', href: 'tel:+33184806248' },
                  { icon: MapPin, text: '26 rue de Londres, 75009 Paris', href: undefined },
                ].map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-[#2ca3bd]/10 rounded-xl group-hover:bg-[#2ca3bd]/20 transition-colors shrink-0">
                      <item.icon size={22} className="text-[#2ca3bd]" />
                    </div>
                    <span className="text-[var(--text-secondary)] text-lg group-hover:text-[#2ca3bd] transition-colors">{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                {['24/7 Monitoring', 'SLA Garanti', 'ISO 27001'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-full px-4 py-2">
                    <Shield size={14} className="text-[#2ca3bd]" />
                    <span className="text-xs font-semibold text-[var(--text-secondary)]">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Right Side - Form */}
          <RevealSection delay={150}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#2ca3bd]/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-[var(--text-primary)]">Planifier une consultation</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Nom</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Site web</label>
                    <input
                      type="url"
                      name="companyUrl"
                      placeholder="https://company.com"
                      value={formData.companyUrl}
                      onChange={handleFormChange}
                      className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      name="message"
                      placeholder="Parlez-nous de vos besoins sécurité..."
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-[var(--surface-elevated)] border border-[var(--border-primary)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2ca3bd] focus:ring-2 focus:ring-[#2ca3bd]/20 transition-all resize-none"
                      required
                    />
                  </div>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center gap-2 py-4 animate-fade-in-up">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                        <CheckCircle size={22} />
                        Message envoyé !
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] text-center">
                        Notre équipe vous répondra sous 24h.
                      </p>
                    </div>
                  ) : (
                    <>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#2ca3bd] hover:bg-[#248fa5] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2ca3bd]/20 hover:shadow-xl hover:shadow-[#2ca3bd]/30 hover:scale-[1.01]"
                      >
                        {isLoading ? (
                          <Loader2 size={20} className="animate-spin" />
                        ) : (
                          <ArrowRight size={20} />
                        )}
                        {isLoading ? 'Envoi en cours...' : 'Planifier une consultation'}
                      </button>

                      <p className="text-center text-xs text-[var(--text-muted)]">
                        Réponse sous 24h — Consultation gratuite — Sans engagement
                      </p>
                    </>
                  )}
                </form>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

