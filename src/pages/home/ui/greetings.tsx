import { useCallback } from 'react';
import Marquee from 'react-fast-marquee';
import { GREETINGS } from '../lib/greetings';

export const Greetings = () => {
  const marqueeWrapperRef = useCallback((node: HTMLDivElement) => {
    if (node === null) {
      return;
    }

    node.setAttribute('inert', 'true');
  }, []);

  return (
    <div data-key="marquee-wrapper" ref={marqueeWrapperRef}>
      <Marquee className="text-primary flex scroll-m-20 gap-4 overflow-hidden text-balance text-center text-4xl font-extrabold tracking-tight [&_.rfm-child]:pr-4">
        {GREETINGS}
      </Marquee>
    </div>
  );
};
