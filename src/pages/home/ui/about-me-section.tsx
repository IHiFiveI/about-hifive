import { useTranslation } from 'react-i18next';

export const AboutMeSection = () => {
  const { t } = useTranslation('home');

  return (
    <section>
      <p className="text-xl">
        {t('aboutMeSection.imADeveloper')}
        <br />
        {t('aboutMeSection.iStriveToWrite')}
      </p>
      {/* TODO: Create grid with info about me: */}
      {/* my hobbies */}
      {/* my skills (a couple of main ones and a link to the skills page) */}
      {/* what genres i like */}
      {/* current location: UTC+7 */}
      {/* People Im inspired by: Matt Pocock & Josh Comeau*/}
    </section>
  );
};
