import { useLayoutEffect, useCallback, useState } from 'react';

interface ScrollState {
  x: number | null;
  y: number | null;
}
/**
 * https://github.com/uidotdev/usehooks/blob/main/index.js#L1215-L1247
 */
const useWindowScroll = (): [
  ScrollState,
  (...args: [ScrollToOptions] | [number, number]) => void,
] => {
  const [state, setState] = useState<ScrollState>({
    x: null,
    y: null,
  });

  const scrollTo = useCallback(
    (...args: [ScrollToOptions] | [number, number]) => {
      if (typeof args[0] === 'object') {
        window.scrollTo(args[0]);
      } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
        window.scrollTo(args[0], args[1]);
      } else {
        throw new Error(
          `Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`,
        );
      }
    },
    [],
  );

  useLayoutEffect(() => {
    const handleScroll = () => {
      setState({ x: window.scrollX, y: window.scrollY });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [state, scrollTo];
};

export default useWindowScroll;
