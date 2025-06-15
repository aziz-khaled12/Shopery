import React from "react";
import About1 from "/About1.png";

const AboutSection1 = () => {
  return (
    <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-page lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 font-semibold text-gray-900">
              100% Trusted Organic Food Store
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src={About1}
              alt="about image 1"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
