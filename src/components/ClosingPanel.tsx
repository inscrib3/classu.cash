import React from "react";

interface ClosingPanelProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  codeSnippet?: string;
  note?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const ClosingPanel: React.FC<ClosingPanelProps> = ({
  title,
  description,
  codeSnippet,
  note,
  className = "",
  children,
}) => {
  return (
    <div className={`bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded ${className}`}>
      <h3 className="font-bold mb-2 text-gray-600">{title}</h3>

      {description && <p className="text-gray-700 mb-2">{description}</p>}

      {codeSnippet && (
        <code className="block bg-gray-400 p-3 rounded text-sm overflow-x-auto mb-2">
          {codeSnippet}
        </code>
      )}

      {note && <div className="text-sm text-gray-600 mt-2">{note}</div>}
      {children}
    </div>
  );
};

export default ClosingPanel;