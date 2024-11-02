import { Diamond } from "lucide-react";
const Corners = ({
  top = false,
  bottom = true,
}: {
  top?: boolean;
  bottom?: boolean;
}) => {
  return (
    <>
      {top && (
        <>
          <Diamond className="absolute -top-[7px] -left-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
          <Diamond className="absolute -top-[7px] -right-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
        </>
      )}
      {bottom && (
        <>
          <Diamond className="absolute -bottom-[7px] -left-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
          <Diamond className="absolute -bottom-[7px] -right-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
        </>
      )}
    </>
  );
};

export default Corners;
