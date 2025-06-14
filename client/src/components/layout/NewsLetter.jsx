import React from "react";
import { IconButton2 } from "../ui";
import { Facebook, Instagram, Twitter } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="flex-col items-center justify-center flex w-full sm:px-page px-6 py-[60px] bg-gray-bg xl:flex-row xl:items-center xl:justify-between text-center xl:text-left gap-6">
      <div className="w-3/5 xl:w-2/5">
        <h1 className="text-3xl font-semibold">Subscribe to our newsletter</h1>
        <p className="text-sm font-normal text-gray-400 mt-1">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>

      

      <div className="flex items-center relative w-full xl:w-2/5">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-full px-6 py-3 w-full pr-24 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button className="absolute right-0 bg-primary hover:bg-hard-primary font-semibold text-white px-10 py-3 rounded-full border border-primary w-fit">
          Subscribe
        </button>
      </div>

      <div className="flex items-center gap-2">
        <IconButton2 icon={<Facebook />}></IconButton2>
        <IconButton2 icon={<Twitter />}></IconButton2>
        <IconButton2 icon={<Instagram />}></IconButton2>
      </div>
    </div>
  );
};

export default NewsLetter;
