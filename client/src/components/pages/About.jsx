import React from "react";

import { AboutSection1, AboutSection2, AboutSection3, TeamSection } from "../sections/About";
import { Carousel, Testimonials } from "../sections/Home";

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
