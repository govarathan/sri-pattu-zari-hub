import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds scroll-reveal animation to elements.
 * Uses IntersectionObserver for efficient, GPU-accelerated reveals.
 * 
 * Usage:
 *   const revealRef = useScrollReveal();
 *   return <div ref={revealRef} className="scroll-reveal">...</div>
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * Initializes scroll reveal for all elements with scroll-reveal class.
 * Call this once in the app root.
 */
export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all elements with scroll-reveal classes
  const selectors = [
    '.scroll-reveal',
    '.scroll-reveal-left',
    '.scroll-reveal-right',
    '.scroll-reveal-scale',
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });
  });

  return observer;
}

/**
 * Sets up a MutationObserver that automatically watches for new
 * scroll-reveal elements added to the DOM (useful with React Router).
 */
export function setupAutoReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // Check if the added node itself has scroll-reveal
          if (node.classList && (
            node.classList.contains('scroll-reveal') ||
            node.classList.contains('scroll-reveal-left') ||
            node.classList.contains('scroll-reveal-right') ||
            node.classList.contains('scroll-reveal-scale')
          )) {
            observer.observe(node);
          }
          // Check descendants
          node.querySelectorAll?.('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale')
            .forEach((el) => observer.observe(el));
        }
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  // Also observe existing elements
  document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale')
    .forEach((el) => observer.observe(el));

  return () => {
    mutationObserver.disconnect();
    observer.disconnect();
  };
}
