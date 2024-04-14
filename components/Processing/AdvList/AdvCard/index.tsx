import React from "react";
import styles from "./styles.module.css";

interface Props {
  cardData: {
    title: string;
    descr: string;
    num: number;
  };
}

const AdvCard = ({ cardData }: Props) => {
  const { descr, num, title } = cardData;

  return (
    <div className={styles.advCard}>
      <div className={styles.number}>
        <span>0{num}</span> <span>—</span>
      </div>

      <div className={styles.content}>
        <div className={styles.mainText}>{title}</div>
        <div className={styles.divider} />
        <div className={styles.text}>{descr}</div>
      </div>
    </div>
  );
};

export default AdvCard;
