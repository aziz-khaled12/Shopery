import React from 'react'
import About3 from "/About3.png";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { IconButton } from '../../ui';

const AboutSection3 = () => {
  return (
    <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-page lg:py-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="w-full lg:w-5/12 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 font-semibold text-gray-900">
            We Delivered, You Enjoy Your Order.
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin
            dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
            auctor bibendum nunc eget elementum.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {[
              "Sed in metus pellentesque.",
              "Fusce et ex commodo, aliquam nulla efficitur.",
              "Maecenas ut nunc fringilla erat varius."
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-base text-gray-600">
                <CheckCircle className="w-5 h-5 text-primary" />
                {item}
              </div>
            ))}
          </div>
          <IconButton 
            end 
            icon={<ArrowRight className="w-4 h-4" />} 
            size="medium" 
            className="w-full sm:w-fit"
          >
            Shop Now
          </IconButton>
        </div>

        <div className="w-full lg:w-7/12 order-1 lg:order-2">
          <img
            src={About3}
            alt="Delivery illustration"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutSection3