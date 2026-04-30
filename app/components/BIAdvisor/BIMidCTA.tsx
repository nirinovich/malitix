import { ArrowRight } from "lucide-react";

export default function BIMidCTA() {
  const scrollToContact = () => {
    document.querySelector("#bi-advisor-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm20%2020h20v20H20V20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Prêt à transformer votre ERP en arme stratégique ?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Rejoignez les +30 entreprises qui ont divisé leur temps de décision par 10. Le POC est
          offert, sur vos données réelles.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-[var(--brand-secondary)] px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group mx-auto cursor-pointer"
        >
          Demander mon POC gratuit
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="flex items-center justify-center gap-6 text-xs text-white/60 mt-4">
          <span>✓ Résultats en 48h</span>
          <span>✓ Zéro engagement</span>
          <span>✓ Données chiffrées E2E</span>
        </div>
      </div>
    </section>
  );
}
