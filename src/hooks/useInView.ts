import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Hook to detect when an element is visible in the viewport
 * Useful for triggering animations on scroll
 */
export function useInView(ref: RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasBeenInView]);

  return { isInView, hasBeenInView };
}
