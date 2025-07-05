import React from "react";
import { Button } from "../components/ui";
import { useNavigate } from "react-router-dom";
import ErrorImage from "/Error.png"

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-page">
        <img 
          src={ErrorImage} 
          className="mb-8 w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain" 
          alt="Error" 
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center">Oops! page not found</h1>
        <p className="text-gray-500 mb-6 text-center text-sm sm:text-base max-w-md">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>
        <Button onClick={() => navigate("/")} size="medium" className="w-full max-w-xs sm:max-w-sm">Go to Home</Button>
    </div>
  );
};

export default Error;
