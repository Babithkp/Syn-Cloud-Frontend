import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Playground = () => {
  // State to manage menu visibility
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent ReactFlow from handling this click
    setIsMenuVisible((prev) => !prev);
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  // Close dropdown
  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="h-full">
      <div className="relative left-[5%] top-[10%] h-[85%] w-[90%] rounded-xl border-2 border-dotted border-red-500">
        <span className="rounded-xl w-[22vw] bg-white p-2 text-black flex items-center gap-3">
          Create a EC2 instance with 4GB Ram
          <GoDotFill
                  size={30}
                  className=" left-5 top-1/4 text-red-600"
                />
        </span>
        <div className="relative left-[5%] top-[10%] h-[75%] w-[90%] rounded-xl border-2 border-dotted border-green-500">
          <span className="rounded-lg w-[10vw] bg-[#00BA28C9] p-1 text-black flex items-center gap-5">
            ap-south-01m
            <FaAngleDown/>
          </span>
          <div className="relative left-[5%] top-[10%] h-[70%] w-[90%] rounded-xl border-2 border-dotted border-blue-500">
            <span className="rounded-lg w-[11vw] bg-[#0066BA] p-1 text-black flex items-center gap-5">
              Availability zone
              <FaAngleDown/>
            </span>
            <div
              className="relative left-[35%] top-[20%] h-[50%] w-[30%] cursor-pointer rounded-xl border-2 border-dotted border-[#E3750D]"
              onClick={toggleDropdown}
            >
              <p className="mt-7 text-center">
                EC2 <br /> my web server
              </p>

              {/* Dropdown */}
              {isDropdownVisible && <Dropdown />}
            </div>
            <button className="absolute bottom-0 right-0 m-2 rounded-xl bg-[#E3750D] p-2">
              <VscSend />
            </button>
          </div>
        </div>

        {/* Menu Container */}
        <div
          className="absolute bottom-0 right-0 inline-block text-right"
          onClick={(e) => e.stopPropagation()} // Prevent ReactFlow from capturing clicks
        >
          {isMenuVisible && (
            <div
              className="relative mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              onMouseLeave={closeMenu} // Optional: close menu when mouse leaves
            >
              <div className="py-1">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 hover:text-red-800"
                  onClick={() => {
                    closeMenu(); // Close menu after action
                  }}
                >
                  Terminate Services
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => {
                    closeMenu(); // Close menu after action
                  }}
                >
                  Add Services
                </button>
              </div>
            </div>
          )}
          <button
            className="m-4 rounded-xl bg-white p-2 text-black"
            onClick={toggleMenu}
          >
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground;
