import React from "react";
import { IconButton } from "../../ui";
import { ArrowRight, MessageSquare, Tag, UserRound } from "lucide-react";

const NewsCard = ({ date, title, tag, creator, image, comments }) => {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const topList = [
    {
      title: "Tag",
      icon: <Tag size={16}/>,
      content: tag,
    },
    {
      title: "Creator",
      icon: <UserRound size={16}/>,
      content: `By ${creator}`,
    },
    {
      title: "Comments",
      icon: <MessageSquare size={16}/>,
      content: `${comments} Comments`,
    },
  ];
  return (
    <div className="w-full rounded-lg group shadow-md">
      <div className="w-full rounded-t-lg relative">
        <img src={image} alt={tag} className="w-full h-auto" />


        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-sm bg-gray-bg text-center">
          <h1 className="text-xl font-medium text-black">{day}</h1>
          <h1 className="text-gray-400 text-xs">{month}</h1>
        </div>


      </div>
      <div className="p-6">
        <div className="w-full flex items-center gap-3 mb-2">
          {topList.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400 text-base">
              {item.icon}
              <h1 className="text-2xs md:text-xs text-gray-600">{item.content}</h1>
            </div>
          ))}
        </div>
        <h1 className="text-base md:text-lg font-medium group-hover:text-hard-primary transition-all duration-200 mb-5">{title}</h1>
        <IconButton end icon={<ArrowRight className="h-4 w-4" />} variant="text">Read More</IconButton>
      </div>
    </div>
  );
};

export default NewsCard;