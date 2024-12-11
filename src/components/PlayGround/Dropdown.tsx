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
        { name: "Operating System (AMI)", children: ["AMI 1", "AMI 2"] },
        { name: "Instance type", children: ["Version 18.04", "Version 20.04"] },
        { name: "Network Settings", children: ["RHEL 7", "RHEL 8"] },
        { name: "Storage", children: ["SUSE 12", "SUSE 15"] },
        { name: "Advanced Details", children: ["1", "2"] },
      ];
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-[25vw]">
      <div className="relative bottom-80 z-10 w-[80%] rounded-md bg-[#131313] ring-1 ring-black ring-opacity-5">
        <ul className="py-1">
          {/* Input Field */}
          <li className="mb-2">
            <label
              htmlFor="instance-name"
              className="mb-1 p-5 text-sm font-bold text-[#FFFFFF]"
            >
              Name
            </label>
            <input
              id="instance-name"
              type="text"
              placeholder="Enter an instance name"
              className="h-11 w-full rounded-md border-2 border-transparent bg-[#131313] px-4 text-base text-gray-400 transition-all duration-300 focus:border-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
            />
          </li>

          {/* Dropdown Items */}
          {items.map((item, index) => (
            <li
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Main Dropdown Item */}
              <div
                className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm text-white"
                role="button"
                aria-haspopup="true"
                aria-expanded={activeIndex === index}
              >
                {item.name}
                <IoIosArrowForward />
              </div>

              {/* Nested Dropdown */}
              {activeIndex === index && (
                <div
                  className="absolute left-full top-0 z-20 ml-2 w-48 rounded-md bg-[#131313] shadow-lg ring-1 ring-black ring-opacity-5"
                  role="menu"
                >
                  <ul className="py-1">
                    {item.children.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className="cursor-pointer px-4 py-2 text-sm text-white hover:bg-gray-700"
                        role="menuitem"
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
