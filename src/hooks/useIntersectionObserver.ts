import { RefObject, useEffect, useState, useCallback } from 'react';

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  observerOptions: IntersectionObserverInit = {
    threshold: 0,
    rootMargin: '0%',
  },
): IntersectionObserverEntry | { isIntersecting: boolean } => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = useCallback(
    ([newEntry]: IntersectionObserverEntry[]): void => {
      setEntry(newEntry);
    },
    [],
  );

  useEffect(() => {
    const element = elementRef?.current;
    const hasIntersactionObserver = Boolean(window.IntersectionObserver);

    if (!hasIntersactionObserver || !element)
      return () => ({
        isIntersecting: false,
      });

    const observer = new IntersectionObserver(updateEntry, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, observerOptions, updateEntry]);

  return entry || { isIntersecting: false };
};

export default useIntersectionObserver;
