import { useEffect, useRef, useState } from 'react';

// Adds `sr-reveal sr-visible` classes when elements enter viewport.
export function useScrollReveal() {
  const [enabled, setEnabled] = useState(true);
  const rafRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const reduce = mq ? mq.matches : false;
    setEnabled(!reduce);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const els = Array.from(document.querySelectorAll('[data-sr]'));
    if (!els.length) return;

    if (typeof window.IntersectionObserver === 'undefined') {
      // Test/SSR fallback: show immediately.
      els.forEach((el) => el.classList.add('sr-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        // Use rAF to avoid excessive class toggles.
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('sr-visible');
              io.unobserve(e.target);
            }
          });
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      io.disconnect();
    };
  }, [enabled]);
}

