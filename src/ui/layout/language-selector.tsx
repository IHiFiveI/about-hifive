import { useCallback, useState } from 'react';
import { memo } from 'react';
import { Button } from '../button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import { getSavedLanguage, type Language } from '@/lib/i18n';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = memo(() => {
  const { t, i18n } = useTranslation('common');

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() =>
    getSavedLanguage()
  );

  const handleLanguageChange = useCallback(
    (value: Language) => {
      i18n.changeLanguage(value);
      setSelectedLanguage(value);
      localStorage.setItem('about-hifive-selected-language', value);
    },
    [i18n]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {selectedLanguage.toLocaleUpperCase()}
          <span className="sr-only">{t('languages.languageSelect')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={selectedLanguage === 'en'}
          onCheckedChange={() => {
            handleLanguageChange('en');
          }}
        >
          {t('languages.english')}
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedLanguage === 'ru'}
          onCheckedChange={() => {
            handleLanguageChange('ru');
          }}
        >
          {t('languages.russian')}
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem disabled>
          {t('languages.german')}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
