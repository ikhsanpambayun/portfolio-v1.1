import { PageWrapper } from "@/components/page-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "../../_components/project-card";

const page = () => {
  return (
    <PageWrapper>
      <div className="overflow-hidden">
        <div className="w-full min-h-screen py-5 md:py-10 space-y-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold max-w-[1200px]">
            Take a peek at some projects that I've happily worked on.
          </h1>
          <div className="w-full sm:p-14 p-5 flex flex-wrap justify-evenly sm:gap-14 gap-5 bg-gradient-to-br from-muted-foreground/5 to-primary/20 rounded-3xl">
            <ProjectCard
              url="/images/projects/jottion-thumb.png"
              title="Jottion"
              role="front-end developer"
              type="full stack website"
              stacks={[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Convex",
                "Clerk",
                "Framer Motion",
              ]}
              to="november 2023"
              site="https://jottion-app.vercel.app"
            />
            <ProjectCard
              url="/images/projects/biskita-thumb.png"
              title="Biskita Alternative App"
              role="front-end developer"
              type="full stack website"
              stacks={[
                "Gatsby.js",
                "JavaScript",
                "Tailwind",
                "Progressive Web App",
              ]}
              from="february 2023"
              to="may 2023"
              site="https://ta-biskita-fe.vercel.app"
            />
            <ProjectCard
              url="/images/projects/santai-thumb.png"
              title="Santai Furniture"
              role="front-end developer"
              type="full stack website"
              stacks={[
                "Next.js",
                "JavaScript",
                "Tailwind",
                "Redux",
                "Framer Motion",
              ]}
              to="october 2023"
              site="https://santai-remake.vercel.app"
            />
            <ProjectCard
              url="/images/projects/prompter-thumb.png"
              title="Prompter"
              role="front-end developer"
              type="full stack website"
              stacks={[
                "Next.js",
                "JavaScript",
                "Tailwind",
                "MongoDB",
                "Google OAuth",
              ]}
              to="november 2023"
              site="https://prompter-app.vercel.app"
            />
            <ProjectCard
              title="Sistem Informasi Peer Review Karya Ilmiah (SIPRD)"
              role="full-stack developer"
              type="full stack website"
              stacks={[
                "Django",
                "Python",
                "Vue.js",
                "PostgreSQL",
                "Test-Driven-Development",
              ]}
              to="november 2023"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
