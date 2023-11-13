"use client";

import { PageWrapper } from "@/components/page-wrapper";
import React from "react";
import Social from "../../_components/social";
import { Github, Gitlab, Instagram, Linkedin, Mail } from "lucide-react";

const page = () => {
  return (
    <PageWrapper>
      <>
        <div className="h-screen w-full py-5 md:py-10 flex flex-col gap-12">
          <h1 className="text-6xl md:text-8xl font-semibold max-w-[900px]">
            Like what you see? Send me a massage.
          </h1>
          <div className="space-y-2">
            <a href="mailto:ikhsan.pambayun@gmail.com">
              <p className="text-xl md:text-2xl font-medium">
                ikhsan.pambayun@gmail.com
              </p>
            </a>

            <p className="text-xl md:text-2xl font-medium">+6281804921391</p>
          </div>
          <div className="relative flex flex-col items-end mt-auto ml-auto w-full">
            <p className="absolute bottom-0 text-xl md:text-5xl font-medium mb-40 sm:mb-28">
              follow me on
            </p>
            <div className="flex flex-wrap gap-3 items-end justify-end">
              <Social logo={Github} url="https://gitlab.com/ikhsan.pambayun" />
              <Social logo={Gitlab} url="https://github.com/ikhsanpambayun" />
              <Social
                logo={Linkedin}
                url="https://www.linkedin.com/in/ikhsan-pambayun-142a3b13b/"
              />
              <Social
                logo={Instagram}
                url="https://www.instagram.com/ikhsan.pambayun/"
              />
              <Social logo={Mail} url="mailto:ikhsan.pambayun@gmail.com" />
            </div>
          </div>
        </div>
      </>
    </PageWrapper>
  );
};

export default page;
