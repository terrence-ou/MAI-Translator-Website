import Header from "@/components/Header";

const Root = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex-1 px-root-x">
        <div className="frame border-x h-full"></div>
      </div>
    </div>
  );
};

export default Root;
