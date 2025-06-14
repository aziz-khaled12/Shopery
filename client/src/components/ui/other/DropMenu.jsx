import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropMenu = (title, children) => {
  const [open, setOpen] = useState(false);


  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={toggle}>
        <h1 className="text-xl font-medium">{title}</h1>
        <ChevronDown
          className={`${open && "rotate-180"} duration-300 transition-all`}
        />
      </div>

      <div
        className={`${
          open ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropMenu;
