import { Coins } from "lucide-react";
import { IconStep } from "@/src/components/IconStep";

export const TokenStep: React.FC<{
  size?: "small" | "medium" | "large";
}> = ({ size = "medium" }) => {
  return (
    <IconStep
      icon={<Coins />}
      label="Token"
      color="text-green-400"
      size={size}
      animated
    />
  );
};