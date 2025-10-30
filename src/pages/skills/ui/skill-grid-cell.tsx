import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

interface SkillGridCellProps {
  title: string;
  skillNames: string[];
  className?: HTMLDivElement['className'];
}

export const SkillGridCell = ({
  title,
  skillNames,
  className,
}: SkillGridCellProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          <h3 className="my-4 text-3xl">{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="[&_li]:list-inside [&_li]:list-disc">
          {skillNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
