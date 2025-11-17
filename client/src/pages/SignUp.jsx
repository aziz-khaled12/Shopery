import React, { useEffect, useState } from "react";
import { Button, Input } from "../components/ui";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/mutations/useSignup";

const SignUp = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useSignup();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear validation error when user types
    setValidationErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    } else if (formData.firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    } else if (formData.lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
      isValid = false;
    }

    // Terms validation
    if (!formData.acceptTerms) {
      errors.acceptTerms = "You must accept the terms";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("form data: ", formData);
    mutate({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
    });
  };

  useEffect(() => {
    console.log("form data changed: ", formData);
  }, [formData]);

  return (
    <div className="w-full flex items-center justify-center px-6 sm:px-page">
      <div className="flex flex-col items-center p-6 pb-8 shadow-gray w-full max-w-[520px] bg-white/20 rounded-lg">
        <h1 className="text-black/90 text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
          Create Account
        </h1>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                placeholder="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={validationErrors.firstName}
                required
              />
            </div>
            <div className="flex-1">
              <Input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={validationErrors.lastName}
                required
              />
            </div>
          </div>

          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={validationErrors.email}
            required
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={validationErrors.password}
            required
          />

          <Input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={validationErrors.confirmPassword}
            required
          />

          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="w-3 h-3 sm:h-4 sm:w-4 rounded-md border border-gray-300 outline-none"
              required
            />
            <p className="text-2xs sm:text-sx md:text-sm text-black/50">
              Accept all terms & Conditions
            </p>
          </div>
          {validationErrors.acceptTerms && (
            <p className="text-xs text-red-500">
              {validationErrors.acceptTerms}
            </p>
          )}
        </div>

        <div className="my-4 w-full">
          <Button
            size="small"
            fullWidth
            disabled={isPending}
            onClick={handleSubmit}
            variant={isPending ? "disabled" : "fill"}
          >
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>
        </div>

        <div>
          <p className="text-2xs sm:text-xs md:text-sm text-black/50">
            Already have an account?{" "}
            <span
              className="text-black/80 hover:text-primary cursor-pointer transition-all duration-200"
              onClick={() => navigate("/account/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
