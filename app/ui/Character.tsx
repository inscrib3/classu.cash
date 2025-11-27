import React from "react";

interface CharacterProps {
  name: string;
  emoji: string;
  role: string;
  gradientFrom: string;
  gradientTo: string;
  icons: React.ReactNode[];
  size?: "small" | "medium" | "large";
  borderColor: string;
  compact?: boolean; // NEW
}

const sizeClasses = {
  small: { container: "w-12 h-12", text: "text-4xl", name: "text-lg" },
  medium: { container: "w-20 h-20", text: "text-5xl", name: "text-2xl" },
  large: { container: "w-24 h-24", text: "text-6xl", name: "text-3xl" },
};

export const Character: React.FC<CharacterProps> = ({
  name,
  emoji,
  role,
  gradientFrom,
  gradientTo,
  icons,
  size = "medium",
  borderColor,
  compact = false, // NEW
}) => {
  const sizes = sizeClasses[size];

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${sizes.container} mx-auto mb-4 bg-linear-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center ${sizes.text} shadow-2xl border-2 ${borderColor}`}
      >
        {emoji}
      </div>

      {/* Show name always; hide role and icons when compact */}
      <h3 className={`${sizes.name} font-bold text-center mb-2`}>{name}</h3>

      {!compact && (
        <>
          <p className="text-gray-300 text-center text-sm md:text-base">
            {role}
          </p>
          {icons.length > 0 && (
            <div className="mt-4 flex justify-center gap-3">
              {icons.map((icon, idx) => (
                <div key={idx}>{icon}</div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};