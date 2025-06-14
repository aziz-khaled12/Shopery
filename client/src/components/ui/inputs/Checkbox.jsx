import { Check } from "lucide-react";
import React from "react";

const Checkbox = ({
  id,
  name,
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <label
        htmlFor={id}
        className={`relative flex items-center cursor-pointer select-none ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <div
          className={`
            w-5 h-5 border-2 rounded-md flex items-center justify-center
            border-gray-400 peer-checked:border-primary peer-checked:bg-primary
            transition-colors
          `}
        >
          <Check strokeWidth={4} className="text-white" />
        </div>
        {label && (
          <span className="ml-2 text-sm text-gray-900">{label}</span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
