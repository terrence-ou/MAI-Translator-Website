import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextType } from "@/routes/root";
import { videoIds } from "@/consts";
import DemoCard from "./DemoCard";
import { MousePointerClick, FolderDown, Bolt } from "lucide-react";

const Demos = () => {
  const [currDemo, setCurrDemo] = useState<"translation" | "local" | "setting">(
    "translation",
  );
  const { theme } = useOutletContext<ContextType>();
  const currVideoId = videoIds[currDemo][theme];
  return (
    <div className="frame border w-full xl:w-[1140px] grid grid-cols-5 gap-10 px-12 py-8 bg-background/60 rounded-lg dark:ring-slate-700">
      <div className="text-left col-span-2">
        <h3 className="font-serif tracking-tight text-2xl">
          A Professional Translation Assistant
        </h3>
        <p className="opacity-50 leading-tight mt-2 mb-7 text-sm">
          Reliable translations, local file management, and text reader give the
          user confidence in interpreting source languages and applying
          translations in production.
        </p>
        <div className="flex flex-col gap-4">
          <DemoCard
            title={"One-click for multiple results"}
            description="Get translations from multiple AI services by just clicking the button once."
            selected={currDemo === "translation"}
            onClick={() => setCurrDemo("translation")}
          >
            <MousePointerClick className="w-4" strokeWidth={1.5} />
          </DemoCard>
          <DemoCard
            title={"Local file management"}
            description="Store all translation results locally and export the recode by simply dragging and dropping."
            selected={currDemo === "local"}
            onClick={() => setCurrDemo("local")}
          >
            <FolderDown className="w-4" strokeWidth={1.5} />
          </DemoCard>
          <DemoCard
            title={"AI configurations"}
            description="Select available models and text-reading tones provided by AI service providers."
            selected={currDemo === "setting"}
            onClick={() => setCurrDemo("setting")}
          >
            <Bolt className="w-4" strokeWidth={1.5} />
          </DemoCard>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded-md relative h-full my-auto">
          <iframe
            src={`https://player.vimeo.com/video/${currVideoId}?autoplay=0&title=0&portrait=0&byline=0&loop=1&muted=1&like=0`}
            className="absolute top-0 left-0 w-full h-[405px] rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Demos;
