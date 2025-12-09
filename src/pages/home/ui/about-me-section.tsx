import { cn } from '@/lib/utils';
import { Anchor } from '@/ui/anchor';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

const GridCell = ({
  children,
  className,
}: PropsWithChildren<{
  className?: HTMLDivElement['className'];
}>) => {
  return (
    <div
      className={cn(
        'bg-secondary text-secondary-foreground h-full min-h-32',
        className
      )}
    >
      {children}
    </div>
  );
};

export const AboutMeSection = () => {
  const { t } = useTranslation('home');

  return (
    <section>
      <p>
        {t('aboutMeSection.imADeveloper')}
        <br />
        {t('aboutMeSection.iStriveToWrite')}
      </p>

      <h3 className="my-4 text-3xl">{'My uhh mm uum my stuff about me:'}</h3>
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        <GridCell>current location: UTC+7</GridCell>
        <GridCell className="col-start-2 col-end-4">my skills</GridCell>
        <GridCell className="row-start-2 row-end-4">my hobbies</GridCell>
        <GridCell>what music i like</GridCell>
        <GridCell>
          People Im inspired by
          <Anchor target="_blank" href="https://tweakcn.com/">
            Matt Pocock
          </Anchor>
          <Anchor target="_blank" href="https://tweakcn.com/">
            Josh Comeau
          </Anchor>
        </GridCell>
        <GridCell>idk</GridCell>
        <GridCell className="col-start-2 col-end-4 row-start-3 row-end-5">
          spin
        </GridCell>
      </div>
      {/* TODO: Create grid with info about me: */}
      {/* my hobbies */}
      {/* my skills (a couple of main ones and a link to the skills page) */}
      {/* what genres i like */}
      {/* current location: UTC+7 */}
      {/* People Im inspired by: Matt Pocock & Josh Comeau*/}
    </section>
  );
};
