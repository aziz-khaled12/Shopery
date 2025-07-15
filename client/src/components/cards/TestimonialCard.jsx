import React from "react";
import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ text, user, avatar, rating }) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-6">
      <Quote className="text-primary/30 w-fit" scale={3} />
      <p className="font-normal text-sm text-gray-600">{text}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full">
            <img
              src={avatar}
              alt={user}
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h1 className="text-base font-medium">{user}</h1>
            <p className="text-sm font-normal text-gray-400">Customer</p>
          </div>
        </div>

        <div className="flex gap-0.5">
          {Array.from({ length: rating }, (_, index) => index + 1).map(
            (item) => (
              <Star
                key={item}
                className="text-warning fill-warning h-4 w-4 lg:h-4.5 lg:w-4.5"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
