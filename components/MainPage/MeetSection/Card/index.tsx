import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import CalendarIcon from "./icons/calendarIcon";
import Image from "next/image";
import Link from "next/link";

interface Props {
  cardData: {
    title: string;
    city: string;
    date: string;
    link: string;
    image: string;
  };
}

const Card = ({ cardData }: Props) => {
  const { city, date, link, title, image } = cardData;

  return (
    <li className={styles.card}>
      <Link className={styles.link} prefetch={false} href={link}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <Arrow />
        </div>

        <div className={styles.info}>
          <div className={styles.textContent}>
            <div className={styles.calendar}>
              <CalendarIcon />
              <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.descr}>{city}</div>
          </div>
          <Image
            src={image}
            width={349}
            height={120}
            sizes="100vw"
            alt="card image"
            className={styles.image}
          />
        </div>
      </Link>
    </li>
  );
};

export default Card;
