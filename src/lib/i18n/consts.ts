export const LANGUAGES = {
  ru: 'ru',
  en: 'en',
} as const;

export const DEFAULT_LANGUAGE = LANGUAGES.en;

export type Language = keyof typeof LANGUAGES;
