import React from 'react'
import { features } from '../../../consts/AboutConsts';
import About2 from "/About2.png";

const AboutSection2 = () => {
  return (

    <div className="w-full py-8 sm:py-12 lg:py-16">
    <div className="lg:hidden px-6 lg:px-page">
      <div className="mb-8">
        <img
          src={About2}
          alt="about image 2"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 font-semibold text-gray-900">
            100% Trusted Organic Food Store
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
            Pellentesque a ante vulputate leo porttitor luctus sed eget
            eros. Nulla et rhoncus neque. Duis non diam eget est luctus
            tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
            feugiat.
          </p>
        </div>
      </div>
    </div>

    <div className="hidden lg:block w-full relative mb-8">
      <div className="flex items-center">
        <div className="w-3/5 relative z-10">
          <img
            src={About2}
            alt="about image 2"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 z-20">
          <div className="p-8 xl:p-12 rounded-lg ml-8">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-6 font-semibold text-gray-900">
              100% Trusted Organic Food Store
            </h2>
            <p className="text-base xl:text-lg text-gray-600 leading-relaxed mb-8">
              Pellentesque a ante vulputate leo porttitor luctus sed eget
              eros. Nulla et rhoncus neque. Duis non diam eget est luctus
              tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
              feugiat.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 lg:px-page">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div
            key={index}
            className="flex flex-col space-y-3 p-4 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
    
  )
}

export default AboutSection2