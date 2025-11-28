import React from "react";
import { Lock, Key } from "lucide-react";
import { Character } from "./Character";

import {useTranslations} from 'next-intl';

export const Alice: React.FC<{
  size?: "small" | "medium" | "large";
  compact?: boolean; // NEW
}> = ({ size = "medium", compact = false }) => {
  const t = useTranslations('UiAlice');

  return (
    <Character
      name="Alice"
      imageSrc="/img/alice.svg"
      role={t('role')}
      gradientFrom="from-purple-400"
      gradientTo="to-purple-600"
      borderColor="border-purple-400"
      icons={[
        <Lock key="lock" className="w-5 h-5 text-purple-300" />,
        <Key key="key" className="w-5 h-5 text-purple-300" />,
      ]}
      size={size}
      compact={compact} // NEW
    />
  );
};
