import type { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="m-auto flex h-full w-[min(100%,_1080px)] flex-col">
      <div>{children}</div>
    </div>
  );
};
