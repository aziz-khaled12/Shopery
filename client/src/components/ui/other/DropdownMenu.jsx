import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({
  trigger,
  items = [],
  icon = <ChevronDown />,
  dropdownPosition = "bottom",
  className = "",
  itemClassName = "",
  triggerClassName = "",
  dropdownClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    bottom: "top-full left-0",
    top: "bottom-full left-0",
    right: "top-0 left-full",
    left: "top-0 right-full",
  };

  const positionClass =
    positionClasses[dropdownPosition] || positionClasses.bottom;

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex items-center gap-2 cursor-pointer transition-transform duration-200 select-none ${triggerClassName}`}
      >
        {trigger}
        {icon}
      </div>

      <div
        className={`
          absolute z-50 min-w-max bg-white shadow-lg rounded-md py-2
          transition-all duration-200 origin-top-left
          ${positionClass}
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
          ${dropdownClassName}
        `}
      >
        <div className="py-1">
          {items.map((item, index) => (
            <div key={index}>
              {React.isValidElement(item) ? (
                item
              ) : (
                <div
                  className={`
                    px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer
                    ${itemClassName}
                  `}
                  onClick={() => {
                    item.onClick && item.onClick();
                    setIsOpen(false);
                  }}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
