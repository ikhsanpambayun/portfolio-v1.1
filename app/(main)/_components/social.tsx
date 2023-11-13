import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SocialProps {
  logo: LucideIcon;
  url: string;
}

const Social = ({ logo: Logo, url }: SocialProps) => {
  const [animateLogo, setAnimateLogo] = useState(false);

  const handleMouseEnter = () => {
    setAnimateLogo(true);
  };

  const handleMouseLeave = () => {
    setAnimateLogo(false);
  };

  const handleClickVisit = (site: string) => {
    window.open(site, "_blank");
  };

  return (
    <div
      className="w-[70px] sm:w-[100px] hover:w-[130px] aspect-square bg-muted-foreground/20 backdrop-blur-md hover:bg-gradient-to-br hover: hover:from-muted-foreground/5 hover:to-primary/20 rounded-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClickVisit(url)}
    >
      <motion.div
        initial={{
          y: 0,
        }}
        animate={
          animateLogo
            ? {
                y: -100,
                opacity: 0,
              }
            : "initial"
        }
        className="flex justify-center items-center w-full h-full"
      >
        <Logo className="w-[70%] h-[70%]" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={
          animateLogo
            ? {
                y: 0,
                opacity: 1,
              }
            : "initial"
        }
        className="absolute top-0 flex justify-center items-center w-full h-full"
      >
        <Logo className="w-[70%] h-[70%]" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
};

export default Social;
