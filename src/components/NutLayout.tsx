import React from "react";
import { NutHeader } from "@/src/components/NutHeader";
import { NutTabs } from "@/src/components/NutTabs";
import { OverviewSection } from "@/src/components/OverviewSection";
import { NutLayoutProps } from "@/src/types/nut";

export const NutLayout: React.FC<NutLayoutProps> = ({
  nutNumber,
  sections,
  activeSection,
  onSectionChange,
  headerProps,
  overviewProps,
  renderFunctions,
}) => {
  return (
    <>
      <NutHeader
        nutNumber={headerProps.nutNumber}
        title={headerProps.title}
        subtitle={headerProps.subtitle}
        badgeLabel={headerProps.badgeLabel}
      />
      <NutTabs
        sections={sections}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
        renderFunctions={{
          overview: () => <OverviewSection {...overviewProps} />,
          ...renderFunctions,
        }}
        className="mt-8"
      />
    </>
  );
};
