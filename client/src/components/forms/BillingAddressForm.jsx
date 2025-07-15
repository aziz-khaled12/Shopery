import React, { useState } from "react";
import { SettingsFormContainer } from "../ui";
import { billingAddressFields, renderField } from "./forms-fields";

const BillingAddressForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };


  return (
    <SettingsFormContainer title="Billing Address">
      <div className="w-full p-6">
        <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4">
          {billingAddressFields.map((field, index) => (
            <div key={index} className={`${field.girdCols}`}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium mb-2"
              >
                {field.label}
              </label>
              {renderField(field, formData, handleChange)}
            </div>
          ))}
        </form>
      </div>
    </SettingsFormContainer>
  );
};

export default BillingAddressForm;
