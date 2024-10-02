import { useState } from "react";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Corners from "@/components/Corners";

type ThemeType = "light" | "dark";
export type ContextType = { theme: ThemeType };

const Root = () => {
  const [currTheme, setCurrTheme] = useState<ThemeType>(
    localStorage.getItem("theme")! as ThemeType,
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
    <div className="flex flex-col w-full h-full">
      <Header theme={currTheme} switchTheme={handleSwitchCurrTheme} />
      <div className="flex-1 px-root-x-sm 2xl:px-root-x transition-all duration-300">
        <div className="frame relative border-x h-full">
          <Outlet context={{ theme: currTheme } satisfies ContextType} />
          <Corners />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
