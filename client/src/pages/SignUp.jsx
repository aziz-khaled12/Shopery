import React from "react";
import { Button, Input } from "../components/ui";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex items-center justify-center px-6 sm:px-page">
      <div className="flex flex-col items-center p-6 pb-8 shadow-gray w-full max-w-[520px] bg-white/20 rounded-lg">
        <h1 className="text-black/90 text-xl sm:text-2xl md:text-3xl font-semibold mb-5">Create Account</h1>
        <div className="flex flex-col gap-3 w-full">
          <Input  placeholder="Email" type="email" name="emil"></Input>
          <Input  placeholder="Password" type="password" name="password"></Input>
          <Input 
            placeholder={"Confirm Password"}
            type="password"
            name="confirmPassword"
          ></Input>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" className="w-3 h-3 sm:h-4 sm:w-4 rounded-md border border-gray-300 outline-none" />
            <p className="text-2xs sm:text-sx md:text-sm text-black/50">
              Accept all terms & Conditions
            </p>
          </div>
        </div>
        <div className="my-4 w-full">
        <Button size="small" fullWidth>Create Account</Button>
        </div>
        <div>
          <p className="text-2xs sm:text-xs md:text-sm text-black/50">
            Already have an account?{" "}
            <span className="text-black/80 hover:text-primary cursor-pointer transition-all duration-200" onClick={() => {navigate("/account/login")}}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
