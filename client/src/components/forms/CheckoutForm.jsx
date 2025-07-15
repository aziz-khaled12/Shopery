import React, { useState } from "react";
import { FormContainer } from "../../components/ui";
import { checkoutFormFields, renderField } from "./forms-fields";


const CheckoutForm = () => {
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
    <FormContainer title="Billing Information">
      <form onSubmit={onSubmit} className="grid grid-cols-12 gap-4">
        {checkoutFormFields.map((field, index) => (
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
    </FormContainer>
  );
};

export default CheckoutForm;
