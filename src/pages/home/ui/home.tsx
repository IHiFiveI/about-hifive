import { ArticleHeader } from '@/ui/article-header';
import { AboutMeSection } from './about-me-section';
import { AboutThisSiteSection } from './about-this-site-section';
import { Greetings } from './greetings';

export const Home = () => {
  return (
    <>
      <Greetings />
      <article className="p-8">
        <ArticleHeader
          title={'Greetings!! My name is Nikíta.'}
          time={'2025-10-29'}
        />
        <div className="flex flex-col gap-8">
          <AboutMeSection />
          <AboutThisSiteSection />
        </div>
      </article>
    </>
  );
};
