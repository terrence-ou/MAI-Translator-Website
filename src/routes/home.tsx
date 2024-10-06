import { currDistribution } from "@/releases";
import { useOutletContext } from "react-router-dom";
import { Download, CodeXml } from "lucide-react";
import appLight from "@/assets/app-light.png";
import appDark from "@/assets/app-dark.png";
import { buttonVariants } from "@/components/ui/button";

import { ContextType } from "./root";
import StoreFront from "@/components/StoreFront";
import { cn } from "@/lib/utils";
import Corners from "@/components/Corners";
import Demos from "@/components/Demos";

const Home = () => {
  const { theme } = useOutletContext<ContextType>();
  return (
    <div className="w-full text-center">
      <h1 className="font-serif tracking-tight pt-36">
        The All-in-One AI Translator
      </h1>
      <p className="max-w-[700px] mx-auto my-8 opacity-50">
        MAI Translator is an open-source, multi-ai-supported translator app that
        helps users fetch translation results from popular AI services and
        manage translation results locally.
      </p>
      <div className="flex justify-center gap-2">
        <a
          href={currDistribution}
          download
          className={cn(
            buttonVariants(),
            "w-40 px-0 font-normal hover:cursor-pointer",
          )}
        >
          <Download width={16} strokeWidth={1.5} className="mr-2" />
          Download Now
        </a>
        <a
          href="https://github.com/terrence-ou/MAI-Translator"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-40 px-0 font-normal hover:cursor-pointer transition-none",
          )}
        >
          <CodeXml width={16} strokeWidth={1.5} className="mr-2" />
          Source Code
        </a>
      </div>
      <p className="text-sm opacity-50 mt-3">
        *Download is only available for Apple Silicon for now.
      </p>
      <div className="relative frame border-b mt-44">
        <Corners />
      </div>
      <div className="flex flex-col items-center">
        <StoreFront imgSrc={theme === "dark" ? appDark : appLight} />
        <div className="frame relative border-b w-full -translate-y-6">
          <Corners />
        </div>
      </div>
      <div className="pb-8 flex flex-col items-center">
        <Demos />
      </div>
    </div>
  );
};

export default Home;
