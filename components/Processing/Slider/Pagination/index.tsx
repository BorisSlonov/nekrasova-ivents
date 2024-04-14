import React from "react";
import styles from "./styles.module.css";
import { useSwiper } from "swiper/react";
import cn from "classnames";

const Pagination = () => {
  const slides = [0, 1, 2, 3];

  const swiper = useSwiper();

  return (
    <div className={styles.pagination}>
      <div className={styles.content}>
        {slides.map((_, i) => {
          return (
            <div
              key={i}
              className={cn(styles.cell, {
                [styles.active]: swiper.activeIndex === i,
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
