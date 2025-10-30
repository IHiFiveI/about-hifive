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

export const Skills = () => {
  return (
    <article className="flex flex-col p-8 pt-4">
      {/* TODO: Look into creating a background image with https://tinkersynth.com/ */}

      <ArticleHeader title={'My stack'} time={'2025-10-30'} />
      <Card className="bg-secondary text-secondary-foreground my-16 w-[min(100%,_512px)] self-center">
        <CardHeader>
          <CardTitle>
            <h3>WARNING!</h3>
          </CardTitle>
          <CardDescription className="text-secondary-foreground/60">
            information regarding the current state of the page
          </CardDescription>
        </CardHeader>
        <CardContent>
          This page is really incomplete.
          <br />
          eventually i will come up with something, but for now there will be
          just boring bullet lists
        </CardContent>
        <CardFooter>stay tuned!</CardFooter>
      </Card>

      {/* TODO: Create a design utilizing grid layout for all the skills */}

      <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <SkillGridCell
          title="Libraries & Frameworks"
          skillNames={['React', 'Next.js']}
        />
        <SkillGridCell
          title="Styles"
          skillNames={['Tailwind', 'SCSS', 'PostCSS']}
        />
        <SkillGridCell
          title="State management"
          skillNames={['Redux (RTK)', 'MobX']}
        />
        <SkillGridCell
          title="Request handling"
          skillNames={['RTK Query', 'Tanstack Query (React Query)']}
        />
        <SkillGridCell
          title="Tests"
          skillNames={['React Testing Library', 'Jest', 'Vitest']}
        />
        <SkillGridCell
          title="Architecture"
          skillNames={['Feature-Sliced Design', 'Module', 'Atomic']}
        />
        <SkillGridCell title="Runtimes" skillNames={['Node', 'Bun']} />
        <SkillGridCell
          title="Backend"
          skillNames={['Nest.js', 'Koa', 'Express']}
        />
        <SkillGridCell
          title="Firebase!"
          skillNames={['Firebase']}
          className="col-span-1 sm:col-span-2 md:col-span-1"
        />
      </div>
    </article>
  );
};
