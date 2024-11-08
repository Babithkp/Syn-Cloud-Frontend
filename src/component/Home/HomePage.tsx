import { FaWandMagicSparkles } from "react-icons/fa6"; // Importing magic wand icon
import { RiArrowDownDoubleLine } from "react-icons/ri"; // Importing double arrow down icon
import "./Navbar.css";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center bg-gradient-radial animate-gradient-expansion h-[100vh] text-center font-poppins font-normal">
        <div className=" my-auto text-white">
        <p className="text-xl mt-14">
            <strong className="mb-5 block  text-center text-6xl">
              Cloud Automation <br /> Made Easy.
            </strong>
            Effortlessly automate your AWS services, so you can focus on
            innovation.
          </p>

          {/* Input section with magic wand icon and button for automation */}
          <div className="mt-12 flex items-center justify-center">
            <div className="relative flex w-[40rem] h-[3rem]">
              <FaWandMagicSparkles
                className="absolute left-3 top-1/2 -translate-y-1/2 transform text-white"
                size={20} // Magic wand icon placed on the left side of the input
              />
              <input
                type="text"
                className="w-full rounded-2xl border border-white bg-transparent p-2 pl-10 pr-[6rem] text-white focus:outline-none"
                placeholder="Enter your AWS service or task to automate" // Input field for entering tasks
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 h-[30px] w-[25%] -translate-y-1/2 transform rounded-2xl bg-[#5e2ea7] text-white"
              >
                Automate now {/* Button to trigger the automation */}
              </button>
            </div>
          </div>

          {/* Section for encouraging users to scroll down */}
          <div className="flex flex-col items-center text-center mt-20">
            <p>
              Not sure what you can do with Syncloud? Scroll down to learn more.
            </p>
            <RiArrowDownDoubleLine size={30} className="mt-2" /> {/* Double arrow down icon */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
