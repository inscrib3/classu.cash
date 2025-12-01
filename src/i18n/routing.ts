import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr', 'de', 'it', 'zh', 'pt'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});