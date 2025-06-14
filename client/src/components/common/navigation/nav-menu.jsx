import React from "react";
import { DropdownMenu } from "../../ui";
import { PhoneCall } from "lucide-react";

const NavMenu = () => {
  const navOptions = [
    {
      name: "Home",
      options: [{ label: "Home", value: 0 }],
      path: "/",
    },
    {
      name: "Shop",
      options: [{ label: "Shop", value: 0 }],
      path: "/shop",
    },
    {
      name: "Pages",
      options: [{ label: "Pages", value: 0 }],
      path: "/pages",
    },
    {
      name: "Blog",
      options: [{ label: "Blog", value: 0 }],
      path: "/blog",
    },
  ];
  return (
    <div className="flex items-center sm:px-page px-6 py-5 justify-between w-full text/80">
      <div className="flex-grow flex items-center gap-4">
        {navOptions.map((option) => (
          <DropdownMenu
            key={option.name}
            triggerClassName="text-sm font-medium hover:text-primary transition-all duration-200"
            trigger={option.name}
            items={option.options}
          />
        ))}
        <button className="text-sm font-medium  hover:text-primary transition-all duration-200 cursor-pointer">
          About Us
        </button>
        <button className="text-sm font-medium  hover:text-primary transition-all duration-200 cursor-pointer">
          Contact Us
        </button>
      </div>
      <div className="text-white text-lg flex gap-2">
        <PhoneCall />
        <div className="text-sm font-medium">0561036105</div>
      </div>
    </div>
  );
};

export default NavMenu;
