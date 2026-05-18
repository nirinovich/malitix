import { Star } from "lucide-react";

const reviews = [
  {
    name: "Selim Saadi",
    role: "CEO & Co-founder · Karlisolutions",
    avatar: "/images/testimonials/selim-saadi.webp",
    quote: "Nous avons pu développer notre solution dans sa première version avec des équipes de Malitix qui ont parfaitement compris notre besoin. Une équipe réactive et un suivi flexible.",
  },
  {
    name: "David Bovet",
    role: "CEO · Bios Analytics",
    avatar: "/images/testimonials/david.webp",
    quote: "Malitix est un partenaire de longue date depuis la création de notre premier site web, contribuant à notre présence en ligne et à nos solutions technologiques au fil des années.",
  },
  {
    name: "Riad Roubache",
    role: "CISO/CTO · Tersadia",
    avatar: "/images/testimonials/riad.webp",
    quote: "Une équipe réactive, qui respecte les consignes, avec un suivi commercial précis et un respect des SLA qui nous permettent d'être confiants sur notre collaboration.",
  },
];

export default function BIVideoShowcase() {
  return (
    <div className="py-16 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0e0d] border-y border-gray-200 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#111] rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex gap-0.5 mb-4 text-[var(--brand-primary)]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} fill="currentColor" size={14} />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">&quot;{r.quote}&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all" />
                <div>
                  <p className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">{r.name}</p>
                  <p className="text-[10px] text-gray-400 font-bold">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
