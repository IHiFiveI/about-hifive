import { Navbar } from './navbar';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div className="m-auto flex h-full w-[min(100%,_1080px)] flex-col gap-4">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
