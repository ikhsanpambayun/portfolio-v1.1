"use client";

import React from "react";
import { PageWrapper } from "@/components/page-wrapper";
import SkillCard from "../../_components/skill-card";

const page = () => {
  return (
    <PageWrapper>
      <div className="w-full min-h-screen py-5 md:py-10 space-y-20">
        {/* <h1 className="fixed text-xl">skills</h1> */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold max-w-[1400px]">
          These are some of the technologies I've mastered and used in my
          projects.
        </h1>
        <div className="relative flex flex-wrap gap-5 md:gap-10">
          <div className="grow w-fit rounded-3xl flex flex-col p-5 md:p-10 gap-8 bg-gradient-to-br from-muted-foreground/5 to-primary/20">
            <div className="flex flex-col items-start gap-3">
              <p className="text-lg sm:text-xl md:text-2xl font-normal">
                Languages
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <SkillCard name="html" title="HTML" />
                <SkillCard name="css" title="CSS" />
                <SkillCard name="js" title="JavaScript" />
                <SkillCard name="ts" title="TypeScript" />
                <SkillCard name="python" title="Python" />
                <SkillCard name="java" title="Java" />
              </div>
            </div>
          </div>
          <div className="grow lg:max-w-[50%] rounded-3xl flex flex-col p-5 md:p-10 gap-8 bg-gradient-to-br from-muted-foreground/5 to-primary/20">
            <div className="flex flex-col items-end gap-3">
              <p className="text-lg sm:text-xl md:text-2xl font-normal">
                Frameworks
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-end">
                <SkillCard name="react" title="React" />
                <SkillCard name="next" title="Next.js" />
                <SkillCard name="gatsby" title="Gatsby.js" />
                <SkillCard name="vue" title="Vue.js" />
                <SkillCard name="django" title="Django" />
              </div>
            </div>
          </div>
          <div className="grow w-fit rounded-3xl flex flex-col p-5 md:p-10 gap-8 bg-gradient-to-br from-muted-foreground/5 to-primary/20">
            <div className="flex flex-col items-start gap-3">
              <p className="text-lg sm:text-xl md:text-2xl font-normal">
                Databases
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <SkillCard name="postgresql" title="PostgrSQL" />
                <SkillCard name="mongodb" title="MongoDB" />
              </div>
            </div>
          </div>
          <div className="grow w-fit rounded-3xl flex flex-col p-5 md:p-10 gap-8 bg-gradient-to-br from-muted-foreground/5 to-primary/20">
            <div className="flex flex-col items-start gap-3">
              <p className="text-lg sm:text-xl md:text-2xl font-normal">
                Others
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-end">
                <SkillCard name="framer" title="FramerMotion" />
                <SkillCard name="redux" title="Redux" />
                <SkillCard name="pwa" title="PWA" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
