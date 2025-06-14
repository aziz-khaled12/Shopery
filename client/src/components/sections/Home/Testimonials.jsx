import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar1 from "/Avatar1.png";
import Avatar2 from "/Avatar2.png";
import Avatar3 from "/Avatar3.png";
import { TestimonialCard } from "../../common";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IconButton2 } from "../../ui";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      user: "Robert Fox",
      avatar: Avatar1,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
    {
      user: "Dianne Russell",
      avatar: Avatar2,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
    {
      user: "Eleanor Pena",
      avatar: Avatar3,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
    {
      user: "Robert Fox",
      avatar: Avatar1,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
  ];

  return (
    <div className="w-full sm:px-page px-6 py-[60px] bg-gray-bg">
      <div className="w-full justify-between items-center flex mb-8">
        <h1 className="text-xl font-semibold sm:text-3xl">
          Client Testimonials
        </h1>

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
          920: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
