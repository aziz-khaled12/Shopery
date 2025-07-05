import React from "react";
import NavBanner from "/NavBanner.png";
import { Breadcrumb } from "../../ui";

const NavBreadcrumbs = () => {
  return (
    <div className="relative w-full h-auto min-h-[7rem]">
      {/* Banner image with responsive sizing */}
      <img 
        src={NavBanner} 
        alt="Navigation Banner" 
        className="w-full h-auto object-cover"
        style={{ minHeight: "7rem" }}
      />
      
      {/* Breadcrumb container with responsive positioning */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-page">
          <Breadcrumb showHomeIcon className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default NavBreadcrumbs;