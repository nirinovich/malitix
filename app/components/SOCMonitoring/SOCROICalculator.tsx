import { useState, useRef, useEffect, useCallback } from "react";
import {
  Calculator,
  Users,
  AlertTriangle,
  Clock,
  TrendingDown,
  CheckCircle,
  Mail,
  Download,
  Loader2,
} from "lucide-react";
import { useInView } from "~/hooks/useInView";

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function useAnimatedCounter(end: number, duration = 1200, active = true) {
  const [count, setCount] = useState(0);
  const prevEnd = useRef(end);

  useEffect(() => {
    if (!active) return;
    prevEnd.current = end;
    const start = 0;
    const startTime = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, active]);

  return count;
}

export default function SOCROICalculator() {
  const [internalTJM, setInternalTJM] = useState(550);
  const [alertsPerMonth, setAlertsPerMonth] = useState(40);
  const [avgResolutionTime, setAvgResolutionTime] = useState(1.5);
  const [distractionFactor, setDistractionFactor] = useState(1.2);

  const socTJM = 120;
  const hoursPerDay = 7;
  const socHourlyRate = socTJM / hoursPerDay;

  const internalHourlyRate = internalTJM / 7;
  const totalHoursNeeded = alertsPerMonth * avgResolutionTime;
  const internalMonthlyCost = (totalHoursNeeded * internalHourlyRate) * distractionFactor;
  const externalMonthlyCost = totalHoursNeeded * socHourlyRate;
  const monthlySavings = internalMonthlyCost - externalMonthlyCost;
  const yearlySavings = monthlySavings * 12;
  const roiPercentage = ((internalMonthlyCost - externalMonthlyCost) / externalMonthlyCost) * 100;

  const formatEuro = (val: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  const { ref: savingsRef, isInView: savingsVisible } = useInView({ threshold: 0.3, once: true });
  const animatedYearlySavings = useAnimatedCounter(Math.round(yearlySavings), 1500, savingsVisible);
  const animatedROI = useAnimatedCounter(Math.round(roiPercentage), 1500, savingsVisible);

  const [roiEmail, setRoiEmail] = useState('');
  const [roiEmailSent, setRoiEmailSent] = useState(false);
  const [roiLoading, setRoiLoading] = useState(false);
  const [roiError, setRoiError] = useState('');

  const generatePDFReport = useCallback(async () => {
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      const w = doc.internal.pageSize.getWidth();
      const accent = [44, 163, 189] as const;
      const dark = [20, 20, 30] as const;
      const mid = [120, 120, 140] as const;
      const today = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });

      const pdfEuro = (val: number) =>
        new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
          .format(val)
          .replace(/[\u202F\u00A0]/g, ' ');

      doc.setFillColor(...accent);
      doc.rect(0, 0, w, 38, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.text('Rapport ROI — Externalisation SOC', w / 2, 18, { align: 'center' });
      doc.setFontSize(11);
      doc.text(`Généré le ${today}  •  malitix.com`, w / 2, 30, { align: 'center' });

      let y = 52;
      const lineH = 8;

      const sectionTitle = (title: string) => {
        doc.setFontSize(14);
        doc.setTextColor(...accent);
        doc.text(title, 20, y);
        y += 2;
        doc.setDrawColor(...accent);
        doc.setLineWidth(0.6);
        doc.line(20, y, w - 20, y);
        y += lineH;
      };

      const row = (label: string, value: string, bold = false) => {
        doc.setFontSize(11);
        doc.setTextColor(...mid);
        doc.text(label, 24, y);
        if (bold) {
          doc.setTextColor(...dark);
        } else {
          doc.setTextColor(...dark);
        }
        doc.text(value, w - 24, y, { align: 'right' });
        y += lineH;
      };

      sectionTitle('Vos paramètres');
      row('Alertes / mois', `${alertsPerMonth}`);
      row('Temps de résolution moyen', `${avgResolutionTime} h`);
      row('TJM interne', `${internalTJM} €`);
      row('Facteur de distraction', `+${((distractionFactor - 1) * 100).toFixed(0)} %`);
      row('Heures nécessaires / mois', `${Math.round(totalHoursNeeded)} h`);
      y += 6;

      sectionTitle('Coûts comparés');
      row('Coût mensuel interne (avec distraction)', pdfEuro(internalMonthlyCost), true);
      row('Coût mensuel externalisé (Malitix)', pdfEuro(externalMonthlyCost), true);
      row('TJM Analyste SOC Malitix', `${socTJM} €`);
      row('Coût horaire Malitix', `${socHourlyRate.toFixed(0)} €/h`);
      y += 6;

      sectionTitle('Résultats');
      row('Économie mensuelle', `+${pdfEuro(monthlySavings)}`, true);
      row('Économie annuelle', `+${pdfEuro(yearlySavings)}`, true);
      row('ROI', `${Math.round(roiPercentage)} %`, true);
      y += 12;

      doc.setFillColor(240, 250, 252);
      doc.roundedRect(20, y, w - 40, 26, 4, 4, 'F');
      doc.setFontSize(13);
      doc.setTextColor(...accent);
      doc.text(`Vous pourriez économiser ${pdfEuro(yearlySavings)} / an`, w / 2, y + 11, { align: 'center' });
      doc.setFontSize(10);
      doc.setTextColor(...mid);
      doc.text('en externalisant votre monitoring SOC chez Malitix.', w / 2, y + 20, { align: 'center' });
      y += 36;

      doc.setFontSize(9);
      doc.setTextColor(160, 160, 170);
      doc.text('Simulation indicative — Les coûts réels peuvent varier.', w / 2, y, { align: 'center' });
      doc.text('Malitix • 26 rue de Londres, 75009 Paris • infos@malitix.com', w / 2, y + 6, { align: 'center' });

      doc.save('Rapport-ROI-SOC-Malitix.pdf');
    } catch (e) {
      console.error(e);
    }
  }, [alertsPerMonth, avgResolutionTime, internalTJM, distractionFactor, totalHoursNeeded, internalMonthlyCost, externalMonthlyCost, monthlySavings, yearlySavings, roiPercentage, socTJM, socHourlyRate]);

  const handleRoiDownload = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roiEmail) return;
    setRoiLoading(true);
    setRoiError('');

    try {
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
      generatePDFReport();
      setRoiEmailSent(true);
    } finally {
      setRoiLoading(false);
    }
  }, [roiEmail, alertsPerMonth, avgResolutionTime, internalTJM, distractionFactor, internalMonthlyCost, externalMonthlyCost, monthlySavings, yearlySavings, roiPercentage, generatePDFReport]);

  return (
    <section id="roi-calculator" className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2ca3bd]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2ca3bd]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
          <RevealSection className="lg:col-span-4" delay={100}>
            <div className="space-y-6">
              <div className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 border-b border-[var(--border-primary)] pb-5 text-[var(--text-primary)]">
                  <div className="p-2 bg-[#2ca3bd]/10 rounded-lg">
                    <Users size={20} className="text-[#2ca3bd]" />
                  </div>
                  Vos Coûts Internes
                </h3>

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

          <RevealSection className="lg:col-span-8" delay={200}>
            <div className="space-y-6">
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

              <div className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 sm:p-8 shadow-lg">
                <h4 className="text-lg font-bold mb-8 flex items-center gap-2 text-[var(--text-primary)]">
                  <div className="w-2 h-2 bg-[#2ca3bd] rounded-full" />
                  Comparaison Mensuelle
                </h4>
                
                <div className="space-y-8">
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

                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent" />
                    <div className="bg-[#2ca3bd]/10 border border-[#2ca3bd]/20 rounded-full px-4 py-1.5 text-sm font-bold text-[#2ca3bd]">
                      -{Math.round(100 - (externalMonthlyCost / internalMonthlyCost) * 100)}%
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent" />
                  </div>

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

              <div ref={savingsRef as any} className="relative bg-[var(--bg-primary)] border border-[#2ca3bd]/30 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-xl shadow-[#2ca3bd]/5">
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

                  <div className="flex flex-col items-center justify-center">
                    <div className="relative w-44 h-44 flex items-center justify-center">
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
  );
}
