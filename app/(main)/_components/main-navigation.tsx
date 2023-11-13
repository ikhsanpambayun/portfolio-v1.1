"use client";

import { cn } from "@/lib/utils";
import {
  Contact2,
  FileCode2,
  Home,
  Menu,
  PencilRuler,
  User2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const MainNavigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(0);

  const handleScrolled = () => {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    console.log((winScroll / height) * 100);
    setScrolled((winScroll / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="md:hidden fixed top-2 right-0 p-2 border border-r-0 border-primary/10 hover:bg-primary/30 backdrop-blur-sm rounded-l-lg transition-all duration-300">
            <Menu className="w-6 h-6" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="h-full flex flex-col justify-center gap-8">
            <Link href="/" className="p-2">
              <p className="text-2xl font-semibold">Home</p>
            </Link>
            <Link href="/about-me" className="p-2">
              <p className="text-2xl font-semibold">About Me</p>
            </Link>
            <Link href="/skills" className="p-2">
              <p className="text-2xl font-semibold">Skills</p>
            </Link>
            <Link href="/projects" className="p-2">
              <p className="text-2xl font-semibold">Projects</p>
            </Link>
            <Link href="/contact-me" className="p-2">
              <p className="text-2xl font-semibold">Contact Me</p>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <TooltipProvider>
        <div
          key="nav"
          className="hidden md:block fixed bottom-5 left-1/2 -translate-x-1/2 z-[99999]"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="group flex gap-2 p-2 hover:gap-4 hover:p-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/">
                    <div
                      className={cn(
                        "border border-primary/10 hover:bg-primary/30 backdrop-blur-md p-1 group-hover:p-6 rounded-md transition-all duration-300 hover:scale-110"
                      )}
                    >
                      <Home className="w-4 h-4 group-hover:w-14 group-hover:h-14 transition-all duration-300" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-transparent backdrop-blur-sm mb-2 border-none">
                  <p className="text-xs">home</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/about-me">
                    <div
                      className={cn(
                        "border border-primary/10 hover:bg-primary/30 backdrop-blur-md p-1 group-hover:p-6 rounded-md transition-all duration-300 hover:scale-110",
                        pathname === "/about-me" ? "bg-primary/20" : ""
                      )}
                    >
                      <User2 className="w-4 h-4 group-hover:w-14 group-hover:h-14 transition-all duration-300" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-transparent backdrop-blur-sm mb-2 border-none">
                  <p className="text-xs">about me</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/skills">
                    <div
                      className={cn(
                        "border border-primary/10 hover:bg-primary/30 backdrop-blur-md p-1 group-hover:p-6 rounded-md transition-all duration-300 hover:scale-110",
                        pathname === "/skills" ? "bg-primary/20" : ""
                      )}
                    >
                      <PencilRuler className="w-4 h-4 group-hover:w-14 group-hover:h-14 transition-all duration-300" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-transparent backdrop-blur-sm mb-2 border-none">
                  <p className="text-xs">skills</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/projects">
                    <div
                      className={cn(
                        "border border-primary/10 hover:bg-primary/30 backdrop-blur-md p-1 group-hover:p-6 rounded-md transition-all duration-300 hover:scale-110",
                        pathname === "/projects" ? "bg-primary/20" : ""
                      )}
                    >
                      <FileCode2 className="w-4 h-4 group-hover:w-14 group-hover:h-14 transition-all duration-300" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-transparent backdrop-blur-sm mb-2 border-none">
                  <p className="text-xs">projects</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/contact-me">
                    <div
                      className={cn(
                        "border border-primary/10 hover:bg-primary/30 backdrop-blur-md p-1 group-hover:p-6 rounded-md transition-all duration-300 hover:scale-110",
                        pathname === "/contact-me" ? "bg-primary/20" : ""
                      )}
                    >
                      <Contact2 className="w-4 h-4 group-hover:w-14 group-hover:h-14 transition-all duration-300" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-transparent backdrop-blur-sm mb-2 border-none">
                  <p className="text-xs">contact me</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="w-1/2 h-0.5 rounded-full bg-muted">
              <div
                style={{
                  width: scrolled + "%",
                }}
                className="h-0.5 bg-foreground"
              ></div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

export default MainNavigation;
