import { useState, useLayoutEffect } from 'react';
import { convertRemToPixels } from './convertRemToPixels';

export const useIsSmallestScreen = () => {
  const [isSmallest, setIsSmallest] = useState(false);

  useLayoutEffect(() => {
    const style = window.getComputedStyle(document.body);

    const breakpointValueInRems = Number.parseFloat(
      style.getPropertyValue('--breakpoint-2xs')
    );

    const checkWidth = () => {
      setIsSmallest(
        document.body.offsetWidth < convertRemToPixels(breakpointValueInRems)
      );
    };

    checkWidth();

    const resizeObserver = new ResizeObserver(checkWidth);

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return isSmallest;
};
