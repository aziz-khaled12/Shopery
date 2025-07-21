import React, { useCallback, useState } from "react";
import { Button, SettingsFormContainer } from "../../components/ui";
import UserAvatar from "/UserAvatar.png";
import { accountSettingsFields, renderField } from "./forms-fields";
import { useUpdateUser } from "../../hooks/mutations/userMutations";
import { useFetchUser } from "../../hooks/queries/useUser";

const AccountSettingsForm = () => {
  const { data, isPending } = useFetchUser();
  const user = data;

  const [formData, setFormData] = useState(
    !isPending && {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
    }
  );
  const { mutate } = useUpdateUser();
  console.log("user: ", user);

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
    <SettingsFormContainer title="Account Settings">
      <div className="p-6 flex w-full gap-28">
        <div className="w-1/2">
          <form className="w-full flex flex-col gap-6">
            <div className="grid grid-cols-12 gap-4">
              {accountSettingsFields.map((field, index) => (
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
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-[224px] h-[224px] rounded-full overflow-hidden">
            <img
              src={UserAvatar}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <Button variant="outlined">Change Image</Button>
        </div>
      </div>
    </SettingsFormContainer>
  );
};

export default AccountSettingsForm;
