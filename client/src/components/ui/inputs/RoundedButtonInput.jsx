import React from "react";
import Button from "../buttons/Button";

const RoundedButtonInput = ({
  placeholder,
  buttonText,
  inputClassName,
  buttonClassName,
  inputType,
}) => {
  return (
    <div className="flex items-center relative w-full">
      <input
        type={inputType}
        placeholder={placeholder}
        className={`border border-gray-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm w-full pr-20 sm:pr-24 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${inputClassName}`}
      />
      <Button
      
        className={`absolute right-0 border border-primary ${buttonClassName}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default RoundedButtonInput;
