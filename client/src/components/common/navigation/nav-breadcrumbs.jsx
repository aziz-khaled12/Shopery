import React from "react";
import NavBanner from "/NavBanner.png";
import { Breadcrumb } from "../../ui";

const NavBreadcrumbs = () => {
  return (
    <div className="w-full h-28 relative">
      <div className="absolute sm:px-page px-6 top-12">
        <Breadcrumb showHomeIcon />
      </div>
      <img src={NavBanner} alt="Nav Banner" className="w-full h-full" />
    </div>
  );
};

export default NavBreadcrumbs;
