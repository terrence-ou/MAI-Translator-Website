import appIconDark from "@/assets/icon-dark.png";

const Footer = () => {
  return (
    <div className="w-full h-18 px-root-x bg-primary dark:bg-background border-t frame text-secondary dark:text-primary text-sm leading-tight tracking-wide">
      <div className="w-full h-full border-x frame flex items-center py-4 gap-7 justify-center">
        <img src={appIconDark} className="w-10 h-10" />
        <p>Terrece Ou @2024</p>
        <div className="flex">
          <p className="mx-3">Find me on:</p>
          <p>Github</p>
          <p className="px-3 mx-3 border-x">LinkedIn</p>
          <p>Contact me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
