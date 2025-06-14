import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="flex gap-0.5">
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= rating;
          
          return (
            <button
              key={starValue}
              aria-label={`Rate ${starValue} out of ${maxRating} stars`}
            >
              <Star
                className={`transition-colors h-3.5 w-3.5 lg:h-4.5 lg:w-4.5 text-sm duration-200 ${
                  isFilled 
                    ? "text-warning fill-warning" 
                    : "text-gray-400 fill-none"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;