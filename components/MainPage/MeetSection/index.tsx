import React from "react";
import styles from "./styles.module.css";
import Card from "./Card";
import GearIcon from "./icons/gearIcon";
import { cardData } from "./cardData";

const MeetSection = () => {
  return (
    <section className={styles.meetSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>where to meet us in 2024</h2>

        <ul className={styles.cardList}>
          {cardData.map((card, i) => {
            return <Card cardData={card} key={i} />;
          })}

          <GearIcon className={styles.gearIcon} />
        </ul>
      </div>
    </section>
  );
};

export default MeetSection;
