import { FaWandMagicSparkles } from "react-icons/fa6";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import "./Navbar.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center bg-gradient-radial animate-gradient-expansion h-screen text-center font-poppins font-normal">
      <div className="my-auto text-white">
        <p className="text-lg sm:text-xl mt-14">
          <strong className="mb-5 block text-3xl sm:text-6xl">
            Cloud Automation <br /> Made Easy.
          </strong>
          Effortlessly automate your AWS services, so you can focus on innovation.
        </p>

        <div className="mt-12 flex items-center justify-center">
          <div className="relative flex w-11/12 md:w-[40rem] h-[3rem]">
            <FaWandMagicSparkles
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
              size={20}
              aria-hidden="true"
            />
            <input
              type="text"
              className="w-full rounded-2xl border border-white bg-transparent p-2 pl-10 pr-[6rem] text-white focus:outline-none"
              placeholder="Enter your AWS task or service name"
              aria-label="Enter AWS task or service"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[30px] w-1/3 md:w-[25%] rounded-3xl bg-[#5e2ea7] text-white"
            >
              <Link to="/prompt">
                <span className="inline-block">Automate</span>
                {/* Add a loading indicator here, e.g., a spinner */}
              </Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-20">
          <p>
            Not sure what you can do with Syncloud? Scroll down to learn more.
          </p>
          <RiArrowDownDoubleLine size={30} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;