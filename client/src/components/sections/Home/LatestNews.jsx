import React, { useRef } from "react";
import NewsImage1 from "/NewsImage1.png";
import { NewsCard } from "../../../features";
import { IconButton2 } from "../../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { homeBlogs } from "../../../consts/BlogsConsts";
const LatestNews = () => {

  const swiperRef = useRef(null);

  return (
    <div className="w-full sm:px-page px-6 my-[60px]">
      <div className="w-full justify-between items-center flex mb-8">
        <h1 className="text-xl font-semibold sm:text-3xl">Latest News</h1>

        <div className="flex items-center gap-3">
          <IconButton2
            icon={<ArrowLeft className="h-4 w-4" />}
            classes={"bg-white"}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <IconButton2
            icon={<ArrowRight className="h-4 w-4" />}
            classes={"bg-white"}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          880: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="w-full !p-2"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {homeBlogs.map((blog, index) => {
          return (
            <SwiperSlide key={index}>
              <NewsCard key={index} blog={blog} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LatestNews;
