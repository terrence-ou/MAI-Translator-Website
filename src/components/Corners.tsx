import { Diamond } from "lucide-react";
const Corners = () => {
  return (
    <>
      <Diamond className="absolute -bottom-[7px] -left-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
      <Diamond className="absolute -bottom-[7px] -right-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
    </>
  );
};

export default Corners;
