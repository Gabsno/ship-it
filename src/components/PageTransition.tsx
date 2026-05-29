import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fades the wrapped page in on every route change. CSS-only — no Framer Motion.
 * Reduced-motion media query in index.css zeroes the animation duration
 * for users who set "reduce motion" at the OS level.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('page-enter');
    void el.offsetWidth; // force reflow so the animation restarts
    el.classList.add('page-enter');
  }, [location.pathname]);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
