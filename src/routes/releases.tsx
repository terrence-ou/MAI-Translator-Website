import Corners from "@/components/Corners";
import ReleaseCard from "@/components/ReleaseCard";
import { PlaneTakeoff, PlaneLanding } from "lucide-react";

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
      <div className="frame relative w-full text-center pt-24 pb-8 bg-primary/5 border-b">
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
              className="font-medium font-serif text-xl mb-6 hover:cursor-pointer"
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
          {releaseList.map((release, index) => (
            <div key={`${release.version}`}>
              {!version && index === 0 && (
                <div className="flex gap-4 items-center mb-6">
                  <PlaneTakeoff strokeWidth={"1.5px"} />
                  <p className="font-medium text-xl font-serif">
                    Latest Release
                  </p>
                </div>
              )}
              {!version && index === 1 && (
                <div className="flex gap-4 items-center mb-6">
                  <PlaneLanding strokeWidth={"1.5px"} />
                  <p className="font-medium text-xl font-serif">
                    Previous Releases
                  </p>
                </div>
              )}
              <ReleaseCard release={release} />
            </div>
          ))}
          <Corners top={true} />
        </div>
        <div className="col-span-1 py-10 pl-8 2xl:pl-14">
          <p className="font-medium text-xl mb-4 font-serif">Notes</p>
          <p className="font-light text-base text-primary/70 border-b-[0.5px] border-primary/50 mb-6 pb-6">
            Download is only available for
            <span className="font-semibold"> Apple Silicon Mac </span>
            due to developer's limited development and testing environment.
          </p>
          <p className="font-light text-base text-primary/70">
            You can also build <span className="font-semibold">Windows</span>,{" "}
            <span className="font-semibold">Linux</span>, and{" "}
            <span className="font-semibold">Intel Mac</span> versions from the
            source code; further tests might required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Releases;
