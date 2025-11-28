import { MessageSquare } from "lucide-react";
import { IconStep } from "../IconStep";

export const PrivateStep: React.FC<{
  size?: "small" | "medium" | "large";
}> = ({ size = "medium" }) => {
  return (
    <IconStep
      icon={<MessageSquare />}
      label="Private"
      color="text-cyan-400"
      size={size}
      animated
    />
  );
};