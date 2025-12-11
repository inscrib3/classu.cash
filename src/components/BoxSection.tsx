import React from "react";

interface BoxSectionProps {
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export const BoxSection: React.FC<BoxSectionProps> = ({
  title,
  className = "bg-white",
  children,
}) => {
  return (
    <div className={`rounded-lg p-6  ${className}`}>
        <h3 className="font-bold text-lg mb-3 text-gray-700">
          {title}
        </h3>
        <div className="text-gray-600">{children}</div>
    </div>
  );
};