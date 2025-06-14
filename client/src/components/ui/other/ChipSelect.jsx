import React, { useState } from "react";

const ChipSelect = ({ options = [], selected = [], setSelected }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = (chip) => {
    setSelected(
      selected.includes(chip)
        ? selected.filter((c) => c !== chip)
        : [...selected, chip]
    );
  };

  const displayLimit = 10;
  const displayOptions = showAll ? options : options.slice(0, displayLimit);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2">
        {displayOptions.map((option) => {
          return (
            <button
              key={option.id}
              onClick={() => handleToggle(option.value)}
              className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 ${
                selected.includes(option.value)
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {option.label}
            </button>
          );
        })}

        {options.length > displayLimit && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-3 py-1 text-primary text-sm hover:underline"
          >
            {showAll
              ? "Show less"
              : `Show more (${options.length - displayLimit})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChipSelect;
