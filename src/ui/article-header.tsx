import { formatTimeByLocale } from '@/lib/formatters';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface ArticleHeaderProps {
  title: string;
  time: string;
  className?: HTMLDivElement['className'];
}

export const ArticleHeader = ({
  title,
  time,
  className,
}: ArticleHeaderProps) => {
  const { i18n } = useTranslation('home');

  return (
    <div
      className={cn(
        'mb-4 flex flex-wrap justify-between gap-4 sm:flex-nowrap',
        className
      )}
    >
      <h2 className="text-4xl">{title}</h2>
      <time
        className="text-accent-foreground/60 self-end text-nowrap"
        dateTime={time}
      >
        {formatTimeByLocale(time, i18n.language)}
      </time>
    </div>
  );
};
