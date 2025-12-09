import { ModeToggle } from '@/ui/mode-toggle';
import { ROUTES } from '@/lib/routes';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '../navigation-menu';
import { LanguageSelector } from './language-selector';
import { cn } from '@/lib/utils';
import { NavigationMenuHamburger } from './navigation-menu-hamburger';
import { useIsSmallestScreen } from '../../lib/useIsSmallestScreen';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation('common');

  const isSmallestScreen = useIsSmallestScreen();

  const navigationMenuList = (
    <NavigationMenuList
      className={cn(
        'text-secondary gap-4 sm:mr-16',
        isSmallestScreen && 'flex-col items-stretch gap-0'
      )}
    >
      <NavigationMenuLink asChild>
        <Link to={ROUTES.home}>{t('navigationMenuItems.home')}</Link>
      </NavigationMenuLink>
      <NavigationMenuLink asChild>
        <Link to={ROUTES.skills}>{t('navigationMenuItems.skills')}</Link>
      </NavigationMenuLink>
    </NavigationMenuList>
  );

  return (
    <NavigationMenu className="bg-background text-secondary sm:justify-init sticky top-0 z-10 w-full justify-between gap-4 p-4">
      <span className="sm:mr-auto">_HiFive</span>
      {!isSmallestScreen && navigationMenuList}
      <div className="flex gap-4">
        {isSmallestScreen && (
          <NavigationMenuHamburger>
            {navigationMenuList}
          </NavigationMenuHamburger>
        )}
        <LanguageSelector />
        <ModeToggle />
      </div>
    </NavigationMenu>
  );
};
