import { currDistribution } from "@/consts";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Corners from "./Corners";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import appIcon from "@/assets/icon.png";
import appIconDark from "@/assets/icon-dark.png";

type HeaderProps = {
  theme: "light" | "dark";
  switchTheme: () => void;
};

const Header = ({ theme, switchTheme }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="frame fixed top-0 left-0 w-full border-b px-root-x-sm 2xl:px-root-x bg-background shadow-md z-20 transition-all duration-300">
      <div className="frame relative flex items-center justify-between border-x h-14 px-12">
        <Corners />
        <div className="flex items-center gap-8">
          <div
            className="flex items-center gap-3 hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={theme === "light" ? appIcon : appIconDark}
              className="w-10"
            />
            <h2 className="text-xl font-bold drop-shadow-xl tracking-wide">
              MAI Translator
            </h2>
          </div>
          {/* <div>Get Started</div> */}
          <div
            className="hover:cursor-pointer hover:underline"
            onClick={() => navigate("/releases")}
          >
            Releases
          </div>
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
            href={currDistribution}
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
