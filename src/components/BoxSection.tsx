import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BoxSectionProps {
  title: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const BoxSection: React.FC<BoxSectionProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <Card className={cn("border-0 shadow-none", className)}>
      <CardHeader className="p-6 pb-3">
        <CardTitle className="text-lg font-bold text-gray-700">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 text-gray-600">
        {children}
      </CardContent>
    </Card>
  );
};