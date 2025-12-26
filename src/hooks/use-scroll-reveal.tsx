import * as React from "react";

interface UseScrollRevealOptions {
  /**
   * Use a slightly negative bottom margin so the animation starts
   * just before the section fully enters the viewport.
   */
  rootMargin?: string;
  threshold?: number | number[];
  /** If true, section only animates the first time it enters view. */
  once?: boolean;
}

export function useScrollReveal(
  { rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true }: UseScrollRevealOptions = {},
) {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = elementRef.current;
    if (!node || (once && isVisible)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { root: null, rootMargin, threshold },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, once, rootMargin, threshold]);

  return { ref: elementRef, isVisible } as const;
}
