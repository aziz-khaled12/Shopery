import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navItems } from "../consts/DashboardConsts";
import { LogOut } from "lucide-react";

const Account = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const handlePanelItemClick = (item) => {
    setSelected(item.name);
    navigate(item.path);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-page w-full py-8 sm:py-12 lg:py-20">
      {/* nav panel - mobile first hidden, shown on lg */}
      <div className="lg:block border border-gray-200 rounded-lg w-full lg:w-1/5 h-fit mb-6 lg:mb-0">
        <h1 className="pl-5 py-4 font-medium text-xl">Navigation</h1>
        <div className="flex flex-col">
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex cursor-pointer transition-all duration-100 items-center gap-2.5 ${
                  selected === item.name
                    ? "bg-green-gray-50 border-l-4 border-primary text-black"
                    : "hover:bg-gray-100 text-gray-500"
                } px-5 py-4`}
                onClick={() => handlePanelItemClick(item)}
              >
                {React.cloneElement(item.icon, { className: "h-6 w-6" })}
                <span>{item.name}</span>
              </div>
            );
          })}

          <div
            className={`flex cursor-pointer transition-all duration-300 items-center gap-2.5 hover:bg-gray-100 text-gray-500 px-5 py-4`}
            onClick={() => console.log("logout clicked")}
          >
            <LogOut className="h-6 w-6" />
            <span>log-out</span>
          </div>
        </div>
      </div>

      <main className="w-full lg:w-4/5 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Account;
