import { releaseType } from "@/releases";
import { CodeXml, Download } from "lucide-react";

const ReleaseCard = ({ release }: { release: releaseType }) => {
  const { version, date, new_features, bug_fixes, links } = release;
  return (
    <div className="w-full p-6 bg-background/90 rounded-md">
      <div className="flex justify-between pb-3 border-b-[1px] border-primary/15">
        <p className="font-bold">{version}</p>
        <p className="tracking-wider opacity-50 text-sm">{date}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 py-3 border-b-[1px] border-primary/15">
        {Object.entries(links).map(([name, link]) => {
          return (
            <a
              className="flex items-center gap-4 px-3 py-2 min-h-8 h-full w-full text-sm rounded-md hover:cursor-pointer bg-primary/5 dark:bg-primary/10 text-primary/70"
              href={link}
              key={`${version}-${name}`}
            >
              {name === "Source Code (zip)" ? (
                <CodeXml strokeWidth={1.5} width={20} />
              ) : (
                <Download strokeWidth={1.5} width={20} />
              )}
              <span>{name}</span>
            </a>
          );
        })}
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {new_features && (
          <div>
            <h3 className="text-xl font-serif tracking-wide">New Features</h3>
            <ul>
              {new_features.map((feature, index) => (
                <li key={`${version}-feature-${index}`}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {bug_fixes && (
          <div>
            <h3 className="text-xl font-serif tracking-wide">Bug Fixes</h3>
            <ul>
              {bug_fixes.map((fix, index) => (
                <li key={`${version}-bugfix-${index}`}>{fix}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReleaseCard;
