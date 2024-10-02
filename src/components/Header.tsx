import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import appIcon from "@/assets/icon.png";
import appIconDark from "@/assets/icon-dark.png";
import Corners from "./Corners";

type HeaderProps = {
  theme: "light" | "dark";
  switchTheme: () => void;
};

const Header = ({ theme, switchTheme }: HeaderProps) => {
  return (
    <header className="frame fixed top-0 left-0 w-full border-b px-root-x-sm 2xl:px-root-x bg-background shadow-md z-20 transition-all duration-300">
      <div className="frame relative flex items-center justify-between border-x h-14 px-12">
        <Corners />
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src={theme === "light" ? appIcon : appIconDark}
              className="w-10"
            />
            <h2 className="text-xl font-bold drop-shadow-xl tracking-wide">
              MAI Translator
            </h2>
          </div>
          <div>Get Started</div>
          <div>Releases</div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="w-7 h-7 p-0"
            variant="outline"
            onClick={switchTheme}
          >
            {theme === "light" ? (
              <Sun className="w-5" strokeWidth={"1.5px"} />
            ) : (
              <Moon className="w-5" strokeWidth={"1.5px"} />
            )}
          </Button>
          <a
            href="https://github.com/terrence-ou/MAI-Translator/releases/download/v0.5.2/MAI.Translator-darwin-arm64-0.5.2.zip"
            download
            className={cn(buttonVariants(), "hover:cursor-pointer h-8")}
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
