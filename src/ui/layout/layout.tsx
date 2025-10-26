import { Outlet } from 'react-router';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { RestrictedWidthWrapper } from './restricted-width-wrapper';

export const Layout = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <RestrictedWidthWrapper>
        <Navbar />
        <div className="size-full min-h-[720px]">
          <Outlet />
        </div>
      </RestrictedWidthWrapper>
      <Footer />
    </div>
  );
};
