import { AboutMeSection } from './about-me-section';
import { AboutThisSiteSection } from './about-this-site-section';
import { Greetings } from './greetings';

export const Home = () => {
  return (
    <>
      <Greetings />
      <div className="flex flex-col gap-8 p-8">
        <AboutMeSection />
        <AboutThisSiteSection />
      </div>
    </>
  );
};
