import React from "react";
import { Coins, Zap } from "lucide-react";
import { Character } from "./Character";

import {useTranslations} from 'next-intl';

export const Carol: React.FC<{
  size?: "small" | "medium" | "large";
  compact?: boolean; // NEW
}> = ({ size = "medium", compact = false }) => {
  const t = useTranslations('UiCarol');
  
  return (
    <Character
      name="Carol"
      imageSrc="/img/carol.svg"
      role={t('role')}
      gradientFrom="from-pink-400"
      gradientTo="to-pink-600"
      borderColor="border-pink-400"
      icons={[
        <Coins key="coins" className="w-5 h-5 text-pink-300" />,
        <Zap key="zap" className="w-5 h-5 text-pink-300" />,
      ]}
      size={size}
      compact={compact} // NEW
    />
  );
};
