import React from "react";
import RadioButton from "../buttons/RadioButton";

const RadioList = ({ options, onChange, selected }) => {
    return (
      <div className="w-full flex flex-col gap-2.5">
        {options.map((option) => (
          <RadioButton
            key={option.id}
            option={option}
            checked={selected === option.id}
            onChange={onChange}
            name={option.value}
          />
        ))}
      </div>
    );
  };

export default RadioList;
