import React from "react";
import {
  TopBar,
  SearchBar,
  NavMenu,
  NavBreadcrumbs,
} from "../common";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full mb-6">
      <TopBar />
      {pathname.includes("account") ? "" : <SearchBar />}
      <NavMenu />
      <NavBreadcrumbs />
    </div>
  );
};

export default Navbar;
