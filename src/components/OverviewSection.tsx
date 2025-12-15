import React from "react";
import { SectionHeader } from "./SectionHeader";
import { CharactersSection } from "./CharactersSection";

interface OverviewSectionProps {
  nutNumber: string;
  title: React.ReactNode;
  description: string;
  borderColor: string;
  icon: React.ReactNode;
  iconLabel: string;
  iconDescription: string;
  gradientClass?: string;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  nutNumber,
  title,
  description,
  borderColor,
  icon,
  iconLabel,
  iconDescription,
  gradientClass = "from-blue-500 to-purple-500",
}) => {
  return (
    <div className="space-y-6">
      <SectionHeader
        title={
          <>
            NUT-{nutNumber}: {title}
          </>
        }
        description={description}
        className={gradientClass}
      />

      <CharactersSection />

      <div className={`border-l-4 ${borderColor} p-6 rounded`}>
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          {icon}
          {iconLabel}
        </h3>
        <p className="text-gray-400">{iconDescription}</p>
      </div>
    </div>
  );
};