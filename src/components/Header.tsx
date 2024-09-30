import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import appIcon from "@/assets/icon.png";

const Header = () => {
  const [currTheme, setCurrTheme] = useState<"dark" | "light">(
    localStorage.getItem("theme")! as "dark" | "light",
  );
  const handleSwitchCurrTheme = () => {
    if (currTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setCurrTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setCurrTheme("dark");
    }
  };

  return (
    <header className="frame border-b h-16 px-root-x bg-background shadow-md">
      <div className="frame flex items-center justify-between h-full border-x px-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={appIcon} className="w-10" />
            <h2 className="text-xl font-bold drop-shadow-xl">MAI Translator</h2>
          </div>
          <div>Get Started</div>
          <div>Releases</div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="w-7 h-7 p-0"
            variant="outline"
            onClick={handleSwitchCurrTheme}
          >
            {currTheme === "light" ? (
              <Sun className="w-5" strokeWidth={"1.5px"} />
            ) : (
              <Moon className="w-5" strokeWidth={"1.5px"} />
            )}
          </Button>
          <Button>Download</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
