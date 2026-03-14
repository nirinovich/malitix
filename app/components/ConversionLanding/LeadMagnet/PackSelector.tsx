import { Eye, Rocket, TrendingUp } from "lucide-react";
import type { PackKey } from "./pricing";
import { PACKS } from "./pricing";

interface PackSelectorProps {
  selectedPack: PackKey;
  onSelectPack: (pack: PackKey) => void;
  accentClassName?: string;
}

const PACK_ICONS: Record<PackKey, typeof Rocket> = {
  Launch: Rocket,
  Growth: TrendingUp,
  Vision: Eye,
};

export function PackSelector({
  selectedPack,
  onSelectPack,
  accentClassName = "text-[var(--brand-primary)]",
}: PackSelectorProps) {
  return (
    <div>
      <label className="text-sm font-semibold text-[var(--text-secondary)]">
        Choisissez votre pack
      </label>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {(Object.keys(PACKS) as PackKey[]).map((packId) => {
          const pack = PACKS[packId];
          const Icon = PACK_ICONS[packId];
          const isActive = selectedPack === packId;

          return (
            <button
              key={packId}
              type="button"
              onClick={() => onSelectPack(packId)}
              className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 shadow-lg shadow-[var(--brand-primary)]/20"
                  : "border-gray-200 dark:border-white/10 hover:-translate-y-1 hover:border-[var(--brand-primary)]/60"
              } cursor-pointer`}
            >
              <div
                className={`mb-2 ${isActive ? accentClassName : "text-[var(--text-secondary)]"}`}
              >
                <Icon size={18} />
              </div>
              <div
                className={`font-semibold ${isActive ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]"}`}
              >
                {pack.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-white/70 mt-1">
                {pack.description}
              </div>
              <div
                className={`mt-3 text-sm font-bold ${isActive ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]"}`}
              >
                {pack.basePrice}€/jour
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
