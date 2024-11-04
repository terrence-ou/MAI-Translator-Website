import { Diamond } from "lucide-react";
const Corners = ({
  top = false,
  bottom = true,
  left = true,
  right = true,
}: {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}) => {
  return (
    <>
      {top && (
        <>
          {left && (
            <Diamond className="absolute -top-[7px] -left-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
          )}
          {right && (
            <Diamond className="absolute -top-[7px] -right-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
          )}
        </>
      )}
      {bottom && (
        <>
          {left && (
            <Diamond className="absolute -bottom-[7px] -left-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
          )}
          {right && (
            <Diamond className="absolute -bottom-[7px] -right-[7px] w-[14px] h-[14px] fill-background stroke-slate-400 dark:stroke-slate-500 duration-300" />
          )}
        </>
      )}
    </>
  );
};

export default Corners;
