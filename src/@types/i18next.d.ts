import 'i18next';
import { defaultNS, i18nResources } from '@/app/i18n-options';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof i18nResources)['en'];
  }
}
