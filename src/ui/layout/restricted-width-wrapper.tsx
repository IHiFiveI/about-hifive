import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';

export const RestrictedWidthWrapper = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div
    {...props}
    className={clsx(
      'mx-auto flex w-[min(100%,_1080px)] flex-col gap-4',
      className
    )}
  >
    {children}
  </div>
);
