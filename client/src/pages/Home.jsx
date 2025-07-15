import React from "react";
import {
  Carousel,
  FeaturedProducts,
  FollowUs,
  HeroSection,
  HotDealsSection,
  LatestNews,
  PopularCategories,
  PopularProducts,
  SalesSection,
  Testimonials,
} from "../components/sections/Home";
import { DiscountCard } from "../components/cards";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <PopularCategories />
      <PopularProducts />
      <SalesSection />
      <HotDealsSection />
      <DiscountCard discount={70} />
      <FeaturedProducts />
      <LatestNews />
      <Testimonials />
      <Carousel />
      <FollowUs />
    </div>
  );
};

export default Home;
