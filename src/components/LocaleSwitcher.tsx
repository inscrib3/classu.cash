import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/src/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { SelectItem } from "@/components/ui/select";

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
