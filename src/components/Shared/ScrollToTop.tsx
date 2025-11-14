import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, let the browser handle scrolling to it
    if (hash) {
      // Small delay to ensure the element is rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Only scroll to top if there's no hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
