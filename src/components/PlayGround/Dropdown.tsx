import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface DropdownItem {
  name: string;
  children: {
    label: string;
    tag: string;
    nestedChildren?: { label: string; tag?: string }[];
  }[];
}

const Dropdown: React.FC = () => {
  const [items, setItems] = useState<DropdownItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);
  const [clickedIndices, setClickedIndices] = useState<{
    parent: number | null;
    child: number | null;
  }>({ parent: null, child: null });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: DropdownItem[] = [
        {
          name: "Operating System (AMI)",
          children: [
            { label: "Amazon Linux", tag: "Free" },
            { label: "Ubuntu", tag: "Free" },
            { label: "Red Hat Enterprise Linux (RHEL)", tag: "Paid" },
            { label: "Debian", tag: "Free" },
            { label: "CentOS", tag: "Free" },
          ],
        },
        {
          name: "Instance type",
          children: [
            { label: "t4g.nano", tag: "" },
            { label: "t4g.micro", tag: "" },
            { label: "t4g.small", tag: "" },
            { label: "t3.nano", tag: "" },
            { label: "m7g.large", tag: "" },
            { label: "m6i.large", tag: "" },
            { label: "m5a.large", tag: "" },
          ],
        },
        {
          name: "Network Settings",
          children: [
            { label: "RHEL 7", tag: "" },
            { label: "RHEL 8", tag: "" },
            {
              label: "Auto-assign Public IP",
              tag: "",
              nestedChildren: [{ label: "Enabled" }, { label: "Disabled" }],
            },
          ],
        },
        {
          name: "Storage",
          children: [
            { label: "SUSE 12", tag: "" },
            { label: "SUSE 15", tag: "" },
          ],
        },
        {
          name: "Advanced Details",
          children: [{ label: "User data (Optional)", tag: "" }],
        },
      ];
      setItems(data);
    };

    fetchData();
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveIndex(null);
      setActiveChildIndex(null);
      setClickedIndices({ parent: null, child: null });
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleParentClick = (index: number) => {
    const selectedItem = items[index];
    console.log("Parent clicked:", selectedItem.name);
    setActiveIndex(index);
    setClickedIndices((prev) => ({
      parent: prev.parent === index ? null : index,
      child: null,
    }));
  };

  const handleChildClick = (parentIndex: number, childIndex: number) => {
    const parentItem = items[parentIndex];
    const childItem = parentItem.children[childIndex];
    console.log("Child clicked:", {
      parent: parentItem.name,
      child: childItem.label,
      tag: childItem.tag,
    });
    if (clickedIndices.parent === parentIndex) {
      setActiveChildIndex(childIndex);
      setClickedIndices((prev) => ({
        ...prev,
        child: prev.child === childIndex ? null : childIndex,
      }));
    }
  };

  return (
    <div>
      <div
        ref={dropdownRef}
        className="absolute bottom-[10vw] left-[20%] z-10 w-[40%] rounded-md bg-[#131313] ring-1 ring-black ring-opacity-5"
      >
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
              onMouseLeave={() => {}}
            >
              <div
                className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm text-white"
                onClick={() => handleParentClick(index)}
                role="button"
                aria-haspopup="true"
                aria-expanded={activeIndex === index}
              >
                {item.name}
                <IoIosArrowForward />
              </div>

              {activeIndex === index && (
                <div
                  className="absolute left-full top-0 z-20 ml-2 w-60 rounded-md bg-[#131313] shadow-lg ring-1 ring-black ring-opacity-5"
                  role="menu"
                >
                  <ul className="py-1">
                    {item.children.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className="group relative flex cursor-pointer items-center justify-between px-4 py-2 text-sm text-white"
                        onMouseEnter={() => setActiveChildIndex(childIndex)}
                        onMouseLeave={() => {}}
                        onClick={() => handleChildClick(index, childIndex)}
                        role="menuitem"
                      >
                        <span>{child.label}</span>
                        <span
                          className={`${
                            child.tag === "Free"
                              ? "rounded-2xl border-2 border-[#009D22] bg-gray-800 px-2 text-[#009D22] backdrop-blur-0"
                              : child.tag === "Paid"
                                ? "rounded-2xl border-2 border-[#BAC800] bg-gray-800 px-2 text-[#BAC800] backdrop-blur-0"
                                : "text-gray-400"
                          }`}
                        >
                          {child.tag}
                        </span>

                        {child.nestedChildren &&
                          activeChildIndex === childIndex && (
                            <div
                              className="absolute left-full top-0 z-30 ml-2 w-40 rounded-md bg-[#131313] shadow-lg ring-1 ring-black ring-opacity-5"
                              role="menu"
                            >
                              <ul className="py-1">
                                {child.nestedChildren.map(
                                  (nestedChild, nestedIndex) => (
                                    <li
                                      key={nestedIndex}
                                      className="cursor-pointer px-4 py-2 text-sm text-white hover:bg-gray-700"
                                      role="menuitem"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        console.log("Nested Child clicked:", {
                                          parent: item.name,
                                          child: child.label,
                                          nestedChild: nestedChild.label,
                                        });
                                      }}
                                    >
                                      {nestedChild.label}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          )}
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
