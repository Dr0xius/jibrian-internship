import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CollectionsData from "./ui/CollectionsData";

const Swiperjs = () => {
  const { store } = useContext(AppContext);

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
    >
      {store.popularCollections.map((collection, index) => (
        <SwiperSlide>
          <CollectionsData collection={collection} key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiperjs;
