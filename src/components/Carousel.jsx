import React from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CollectionsData from "./ui/CollectionsData";
import AOS from "aos";
import "aos/dist/aos.css";

const Swiperjs = ({ data }) => {
  AOS.init({
    offset: 90,
    delay: 0,
    duration: 700,
    easing: "ease",
    once: false,
    mirror: true,
    anchorPlacement: "top-bottom",
  });
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      loop={{ loop: true }}
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
      data-aos="fade-up"
      data-aos-mirror="false"
    >
      {data.map((collection, index) => (
        <SwiperSlide key={index}>
          <CollectionsData
            collection={collection}
            key={collection.collectionId}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiperjs;
