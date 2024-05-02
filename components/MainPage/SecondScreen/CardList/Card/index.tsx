"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import Link from "next/link";


import { useInView } from "framer-motion";
import cn from "classnames";


interface Props {
  cardData: {
    title: string;
    descr: string;
    link: string;
  };
}

const Card = ({ cardData }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div ref={containerRef}>
      <Link className={cn(styles.card, { [styles.card_active]: isInView })} href={cardData.link}>
        <div className={styles.purpleBg} />
        <div className={styles.pcArrow}>
          <Arrow />
        </div>

        <div className={styles.cardContent}>
          <span className={styles.cardTitle}>
            <span className={styles.title}> {cardData.title}</span>

            <span className={styles.mobileArrow}>
              <Arrow />
            </span>
          </span>
          <div className={styles.divider} />
          <span className={styles.descr}>{cardData.descr}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
