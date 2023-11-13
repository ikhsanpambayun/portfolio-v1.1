"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TextAnimateProps {
  name: string;
}

const TextAnimate = ({ name }: TextAnimateProps) => {
  const [openingText, setOpeningText] = useState(true);
  const [hoverText, setHoverText] = useState(99);
  const words = name.split("");

  const handleHoverText = (key: number) => {
    setHoverText(key);

    setTimeout(() => {
      setHoverText(99);
    }, 200);
  };

  setTimeout(() => {
    setOpeningText(false);
  }, 1000);

  return (
    <>
      {openingText && (
        <div className="flex sm:gap-1">
          {words.map((word, index) => {
            return (
              <motion.span
                key={index}
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: (index + 1) / 10,
                    ease: [0.33, 1, 0.68, 1],
                    duraiton: 0.07,
                  },
                }}
                className="text-5xl sm:text-8xl font-bold sm:font-semibold text-center align-top cursor-default"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      )}
      {!openingText && (
        <div className="relative flex sm:gap-1">
          {words.map((word, index) => (
            <div className="relative">
              <div
                className="absolute w-full h-full"
                onMouseEnter={() => handleHoverText(index)}
              ></div>
              <motion.span
                key={index}
                animate={
                  hoverText === index
                    ? {
                        opacity: 0.5,
                        transition: {
                          ease: [0, 0.55, 0.45, 1],
                          duraiton: 1,
                        },
                      }
                    : {
                        y: 0,
                      }
                }
                className="text-5xl sm:text-8xl font-bold sm:font-semibold text-center align-top cursor-default"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TextAnimate;
