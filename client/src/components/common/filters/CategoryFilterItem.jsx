import { ChevronDown } from "lucide-react";
import React from "react";

const CategoryFilterItem = ({ title, children, isOpen, setIsOpen }) => {
  return (
    <div className="w-full py-3">
      <div className={`w-full flex items-center justify-between mb-3 cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
        <h1 className="text-xl font-medium">{title}</h1>
        <ChevronDown
          className={` transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

export default CategoryFilterItem;
