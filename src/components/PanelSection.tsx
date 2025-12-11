import React from "react";

interface PanelSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  headerBgClass?: string; // es. "bg-purple-500"
  className?: string;
  children: React.ReactNode;
}

export const PanelSection: React.FC<PanelSectionProps> = ({
  title,
  subtitle,
  headerBgClass = "bg-purple-500",
  className = "",
  children,
}) => {
  return (
    <div className={`bg-white rounded-lg border-2 overflow-hidden ${className}`}>
      <div className={`${headerBgClass} text-white p-4`}>
        <h3 className="font-bold text-lg">{title}</h3>
        {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};