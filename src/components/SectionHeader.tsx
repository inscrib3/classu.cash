import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-8 text-white ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {description && <p className="text-lg opacity-90">{description}</p>}
    </div>
  );
};