import { useCallback, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { GREETINGS } from '../lib/greetings';
import { useTheme } from '@/lib/useTheme';
import { getBackgroundPropertyValue } from '../lib/getBackgroundPropertyValue';

export const Greetings = () => {
  const marqueeWrapperRef = useCallback((node: HTMLDivElement) => {
    if (node === null) {
      return;
    }

    node.setAttribute('inert', 'true');
  }, []);

  const [backgroundColor, setBackgroundColor] = useState(() =>
    getBackgroundPropertyValue()
  );

  const { theme } = useTheme();

  useEffect(() => {
    setBackgroundColor(getBackgroundPropertyValue());
  }, [theme]);

  return (
    <div data-key="marquee-wrapper" ref={marqueeWrapperRef}>
      <Marquee
        gradient
        gradientWidth={100}
        gradientColor={backgroundColor}
        className="text-primary flex scroll-m-20 gap-4 overflow-hidden text-balance text-center text-4xl font-extrabold tracking-tight [&_.rfm-child]:pr-4"
      >
        {GREETINGS}
      </Marquee>
    </div>
  );
};
