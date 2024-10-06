import { CodeXml, Download } from "lucide-react";

const ReleaseCard = () => {
  return (
    <div className="w-full p-6 bg-background rounded-md">
      <div className="flex justify-between pb-3 border-b-[1px] border-primary/15">
        <p className="font-bold">0.5.3</p>
        <p className="tracking-wider opacity-50 text-sm">10/04/2024</p>
      </div>
      <div className="grid grid-cols-2 gap-6 py-3 border-b-[1px] border-primary/15">
        <a className="flex items-center gap-4 px-3 py-2 min-h-8 h-full text-sm rounded-md hover:cursor-pointer w-full bg-primary/5 dark:bg-primary/10 text-primary/70">
          <Download strokeWidth={1.5} width={20} />
          <span>MAI.Translator-arm64-0.5.3.zip</span>
        </a>
        <a className="flex items-center gap-4 px-3 py-2 min-h-8 h-full text-sm rounded-md hover:cursor-pointer w-full bg-primary/5 dark:bg-primary/10 text-primary/70">
          <CodeXml strokeWidth={1.5} width={20} />
          <span>Source code (zip)</span>
        </a>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div>
          <h3 className="text-xl font-serif tracking-wide">New Features</h3>
        </div>
        <div>
          <h3 className="text-xl font-serif tracking-wide">Bug Fixes</h3>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
