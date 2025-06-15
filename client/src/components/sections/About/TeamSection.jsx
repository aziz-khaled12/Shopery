import React from "react";
import { team } from "../../../consts/AboutConsts";
import { Facebook, Instagram, Twitter } from "lucide-react";
const TeamSection = () => {
  return (
    <div className="py-20 px-6 md:px-page bg-gradient-to-b from-gray-100 to-white">

      <div className="w-full text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-3 font-semibold leading-tight text-gray-900">
          Our Awesome Team
        </h2>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </p>
      </div>

      <div className="w-full flex items-center justify-between gap-6">
        {team.map((member, index) => {
          return (
            <div key={index} className="w-full flex-1 hover:shadow-lg transition-all duration-200 rounded-lg border border-gray-200 ">
              <div className="relative group cursor-pointer rounded-t-lg overflow-hidden ">
                <img
                  src={member.image}
                  alt="Follow us on Instagram"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                  <div className="flex items-center justify-center p-2 text-white hover:bg-primary rounded-full transition-all duration-200">
                  <Instagram scale={2} className="text-white" />
                  </div>
                  <div className="flex items-center justify-center p-2 text-white hover:bg-primary rounded-full transition-all duration-200">
                  <Facebook scale={2} className="text-white" />
                  </div>
                  <div className="flex items-center justify-center p-2 text-white hover:bg-primary rounded-full transition-all duration-200">
                  <Twitter scale={2} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="w-full px-5 py-4">
                <h3 className="text-lg font-medium mb-1 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default TeamSection;
