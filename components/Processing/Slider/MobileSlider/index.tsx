import React, { useState } from "react";
import styles from "./styles.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { slides } from "..";
import CryptoPayments from "../CryptoPayments";
import Pagination from "../Pagination";

const MobileSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className={styles.mobileSlider}>
      <Swiper
        onSlideChange={(e) => {
          setImgIndex(e.activeIndex);
        }}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides
        className="mySwiper"
        breakpoints={{
          410: {
            slidesPerView: 1.35,
          },

          470: {
            slidesPerView: 1.5,
          },

          565: {
            slidesPerView: 1.8,
          },

          680: {
            slidesPerView: 2.2,
          },
        }}
      >
        {slides.map((Slide, i) => {
          return (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <Slide activeSlide={imgIndex === i} />
            </SwiperSlide>
          );
        })}
        <Pagination />
      </Swiper>
    </div>
  );
};

export default MobileSlider;
