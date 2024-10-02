import { useState } from "react";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

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
      <div className="flex-1 px-root-x">
        <div className="frame border-x h-full">
          <Outlet context={{ theme: currTheme } satisfies ContextType} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
