import { useEffect, useRef, useState } from 'react';
import { NewsletterCTA } from './NewsletterCTA';

export function StickyNewsletterBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [exiting, setExiting] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  /* Show bar when user scrolls past 40% of the article */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user already dismissed this session
    if (sessionStorage.getItem('newsletter-bar-dismissed') === '1') {
      setDismissed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && !entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const dismiss = () => {
    setExiting(true);
    sessionStorage.setItem('newsletter-bar-dismissed', '1');
    setTimeout(() => {
      setDismissed(true);
      setVisible(false);
    }, 300);
  };

  return (
    <>
      {/* Invisible sentinel placed ~40% through the article */}
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none h-0 w-0" />

      {visible && !dismissed && (
        <div
          className={`fixed bottom-0 inset-x-0 z-50 border-t border-[var(--border-primary)] bg-[var(--surface-primary)]/95 backdrop-blur-lg ${
            exiting ? 'sticky-newsletter-exit' : 'sticky-newsletter-enter'
          }`}
        >
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <span className="hidden sm:block shrink-0 text-sm font-medium text-[var(--text-primary)]">
              📩 Restez informé
            </span>
            <NewsletterCTA variant="compact" />
            <button
              onClick={dismiss}
              aria-label="Fermer"
              className="shrink-0 rounded-full p-1.5 text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
