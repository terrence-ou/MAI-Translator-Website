import { Bot, HardDrive, FileAudio } from "lucide-react";

type StoreFrontProps = {
  imgSrc: string;
};

const StoreFront = ({ imgSrc }: StoreFrontProps) => {
  return (
    <div className="relative w-[1040px] text-center -translate-y-[6rem] bg-background/60 rounded-lg dark:ring-slate-700">
      <div className="absolute border frame top-0 left-0 w-full h-full rounded-lg z-20"></div>
      <div className="frame border-b w-full min-h-[6rem] grid grid-cols-3">
        <div className="px-4 py-3 text-left">
          <div className="flex items-center gap-2 pb-1">
            <Bot width={17} />
            <h3 className="text-sm">Multi-ai supported</h3>
          </div>
          <p className="text-xs tracking-tight opacity-70">
            Users can get translations from multiple popular AI services
            including DeepL, OpenAI, and Claude.
          </p>
        </div>
        <div className="frame px-4 py-3 border-x text-left">
          <div className="flex items-center gap-2 pb-1">
            <HardDrive width={17} />
            <h3 className="text-sm">Local first</h3>
          </div>
          <p className="text-xs tracking-tight opacity-70">
            Translation histories are stored locally and can easily be exported
            to markdown format by simply drag and drop.
          </p>
        </div>
        <div className="px-4 py-3 text-left">
          <div className="flex items-center gap-2 pb-1">
            <FileAudio width={17} />
            <h3 className="text-sm">Text reading</h3>
          </div>
          <p className="text-xs tracking-tight opacity-70">
            Using the OpenAI Text-to-Speech model to convert texts into
            natural-sounding high-quality audio.
          </p>
        </div>
      </div>
      <div className="py-8">
        <img
          src={imgSrc}
          className="rounded-xl shadow-primary/20 shadow-[0_0_60px_-10px] mx-auto w-[800px] h-[680px]"
        />
      </div>
    </div>
  );
};

export default StoreFront;
