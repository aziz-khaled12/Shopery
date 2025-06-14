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
      { label: "Canada", value: "CA" },
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
    options: ["Select"],
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
    type: "email",
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