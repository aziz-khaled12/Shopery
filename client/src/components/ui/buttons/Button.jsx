import React from "react";

// Reused sizing logic from IconButton
const sizeClassesMap = {
  small: "px-6 py-2.5 text-sm",
  medium: "text-xs sm:text-sm px-8 py-2.5 sm:py-3",
  large: "text-base px-10 py-4",
};

const responsiveSizeClasses = (size) => {
  if (typeof size === "string") {
    return sizeClassesMap[size] || sizeClassesMap["medium"];
  }

  if (typeof size === "object") {
    return Object.entries(size)
      .map(([breakpoint, value]) => {
        const prefix = breakpoint === "base" ? "" : `${breakpoint}:`;
        const classes = (sizeClassesMap[value] || "").split(" ");
        return classes.map((cls) => `${prefix}${cls}`).join(" ");
      })
      .join(" ");
  }

  return sizeClassesMap["medium"];
};

const Button = ({
  size = "medium",
  variant = "fill",
  children = "Button",
  fullWidth = false,
  grow = false,
  onClick,
  className=""
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-full 
        ${fullWidth ? "w-full" : grow ? "flex-grow" : "w-fit"}
        cursor-pointer text-center font-semibold transition-all duration-200 
        ${responsiveSizeClasses(size)} 
                ${
            variant === "white"
            ? "bg-white text-primary hover:bg-gray-200"
            : variant === "text"
            ? "bg-transparent text-primary hover:text-hard-primary"
            : variant === "fill"
            ? "bg-primary text-white hover:bg-hard-primary"
            : variant === "outlined"
            ? "border-2 border-primary text-primary hover:border-hard-primary hover:text-hard-primary"
            : variant === "disabled"
            ? "bg-gray-200 text-gray-400 !cursor-default"
            : variant === "gray"
            ? "bg-primary/10 text-primary hover:bg-hard-primary/20 hover:text-hard-primary"
            : ""
        } ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
