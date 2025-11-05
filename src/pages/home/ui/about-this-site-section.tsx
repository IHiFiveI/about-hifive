import { Anchor } from '@/ui/anchor';
import { SiteReasoningCollapse } from './site-reasoning-collapse';
import { useTranslation } from 'react-i18next';

export const AboutThisSiteSection = () => {
  const { t } = useTranslation('home');

  return (
    <section>
      <h2 className="my-4 text-4xl">
        {t('aboutThisSiteSection.aboutThisSite')}
      </h2>
      <aside className="my-8 w-[min(100%,_32rem)] border-l-2 pl-4">
        <blockquote cite="https://en.wikipedia.org/wiki/Hagakure">
          <p>{t('aboutThisSiteSection.samuraiHasNoGoal')}</p>
        </blockquote>
        {t('aboutThisSiteSection.myPathIsToUseCorporation')}{' '}
        <Anchor
          target="_blank"
          href="https://bogdanthegeek.github.io/blog/projects/vapeserver/"
        >
          {t('aboutThisSiteSection.aDisposableVapeCouldHandle')}
        </Anchor>
        .
      </aside>
      <SiteReasoningCollapse />
      <h3 className="my-4 text-3xl">
        {t('usedTechnologies.usedTechnologies')}
      </h3>
      <ul className="[&_li]:list-inside [&_li]:list-disc">
        <li>Typescript</li>
        <li>React</li>
        <li>Firebase</li>
        <li>
          TailwindCSS ({t('usedTechnologies.theThemeWasTakenFrom')}:{' '}
          <Anchor target="_blank" href="https://tweakcn.com/">
            https://tweakcn.com/
          </Anchor>
          )
        </li>
      </ul>
      <h3 className="my-4 text-3xl">{t('futurePlans.futurePlans')}</h3>
      <p>{t('futurePlans.iPlanToTurnItInto')}</p>
    </section>
  );
};
