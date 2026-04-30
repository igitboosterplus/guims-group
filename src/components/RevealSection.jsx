import React, { useEffect, useRef } from 'react';

/**
 * Generic hook that adds .reveal / .visible pattern using IntersectionObserver
 * Usage: const ref = useReveal(); then <div ref={ref} className="reveal">…
 */


/**
 * Standalone component that wraps children and triggers reveal animations
 * on all .reveal elements inside it.
 */
const RevealSection = ({ children, className = '', threshold = 0.12 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default RevealSection;
