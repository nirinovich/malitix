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
  const { ref, isInView } = useInView({ once: true });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div
        className={`text-4xl md:text-5xl font-black text-gradient transition-all duration-1000 ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
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

export default function BITrustStrip() {
  return (
    <section className="py-12 px-6 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedStat value="10" suffix="x" label="Décisions plus rapides" />
        <AnimatedStat value="48" suffix="h" label="POC livré" />
        <AnimatedStat value="0" label="Compétence technique requise" />
        <AnimatedStat value="95" suffix="%" label="Satisfaction clients" />
      </div>
    </section>
  );
}
