import { Button } from '../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../dropdown-menu';

export function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* TODO: Add language switching capabilities */}
        <Button disabled variant="outline" size="icon">
          {navigator.language.split('-').at(0)?.toLocaleUpperCase()}
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">languages</DropdownMenuContent>
    </DropdownMenu>
  );
}
