import { useRef, useState, useEffect } from "react";

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  threshold?: number;
}

export function useInView(options: UseInViewOptions = { once: true, margin: "-50px" }) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) observer.unobserve(element);
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      {
        rootMargin: options.margin ?? "-50px",
        threshold: options.threshold ?? 0,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.once, options.margin, options.threshold]);

  return { ref, isInView };
}
