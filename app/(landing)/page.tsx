"use client";

import { useState } from "react";
import Card from "./_components/card";

import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import BgTitle from "./_components/bg-title";
import { useRouter } from "next/navigation";
import { Contact2, FileCode2, PencilRuler, User2 } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [coverContent, setCoverContent] = useState(true);

  const [toggleName, setToggleName] = useState(true);

  const [toggleAbout, setToggleAbout] = useState(false);
  const [toggleSkills, setToggleSkills] = useState(false);
  const [toggleProjects, setToggleProjects] = useState(false);
  const [toggleContact, setToggleContact] = useState(false);

  const [toggleCard, setToggleCard] = useState(true);

  const nameVariants = {
    initial: {
      opacity: 0,
      y: 70,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    animate: {
      opacity: 100,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    after: {
      opacity: 0,
      y: -70,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  setTimeout(() => {
    setToggleName(false);
  }, 2000);

  setTimeout(() => {
    setCoverContent(false);
  }, 4500);

  const handleHover = (num: string) => {
    if (num === "1") {
      setToggleAbout(true);
    }
    if (num === "2") {
      setToggleSkills(true);
    }
    if (num === "3") {
      setToggleProjects(true);
    }
    if (num === "4") {
      setToggleContact(true);
    }
  };

  const handleHoverLeave = (num: string) => {
    if (num === "1") {
      setToggleAbout(false);
    }
    if (num === "2") {
      setToggleSkills(false);
    }
    if (num === "3") {
      setToggleProjects(false);
    }
    if (num === "4") {
      setToggleContact(false);
    }
  };

  const handleClick = (num: string) => {
    setCoverContent(true);
    setToggleCard(false);

    setTimeout(() => {
      if (num === "1") {
        router.push("/about-me");
      }
      if (num === "2") {
        router.push("/skills");
      }
      if (num === "3") {
        router.push("/projects");
      }
      if (num === "4") {
        router.push("/contact-me");
      }
    }, 1450);
  };

  return (
    <main className="p-3 h-screen w-screen overflow-hidden flex items-center justify-center">
      {coverContent && (
        <div className="absolute h-full w-full top-0 left-0 z-50"></div>
      )}
      <motion.div
        variants={nameVariants}
        initial="initial"
        animate={toggleName ? "animate" : "after"}
        className="absolute cursor-default"
      >
        <h1 className="text-8xl text-center font-semibold tracking-wider max-w-[80vw]">
          ikhsan pambayun
        </h1>
      </motion.div>
      <BgTitle title="about me" toggle={toggleAbout} />
      <BgTitle title="skills" toggle={toggleSkills} />
      <BgTitle title="projects" toggle={toggleProjects} />
      <BgTitle title="contact me" toggle={toggleContact} />
      {!toggleName && (
        <div className="w-full h-full grid grid-flow-row md:grid-flow-col-dense grid-cols-4 grid-rows-3 gap-3">
          <Card
            id="1"
            size="col-span-2"
            title="about me"
            duration={2}
            onHover={handleHover}
            onHoverLeave={handleHoverLeave}
            toggle={toggleCard}
            handleClick={handleClick}
            icon={User2}
          />
          <Card
            id="2"
            size="col-span-2"
            title="skills"
            duration={1.75}
            onHover={handleHover}
            onHoverLeave={handleHoverLeave}
            toggle={toggleCard}
            handleClick={handleClick}
            icon={PencilRuler}
          />
          <Card
            id="3"
            size="col-span-4 md:col-span-2 md:row-span-2"
            title="projects"
            duration={2.5}
            onHover={handleHover}
            onHoverLeave={handleHoverLeave}
            toggle={toggleCard}
            handleClick={handleClick}
            icon={FileCode2}
          />
          <Card
            id="4"
            size="col-span-4"
            title="contact me"
            duration={1.5}
            onHover={handleHover}
            onHoverLeave={handleHoverLeave}
            toggle={toggleCard}
            handleClick={handleClick}
            icon={Contact2}
          />
        </div>
      )}
    </main>
  );
}
