import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({requestLocale}) => {

  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
    
  return {
    locale,
    messages: (await import(`../../translations/${locale}.json`)).default
  };
});
