import { useOutletContext } from "react-router-dom";
import { Download, CodeXml } from "lucide-react";
import appLight from "@/assets/app-light.png";
import appDark from "@/assets/app-dark.png";
import { buttonVariants } from "@/components/ui/button";

import { ContextType } from "./root";
import StoreFront from "@/components/StoreFront";
import { cn } from "@/lib/utils";

const Home = () => {
  const { theme } = useOutletContext<ContextType>();
  return (
    <div className="w-full text-center">
      <h1 className="font-serif tracking-tight pt-36">
        The All-in-One AI Translator
      </h1>
      <p className="max-w-[620px] mx-auto my-8 opacity-50">
        MAI Translator is a open source multi-ai supported translator app helps
        users to fetch translation results from popular AI services and to
        manage translation result locally.
      </p>
      <div className="flex justify-center gap-2">
        <a
          href="https://github.com/terrence-ou/MAI-Translator/releases/download/v0.5.2/MAI.Translator-darwin-arm64-0.5.2.zip"
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
            "w-40 px-0 font-normal hover:cursor-pointer",
          )}
        >
          <CodeXml width={16} strokeWidth={1.5} className="mr-2" />
          Source Code
        </a>
      </div>
      <p className="text-sm opacity-50 mt-3">
        *Download only available for Apple Silicon now.
      </p>
      <div className="frame border-b mt-44"></div>
      <StoreFront imgSrc={theme === "dark" ? appDark : appLight} />
    </div>
  );
};

export default Home;
