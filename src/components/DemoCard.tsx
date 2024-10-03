import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type DemoCardProps = {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
} & ComponentProps<"div">;

const DemoCard = ({
  title,
  description,
  onClick,
  selected,
  children,
}: DemoCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "hover:bg-accent px-2 py-2 hover:duration-300 rounded-md",
        selected && "bg-slate-200 dark:bg-slate-700",
      )}
    >
      <p className="font-light flex gap-2 mb-1">
        <span>{children}</span>
        {title}
      </p>
      <p className="text-sm opacity-50">{description}</p>
    </div>
  );
};

export default DemoCard;
