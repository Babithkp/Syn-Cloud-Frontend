import CardContainer from "./CardContainer";

const Focus = () => {
  return (
    <div className="min-h-screen  bg-black p-5 text-white font-poppins font-normal">
      {" "}
      {/* overflow-hidden will prevent content from overflowing */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">Our Focus</h1>
        <p className="pt-2 text-lg">
          Simplifying AWS automation with cost-effective, scalable, and secure
          cloud management solutions
        </p>
      </div>
      <div className="mt-20">
        <CardContainer />
      </div>
    </div>
  );
};

export default Focus;
