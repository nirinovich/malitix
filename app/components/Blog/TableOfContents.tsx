import { useEffect, useState } from 'react';
import type { PortableTextValue } from '~/types/portableText';

export interface TocEntry {
  id: string;
  text: string;
  level: 'h2' | 'h3';
}

/**
 * Extract h2/h3 headings from Portable Text blocks.
 * Produces the same slug IDs that PortableTextRenderer generates.
 */
export function extractHeadings(body: PortableTextValue): TocEntry[] {
  const entries: TocEntry[] = [];
  for (const block of body) {
    const style = (block as Record<string, unknown>).style as string | undefined;
    if (style !== 'h2' && style !== 'h3') continue;

    const children = (block as Record<string, unknown>).children as
      | { text?: string }[]
      | undefined;
    if (!children) continue;

    const text = children.map((c) => c.text ?? '').join('');
    if (!text.trim()) continue;

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9àâäéèêëïîôùûüÿçœæ\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    entries.push({ id, text, level: style as 'h2' | 'h3' });
  }
  return entries;
}

interface TableOfContentsProps {
  body: PortableTextValue;
}

export function TableOfContents({ body }: TableOfContentsProps) {
  const headings = extractHeadings(body);
  const [activeId, setActiveId] = useState<string>('');
  const [collapsed, setCollapsed] = useState(true);

  /* Scroll-spy: highlight current heading */
  useEffect(() => {
    if (typeof window === 'undefined' || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      setCollapsed(true); // collapse mobile after click
    }
  };

  const list = (
    <nav aria-label="Table des matières" className="space-y-1">
      {headings.map((h) => (
        <button
          key={h.id}
          onClick={() => handleClick(h.id)}
          className={`blog-toc-item block w-full text-left text-sm leading-snug py-1.5 ${
            h.level === 'h3' ? 'pl-5' : 'pl-3'
          } ${
            activeId === h.id
              ? 'active font-medium'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          } transition-colors`}
        >
          {h.text}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start space-y-3 rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-5">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2ca3bd]">
          Sommaire
        </h4>
        {list}
      </aside>

      {/* Mobile: collapsible accordion */}
      <div className="lg:hidden rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] overflow-hidden">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-between px-5 py-3 text-sm font-semibold text-[var(--text-primary)]"
          aria-expanded={!collapsed}
        >
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#2ca3bd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Sommaire
          </span>
          <svg
            className={`h-4 w-4 text-[var(--text-muted)] transition-transform duration-200 ${collapsed ? '' : 'rotate-180'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {!collapsed && <div className="px-5 pb-4">{list}</div>}
      </div>
    </>
  );
}
