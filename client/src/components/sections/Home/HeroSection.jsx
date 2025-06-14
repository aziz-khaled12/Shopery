import React from "react";
import BigBannerImage from "/BigBanner.png";
import SmallBannerImage from "/SmallBanner1.png";
import SmallBanner2Image from "/SmallBanner2.png";
import { HeroBigCard, HeroSmallCard, HeroSmallCard2 } from "../../common";
import Benefits from "./Benefits";
const HeroSection = () => {
  return (
    <div className="sm:px-page px-6">
      <div className="grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-6 gap-2 mb-6">
        <div className="col-span-2 row-span-2">
          <HeroBigCard image={BigBannerImage}></HeroBigCard>
        </div>
        <HeroSmallCard image={SmallBannerImage}></HeroSmallCard>
        <HeroSmallCard2 image={SmallBanner2Image}></HeroSmallCard2>
      </div>
      <Benefits />
    </div>
  );
};

export default HeroSection;
