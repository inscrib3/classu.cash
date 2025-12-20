'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/src/i18n/navigation';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <div className="relative">
      <Select defaultValue={defaultValue} onValueChange={onSelectChange} disabled={isPending}>
        <SelectTrigger className="w-[140px] bg-transparent text-gray-400 border-gray-700 h-10">
             <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
            {children}
        </SelectContent>
      </Select>
    </div>
  );
}
