import { motion } from "framer-motion";

interface BgTitleProps {
  title: string;
  toggle: boolean;
}

const BgTitle = ({ title, toggle }: BgTitleProps) => {
  const titleVariants = {
    initial: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.15,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    animate: {
      opacity: 100,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  return (
    <motion.div
      variants={titleVariants}
      initial="initial"
      animate={toggle ? "animate" : "initial"}
      className="absolute px-10 cursor-default"
    >
      <h1 className="text-[13vw] text-center font-bold">{title}</h1>
    </motion.div>
  );
};

export default BgTitle;
