import React, { useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
  Search,
  Mail,
  Lock,
  User,
} from "lucide-react";

const Input = ({
  type = "text",
  placeholder,
  warning,
  error,
  success,
  icon,
  name,
  value,
  onChange,
  className = "",
  required = false,
  isSearch = false,
  onSearch = () => {},
  searchButtonText = "Search",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  let borderColor = "border-green-gray-100";
  if (error) borderColor = "border-danger";
  else if (warning) borderColor = "border-warning";
  else if (success) borderColor = "border-primary";

  const getInputIcon = () => {
    // If explicitly provided icon, use that
    if (icon) {
      const IconComponent = icon;
      return <IconComponent className="text-gray-400" size={16} />;
    }

    // Default icons based on input type
    if (type === "email") {
      return <Mail className="text-gray-400" size={16} />;
    } else if (type === "password") {
      return <Lock className="text-gray-400" size={16} />;
    } else if (type === "search") {
      return <Search size={16} />;
    } else if (type === "user" || type === "name") {
      return <User className="text-gray-400" size={16} />;
    }

    return null;
  };

  // Determine status icon
  const getStatusIcon = () => {
    if (error) {
      return <AlertTriangle className="text-danger" size={16} />;
    } else if (warning) {
      return <AlertCircle className="text-warning" size={16} />;
    } else if (success) {
      return <CheckCircle className="text-primary" size={16} />;
    }
    return null;
  };

  const bgColor = success
    ? "bg-primary/5"
    : error
    ? "bg-danger/5"
    : warning
    ? "bg-warning/5"
    : "";

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="flex items-center relative">

          <input
            placeholder={placeholder}
            type={inputType}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`transition-all ${
              isSearch ? "pr-16 md:pr-24 md:min-w-[570px]" : ""
            } text-xs sm:text-sm md:text-base text-gray-600 duration-200 accent-primary w-full border-2 ${borderColor} rounded-md outline-0 py-2.5 px-3 ${bgColor} ${
              borderColor === "border-green-gray-100"
                ? "focus:border-primary hover:border-primary"
                : ``
            } ${getInputIcon() ? "pl-10" : ""} ${
              type === "password" || getStatusIcon() ? "pr-10" : ""
            }`}
          />

          {(getInputIcon() || isSearch) && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {isSearch ? (
                <Search className="text-black" size={16} />
              ) : (
                getInputIcon()
              )}
            </div>
          )}

          {/* Add search button */}
          {isSearch && (
            <button
              onClick={onSearch}
              className="absolute cursor-pointer right-0 top-0 h-full px-2 md:px-4 bg-primary text-white rounded-r-md border-2 border-primary font-semibold text-2xs md:text-sm hover:bg-hard-primary transition-all duration-200"
            >
              {searchButtonText}
            </button>
          )}
          {/* Left input icon */}
          {getInputIcon() && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {getInputIcon()}
            </div>
          )}

          {/* Status icon - positioned based on whether password toggle is present */}
          {getStatusIcon() && (
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 ${
                type === "password" ? "right-10" : "right-3"
              }`}
            >
              {getStatusIcon()}
            </div>
          )}

          {/* Password visibility toggle */}
          {type === "password" && (
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="text-gray-400" size={16} />
              ) : (
                <Eye className="text-gray-400" size={16} />
              )}
            </div>
          )}
        </div>

        {/* Error and warning messages */}
        {error && (
          <label className="text-sm font-normal text-danger mt-1 block">
            {error}
          </label>
        )}
        {!error && warning && (
          <label className="text-sm font-normal text-warning mt-1 block">
            {warning}
          </label>
        )}
        {!error && !warning && success && (
          <label className="text-sm font-normal text-primary mt-1 block">
            {success}
          </label>
        )}
      </div>
    </div>
  );
};

export default Input;