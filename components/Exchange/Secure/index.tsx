"use client";

import React from "react";
import styles from "./styles.module.css";
import Circle from "./icons/circle";
import AdvItem from "@/components/ui/AdvItem";
import Lamp from "./icons/lamp";
import Vectors from "./icons/vectors";
import HalfCircle from "./icons/halfCircle";
import Image from "next/image";
import MobileVectors from "./icons/mobileVectors";

const config = [
  {
    title: "Systematic internal and external security audits of the platform",
  },
  {
    title:
      "Customised alert system for detecting atypical user operations with subsequent manual processing",
  },
];

const Secure = () => {
  return (
    <div className={styles.secure}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Secure</span>
            <Circle className={styles.circle} />
          </h2>
          <span className={styles.text}>
            An extremly important aspect of cryptocurrency services and
            solutions is the secure storage of funds
          </span>
          <MobileVectors className={styles.mobileVectors} />
        </div>
        <div className={styles.cardBlock}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>We make sure that: </div>
            <div className={styles.list}>
              {config.map((item, i) => {
                return (
                  <AdvItem className={styles.advItem} key={i} item={item} />
                );
              })}
            </div>
            <Lamp className={styles.lamp} />
          </div>

          <HalfCircle className={styles.halfCircle} />
        </div>
      </div>
      <Vectors className={styles.vectors} />
    </div>
  );
};

export default Secure;
