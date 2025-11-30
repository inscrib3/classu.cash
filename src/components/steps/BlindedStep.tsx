import { EyeOff } from "lucide-react";
import { IconStep } from "@/src/components/IconStep";

export const BlindedStep: React.FC<{
  size?: "small" | "medium" | "large";
}> = ({ size = "medium" }) => {
  return (
    <IconStep
      icon={<EyeOff />}
      label="Blinded"
      color="text-gray-400"
      size={size}
      animated
    />
  );
};