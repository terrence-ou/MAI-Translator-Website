import { useOutletContext } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, CodeXml } from "lucide-react";
import appLight from "@/assets/app-light.png";
import appDark from "@/assets/app-dark.png";

import { ContextType } from "./root";
import StoreFront from "@/components/StoreFront";

const Home = () => {
  const { theme } = useOutletContext<ContextType>();
  return (
    <div className="w-full text-center">
      <h1 className="font-serif tracking-tight pt-36">
        The All-in-One AI Translator
      </h1>
      <p className="max-w-[620px] mx-auto my-8 opacity-50">
        MAI Translator is a multi-ai supported translator app helps users to
        fetch translation results from popular AI services and to manage
        translation result locally.
      </p>
      <div className="flex justify-center gap-2">
        <Button className="w-40 px-0 font-normal">
          <Download width={16} strokeWidth={1.5} className="mr-2" />
          Download Now
        </Button>
        <Button
          className="w-40 px-0 font-normal hover:border-primary"
          variant="outline"
        >
          <CodeXml width={16} strokeWidth={1.5} className="mr-2" />
          Source Code
        </Button>
      </div>
      <div className="frame border-b mt-44"></div>
      <StoreFront imgSrc={theme === "dark" ? appDark : appLight} />
    </div>
  );
};

export default Home;
