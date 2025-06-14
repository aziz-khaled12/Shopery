import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  options = [],
  value,
  selectOption,
  placeholder = "Select an option",
  variant = "bordered",
  disabled = false,
  
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value) || null;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleOpen = (e) => {
    e.stopPropagation();
    if (!disabled) setIsOpen(prev => !prev);
  };

  const getStyles = () =>
    variant === "minimal"
      ? `py-2.5 px-3 ${disabled ? "opacity-60" : "hover:text-primary"}`
      : `py-2.5 px-3 border-2 border-green-gray-100 transition-all duration-200 rounded-md bg-white w-full ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "hover:border-primary"
        }`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${disabled ? "opacity-60" : ""}`}
    >
      <div
        className={`flex justify-between items-center cursor-pointer ${getStyles()}`}
        onClick={toggleOpen}
      >
        <span className={!selectedOption ? "text-gray-500" : ""}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`py-2.5 px-3 text-left cursor-pointer hover:bg-gray-100 ${
                value === opt.value ? "bg-blue-50 font-medium" : ""
              }`}
              onClick={() => {
                selectOption(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
