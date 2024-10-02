import DemoCard from "./DemoCard";
import { MousePointerClick, FolderDown, Bolt } from "lucide-react";

const Demos = () => {
  return (
    <div className="frame border w-full xl:w-[1140px] grid grid-cols-5 gap-3 px-6 py-8 bg-background/60 rounded-lg dark:ring-slate-700">
      <div className="text-left col-span-2">
        <h3 className="font-serif tracking-tight text-2xl">
          A Professional Translation Assistant
        </h3>
        <p className="opacity-50 leading-tight mt-2 mb-6">
          Reliable translations, local file management, and text reader give the
          user confidence in interpreting source languages and applying
          translations in production.
        </p>
        <div className="flex flex-col gap-4">
          <DemoCard
            title={"One-click for multiple results"}
            description="Get translations from multiple AI services by just clicking the button once."
            onClick={() => {}}
          >
            <MousePointerClick className="w-4" strokeWidth={1.5} />
          </DemoCard>
          <DemoCard
            title={"Local file management"}
            description="Store all translation results locally and export the recode by simply dragging and dropping."
            onClick={() => {}}
          >
            <FolderDown className="w-4" strokeWidth={1.5} />
          </DemoCard>
          <DemoCard
            title={"AI configurations"}
            description="Select available models and text-reading tones provided by AI service providers."
            onClick={() => {}}
          >
            <Bolt className="w-4" strokeWidth={1.5} />
          </DemoCard>
        </div>
      </div>
    </div>
  );
};

export default Demos;
