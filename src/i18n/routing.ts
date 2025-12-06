import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr', 'de', 'it', 'zh', 'pt', 'ru', 'tr', 'th', 'sv', 'el', 'ja', 'ko'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});