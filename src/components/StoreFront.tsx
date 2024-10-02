import { Bot, HardDrive, FileAudio } from "lucide-react";

type StoreFrontProps = {
  imgSrc: string;
};

const StoreFront = ({ imgSrc }: StoreFrontProps) => {
  return (
    <div className="w-[860px] text-center mx-auto -translate-y-[6rem] bg-background/60 rounded-lg shadow-2xl dark:ring-slate-700">
      <div className="frame border-b w-full min-h-[6rem] grid grid-cols-3">
        <div className="px-4 py-2 text-left">
          <div className="flex items-center gap-2 pb-1">
            <Bot width={17} />
            <h3 className="text-sm">Multi-ai supported</h3>
          </div>
          <p className="text-xs tracking-tight opacity-70">
            User can get translations from multiple popular AI services
            including DeepL, OpenAI, and Claude
          </p>
        </div>
        <div className="frame px-4 py-2 border-x text-left">
          <div className="flex items-center gap-2 pb-1">
            <HardDrive width={17} />
            <h3 className="text-sm">Local first</h3>
          </div>
          <p className="text-xs tracking-tight opacity-70">
            Translation histories are stored locally and can easily export to
            markdown format by simply drag and drop.
          </p>
        </div>
        <div className="px-4 py-2 text-left">
          <div className="flex items-center gap-2 pb-1">
            <FileAudio width={17} />
            <h3 className="text-sm">Text reading</h3>
          </div>
          <p className="text-xs tracking-tight opacity-70">
            Using OpenAI Text-to-Speech model to convert texts into
            natural-sounding high quality audio.
          </p>
        </div>
      </div>
      <div className="py-6">
        <img
          src={imgSrc}
          width={"760px"}
          className="rounded-xl shadow-primary/15 shadow-[0_0_60px_-10px] mx-auto "
        />
      </div>
    </div>
  );
};

export default StoreFront;
