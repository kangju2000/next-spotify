import { useRef, useEffect, useCallback } from 'react';

const useIntersect = <T extends Element = Element>(
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  threshold = 0
): React.RefObject<T> => {
  const ref = useRef<T>(null);
  const checkIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer);
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    let observer: null | IntersectionObserver = null;
    if (ref.current) {
      observer = new IntersectionObserver(checkIntersect, { threshold });
      observer.observe(ref.current);
    }
    return () => observer?.disconnect();
  }, [checkIntersect, threshold]);

  return ref;
};

export default useIntersect;
