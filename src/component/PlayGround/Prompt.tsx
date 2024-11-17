import VerticalNavbar from "../Home/VerticalNavbar"
import { IoSparklesSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";

const Prompt = () => {
  return (
        <div className="bg-[#13042A] flex items-center text-white font-poppins">    
        <VerticalNavbar/>     
            <div className="flex flex-col items-center flex-grow h-screen w-screen ">
                <p className=" text-5xl flex gap-5">
                    Project name/Untitled file

                    <FaAngleDown />
                </p>
                <div className="h-[85%] w-[90%] border-2 rounded-2xl top-10 dark:bg-[#13042A] bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.2] relative  flex  justify-center">
                    <div className=" flex justify-end border-2 w-full gap-28">
                        <div className="relative flex w-[40rem] h-[3rem] mt-14">
                        <input
                            type="text"
                            className="w-full h-16 rounded-3xl bg-gray-400 backdrop:blur-md p-2 pl-10 pr-[6rem] text-gray-600 placeholder-gray-600 focus:outline-none"
                            placeholder="Tell us which service you want to automate" // Input field for entering tasks
                        />
                        <button
                            type="submit"
                            className="absolute right-4  top-8 h-10 w-14 -translate-y-1/2 transform rounded-full border-2 border-black bg-white"
                        >
                            <IoSparklesSharp 
                            size={28}
                            className=" ml-4"
                            />
                        </button>
                        </div>
                        <div className=" w-[20%] h-[10%] mt-5 mr-5 text-black bg-white rounded-3xl ">
                            <p className=" text-4xl flex items-center gap-16 relative left-1 top-3 ">
                            <GoDotFill 
                            size={30}
                            className=" text-green-600 mt-2 p-1 "
                            />
                                Vikas
                            <FaAngleDown />
                            </p>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Prompt