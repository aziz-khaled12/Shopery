import React from "react";

const RadioButton = ({ option, checked = false, onChange, name }) => {


  return (
    <div>
      <label
        key={option.id}
        className="flex items-center rounded-lg group cursor-pointer transition-colors"
      >
        <input
          type="radio"
          name={name}
          value={option.id}
          checked={checked}
          onClick={() => onChange(option.id)}
          className="sr-only"
        />
        <div
          className={`sm:w-5 sm:h-5 w-4 h-4 rounded-full border mr-2 flex items-center justify-center transition-all duration-100  ${
            checked
              ? "border-2 border-primary"
              : "border-gray-300 group-hover:border-primary group-hover:border-2"
          }`}
        >
          {checked && (
            <div className="sm:w-3 sm:h-3 w-2 h-2 bg-primary rounded-full"></div>
          )}
        </div>
        <span className="text-xs sm:text-sm text-gray-700 font-medium ">
          {option.label}
        </span>
      </label>
    </div>
  );
};

export default RadioButton;
