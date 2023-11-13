import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface CardProps {
  id: string;
  size: string;
  duration: number;
  title: string;
  onHover: (num: string) => void;
  onHoverLeave: (num: string) => void;
  toggle: boolean;
  handleClick: (num: string) => void;
  icon: LucideIcon;
}

const Card = ({
  id,
  size,
  duration,
  title,
  onHover,
  onHoverLeave,
  toggle,
  handleClick,
  icon: Icon,
}: CardProps) => {
  const [animateTitle, setAnimateTitle] = useState(false);

  const handleMouseEnter = () => {
    if (toggle) {
      setAnimateTitle(true);
      onHover(id);
    }
  };

  const handleMouseLeave = () => {
    setAnimateTitle(false);
    onHoverLeave(id);
  };

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: duration,
      },
    },
    after: {
      opacity: 0.4,
      y: 650,
      transition: {
        duration: duration * 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className={cn("w-full h-full overflow-hidden", size)}>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={toggle ? "animate" : "after"}
        className="group w-full h-full bg-muted-foreground/30 rounded-lg backdrop-blur-md p-6 hover:bg-muted-foreground/50 transition-all duration-300 cursor-pointer overflow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(id)}
      >
        <div className="relative flex items-center gap-2">
          <Icon className="w-5 h-5" />
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={
              animateTitle
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.18,
                      duration: 0.4,
                    },
                  }
                : "initial"
            }
            className="w-fit font-medium absolute text-xl left-7"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{
              opacity: 1,
              y: 0,
            }}
            animate={
              animateTitle
                ? {
                    opacity: 0,
                    y: -10,
                    transition: {
                      delay: 0.1,
                      duration: 0.2,
                    },
                  }
                : "initial"
            }
            className="w-fit font-medium text-xl"
          >
            {title}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
