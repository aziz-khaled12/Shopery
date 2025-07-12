import React, { useState } from "react";
import { Select } from "../../ui";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useAuthStore } from "../../../store/authStore";

// Language and currency options
const LANGUAGE_OPTIONS = [
  { label: "Eng", value: 0 },
  { label: "Ar", value: 1 },
];

const CURRENCY_OPTIONS = [
  { label: "USD", value: 0 },
  { label: "EUR", value: 1 },
];

// Store location component
const StoreLocation = () => (
  <div className="flex text-2xs sm:text-sm items-center gap-2">
    <MapPin className="text-base h-4 w-4 sm:w-5 sm:h-5" />
    <div className="flex items-center gap-1">
      <span className="hidden lg:block">Store Location:</span>{" "}
      <span className="hidden sm:block"> Lincoln-344, Illinois, </span> Chicago,
      USA
    </div>
  </div>
);

// Language selector component
const LanguageSelector = ({ selectedLan, onChange }) => (
  <Select
    options={LANGUAGE_OPTIONS}
    value={selectedLan}
    onChange={onChange}
    placeholder="Eng"
    variant="minimal"
    // selectedClassName="!py-0"
    // optionClassName = "!text-2xs sm:!text-sm"
  />
);

// Currency selector component
const CurrencySelector = ({ selectedCurrency, onChange }) => (
  <Select
    options={CURRENCY_OPTIONS}
    value={selectedCurrency}
    onChange={onChange}
    placeholder="USD"
    variant="minimal"
    // selectedClassName="!py-0"
  />
);

// Authentication links component
const AuthLinks = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-1">
      <span
        className="cursor-pointer hover:text-primary transition-all duration-200"
        onClick={() => navigate("/account/login")}
      >
        Sign In
      </span>{" "}
      /{" "}
      <span
        className="cursor-pointer hover:text-primary transition-all duration-200"
        onClick={() => navigate("/account/register")}
      >
        Sign Up
      </span>
    </div>
  );
};

const TopBar = () => {
  const [selectedLan, setSelectedLan] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState(0);
  const { logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/account/login");
  };

  return (
    <div className="sm:px-page px-6 py-3 flex text-gray-400 items-center justify-between w-full shadow-sm bg-black/80">
      <StoreLocation />
      <div className="flex items-center gap-2 text-2xs sm:text-sm">
        <div className="flex items-center gap-2">
          <LanguageSelector
            selectedLan={selectedLan}
            onChange={setSelectedLan}
          />
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            onChange={setSelectedCurrency}
          />
        </div>
        <div className="w-[2px] h-5 bg-gray-300" />
        {isAuthenticated ? (
          <span
            className="cursor-pointer hover:text-primary transition-all duration-200"
            onClick={handleLogout}
          >
            logout
          </span>
        ) : (
          <AuthLinks />
        )}
      </div>
    </div>
  );
};

export default TopBar;
