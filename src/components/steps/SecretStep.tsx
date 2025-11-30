import { Lock } from "lucide-react";
import { IconStep } from "@/src/components/IconStep";

export const SecretStep: React.FC<{
  size?: "small" | "medium" | "large";
}> = ({ size = "medium" }) => {
  return (
    <IconStep
      icon={<Lock />}
      label="Secret"
      color="text-yellow-400"
      size={size}
      animated
    />
  );
};