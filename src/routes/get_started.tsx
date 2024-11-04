import Corners from "@/components/Corners";
import HowToUse from "@/components/HowToUse";
import { Diamond } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="flex flex-col min-h-full 2xl:px-44l">
      <div className="frame relative w-full text-center pt-24 pb-8 bg-primary/5 border-b">
        <h2 className="font-serif font-medium text-3xl tracking-wide pb-1">
          Get Started
        </h2>
        <p className="opacity-50">
          An overview of how to set up and use the MAI Translator App.
        </p>
        <Corners />
      </div>
      <div className="frame flex-1 grid grid-cols-4 px-12 2xl:px-28 transition-none">
        <div className="col-span-1 py-10">
          <p
            className="font-medium font-serif text-xl mb-6 hover:cursor-pointer"
            // onClick={() => navigate("/releases")}
          >
            Guides
          </p>
          <div className="sticky top-20">
            <div className="flex flex-col gap-1">
              <a className="hover:cursor-pointer hover:underline">
                Download & Set Up App
              </a>
              <a className="hover:cursor-pointer hover:underline">
                Run source code
              </a>
              <a className="hover:cursor-pointer hover:underline">
                Build for platforms
              </a>
            </div>
          </div>
        </div>
        <div className="frame border-l relative col-span-3 px-10 2xl:px-14 py-10 flex flex-col gap-8">
          <HowToUse />
          <Corners top={true} right={false} />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
