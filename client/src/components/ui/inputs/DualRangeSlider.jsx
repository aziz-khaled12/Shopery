import { useState, useEffect } from "react";

export default function DualRangeSlider({
  min = 0,
  max = 1000,
  step = 10,
  initialMin = 100,
  initialMax = 800,
  onChange,
}) {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  // Handle input changes with validation
  const handleMinChange = (e) => {
    let value = Number(e.target.value);
    value = Math.max(min, Math.min(value, maxValue - step));
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    let value = Number(e.target.value);
    value = Math.min(max, Math.max(value, minValue + step));
    setMaxValue(value);
  };

  useEffect(() => {
    console.log(minValue, maxValue);
    onChange?.({ min: minValue, max: maxValue });
  }, [minValue, maxValue]);

  // Calculate positions for the range fill
  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="w-full"> 
      {/* Range slider track */}
      <div className="relative h-2 mb-8 bg-gray-200 rounded-full">
        {/* Active range fill */}
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{
            left: `${minPos}%`,
            width: `${maxPos - minPos}%`,
          }}
        />

        {/* Min thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          step={step}
          onChange={handleMinChange}
          className="absolute w-full h-2 top-0 left-0 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:pointer-events-auto"
        />

        {/* Max thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          step={step}
          onChange={handleMaxChange}
          className="absolute w-full h-2 top-0 left-0 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:pointer-events-auto"
        />
      </div>
    </div>
  );
}
