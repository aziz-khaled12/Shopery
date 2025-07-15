import React, { useState } from "react";
import { SettingsFormContainer } from "../../components/ui";
import { changePasswordFields, renderField } from "./forms-fields";

const ChangePassword = () => {
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
    <SettingsFormContainer title="Change Password">
      <div className="w-full p-6">
        <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4">
          {changePasswordFields.map((field, index) => (
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

export default ChangePassword;
