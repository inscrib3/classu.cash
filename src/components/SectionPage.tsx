import React from "react";

interface SectionPageProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const SectionPage: React.FC<SectionPageProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
};