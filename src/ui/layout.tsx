import { Footer } from './footer';
import { Navbar } from './navbar';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mx-auto flex w-[min(100%,_1080px)] flex-col gap-4">
        <Navbar />
        <div className="size-full min-h-[720px]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
