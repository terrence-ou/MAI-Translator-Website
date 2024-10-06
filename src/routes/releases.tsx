import Corners from "@/components/Corners";
import ReleaseCard from "@/components/ReleaseCard";

const Releases = () => {
  return (
    <div className="flex flex-col">
      <div className="frame relative w-full text-center pt-24 pb-6 bg-primary/5 border-b">
        <h2 className="font-serif font-medium text-3xl tracking-wide pb-1">
          Releases
        </h2>
        <p className="opacity-50">Keep up with the most-recent releases</p>
        <Corners />
      </div>
      <div className="flex-1 grid grid-cols-3 px-16 py-12">
        <div className="col-span-1 px-12">
          <p className="font-medium mb-6">Beta Releases</p>
          <p className="">0.5.3</p>
        </div>
        <div className="col-span-2 px-6">
          <ReleaseCard />
        </div>
      </div>
    </div>
  );
};

export default Releases;
