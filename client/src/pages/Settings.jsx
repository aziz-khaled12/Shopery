import React from "react";
import {
  AccountSettingsForm,
  BillingAddressForm,
  ChangePassword,
} from "../components/forms";

const Settings = () => {
  return (
    <div className="flex flex-col gap-6">
      <AccountSettingsForm />
      <BillingAddressForm />
      <ChangePassword />
    </div>
  );
};

export default Settings;
