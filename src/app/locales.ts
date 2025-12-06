import { getSavedLanguage } from '@/lib/i18n';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultNS, i18nResources } from './i18n-options';

i18n.use(initReactI18next).init({
  defaultNS,
  fallbackLng: getSavedLanguage(),
  resources: i18nResources,
  interpolation: { escapeValue: false },
});

export default i18n;
