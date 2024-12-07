import { FaAngleDown } from "react-icons/fa";
import { SidebarProvider } from "@/components/ui/sidebar";
// import {  SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import FlowDiagram from "./FlowDiagram";
import { IoSparklesSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";

const Prompt: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // Properly type the event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <div className="flex items-center bg-[#13042A] font-poppins text-white">
      <SidebarProvider>
        <AppSidebar />
        {/* <SidebarTrigger /> */}
        <div className="flex h-screen w-screen flex-grow flex-col items-center">
          <p className="flex gap-5 p-5 text-5xl">
            Project name/Untitled file
            <FaAngleDown />
          </p>
          <div className="relative h-[80%] w-[90%] rounded-2xl border-2">
            <div className="absolute flex w-full justify-end gap-28">
              <div className="absolute right-[30vw] mt-14 flex h-[3rem] w-[40rem]">
                <input
                  type="text"
                  className="h-16 w-full rounded-3xl bg-gray-400 p-2 pl-10 pr-[6rem] text-gray-600 placeholder-gray-600 backdrop-blur-md focus:outline-none"
                  placeholder="Tell us which service you want to automate"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="absolute right-4 top-8 h-10 w-14 -translate-y-1/2 transform rounded-full border-2 border-black bg-white"
                  aria-label="Submit automation request"
                >
                  <IoSparklesSharp size={28} className="ml-4 text-black" />
                </button>
              </div>
              <div className="relative mr-5 mt-5 flex h-[10%] w-[20%] rounded-3xl bg-white font-normal text-black">
                <GoDotFill
                  size={30}
                  className="absolute left-5 top-1/4 text-green-600"
                />
                <p className="flex min-w-full items-center justify-end gap-16 p-5 text-center text-2xl">
                  Name
                  <FaAngleDown />
                </p>
              </div>
            </div>
            <FlowDiagram />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Prompt;
