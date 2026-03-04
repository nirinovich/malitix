import { Link } from 'react-router';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
      <Link to="/" className="hover:text-[var(--brand-text)] transition-colors">
        Accueil
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <svg className="h-3.5 w-3.5 text-[var(--text-muted)]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          {item.to ? (
            <Link to={item.to} className="hover:text-[var(--brand-text)] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text-secondary)] font-medium truncate max-w-[200px]">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
