import { useInView } from "~/hooks/useInView";

function AnimatedStat({
  value,
  suffix,
  label,
  prefix = "",
}: {
  value: string;
  suffix?: string;
  label: string;
  prefix?: string;
}) {
  const { ref, isInView } = useInView({ once: true, threshold: 0.3 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center p-6 border-b sm:border-b-0 sm:border-r last:border-0 border-gray-200 dark:border-white/10"
    >
      <div
        className={`text-5xl md:text-6xl font-black text-[var(--brand-primary)] transition-all duration-1000 ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        {prefix}
        {value}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2 font-bold uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function BITrustStrip() {
  return (
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
  );
}
