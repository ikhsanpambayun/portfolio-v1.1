"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Hand, School } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/page-wrapper";
import TextAnimate from "../../_components/text-animate";
import Image from "next/image";

const page = () => {
  const handGestureVariants = {
    initial: {
      rotate: 30,
      transition: {
        duration: 0.2,
        repeat: Infinity,
      },
    },
    animate: {
      rotate: [50, -50, 50],
      transition: {
        repeatDelay: 0.3,
        repeat: Infinity,
      },
    },
  };

  return (
    <PageWrapper>
      <div className="overflow-hidden">
        <div className="h-screen py-5 md:py-10">
          <div className="h-full rounded-3xl flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-muted-foreground/5 to-primary/20 p-5">
            <div className="flex items-center cursor-default">
              <motion.span
                variants={handGestureVariants}
                animate="animate"
                className="p-3 mr-1"
              >
                <Hand className="w-7 h-7 stroke-foreground" />
              </motion.span>
              <h1 className="text-3xl font-medium tracking-wider">hi, i'm</h1>
            </div>
            <TextAnimate name="pambayun" />
            <div className="group sm:mt-3 sm:outline sm:outline-2 hover:outline-none sm:rounded-full hover:bg-foreground transition-all duration-300">
              <h3 className="align-top text-xl sm:text-3xl font-normal text-center tracking-wide px-5 py-2 group-hover:text-background cursor-default">
                front-end react developer
              </h3>
            </div>
          </div>
        </div>
        <div className="relative w-full py-20 space-y-20">
          <div className="w-full flex flex-wrap gap-10 justify-between">
            <div className="flex flex-col gap-32">
              <p className="text-2xl md:text-3xl xl:text-4xl font-medium tracking-wide leading-[2.2rem] md:leading-[3rem] lg:max-w-[50vw] xl:max-w-[60vw]">
                Hello! I'am muhammad{" "}
                <span className="text-3xl md:text-4xl xl:text-5xl font-bold">
                  ikhsan
                </span>{" "}
                asa pambayun, a recent graduate with a degree in computer
                science and a strong passion for{" "}
                <span className="text-3xl md:text-4xl xl:text-5xl font-bold">
                  front-end development
                </span>
                . I'm excited about creating stunning and user-friendly web
                experiences through the art of code.
              </p>
            </div>

            <div className="flex-grow relative md:max-w-[50vw] min-w-[250px] w-[30vw] min-h-[300px] sm:min-h-[370px] md:min-h-[420px] h-[40vw] rounded-xl overflow-hidden">
              <div className="absolute z-10 w-full h-full bg-gradient-to-br from-black/25 via-muted-foreground/10 to-black/20"></div>
              <Image
                src="/images/about/me4.jpeg"
                fill
                alt="profile picture"
                className="opacity-90 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-10 lg:gap-20">
            <p className="text-xl lg:text-2xl font-medium leading-[2rem] lg:max-w-[40vw] xl:max-w-[20vw]">
              Throughout my academic journey, I honed my skills in web
              development, with various frameworks and languages. It wasn't
              until my final year that I decided to focus on react.js.
            </p>
            <p className="text-xl lg:text-2xl font-medium leading-[2rem] lg:max-w-[40vw] xl:max-w-[30vw]">
              Outside of coding, you'll find me exploring different places on my
              beloved motorcycle, capturing the beauty of nature through
              photography, or just chilling out at a local coffee shop. I
              believe that a well-rounded life will enhance my creativity and
              problem-solving abilities, making me a more effective developer.
            </p>
          </div>
          <p className="text-2xl xl:text-3xl font-medium tracking-wide leading-[2rem]  md:leading-[2.5rem] md:max-w-[60vw]">
            I thrive in collaborative environments, valuing continuous learning
            and the exchange of ideas with experienced professionals. Let's
            collaborate on something exceptional! If you have a project or
            opportunity you'd like to discuss, feel free to connect with me.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
