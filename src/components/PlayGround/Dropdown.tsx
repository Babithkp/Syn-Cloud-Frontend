import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";


interface DropdownItem {
  name: string;
  children: string[];
}

const Dropdown: React.FC = () => {
  const [items, setItems] = useState<DropdownItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: DropdownItem[] = [
        {
          name: "Operating System (AMI)",
          children: ["AMI 1", "AMI 2"],
        },
        {
          name: "Instance type",
          children: ["Version 18.04", "Version 20.04"],
        },
        {
          name: "Network Settings",
          children: ["RHEL 7", "RHEL 8"],
        },
        {
          name: "Storage",
          children: ["SUSE 12", "SUSE 15"],
        },
        {
          name: "Advanced Details",
          children: ["1", "2"],
        },
      ];
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-[25vw]">
      <div className="relative bottom-[20rem] right-14 z-10 w-[80%] rounded-md bg-[#131313] ring-1 ring-black ring-opacity-5">
        <ul className="py-1">
          <li>
            <label className="mb-1 p-5 text-sm font-bold text-[#FFFFFF] transition-colors duration-300 focus-within:text-gray-800 group-hover:text-gray-800">
              Name
            </label>{" "}
            <br />
            <input
              type="name"
              placeholder="Enter an instance name"
              className="h-11 rounded-md border-2 border-transparent bg-[#131313] px-4 text-base text-gray-400 transition-all duration-300 focus:border-gray-700 focus:outline-none focus:ring focus:ring-gray-500 group-hover:border-gray-700"
            />
          </li>
          {items.map((item, index) => (
            <li
              key={index}
              className="group relative" // Use group to handle hover
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Main dropdown item */}
              <div className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm text-white">
                {item.name}
                <span>
                  <IoIosArrowForward />
                </span>
              </div>

              {/* Nested dropdown */}
              {activeIndex === index && (
                <div className="absolute left-full top-0 z-20 ml-2 w-48 rounded-md bg-[#131313] shadow-lg ring-1 ring-black ring-opacity-5">
                  <ul className="py-1">
                    {item.children.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className="px-4 py-2 text-sm text-white"
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
