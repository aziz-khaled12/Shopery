import React from "react";

import { DiscountCard } from "../common";
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
} from "../sections/Home";

const Home = () => {
  return (
    <div className="pt-3 w-full flex flex-col">
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
