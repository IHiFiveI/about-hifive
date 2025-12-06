import { ModeToggle } from '@/ui/mode-toggle';
import { ROUTES } from '@/lib/routes';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '../navigation-menu';
import { LanguageSelector } from './language-selector';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <NavigationMenu className="bg-background text-secondary sm:justify-init sticky top-0 z-10 w-full justify-between gap-4 p-4">
      <span className="sm:mr-auto">_HiFive</span>
      <NavigationMenuList className="gap-4 sm:mr-16">
        <NavigationMenuLink asChild>
          <Link to={ROUTES.home}>{t('navigationMenuItems.home')}</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild>
          <Link to={ROUTES.skills}>{t('navigationMenuItems.skills')}</Link>
        </NavigationMenuLink>
      </NavigationMenuList>
      <div className="flex gap-4">
        <LanguageSelector />
        <ModeToggle />
      </div>
    </NavigationMenu>
  );
};
