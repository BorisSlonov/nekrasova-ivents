"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React, { Fragment } from "react";
import AdvItem from "../AdvItem";
import cn from "classnames";
import SlideBackings from "../SlideBackings";
import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";
import SlidePagination from "../SlidePagination";

const config = [
  {
    title: "Flexible fees",
    descr:
      "Fees starting just from 0,5% from your turnover. No setup fees. No any hidden fees.",
  },
  {
    title: "Swap crypto",
    descr: "Instant and limitless exchange.",
  },
  {
    title: "No chargebacks or rolling reserve",
    descr:
      "Chargebacks and rolling reserves change the concept of uninterrupted financial procedures.",
  },
];

interface Props extends React.HTMLProps<HTMLDivElement> {
  activeSlide: boolean;
}

const CryptoPayments = ({ activeSlide, ...props }: Props) => {
  return (
    <div
      className={cn(styles.cryptoPayments, props.className, {
        [styles.inActive]: !activeSlide,
      })}
    >
      <div className={cn(styles.contentWrap)}>
        <div className={styles.content}>
          <span className={styles.title}>
            <span className={styles.titleText}>Crypto payments</span>

            <span className={styles.subTitle}>
              Send and receive payments in 10 virtual currencies 24/7
            </span>
          </span>

          <div className={styles.advList}>
            {config.map((item, i) => {
              return (
                <Fragment key={i}>
                  <AdvItem
                    className={styles.advItem}
                    descrClassName={styles.advItemDescr}
                    titleClassName={styles.advItemTitle}
                    mobile
                    item={item}
                    iconClassName={styles.advIcon}
                  />
                  {i < 2 && <div className={styles.divider} />}
                </Fragment>
              );
            })}
          </div>
        </div>

        <Image
          className={styles.image}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/btcPhone.png"}
          alt={"btc phone"}
          quality={100}
          unoptimized
          priority
        />

        <Image
          className={styles.imageMob}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/btcPhoneMob.png"}
          alt={"btc phone"}
          quality={100}
          unoptimized
        />

        <SlidePagination slideNum={0} />
      </div>
      <SlideBackings slideNum={0} />
    </div>
  );
};

export default CryptoPayments;
