import clsx from 'clsx';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export const Anchor = ({
  children,
  className,
  ...anchorProps
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    <a {...anchorProps} className={clsx('text-primary underline', className)}>
      {children}
    </a>
  );
};
