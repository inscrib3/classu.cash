import React from "react";

interface NavSection {
  id: string;
  label: string;
  icon: string;
}

interface NutNavigationProps {
  sections: NavSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  gradientClass?: string; // NEW: per supportare colori diversi
}

export const NutNavigation: React.FC<NutNavigationProps> = ({
  sections,
  activeSection,
  onSectionChange,
  gradientClass = "from-purple-500 to-blue-500", // default per nut00
}) => {
  return (
    <div className="rounded-lg p-2 mb-6 flex flex-wrap gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`flex-1 min-w-[150px] px-4 py-3 rounded-lg font-semibold transition-all ${
            activeSection === section.id
              ? `bg-gradient-to-r ${gradientClass} text-white shadow-md`
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          <span className="mr-2">{section.icon}</span>
          {section.label}
        </button>
      ))}
    </div>
  );
};