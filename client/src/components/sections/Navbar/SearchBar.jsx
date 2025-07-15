import React, { useState } from "react";
import Logo from "/Logo.png";
import { Input } from "../../ui";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartSlide } from "../../cart";

const SearchBar = () => {
  const [isCartSlideOpen, setIsCartSlideOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="sm:px-page px-6 py-6 flex items-center justify-between w-full gap-4 md:gap-2 shadow-sm">
      <div className="max-w-[183px] md:block hidden cursor-pointer" onClick={() => navigate("/")}>
        <img src={Logo} alt="logo" className="w-full h-auto" />
      </div>
      <div className="md:w-fit w-full">
        <Input
          placeholder="Search"
          isSearch
          type="search"
          onSearch={(e) => {
            console.log(e.value);
          }}
        />
      </div>
      <div className="flex items-center gap-2 md:gap-4 text-base md:text-2xl" >
        <Heart className="h-5 w-5 md:h-6 md:w-6 hover:text-primary transition-all duration-200 cursor-pointer" onClick={() => navigate("/wishlist")} />
        <div className="w-[2px] h-6 bg-gray-300" />
        <ShoppingCart
          className="h-5 w-5 md:h-6 md:w-6 hover:text-primary transition-all duration-200 cursor-pointer"
          onClick={() => setIsCartSlideOpen(true)}
        />
      </div>
      <CartSlide
        open={isCartSlideOpen}
        handleClose={() => setIsCartSlideOpen(false)}
      />
    </div>
  );
};

export default SearchBar;
