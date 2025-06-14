import React, { useRef } from "react";
import Tomato from "/follow1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Instagram } from "lucide-react";

const FollowUs = () => {
  const cards = Array(5).fill(Tomato);
  const swiperRef = useRef(null);

  return (
    <div className="sm:px-page px-6 mb-[60px]">
      <h1 className="text-xl sm:text-3xl font-semibold text-center mb-8">
        Follow us on Instagram
      </h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={3.5}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative group cursor-pointer rounded-lg overflow-hidden ">
              <img
                src={card}
                alt="Follow us on Instagram"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram
                  scale={2}
                  className="text-white"
                ></Instagram>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FollowUs;
