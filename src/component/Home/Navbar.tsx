import "./Navbar.css";
import { FaWandMagicSparkles } from "react-icons/fa6"; // Importing magic wand icon
import { RiArrowDownDoubleLine } from "react-icons/ri"; // Importing double arrow down icon
import SyncCloud_Logo from '../../assets/syncloud_logo.svg'

const Navbar = () => {
  return (
    <>
      {/* Main container with background animation and full-screen height/width */}
      <div className="bg-gradient-radial animate-gradient-expansion h-screen  text-white ">
        {/* Navbar section with brand and menu items */}
        <div className="flex justify-between p-5 text-2xl">
          <div className=" flex align-middle">
            <img src={SyncCloud_Logo} /> 
            <p className=" my-auto mx-2 ">Sync Cloud</p> 
          </div>
          <ul className="flex relative cursor-pointer gap-4 text-[1.2rem] -left-[2%]">
            <li className="hover:underline">Try Sync Cloud!</li>
            <li className="hover:underline">Sign Up</li>
            <li className="hover:underline">Log in</li>
          </ul>
        </div>

        {/* Main headline and description section */}
        <div className="mt-40 text-center">
          <p className="text-xl">
            <strong className="mb-5 block  text-center text-6xl">
              Cloud Automation <br /> Made Easy.
            </strong>
            Effortlessly automate your AWS services, so you can focus on
            innovation.
          </p>

          {/* Input section with magic wand icon and button for automation */}
          <div className="mt-5 flex items-center justify-center">
            <div className="relative flex w-[35rem]">
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
        </div>

        {/* Section for encouraging users to scroll down */}
        <div className="mt-14 flex flex-col items-center text-center ">
          <p>
            Not sure what you can do with Syncloud? Scroll down to learn more.
          </p>
          <RiArrowDownDoubleLine size={30} className="mt-2" /> {/* Double arrow down icon */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
