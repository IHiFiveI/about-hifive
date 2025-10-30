import clsx from 'clsx';

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
  return (
    <div
      className={clsx(
        'mb-4 flex flex-wrap justify-between sm:flex-nowrap',
        className
      )}
    >
      <h2 className="text-4xl">{title}</h2>
      <time className="text-accent-foreground/60 self-end" dateTime={time}>
        {new Date(time).toDateString()}
      </time>
    </div>
  );
};
