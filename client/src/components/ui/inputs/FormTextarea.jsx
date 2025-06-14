import React from "react";

const FormTextarea = ({
  name,
  label,
  placeholder = "Enter text...",
  rows = 4,
  disabled = false,
  register,
  validation = {},
  required = false,
  error = "",
  className = "",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <textarea
        id={name}
        {...register(name, { required, ...validation })}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`w-full p-3 border-2 border-green-gray-100 rounded-md focus:outline-none resize-none ${
          error ? "border-danger focus:border-danger" : "focus:border-primary"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"} ${className}`}
      />
      {error && <p className="text-danger text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormTextarea;
