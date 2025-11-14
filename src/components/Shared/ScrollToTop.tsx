import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element
    if (hash) {
      // Use requestAnimationFrame to ensure DOM is ready
      const scrollToHash = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found, retry after a short delay (for lazy-loaded content)
          setTimeout(scrollToHash, 100);
        }
      };
      
      // Wait for next frame, then scroll
      requestAnimationFrame(() => {
        setTimeout(scrollToHash, 0);
      });
    } else {
      // Only scroll to top if there's no hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
