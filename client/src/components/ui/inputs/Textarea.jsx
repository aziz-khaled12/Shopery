import React from "react";

const Textarea = ({
  value,
  onChange,
  placeholder = "Enter text...",
  disabled = false,
  rows = 4,
  className = "",
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      className={`w-full p-3 border-green-gray-100 border-2 rounded-md focus:outline-none focus:border-primary hover:border-primary transition-all duration-200 resize-none ${
        disabled && "cursor-not-allowed"
      } ${className}`}
    />
  );
};

export default Textarea;
