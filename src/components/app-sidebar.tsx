import SyncCloud_Logo from "../assets/syncloud_logo.svg";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline, IoBookOutline } from "react-icons/io5";
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
          <SidebarGroupContent className="p-2">
            <SidebarMenu className="text-white flex flex-col items-center gap-8">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/home"
                    className="flex items-center justify-center w-16 h-16 bg-[#1F083D]"
                    aria-label="Home"
                  >
                    <VscAccount className="w-10 h-10" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/calendar"
                    className="flex items-center justify-center w-16 h-16 bg-[#1F083D]"
                    aria-label="Calendar"
                  >
                    <IoBookOutline className="w-10 h-10" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/search"
                    className="flex items-center justify-center w-16 h-16 bg-[#1F083D]"
                    aria-label="Search"
                  >
                    <AiFillCode className="w-10 h-10" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/settings"
                    className="flex items-center justify-center w-16 h-16 bg-[#1F083D]"
                    aria-label="Settings"
                  >
                    <IoSettingsOutline className="w-10 h-10" />
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
