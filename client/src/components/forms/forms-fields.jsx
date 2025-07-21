import { Input, Select, Textarea } from "../ui";


export const checkoutFormFields = [
  {
    name: "firstName",
    id: "first-name",
    label: "First name",
    placeholder: "Your first name",
    type: "text",
    required: true,
    section: "basic",
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "lastName",
    id: "last-name",
    label: "Last name",
    placeholder: "Your last name",
    type: "text",
    required: true,
    section: "basic",
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "companyName",
    id: "company-name",
    label: "Company Name (optional)",
    placeholder: "Company name",
    type: "text",
    required: false,
    section: "basic",
    girdCols: "col-span-12 sm:col-span-12 md:col-span-4", // replaces cols: 4
  },
  {
    name: "streetAddress",
    id: "street-address",
    label: "Street Address",
    placeholder: "Street address",
    type: "text",
    required: true,
    section: "address",
    girdCols: "col-span-12", // replaces cols: 12
  },
  {
    name: "countryRegion",
    id: "country-region",
    label: "Country / Region",
    placeholder: "Select a country",
    type: "select",
    required: true,
    section: "address",
    options: [
      { label: "United States", value: "US" },
      { label: "Algeria", value: "DZ" },
    ],
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "state",
    id: "state",
    label: "State",
    placeholder: "Select a state",
    type: "select",
    required: true,
    section: "address",
    options: [{ lablel: "Tebessa", value: "tebessa" }],
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "zipCode",
    id: "zip-code",
    label: "Zip Code",
    placeholder: "Zip code",
    type: "text",
    required: true,
    section: "address",
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "email",
    id: "email-address",
    label: "Email Address",
    placeholder: "Email address",
    type: "text",
    required: true,
    section: "contact",
    girdCols: "col-span-12 sm:col-span-6", // replaces cols: 6
  },
  {
    name: "phoneNumber",
    id: "phone-number",
    label: "Phone number",
    placeholder: "Phone number",
    type: "tel",
    required: true,
    section: "contact",
    girdCols: "col-span-12 md:col-span-6", // replaces cols: 6
  },
  {
    name: "orderNotes",
    id: "order-notes",
    label: "Order Notes (Optional)",
    placeholder: "Notes about your order",
    type: "textarea",
    required: false,
    section: "additional",
    girdCols: "col-span-12", // replaces cols: 12
  },
];

export const billingAddressFields = [
  {
    name: "firstName",
    id: "first-name",
    label: "First name",
    placeholder: "Your first name",
    type: "text",
    required: true,
    section: "basic",
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "lastName",
    id: "last-name",
    label: "Last name",
    placeholder: "Your last name",
    type: "text",
    required: true,
    section: "basic",
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "company",
    id: "company-name",
    label: "Company Name (optional)",
    placeholder: "Company name",
    type: "text",
    required: false,
    section: "basic",
    girdCols: "col-span-12 sm:col-span-12 md:col-span-4", // replaces cols: 4
  },
  {
    name: "street",
    id: "street-address",
    label: "Street Address",
    placeholder: "Street address",
    type: "text",
    required: true,
    section: "address",
    girdCols: "col-span-12", // replaces cols: 12
  },
  {
    name: "country",
    id: "country-region",
    label: "Country / Region",
    placeholder: "Select a country",
    type: "select",
    required: true,
    section: "address",
    options: [
      { label: "United States", value: "US" },
      { label: "Algeria", value: "DZ" },
    ],
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "state",
    id: "state",
    label: "State",
    placeholder: "Select a state",
    type: "select",
    required: true,
    section: "address",
    options: [{ label: "Tebessa", value: "tebessa" }],
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "zipCode",
    id: "zip-code",
    label: "Zip Code",
    placeholder: "Zip code",
    type: "text",
    required: true,
    section: "address",
    girdCols: "col-span-12 sm:col-span-6 md:col-span-4", // replaces cols: 4
  },
  {
    name: "email",
    id: "email-address",
    label: "Email Address",
    placeholder: "Email address",
    type: "text",
    required: true,
    section: "contact",
    girdCols: "col-span-12 sm:col-span-6", // replaces cols: 6
  },
  {
    name: "phone",
    id: "phone-number",
    label: "Phone number",
    placeholder: "Phone number",
    type: "tel",
    required: true,
    section: "contact",
    girdCols: "col-span-12 md:col-span-6", // replaces cols: 6
  },
];

export const accountSettingsFields = [
  {
    name: "firstName",
    id: "first-name",
    label: "First name",
    placeholder: "Your first name",
    type: "text",
    required: false,
    girdCols: "col-span-12", // replaces cols: 12
  },
  {
    name: "lastName",
    id: "last-name",
    label: "Last name",
    placeholder: "Your last name",
    type: "text",
    required: false,
    girdCols: "col-span-12", // replaces cols: 12
  },
  {
    name: "email",
    id: "email-address",
    label: "Email Address",
    placeholder: "Email address",
    type: "text",
    required: false,
    girdCols: "col-span-12", // replaces cols: 12
  },
  {
    name: "phone",
    id: "phone-number",
    label: "Phone number",
    placeholder: "Phone number",
    type: "text",
    required: false,
    girdCols: "col-span-12", // replaces cols: 12
  },
];

export const changePasswordFields = [
  {
    name: "oldPassword",
    id: "old-password",
    label: "Old Password",
    placeholder: "Old password",
    type: "password",
    required: true,
    girdCols: "col-span-12", // replaces cols: 12
  },
  {
    name: "newPassword",
    id: "new-password",
    label: "New Password",
    placeholder: "New password",
    type: "password",
    required: true,
    girdCols: "col-span-6", // replaces cols: 12
  },
  {
    name: "confirmPassword",
    id: "confirm-password",
    label: "Confirm Password",
    placeholder: "Confirm password",
    type: "password",
    required: true,
    girdCols: "col-span-6", // replaces cols: 12
  },
];

export const renderField = (field, formData, handleChange) => {
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
