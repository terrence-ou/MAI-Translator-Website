import Corners from "@/components/Corners";
import HowToUse from "@/components/HowToUse";
import RunSourceCode from "@/components/RunSourceCode";
import { HashLink } from "react-router-hash-link";

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
      <div className="frame flex-1 grid grid-cols-5 px-12 2xl:px-20 transition-none">
        <div className="col-span-1 py-10">
          <div className="sticky top-20">
            <p className="font-medium font-serif text-xl mb-6 hover:cursor-pointer">
              Guides
            </p>
            <div className="sticky top-20">
              <div className="flex flex-col gap-1">
                <HashLink
                  className="hover:cursor-pointer hover:underline"
                  smooth
                  to={"/get-started#download-setup"}
                >
                  Download & Set Up App
                </HashLink>
                <HashLink
                  className="hover:cursor-pointer hover:underline"
                  smooth
                  to={"/get-started#run-source-code"}
                >
                  Run source code
                </HashLink>
              </div>
            </div>
          </div>
        </div>
        <div className="frame border-l relative col-span-4 pl-10 pr-12 2xl:pl-14 2xl:pr-32 py-10 flex flex-col gap-8">
          <HowToUse />
          <div className="w-full border-b border-primary/20 my-2"></div>
          <RunSourceCode />
          <Corners top={true} right={false} />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
