import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  progress: number;
  className: string;
}

const ScrollProgress = ({ progress, className }: ScrollProgressProps) => {
  return <Progress value={progress} className={cn("w-full", className)} />;
};

export default ScrollProgress;
