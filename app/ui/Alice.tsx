import React from "react";
import { Lock, Key } from "lucide-react";
import { Character } from "./Character";

export const Alice: React.FC<{
  size?: "small" | "medium" | "large";
  compact?: boolean; // NEW
}> = ({ size = "medium", compact = false }) => {
  return (
    <Character
      name="Alice"
      emoji="👩"
      role="Wants to send money privately"
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