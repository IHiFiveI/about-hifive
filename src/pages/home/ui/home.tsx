import Marquee from 'react-fast-marquee';
import { GREETINGS } from '../lib/greetings';
import { AboutMeCard } from './about-me-card';
import { SiteReasoningCollapse } from './site-reasoning-collapse';
import { Anchor } from '@/ui/anchor';

export const Home = () => {
  return (
    <>
      <Marquee className="text-primary flex scroll-m-20 gap-4 overflow-hidden text-balance text-center text-4xl font-extrabold tracking-tight [&_.rfm-child]:pr-4">
        {GREETINGS}
      </Marquee>
      <div className="flex flex-col gap-8 p-8">
        <SiteReasoningCollapse />
        <AboutMeCard />
        <span>
          The theme was taken from:{' '}
          <Anchor
            target="_blank"
            href="https://tweakcn.com/"
            className="text-primary underline"
          >
            https://tweakcn.com/
          </Anchor>
        </span>
      </div>
    </>
  );
};
