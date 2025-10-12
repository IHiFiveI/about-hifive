import type { PropsWithChildren } from 'react';
import { Navbar } from './navbar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="m-auto flex h-full w-[min(100%,_1080px)] flex-col gap-4">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
