import { FaAngleDown } from "react-icons/fa";
import { SidebarProvider } from "@/components/ui/sidebar";
// import {  SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import FlowDiagram from "./FlowDiagram";
import { GoDotFill } from "react-icons/go";

const Prompt: React.FC = () => {


  return (
    <div className="flex items-center bg-[#13042A] font-poppins text-white">
      <SidebarProvider>
        <AppSidebar />
        {/* <SidebarTrigger /> */}
        <div className="flex h-screen w-screen flex-grow flex-col  items-center">
          <p className="flex gap-5 p-5 text-3xl">
           File Name
            <FaAngleDown />
          </p>
          <p className="flex right-0  items-center justify-end absolute gap-16 p-5 text-center text-xl">
                  Name
                  <FaAngleDown />
                </p>
          <div className="relative h-[80%] w-[90%] rounded-2xl border-2">
            <div className="absolute flex w-full justify-end gap-28">
              <div className="relative mr-5 mt-5 flex h-[10%] w-[20%] rounded-3xl bg-white font-normal text-black">
                <GoDotFill
                  size={30}
                  className="absolute left-5 top-1/4 text-green-600"
                />
                <p className="flex min-w-full items-center justify-end gap-16 p-5 text-center text-xl">
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
