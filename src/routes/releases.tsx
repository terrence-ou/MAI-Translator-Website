import Corners from "@/components/Corners";
import ReleaseCard from "@/components/ReleaseCard";

import releases from "@/releases";
import { useParams, useNavigate } from "react-router-dom";

const Releases = () => {
  const { version } = useParams();
  const navigate = useNavigate();
  const releaseList = version
    ? releases.filter((release) => release.version === version)
    : releases;
  return (
    <div className="flex flex-col">
      <div className="frame relative w-full text-center pt-24 pb-6 bg-primary/5 border-b">
        <h2 className="font-serif font-medium text-3xl tracking-wide pb-1">
          Releases
        </h2>
        <p className="opacity-50">Keep up with the latest releases</p>
        <Corners />
      </div>
      <div className="frame flex-1 grid grid-cols-3 px-12 xl:px-28 2xl:px-44 py-12">
        <div className="col-span-1 px-12">
          <p
            className="font-medium mb-6 hover:cursor-pointer"
            onClick={() => navigate("/releases")}
          >
            Versions
          </p>
          <div className="flex flex-col gap-1">
            {releases.map((release) => (
              <a
                key={`release-version-${release.version}`}
                className="hover:cursor-pointer"
                onClick={() => navigate(`/releases/${release.version}`)}
              >
                {release.version}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-2 px-6 flex flex-col gap-4">
          {releaseList.map((release) => (
            <ReleaseCard key={release.version} release={release} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Releases;
