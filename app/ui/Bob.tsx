import React from "react";
import { Database, CheckCircle } from "lucide-react";
import { Character } from "./Character";

export const Bob: React.FC<{
  size?: "small" | "medium" | "large";
  compact?: boolean; // NEW
}> = ({ size = "medium", compact = false }) => {
  return (
    <Character
      name="Bob"
      emoji="👨‍💼"
      role="The mint operator"
      gradientFrom="from-blue-400"
      gradientTo="to-blue-600"
      borderColor="border-blue-400"
      icons={[
        <Database key="db" className="w-5 h-5 text-blue-300" />,
        <CheckCircle key="check" className="w-5 h-5 text-blue-300" />,
      ]}
      size={size}
      compact={compact} // NEW
    />
  );
};