import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  card: {
    title: string;
    descr: string;
  };
}

const IntegrateCard = ({ card }: Props) => {
  const { descr, title } = card;

  return (
    <div className={styles.integrateCard}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        alt="card bg"
        className={styles.image}
        src={"/processing/integrateCard.png"}
        priority
      />
      <Image
        width="0"
        height="0"
        sizes="100vw"
        alt="card bg"
        className={styles.mobImage}
        src={"/processing/integrateCardMob.png"}
        priority
      />
      <div className={styles.textContent}>
        <span className={styles.title}>{title}</span>
        <span className={styles.descr}>{descr}</span>
      </div>
    </div>
  );
};

export default IntegrateCard;
