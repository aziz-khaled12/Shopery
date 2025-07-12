import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components/ui";
import { useLogin } from "../hooks/mutations/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
   const { mutate, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data: ", formData)
    mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  return (
    <div className="w-full flex items-center p-6 sm:px-page justify-center ">
      <div className="flex flex-col items-center p-6 pb-8 shadow-gray w-full max-w-[520px] bg-white/20 rounded-lg">
        <h1 className="text-black/90 text-3xl font-semibold mb-5">Sign In</h1>
        <div className="flex flex-col gap-3 w-full">
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="w-full flex justify-between items-center text-sm text-black/50">
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                className="w-3 h-3 sm:h-4 sm:w-4 rounded-md border border-gray-300 outline-none"
              />
              <p className="text-2xs sm:text-base">Remember me</p>
            </div>

            <div className="text-2xs sm:text-base hover:text-primary cursor-pointer transition-all duration-200">
              Forget Password
            </div>
          </div>
        </div>
        <div className="my-4 w-full">
          <Button size="small" fullWidth onClick={handleSubmit} variant={isPending ? "disabled" : "fill"} disabled={isPending}>
            Login
          </Button>
        </div>
        <div>
          <p className="text-2xs sm:text-sm text-black/50">
            Don't have account?{" "}
            <span
              className="text-black/80 hover:text-primary cursor-pointer transition-all duration-200"
              onClick={() => {
                navigate("/account/register");
              }}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
