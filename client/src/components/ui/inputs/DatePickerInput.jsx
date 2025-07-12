import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";


const DatePickerInput = ({
  placeholder,
  value,
  onChange,
  error,
  warning,
  success,
  required = false,
  className = "",
  name = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  let borderColor = "border-green-gray-100";
  if (error) borderColor = "border-danger";
  else if (warning) borderColor = "border-warning";
  else if (success) borderColor = "border-primary";

  const bgColor = success
    ? "bg-primary/5"
    : error
    ? "bg-danger/5"
    : warning
    ? "bg-warning/5"
    : "";

  const getStatusIcon = () => {
    if (error) return <AlertTriangle className="text-danger" size={16} />;
    if (warning) return <AlertCircle className="text-warning" size={16} />;
    if (success) return <CheckCircle className="text-primary" size={16} />;
    return null;
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <DatePicker
          selected={value}
          onChange={(date) => {
            onChange({ target: { name, value: date } });
          }}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
          placeholderText={placeholder}
          required={required}
          className={`transition-all text-xs sm:text-sm md:text-base text-gray-600 duration-200 accent-primary w-full border-2 ${borderColor} rounded-md outline-0 py-2.5 pl-10 pr-4 ${bgColor} ${
            borderColor === "border-green-gray-100"
              ? "focus:border-primary hover:border-primary"
              : ""
          } font-medium`}
          calendarClassName="custom-datepicker"
        />

        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Calendar className="text-gray-400" size={16} />
        </div>

        {getStatusIcon() && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {getStatusIcon()}
          </div>
        )}
      </div>

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
  );
};

export default DatePickerInput;
