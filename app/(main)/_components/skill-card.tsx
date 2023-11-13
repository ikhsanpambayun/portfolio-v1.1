import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface SkillCardProps {
  name: string;
  title: string;
}

const SkillCard = ({ name, title }: SkillCardProps) => {
  const [cardAnimate, setCardAnimate] = useState(false);

  const handleHoverCard = () => {
    setCardAnimate(true);
  };

  const handleLeaveCard = () => {
    setCardAnimate(false);
  };

  const cardVariants = {
    initial: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      rotateY: 180,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardBackVariants = {
    initial: {
      rotateY: -180,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative">
      <div onMouseEnter={handleHoverCard} onMouseLeave={handleLeaveCard}>
        <motion.div
          variants={cardVariants}
          animate={cardAnimate ? "animate" : "initial"}
          className="relative w-[60px] sm:w-[100px] md:w-[150px] xl:w-[200px] aspect-square bg-gradient-to-br from-primary/30 to-muted-foreground/30 rounded-lg flex flex-col items-center justify-center"
        >
          <Image
            src={"/icons/skills/" + name + ".svg"}
            fill
            alt={name}
            className="dark:hidden p-2 sm:p-5 md:p-5 xl:p-10"
          />
          <Image
            src={"/icons/skills/" + name + "-light.svg"}
            fill
            alt={name}
            className="hidden dark:block p-2 sm:p-5 md:p-5 xl:p-10"
          />
        </motion.div>
      </div>
      <div
        className={cn(
          "absolute top-0 left-0",
          cardAnimate ? "block" : "hidden"
        )}
        onMouseEnter={handleHoverCard}
        onMouseLeave={handleLeaveCard}
      >
        <motion.div
          variants={cardBackVariants}
          animate={cardAnimate ? "animate" : "initial"}
          className="relative w-[60px] sm:w-[100px] md:w-[150px] xl:w-[200px] aspect-square bg-gradient-to-br from-primary/30 to-muted-foreground/30 rounded-lg flex flex-col items-center justify-center"
        >
          <p className="hidden sm:block sm:font-medium md:font-extrabold sm:text-sm md:text-xl xl:text-2xl">
            {title}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillCard;
