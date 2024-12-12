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

  const [vpcId, setVpcId] = useState<string | null>(null); // State for VPC ID
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch dropdown data and VPC ID from backend
  useEffect(() => {
    const fetchData = async () => {
      const dropdownData: DropdownItem[] = [
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
            { label: "Subnet", tag: "" },
            {
              label: "Auto-assign Public IP",
              tag: "",
              nestedChildren: [
                { label: "Enable", tag: "" },
                { label: "Disable", tag: "" },
              ],
            },
            { label: "Firewall", tag: "" },
          ],
        },
        {
          name: "Storage",
          children: [
            { label: "General purpose SSD (gp3)", tag: "" },
            { label: "Provisional IOPS SSD (io2)", tag: "" },
            { label: "io1", tag: "" },
            { label: "st1", tag: "" },
            { label: "sc1", tag: "" },
            { label: "Amazon FSx", tag: "" },
            { label: "S3", tag: "" },
            { label: "Glacier", tag: "" },
          ],
        },
        {
          name: "Advanced Details",
          children: [{ label: "User data (Optional)", tag: "" }],
        },
      ];

      setItems(dropdownData);

      // Simulate backend call to fetch VPC ID
      const fetchVpcId = async () => {
        const vpcIdFromBackend = "vpc-04a548e72a380090a"; // Replace with actual backend response
        setVpcId(vpcIdFromBackend);
      };

      fetchVpcId();
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
    const handleOutsideClick = (event: MouseEvent) => handleClickOutside(event);

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
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
              className="w-full rounded-xl border-none bg-[#131313] p-3 text-gray-400"
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
                    {item.name === "Network Settings" && vpcId && (
                      <li className="px-4 py-2 text-sm text-gray-400">
                        VPC: {vpcId}
                      </li>
                    )}
                    {item.children.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className={`group relative flex cursor-pointer items-center justify-between px-4 py-2 text-sm backdrop:blur-sm hover:rounded-xl hover:bg-gray-950 hover:opacity-60 ${
                          activeChildIndex === childIndex
                            ? "bg-gray-700"
                            : "text-white"
                        }`}
                        onMouseEnter={() => setActiveChildIndex(childIndex)}
                        onMouseLeave={() => setActiveChildIndex(null)}
                        onClick={() => handleChildClick(index, childIndex)}
                        role="menuitem"
                      >
                        <span>{child.label}</span>
                        <span
                          className={`${
                            child.tag === "Free"
                              ? "rounded-2xl border-2 border-[#009D22] bg-gray-800 px-2 text-[#009D22]"
                              : child.tag === "Paid"
                                ? "rounded-2xl border-2 border-[#BAC800] bg-gray-800 px-2 text-[#BAC800]"
                                : "text-gray-400"
                          }`}
                        >
                          {child.tag}
                        </span>
                        {/* Nested Dropdown */}
                        {activeChildIndex === childIndex &&
                          child.nestedChildren && (
                            <div
                              className="absolute left-full top-0 z-30 ml-2 w-40 rounded-md bg-[#131313] shadow-lg ring-1 ring-black ring-opacity-5"
                              role="menu"
                            >
                              <ul className="py-1">
                                {child.nestedChildren.map(
                                  (nestedChild, nestedChildIndex) => (
                                    <li
                                      key={nestedChildIndex}
                                      className="px-4 py-2 text-sm bg-[#131313] text-white"
                                      onClick={() =>
                                        console.log(
                                          `Nested Child clicked: ${nestedChild.label}`,
                                        )
                                      }
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

                    {/* Render the upload UI outside the map to avoid duplication */}
                    {item.name === "Advanced Details" && (
                      <div className="mt-2 space-y-3 rounded-lg bg-[#131313] p-3">
                        {/* Hidden file input */}
                        <input
                          type="file"
                          id="file-input"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              console.log("Selected file:", file.name);
                              // You can handle the file here (e.g., upload to the server or display its name)
                            }
                          }}
                        />
                        {/* Button to trigger file input click */}
                        <button
                          className="block w-full rounded-xl border-2 border-blue-500 px-4 py-2 text-gray-300"
                          onClick={() =>
                            document.getElementById("file-input")?.click()
                          }
                        >
                          Upload File
                        </button>
                        <textarea
                          rows={4}
                          placeholder="Upload data will appear here"
                          className="w-full rounded-lg border border-gray-500 bg-[#131313] p-3 text-gray-300 focus:border-gray-400"
                        />
                      </div>
                    )}
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
