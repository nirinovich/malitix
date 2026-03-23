import type { HeroVariant } from './SOCHeroSection.tsx';

const VARIANT_LABELS: { key: HeroVariant; num: number; label: string }[] = [
  { key: 'dashboard', num: 1, label: 'Dashboard' },
  { key: 'trust-image', num: 2, label: 'Image' },
  { key: 'shield-metrics', num: 3, label: 'Shield' },
  { key: 'before-after', num: 4, label: 'Avant / Après' },
];

interface Props {
  current: HeroVariant;
  onChange: (v: HeroVariant) => void;
}

export default function SOCHeroVariantSwitcher({ current, onChange }: Props) {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 rounded-full border border-[var(--border-secondary)] bg-[var(--bg-secondary)]/90 backdrop-blur-lg px-2 py-1.5 shadow-2xl"
      role="radiogroup"
      aria-label="Choisir une variante du hero"
    >
      {VARIANT_LABELS.map((v) => {
        const isActive = current === v.key;
        return (
          <button
            key={v.key}
            role="radio"
            aria-checked={isActive}
            aria-label={`Variante ${v.num}: ${v.label}`}
            onClick={() => onChange(v.key)}
            className={[
              'relative flex items-center justify-center rounded-full text-xs font-bold transition-all duration-200',
              'min-w-[32px] h-8 px-2 sm:px-3',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]',
              isActive
                ? 'bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-primary)]/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]',
            ].join(' ')}
          >
            <span className="sm:hidden">{v.num}</span>
            <span className="hidden sm:inline">{v.num}</span>
          </button>
        );
      })}
    </div>
  );
}
