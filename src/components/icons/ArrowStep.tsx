import React from "react";

export const ArrowStep: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...rest
}) => {
  return (
    <>
      {/* desktop: freccia destra */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`hidden md:block! w-10 h-10 text-white animate-bounce ${className ?? ""}`}
        {...rest}
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>

      {/* mobile: freccia giù */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`md:hidden w-8 h-8 text-white animate-bounce ${className ?? ""}`}
        {...rest}
      >
        <path d="M12 5v14" />
        <path d="M19 12l-7 7-7-7" />
      </svg>
    </>
  );
};