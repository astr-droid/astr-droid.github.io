import { useEffect } from "react";

/**
 * Observes all .fade-in elements and adds .visible when they enter the viewport.
 * Pass any values that cause new elements to be rendered as deps (filter, page, etc.)
 * so the observer re-runs and picks up the new nodes.
 */
export default function useFadeIn(deps = []) {
  useEffect(() => {
    // Small timeout lets React flush the new DOM nodes first
    const id = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
        { threshold: 0.08 }
      );
      document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 30);
    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}