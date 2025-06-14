import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import PopularCategories from "../sections/Home/PopularCategories";
import PopularProducts from "../sections/Home/PopularProducts";
import SalesSection from "../sections/Home/SalesSection";
import HotDealsSection from "../sections/Home/HotDealsSection";
import { DiscountCard } from "../common";
import FeaturedProducts from "../sections/Home/FeaturedProducts";
import LatestNews from "../sections/Home/LatestNews";
import Testimonials from "../sections/Home/Testimonials";
import Carousel from "../sections/Home/Carousel";
import FollowUs from "../sections/Home/FollowUs";

const Home = () => {
  return (
    <div className="pt-3 w-full flex flex-col">
      <HeroSection />
      <PopularCategories />
      <PopularProducts />
      <SalesSection />
      <HotDealsSection />
      <DiscountCard discount={70}></DiscountCard>
      <FeaturedProducts></FeaturedProducts>
      <LatestNews></LatestNews>
      <Testimonials></Testimonials>
      <Carousel></Carousel>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
