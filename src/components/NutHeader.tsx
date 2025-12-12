import React from "react";

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
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-violet-400 to-pink-400">
        NUT-{nutNumber}
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
      {badgeLabel && (
        <div className="flex items-center justify-center gap-2 mt-3">
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