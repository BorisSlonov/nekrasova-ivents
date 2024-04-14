import React from "react";
import styles from "./styles.module.css";
import Card from "./Card";
import GearIcon from "./icons/gearIcon";
import { getEvents } from "@/actions/getEvents";

const MeetSection = async () => {
  const events = await getEvents();
  const sortedEvents = events?.sort((a, b) => a.id - b.id);

  return (
    <section className={styles.meetSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>where to meet us in 2024</h2>

        {sortedEvents && (
          <ul className={styles.cardList}>
            {sortedEvents.map((card, i) => {
              return <Card cardData={card.attributes} key={i} />;
            })}

            <GearIcon className={styles.gearIcon} />
          </ul>
        )}
      </div>
    </section>
  );
};

export default MeetSection;
