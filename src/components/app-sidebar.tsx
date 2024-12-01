import SyncCloud_Logo from "../assets/syncloud_logo.svg";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-[#13042A] opacity-75">
        <SidebarGroup className="gap-5">
          <SidebarGroupLabel className="flex justify-center">
            <Link to="/">
              <img
                src={SyncCloud_Logo}
                alt="SyncCloud Logo"
                className="w-16 h-16 p-2"
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className=" p-2" >
            <SidebarMenu className="text-white flex flex-col items-center gap-6">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/home"
                    className="flex items-center justify-center w-14 h-14 bg-[#1F083D]"
                  >
                    <VscAccount className="w-14 h-14" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/calendar"
                    className="flex items-center justify-center w-14 h-14 bg-[#1F083D]"
                  >
                    <IoBookOutline className="w-14 h-14" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/search"
                    className="flex items-center justify-center w-14 h-14 bg-[#1F083D]"
                  >
                    <AiFillCode className="w-14 h-14" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/settings"
                    className="flex items-center justify-center w-14 h-14 bg-[#1F083D]"
                  >
                    <IoSettingsOutline className="w-14 h-14" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
