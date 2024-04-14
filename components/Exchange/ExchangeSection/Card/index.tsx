import React from "react";
import styles from "./styles.module.css";

interface Props {
  cardData: {
    title: string;
    descr: string;
  };
}

const Card = ({ cardData }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.purpleBg} />

      <div className={styles.cardContent}>
        <span className={styles.cardTitle}>{cardData.title}</span>
        <div className={styles.divider} />
        <span className={styles.descr}>{cardData.descr}</span>
      </div>
    </div>
  );
};

export default Card;
