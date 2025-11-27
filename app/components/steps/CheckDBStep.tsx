import { Database } from "lucide-react";
import { IconStep } from "../IconStep";

export const CheckDBStep: React.FC<{
  size?: "small" | "medium" | "large";
}> = ({ size = "medium" }) => {
  return (
    <IconStep
      icon={<Database />}
      label="Check DB"
      color="text-purple-400"
      size={size}
      animated
    />
  );
};