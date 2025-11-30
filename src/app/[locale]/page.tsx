import {routing} from '@/src/i18n/routing';
import HomeClient from '@/src/components/HomeClient';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return <HomeClient />;
}
