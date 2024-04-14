import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import { useSwiper } from "swiper/react";

interface Props {
  slideNum: number;
}

const SlidePagination = ({ slideNum }: Props) => {
  const slides = [0, 1, 2, 3];

  return (
    <div className={styles.slidePagination}>
      {slides.map((_, i) => {
        return (
          <div
            key={i}
            className={cn(styles.cell, {
              [styles.active]: i === slideNum,
            })}
          />
        );
      })}
    </div>
  );
};

export default SlidePagination;
