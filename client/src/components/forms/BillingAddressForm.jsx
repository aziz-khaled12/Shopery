import React, { useCallback, useState } from "react";
import { Button, SettingsFormContainer } from "../ui";
import { billingAddressFields, renderField } from "./forms-fields";
import { useUpdateUserBillingInfo } from "../../hooks/mutations/userMutations";
import { useFetchUser } from "../../hooks/queries/useUser";

const BillingAddressForm = () => {
  const { data, isPending } = useFetchUser();
  const user = data;
  const [formData, setFormData] = useState(
    !isPending && {
      ...user.billingAddress,
    }
  );
  const { mutate } = useUpdateUserBillingInfo();

  const handleChange = useCallback((name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      mutate(formData);
    },
    [formData, mutate]
  );

  return (
    <SettingsFormContainer title="Billing Address">
      <div className="w-full p-6">
        <form className="w-full flex flex-col gap-6">
          <div className="grid grid-cols-12 gap-4">
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
          </div>
          <Button onClick={onSubmit} variant="fill">
            Save Changes
          </Button>
        </form>
      </div>
    </SettingsFormContainer>
  );
};

export default BillingAddressForm;
