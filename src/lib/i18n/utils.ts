import { type Language, LANGUAGES, DEFAULT_LANGUAGE } from './consts';

export const isSupportedLanguage = (
  maybeLanguage: string
): maybeLanguage is Language => {
  return Object.values(LANGUAGES).includes(maybeLanguage as Language);
};

const getPreferredLanguage = (): Language => {
  const preferredLanguage = navigator.language.split('-')[0];

  if (isSupportedLanguage(preferredLanguage)) {
    return preferredLanguage;
  }

  return DEFAULT_LANGUAGE;
};

export const getSavedLanguage = (): Language =>
  (localStorage.getItem('about-hifive-selected-language') as Language) ??
  getPreferredLanguage();
