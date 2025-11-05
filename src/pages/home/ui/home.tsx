import { ArticleHeader } from '@/ui/article-header';
import { AboutMeSection } from './about-me-section';
import { AboutThisSiteSection } from './about-this-site-section';
import { Greetings } from './greetings';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <Greetings />
      <article className="mt-16 p-8 pt-4">
        <ArticleHeader title={t('greetingsMyNameIs')} time={'2025-11-06'} />
        <div className="flex flex-col gap-8">
          <AboutMeSection />
          <AboutThisSiteSection />
        </div>
      </article>
    </>
  );
};
