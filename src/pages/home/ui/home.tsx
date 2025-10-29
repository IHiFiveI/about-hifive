import Marquee from 'react-fast-marquee';
import { GREETINGS } from '../lib/greetings';
import { AboutMeSection } from './about-me-section';
import { AboutThisSiteSection } from './about-this-site-section';

export const Home = () => {
  return (
    <>
      {/* FIXME: Make `aria-hidden="true"` work properly */}
      <Marquee className="text-primary flex scroll-m-20 gap-4 overflow-hidden text-balance text-center text-4xl font-extrabold tracking-tight [&_.rfm-child]:pr-4">
        {GREETINGS}
      </Marquee>
      <div className="flex flex-col gap-8 p-8">
        <AboutMeSection />
        <AboutThisSiteSection />
      </div>
    </>
  );
};
