import { ComponentProps } from "react";

type DemoCardProps = {
  title: string;
  description: string;
  onClick: () => void;
} & ComponentProps<"div">;

const DemoCard = ({ title, description, onClick, children }: DemoCardProps) => {
  return (
    <div
      onClick={onClick}
      className="hover:bg-accent px-2 py-2 hover:duration-300 rounded-md"
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
