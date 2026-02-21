import React from "react";
import Skeleton from "./Skeleton";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SkeletonCard from "./SkeletonCard";

const PopularSkeleton = () => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      loop={{ loop: true }}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 3,
        },

        1024: {
          slidesPerView: 4,
        },

        1200: {
          slidesPerView: 5,
        },

        1600: {
          slidesPerView: 6,
        },
      }}
    >
      {new Array(7).fill(0).map((_, index) => (
        <SwiperSlide>
          <SkeletonCard key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularSkeleton;
