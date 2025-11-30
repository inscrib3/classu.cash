import {redirect} from 'next/navigation';
import { routing } from '@/src/i18n/routing';


export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
