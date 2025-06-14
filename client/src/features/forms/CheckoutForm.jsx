import React, { useState } from "react";
import FormContainer from "../../components/ui/containers/FormContainer";
import { checkoutFormFields } from "./forms-fields";
import Select from "../../components/ui/inputs/Select";
import Textarea from "../../components/ui/inputs/Textarea";
import Input from "../../components/ui/inputs/Input";

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

  const renderField = (field) => {
    const props = {
      name: field.name,
      placeholder: field.placeholder,
      required: field.required,
      value: formData[field.name] || "",
    };

    switch (field.type) {
      case "select":
        return (
          <Select
            options={field.options}
            {...props}
            selectOption={(e) => handleChange(field.name, e)}
          />
        );
      case "textarea":
        return (
          <Textarea
            {...props}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );
      default:
        return (
          <Input
            type={field.type}
            {...props}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );
    }
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
            {renderField(field)}
          </div>
        ))}
      </form>
    </FormContainer>
  );
};

export default CheckoutForm;
