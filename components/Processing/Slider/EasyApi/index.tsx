import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";
import SlideBackings from "../SlideBackings";
import SlidePagination from "../SlidePagination";

interface Props extends React.HTMLProps<HTMLDivElement> {
  activeSlide: boolean;
}
const EasyApi = ({ activeSlide, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(styles.easyApi, props.className, {
        [styles.inActive]: !activeSlide,
      })}
    >
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.title}>
            <span className={styles.titleText}>Easy API integration</span>
          </div>
          <div className={styles.bottomText}>
            A Fully-Featured API Platform At Your Fingertips. We offer a
            full-featured platform for providing essential crypto services to
            your clients in a highly sophisticated and detailed way.
          </div>
        </div>

        <Image
          className={styles.image}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/easyApi.png"}
          alt={"easy api"}
          quality={100}
          unoptimized
          priority
        />
        <Image
          className={styles.imageMob}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/easyApiMob.png"}
          alt={"easy api"}
          quality={100}
          unoptimized
          priority
        />
        <SlidePagination slideNum={2} />
      </div>
      <SlideBackings slideNum={2} />
    </div>
  );
};

export default EasyApi;
