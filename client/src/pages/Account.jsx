import React from "react";
import { navItems, sellerNavItems } from "../consts/DashboardConsts";
import DashboardLayout from "../components/layout/DashboardLayout";
import Error from "./Error";
import { useFetchUser } from "../hooks/queries/useUser";
import { LoaderCircle } from "lucide-react";

const Account = () => {
  const { data, isPending } = useFetchUser();
  console.log("data: ", data);
  const role = !isPending && data.role.name;
  console.log('isPending: ', isPending)
  console.log('role: ', role)

  return (
    !isPending &&
    (role === "customer" ? (
      <DashboardLayout navItems={navItems} />
    ) : role === "seller" ? (
      <DashboardLayout navItems={sellerNavItems} />
    ) : (
      <div className="h-screen flex items-center justify-center">
        <LoaderCircle className="animate-spin h-6 w-6 text-primary" />
      </div>
    ))
  );
};

export default Account;
