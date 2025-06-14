import React from 'react'
import Checkbox from '../inputs/Checkbox'

const CheckboxList = ({ options, onChange, selected }) => {
  return (
    <div className="w-full flex flex-col gap-2.5">
        {options.map((option) => (
            <Checkbox
                key={option.id}
                checked={option.id === selected}
                onChange={onChange}
                name={option.label}
                label={option.label}
            />
        ))}
    </div>
  )
};

export default CheckboxList;