import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-violet-400 to-pink-400">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};
