import { Badge } from "@/components/ui/badge";
import ProjectSheet from "./project-sheet";
import Image from "next/image";

interface ProjectCardProps {
  url?: string;
  title: string;
  role: string;
  type: string;
  stacks: string[];
  from?: string;
  to: string;
  site?: string;
}

const ProjectCard = ({
  url,
  title,
  role,
  type,
  stacks,
  from,
  to,
  site,
}: ProjectCardProps) => {
  return (
    <ProjectSheet
      url={url}
      title={title}
      role={role}
      type={type}
      stacks={stacks}
      from={from}
      to={to}
      site={site}
    >
      <div className="max-w-[288px] sm:min-w-[320px] min-h-[430px] bg-gradient-to-br from-primary/30 to-muted-foreground/30 rounded-xl cursor-pointer">
        <div className="relative p-3 gap-y-2 h-full w-full flex flex-col">
          <div className="relative w-full h-[148.5px] sm:h-[166.5px] bg-primary rounded-lg overflow-hidden">
            {url ? (
              <>
                <div className="absolute z-10 w-full h-full bg-gradient-to-br from-black/25 via-muted-foreground/10 to-black/20"></div>
                <Image src={url} fill className="object-cover" alt="web img" />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-tl from-gray-900/90 to-gray-700/90"></div>
            )}
          </div>
          <div>
            <p className="text-xl font-bold">{title}</p>
            <p className="text-sm font-light">{role}</p>
          </div>
          <hr />
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="cursor-default">
              {type}
            </Badge>
            {stacks.map((stack) => (
              <Badge variant="outline" className="cursor-default">
                {stack}
              </Badge>
            ))}
          </div>
          <hr />
          <div className="flex justify-between items-end flex-1">
            <div className="flex flex-col">
              <p className="text-xs font-light">{from}</p>
              <p className="text-xs font-light">{to}</p>
            </div>
            <div>
              <p className="text-xs font-light w-20 text-end">
                click me for more info
              </p>
            </div>
          </div>
          <div className="mx-auto w-full h-2 rounded-full bg-gradient-to-br from-foreground/20 to-border"></div>
        </div>
      </div>
    </ProjectSheet>
  );
};

export default ProjectCard;
