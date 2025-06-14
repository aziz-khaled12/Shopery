import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FormSelect = ({
  name,
  options = [],
  placeholder = "Select an option",
  setValue,
  register,
  watch,
  required,
  validation = {},
  value,
  selectOption,
  variant = "bordered",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const currentValue = watch?.(name) ?? value;
  const selectedOption = options.find(opt => opt.value === currentValue);

  console.log("selectedOption", selectedOption);

  useEffect(() => {
    const close = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const toggleOpen = (e) => {
    e.stopPropagation();
    if (!disabled) setIsOpen(prev => !prev);
  };

  const handleSelect = (val) => {
    setValue(name, val);
    selectOption?.(val);
    setIsOpen(false);
  };

  const getStyles = () =>
    variant === "minimal"
      ? `text-xs sm:text-sm md:text-base py-2.5 px-3 ${disabled ? "opacity-60" : "hover:text-primary"}`
      : `text-xs sm:text-sm md:text-base py-2.5 px-3 border-2 border-green-gray-100 ${isOpen && "border-primary"} rounded-md w-full ${
          disabled && "bg-gray-100 cursor-not-allowed text-xs sm:text-sm md:text-base"
        }`;

  return (
    <div ref={containerRef} className={`relative w-full ${disabled ? "opacity-60" : ""}`}>
      <input type="hidden" {...register(name, { required, ...validation })} />
      
      <div
        className={`flex justify-between items-center cursor-pointer ${getStyles()}`}
        onClick={toggleOpen}
      >
        <span className={!selectedOption ? "text-gray-500" : ""}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow">
          {options.map((opt, index) => (
            <li
              key={index}
              className={`py-2.5 px-3 text-left cursor-pointer hover:bg-gray-100 ${
                currentValue === opt.value ? "bg-blue-50 font-medium" : ""
              }`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormSelect;
