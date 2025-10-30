import { ModeToggle } from '@/ui/mode-toggle';
import { ROUTES } from '@/lib/routes';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '../navigation-menu';
import { LanguageSelector } from './language-selector';

export const Navbar = () => {
  return (
    <NavigationMenu className="bg-background text-secondary sm:justify-init sticky top-0 z-10 w-full justify-between gap-4 p-4">
      <span className="sm:mr-auto">_HiFive</span>
      <NavigationMenuList className="gap-4 sm:mr-16">
        <NavigationMenuLink asChild>
          <Link to={ROUTES.home}>Home</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to={ROUTES.skills}>Skills</Link>
        </NavigationMenuLink>
      </NavigationMenuList>
      <div className="flex gap-4">
        <LanguageSelector />
        <ModeToggle />
      </div>
    </NavigationMenu>
  );
};
