import React from "react";
import AccountSettingsForm from "../features/forms/AccountSettingsForm";
import BillingAdressForm from "../features/forms/BillingAdressForm";
import ChangePassword from "../features/forms/ChangePassword";

const Settings = () => {
  return (
    <div className="flex flex-col gap-6">
      <AccountSettingsForm />
      <BillingAdressForm />
      <ChangePassword />
    </div>
  );
};

export default Settings;
