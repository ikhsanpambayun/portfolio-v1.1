"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectSheetProps {
  children: React.ReactNode;
  url?: string;
  title: string;
  role: string;
  type: string;
  stacks: string[];
  from?: string;
  to: string;
  site?: string;
}

const ProjectSheet = ({
  children,
  url,
  title,
  role,
  type,
  stacks,
  from,
  to,
  site,
}: ProjectSheetProps) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleClickVisit = (site: string) => {
    window.open(site, "_blank");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[80%] lg:max-w-[60%] h-full sm:max-h-[80%]">
          <DialogHeader>
            <DialogTitle>Project Detail</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col overflow-auto space-y-3 p-2">
            {url && (
              <div className="">
                <Image
                  src={url}
                  width={1000}
                  height={1000}
                  className="w-full object-contain"
                  alt="web img"
                />
              </div>
            )}
            <p className="text-muted-foreground text-sm pt-5">
              {from ? capitalize(from) + " - " : ""}
              {capitalize(to)}
            </p>
            <div className="flex justify-between items-center gap-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                {title} - <span className="font-light italic">{role}</span>
              </h1>
              {site && (
                <Button
                  className="cursor-pointer"
                  size="sm"
                  variant="outline"
                  onClick={() => handleClickVisit(site)}
                  asChild
                >
                  <div className="flex items-center gap-2">
                    <p>Visit</p>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </Button>
              )}
            </div>
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectSheet;
