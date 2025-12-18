import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

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
  className,
  children,
}) => {
  return (
    <Alert className={cn("bg-yellow-50 border-l-4 border-yellow-500 border-y-0 border-r-0 rounded-none rounded-r p-6 [&>svg]:hidden", className)}>
      <AlertTitle className="font-bold mb-2 text-gray-600 text-base">{title}</AlertTitle>
      <AlertDescription className="text-gray-700">
        {description && <p className="mb-2">{description}</p>}
        {codeSnippet && (
          <code className="block bg-gray-400 p-3 rounded text-sm overflow-x-auto mb-2 text-white">
            {codeSnippet}
          </code>
        )}
        {note && <div className="text-sm text-gray-600 mt-2">{note}</div>}
        {children}
      </AlertDescription>
    </Alert>
  );
};


export default ClosingPanel;