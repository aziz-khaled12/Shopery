import React, { useState } from "react";
import { DropdownMenu } from "../../ui";
import { PhoneCall, Menu } from "lucide-react";

const NavMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center container mx-auto px-4 sm:px-page py-5 justify-between w-full text/80">
        <div className="flex-grow flex items-center gap-4 lg:gap-6">
          {navOptions.map((option) => (
            <DropdownMenu
              key={option.name}
              triggerClassName="text-sm lg:text-base font-medium hover:text-primary transition-all duration-200"
              trigger={option.name}
              items={option.options}
            />
          ))}
          <button className="text-sm lg:text-base font-medium hover:text-primary transition-all duration-200 cursor-pointer">
            About Us
          </button>
          <button className="text-sm lg:text-base font-medium hover:text-primary transition-all duration-200 cursor-pointer">
            Contact Us
          </button>
        </div>
        <div className=" text-lg flex items-center gap-2">
          <PhoneCall size={20} />
          <div className="text-sm lg:text-base font-medium">0561036105</div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-primary p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <div className="text-white flex items-center gap-2">
          <PhoneCall size={18} />
          <div className="text-sm font-medium">0561036105</div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 flex flex-col space-y-3">
            {navOptions.map((option) => (
              <DropdownMenu
                key={option.name}
                triggerClassName="text-base font-medium hover:text-primary py-2"
                trigger={option.name}
                items={option.options}
                mobile
              />
            ))}
            <button className="text-base font-medium hover:text-primary py-2 text-left">
              About Us
            </button>
            <button className="text-base font-medium hover:text-primary py-2 text-left">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;