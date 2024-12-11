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
        <SidebarGroup className="h-16  gap-14">
          <SidebarGroupLabel className="flex justify-center mt-3">
            <Link to="/">
              <img
                src={SyncCloud_Logo}
                alt="SyncCloud Logo"
                className="h-24 w-24 p-1"
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="p-4">
            <SidebarMenu className="flex flex-col items-center gap-8 text-white">
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Link
                    to="/home"
                    className="flex h-16 w-16 items-center justify-center bg-[#1F083D] text-white"
                    aria-label="Home"
                  >
                    <VscAccount className="h-10 w-10" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Link
                    to="/calendar"
                    className="flex h-16 w-16 items-center justify-center bg-[#1F083D] text-white"
                    aria-label="Calendar"
                  >
                    <IoBookOutline className="h-10 w-10" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Link
                    to="/search"
                    className="flex h-16 w-16 items-center justify-center bg-[#1F083D] text-white"
                    aria-label="Search"
                  >
                    <AiFillCode className="h-10 w-10" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Link
                    to="/settings"
                    className="flex h-16 w-16 items-center justify-center bg-[#1F083D] text-white"
                    aria-label="Settings"
                  >
                    <IoSettingsOutline className="h-10 w-10" />
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
