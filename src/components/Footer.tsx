import appIconDark from "@/assets/icon-dark.png";

const Footer = () => {
  return (
    <div className="w-full h-18 px-root-x-sm 2xl:px-root-x bg-primary dark:bg-background border-t frame text-secondary dark:text-primary text-sm leading-tight tracking-wid transition-all duration-300">
      <div className="w-full h-full border-x frame flex items-center py-4 gap-7 justify-center">
        <img src={appIconDark} className="w-10 h-10" />
        <p>Terrence Ou @2024</p>
        <div className="flex">
          <p className="mx-3">Find me on:</p>
          <a
            href="https://github.com/terrence-ou/MAI-Translator"
            target="_blank"
            className="hover:underline hover:cursor-pointer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tingsong-ou-231931196/"
            target="_blank"
            className="px-3 mx-3 border-x hover:underline hover:cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:terrence@clickvisionstudio.com"
            className="hover:underline hover:cursor-pointer"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
