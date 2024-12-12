import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "./Dropdown"; // Ensure Dropdown is correctly implemented
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import EC2 from "../../assets/ec2.svg";

const Playground: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isBorderWhite, setIsBorderWhite] = useState<boolean>(false); // New state for border color

  const toggleMenu = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setIsMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleSendClick = () => {
    setShowDetails(true); // Show details when the button is clicked
    setIsBorderWhite(true); // Change border to white
  };

  return (
    <div className="h-full">
      <div
        className={`relative left-[5%] top-[10%] h-[85%] w-[90%] rounded-xl ${
          isBorderWhite ? "border-white" : "border-red-500"
        } border-2 border-dotted`}
      >
        <span className="flex w-[28vw] items-center gap-3 rounded-xl bg-white p-2 text-black">
          Create a EC2 instance with 4GB Ram
          <GoDotFill size={30} className="left-5 top-1/4 text-red-600" />
        </span>
        <div className="relative left-[5%] top-[5%] h-[75%] w-[90%] rounded-xl border-2 border-dotted border-green-500">
          <span className="flex w-[14vw] items-center gap-5 rounded-lg bg-[#00BA28C9] p-1 text-black">
            ap-south-01m
            <FaAngleDown />
          </span>
          <div className="relative left-[5%] top-[8%] h-[70%] w-[90%] rounded-xl border-2 border-dotted border-blue-500">
            <span className="flex w-[14vw] items-center gap-5 rounded-lg bg-[#0066BA] p-1 text-black">
              Availability zone
              <FaAngleDown />
            </span>
            <div
              className="relative left-[35%] top-[8%] h-[60%] w-[40%] cursor-pointer rounded-xl border-2 border-dotted border-[#E3750D] font-poppins"
              onClick={toggleDropdown}
            >
              <div className="flex m-6">
                <img className="m-2 w-[25%]" src={EC2} alt="" />
                <div className="mt-3 flex flex-col text-left">
                  <p>EC2</p>
                  <p className="text-sm text-gray-400">my web server</p>
                  {showDetails && (
                    <div className="mt-2">
                      <p className="text-sm">Instance ID - qwewe2345</p>
                      <p className="text-sm">Public IP - wer3ng3</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Dropdown */}
            {isDropdownVisible && <Dropdown />}
            <button
              className="absolute bottom-0 right-0 m-2 rounded-xl bg-[#E3750D] p-2"
              onClick={handleSendClick}
            >
              <VscSend />
            </button>
          </div>
        </div>

        {/* Menu Container */}
        <div
          className="absolute bottom-0 right-0 inline-block text-right"
          onClick={(e) => e.stopPropagation()}
        >
          {isMenuVisible && (
            <div
              className="relative mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              onMouseLeave={closeMenu}
            >
              <div className="py-1">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 hover:text-red-800"
                  onClick={closeMenu}
                >
                  Terminate Services
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Add Services
                </button>
              </div>
            </div>
          )}
          <button
            className="m-2 rounded-xl bg-white p-2 text-black"
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
