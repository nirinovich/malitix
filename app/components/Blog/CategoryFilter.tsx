import type { BlogTaxonomy } from '~/types';

interface CategoryFilterProps {
  categories: BlogTaxonomy[];
  activeSlug: string | null;
  onSelect: (slug: string | null) => void;
}

export function CategoryFilter({ categories, activeSlug, onSelect }: CategoryFilterProps) {
  if (!categories.length) return null;

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par catégorie">
      <button
        role="tab"
        aria-selected={activeSlug === null}
        onClick={() => onSelect(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
          activeSlug === null
            ? 'bg-[#2ca3bd] text-white shadow-lg shadow-[#2ca3bd]/25'
            : 'bg-[var(--surface-primary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[#2ca3bd]/40 hover:text-[var(--text-primary)]'
        }`}
      >
        Tous
      </button>
      {categories.map((cat) => (
        <button
          key={cat._id}
          role="tab"
          aria-selected={activeSlug === cat.slug}
          onClick={() => onSelect(cat.slug ?? null)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeSlug === cat.slug
              ? 'bg-[#2ca3bd] text-white shadow-lg shadow-[#2ca3bd]/25'
              : 'bg-[var(--surface-primary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[#2ca3bd]/40 hover:text-[var(--text-primary)]'
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}
