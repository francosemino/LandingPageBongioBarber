import { useEffect, useRef } from "react";

/**
 * Wraps children with an IntersectionObserver-based reveal animation.
 * Adds `is-visible` to elements with `.reveal` class when they enter viewport.
 */
export const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("is-visible"), delay);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
