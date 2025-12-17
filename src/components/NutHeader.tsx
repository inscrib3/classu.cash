import React from "react";
import { Header } from "@/src/components//Header";

interface NutHeaderProps {
  nutNumber: string;
  title: string;
  subtitle: string;
  badgeLabel?: string;
  badgeColor?: string;
}

export const NutHeader: React.FC<NutHeaderProps> = ({
  nutNumber,
  title,
  subtitle,
  badgeLabel = "MANDATORY",
  badgeColor = "bg-red-500",
}) => {
  return (
    <div className="text-center mb-12">
      <Header
        title={`NUT-${nutNumber}`}
        subtitle={subtitle}
      />
      {badgeLabel && (
        <div className="flex items-center justify-center gap-2">
          <span
            className={`${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {badgeLabel}
          </span>
        </div>
      )}
    </div>
  );
};