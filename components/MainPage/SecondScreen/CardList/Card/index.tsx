import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import Link from "next/link";

interface Props {
  cardData: {
    title: string;
    descr: string;
    link: string;
  };
}

const Card = ({ cardData }: Props) => {
  return (
    <Link className={styles.card} href={cardData.link}>
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
  );
};

export default Card;
