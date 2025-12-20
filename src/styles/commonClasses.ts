// src/styles/commonClasses.ts

// Button Classes
export const buttonClasses = {
  primary: "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:shadow-lg transition-shadow",
  secondary: "bg-gray-700 text-white hover:bg-gray-600 transition-colors",
  tertiary: "bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors",
};

// Panel Classes
export const panelClasses = {
  base: "bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20",
  light: "bg-white rounded-lg shadow-md",
  dark: "bg-gray-900 rounded-lg shadow-xl",
  gradient: "bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-xl",
};

// Section Classes
export const sectionClasses = {
  container: "rounded-lg shadow-xl p-6 md:p-8 mb-8",
  header: "mb-6",
  title: "text-2xl md:text-3xl font-bold text-white mb-2",
  subtitle: "text-gray-300 text-sm md:text-base",
  spacing: "space-y-6",
};

// Card Classes
export const cardClasses = {
  base: "rounded-lg p-4 md:p-6 border transition-all",
  light: "bg-white border-gray-200 hover:shadow-md",
  dark: "bg-gray-800 border-gray-700 hover:shadow-lg",
  accent: "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200",
};

// Badge Classes
export const badgeClasses = {
  mandatory: "bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold",
  optional: "bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold",
  info: "bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold",
};

// Text Classes
export const textClasses = {
  heading1: "text-3xl md:text-4xl font-bold text-white",
  heading2: "text-2xl md:text-3xl font-bold text-white",
  heading3: "text-xl md:text-2xl font-bold text-white",
  body: "text-base text-gray-300",
  small: "text-sm text-gray-400",
  muted: "text-xs text-gray-500",
};

// Color Classes for NUT sections
export const nutColorClasses = {
  nut00: "bg-gradient-to-r from-blue-500 to-cyan-500",
  nut01: "bg-gradient-to-r from-purple-500 to-pink-500",
  nut02: "bg-gradient-to-r from-purple-500 to-violet-500",
  nut03: "bg-gradient-to-r from-red-500 to-orange-500",
  nut04: "bg-gradient-to-r from-yellow-500 to-orange-500",
  nut05: "bg-gradient-to-r from-red-500 to-pink-500",
  nut06: "bg-gradient-to-r from-yellow-500 to-amber-500",
};

// Border Colors for NUT overview sections
export const nutBorderClasses = {
  nut00: "border-blue-500",
  nut01: "border-purple-500",
  nut02: "border-purple-500",
  nut03: "border-red-500",
  nut04: "border-yellow-500",
  nut05: "border-red-500",
  nut06: "border-yellow-500",
};

// Layout Classes
export const layoutClasses = {
  container: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
  gridTwoCol: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
  gridThreeCol: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
};

// Responsive Classes
export const responsiveClasses = {
  hidden: "md:hidden",
  hiddenOnMobile: "hidden md:block",
  padding: "p-4 md:p-6 lg:p-8",
  marginY: "my-4 md:my-6 lg:my-8",
  marginX: "mx-4 md:mx-6 lg:mx-8",
  gap: "gap-4 md:gap-6 lg:gap-8",
  textSize: "text-sm md:text-base lg:text-lg",
};

// Animation Classes
export const animationClasses = {
  fadeIn: "animate-fade-in",
  slideIn: "animate-slide-in",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  transition: "transition-all duration-300 ease-in-out",
};

// Utility Classes
export const utilityClasses = {
  divider: "border-t border-white/10",
  backdrop: "bg-black/50 backdrop-blur-sm",
  shadow: "shadow-lg shadow-black/50",
  glow: "shadow-lg shadow-purple-500/50",
};