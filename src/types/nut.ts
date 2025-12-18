// src/types/nut.ts
import { ReactNode } from "react";

// Navigation section configuration
export interface NavSection {
  id: string;
  label: string;
  icon: string;
}

// Header component props
export interface HeaderProps {
  nutNumber: string;
  title: string;
  subtitle: string;
  badgeLabel?: string;
}

// Overview section props
export interface OverviewProps {
  nutNumber: string;
  title: string;
  description: string;
  borderColor: string;
  icon: ReactNode;
  iconLabel: string;
  iconDescription: string;
  gradientClass?: string;
}

// Render functions map for NutLayout
export type RenderFunctions = {
  [key: string]: () => ReactNode;
};

// NutLayout component props
export interface NutLayoutProps {
  nutNumber: string;
  sections: NavSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  headerProps: HeaderProps;
  overviewProps: OverviewProps;
  renderFunctions: RenderFunctions;
}

// Character component props
export interface CharacterProps {
  name: string;
  role: string;
  size?: "small" | "medium" | "large";
  compact?: boolean;
}

// Icon step component props
export interface IconStepProps {
  icon: ReactNode;
  label: string;
  size?: "small" | "medium" | "large";
  description?: string;
}

// Section header component props
export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  gradientClass?: string;
  children?: ReactNode;
}

// Panel section component props
export interface PanelSectionProps {
  title: string;
  subtitle?: string;
  headerBgClass?: string;
  children: ReactNode;
}

// Box section component props
export interface BoxSectionProps {
  title: string;
  className?: string;
  children: ReactNode;
}

// Section page component props
export interface SectionPageProps {
  title: string | ReactNode;
  children: ReactNode;
}

// Complete NutConfig with all required fields
export interface NutConfig {
  nutNumber: string;
  sections: NavSection[];
  headerProps: HeaderProps;
  overviewProps: OverviewProps;
  renderFunctions: RenderFunctions;
  activeSection?: string;
}

// Closing panel props
export interface ClosingPanelProps {
  title: string;
  description?: string;
  codeSnippet?: string;
  note?: ReactNode;
  children?: ReactNode;
  className?: string;
}

// Animation step data
export interface AnimationStep {
  num: number;
  actor: string;
  action: string;
  detail: string;
  description: string;
}

// Variable definition
export interface Variable {
  symbol: string;
  name: string;
  desc: string;
}

// API field definition
export interface APIField {
  field: string;
  optional?: boolean;
  desc: string;
}