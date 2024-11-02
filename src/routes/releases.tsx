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
    <div className="flex flex-col min-h-full 2xl:px-44l">
      <div className="frame relative w-full text-center pt-24 pb-6 bg-primary/5 border-b">
        <h2 className="font-serif font-medium text-3xl tracking-wide pb-1">
          Releases
        </h2>
        <p className="opacity-50">Keep up with the latest releases</p>
        <Corners />
      </div>
      <div className="frame flex-1 grid grid-cols-5 px-12 2xl:px-28 transition-none">
        <div className="col-span-1 py-10">
          <div className="sticky top-20">
            <p
              className="font-medium text-xl mb-6 hover:cursor-pointer"
              onClick={() => navigate("/releases")}
            >
              Versions
            </p>
            <div className="flex flex-col gap-1">
              {releases.map((release) => (
                <a
                  key={`release-version-${release.version}`}
                  className="hover:cursor-pointer hover:underline"
                  onClick={() => navigate(`/releases/${release.version}`)}
                >
                  {release.version}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="frame border-x relative col-span-3 px-10 2xl:px-14 py-10 flex flex-col gap-8">
          {releaseList.map((release) => (
            <ReleaseCard key={release.version} release={release} />
          ))}
          <Corners top={true} />
        </div>
        <div className="col-span-1 py-10 pl-8 2xl:pl-14">
          <p className="font-medium text-xl mb-4">Notes</p>
          <p className="font-light text-base text-primary/70 mb-6">
            Download is only available for{" "}
            <span className="font-semibold underline">Apple Silicon Mac</span>{" "}
            due to developer's limited development and testing environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Releases;
