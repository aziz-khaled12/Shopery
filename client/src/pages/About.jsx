import React from "react";

import { AboutSection1, AboutSection2, AboutSection3, TeamSection } from "../components/sections/About";
import { Carousel, Testimonials } from "../components/sections/Home";

const About = () => {
  return <div className="w-full">
    <AboutSection1 />
    <AboutSection2 />
    <AboutSection3 />
    <TeamSection />
    <Testimonials />
    <Carousel />

  </div>;
};

export default About;
