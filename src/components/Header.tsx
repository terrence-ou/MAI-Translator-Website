import { Button } from "@/components/ui/button";
import appIcon from "@/assets/icon.png";

const Header = () => {
  return (
    <header className="frame border-b h-16 px-root-x bg-slate-100 shadow-md">
      <div className="frame flex items-center justify-between h-full border-x px-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={appIcon} className="w-10" />
            <h2 className="text-xl font-bold drop-shadow-xl">MAI Translator</h2>
          </div>
          <div>Releases</div>
        </div>
        <div className="flex items-center gap-8">
          <div>Theme</div>
          <Button>Download</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
