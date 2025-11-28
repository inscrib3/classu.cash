import { CheckCircle } from "lucide-react";
import { IconStep } from "../IconStep";

export const PaidStep: React.FC<{
  size?: "small" | "medium" | "large";
}> = ({ size = "medium" }) => {
  return (
    <IconStep
      icon={<CheckCircle />}
      label="Paid!"
      color="text-green-400"
      size={size}
      animated
    />
  );
};