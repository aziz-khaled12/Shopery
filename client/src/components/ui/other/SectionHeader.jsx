import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SectionHeader = ({ title, link, viewAll = true, alignment = "left" }) => {
  const navigate = useNavigate();
  
  const getJustification = () => {
    if (viewAll) {
      return "justify-between";
    } else {
      return alignment === "right" ? "justify-end" : alignment === "center" ? "justify-center" : "justify-start";
    }
  };

  return (
    <div className={`w-full flex items-center ${getJustification()} mb-8`}>
      <h1 className="text-xl font-semibold sm:text-3xl">{title}</h1>
      {viewAll && (
        <div
          className="font-medium text-sm sm:text-base flex items-center gap-3 text-primary cursor-pointer hover:text-hard-primary transition-all duration-200"
          onClick={() => {
            navigate(link);
          }}
        >
          <p>View All</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;