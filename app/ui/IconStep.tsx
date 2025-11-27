import React from "react";

interface IconStepProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  size?: "small" | "medium" | "large";
  animated?: boolean;
}

const sizeClasses = {
  small: { container: "w-10 h-10", icon: "w-5 h-5", text: "text-xs" },
  medium: { container: "w-12 h-12", icon: "w-6 h-6", text: "text-sm" },
  large: { container: "w-14 h-14", icon: "w-7 h-7", text: "text-base" },
};

export const IconStep: React.FC<IconStepProps> = ({
  icon,
  label,
  color,
  size = "medium",
  animated = true,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
  size?: "small" | "medium" | "large";
  animated?: boolean;
}) => {
  const sizes = sizeClasses[size];
  const animationClass = animated ? "animate-pulse" : "";

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${sizes.container} ${color} mx-auto flex items-center justify-center ${animationClass}`}
      >
        <div className={sizes.icon}>{icon}</div>
      </div>
      <div className={`${sizes.text} text-center whitespace-nowrap`}>
        {label}
      </div>
    </div>
  );
};