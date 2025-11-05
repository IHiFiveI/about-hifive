import { commonEN, commonRU, LANGUAGES, type Language } from '@/lib/i18n';
import { homeEN, homeRU } from '@/pages/home';

export const i18nResources = {
  [LANGUAGES.en]: { common: commonEN, home: homeEN },
  [LANGUAGES.ru]: { common: commonRU, home: homeRU },
} as const;

type I18nNamespace = keyof (typeof i18nResources)[Language];

export const defaultNS: I18nNamespace = 'common';
