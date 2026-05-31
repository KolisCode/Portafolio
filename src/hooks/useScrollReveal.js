import { useEffect } from 'react';

export function useScrollReveal(selector = '[data-reveal]', options = {}) {
  useEffect(() => {
    const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);
}
