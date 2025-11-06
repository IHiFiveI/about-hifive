import { ArticleHeader } from '@/ui/article-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import { SkillGridCell } from './skill-grid-cell';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation('skills');

  return (
    <article className="flex flex-col p-8 pt-4">
      {/* TODO: Look into creating a background image with https://tinkersynth.com/ */}

      <ArticleHeader title={t('myStack')} time={'2025-11-07'} />
      <Card className="bg-secondary text-secondary-foreground my-16 w-[min(100%,_512px)] self-center">
        <CardHeader>
          <CardTitle>
            <h3>{t('currentStateInfo.warning')}</h3>
          </CardTitle>
          <CardDescription className="text-secondary-foreground/60">
            {t('currentStateInfo.informationAboutThePage')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {t('currentStateInfo.thisPageIsIncomplete')}
          <br />
          {t('currentStateInfo.iWillComeUpWithSomething')}
        </CardContent>
        <CardFooter>{t('currentStateInfo.stayTuned')}</CardFooter>
      </Card>

      {/* TODO: Create a design utilizing grid layout for all the skills */}

      <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <SkillGridCell
          title={t('stackLabels.librariesAndFrameworks')}
          skillNames={['React', 'Next.js']}
        />
        <SkillGridCell
          title={t('stackLabels.styles')}
          skillNames={['Tailwind', 'SCSS', 'PostCSS']}
        />
        <SkillGridCell
          title={t('stackLabels.stateManagement')}
          skillNames={['Redux (RTK)', 'MobX']}
        />
        <SkillGridCell
          title={t('stackLabels.requestHandling')}
          skillNames={['RTK Query', 'Tanstack Query (React Query)']}
        />
        <SkillGridCell
          title={t('stackLabels.tests')}
          skillNames={['React Testing Library', 'Jest', 'Vitest']}
        />
        <SkillGridCell
          title={t('stackLabels.architecture')}
          skillNames={['Feature-Sliced Design', 'Module', 'Atomic']}
        />
        <SkillGridCell title="Runtimes" skillNames={['Node', 'Bun']} />
        <SkillGridCell
          title={t('stackLabels.backend')}
          skillNames={['Nest.js', 'Koa', 'Express']}
        />
        <SkillGridCell
          title={t('stackLabels.firebase')}
          skillNames={['Firebase']}
          className="col-span-1 sm:col-span-2 md:col-span-1"
        />
      </div>
    </article>
  );
};
