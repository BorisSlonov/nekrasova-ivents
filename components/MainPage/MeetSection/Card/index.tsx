import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import CalendarIcon from "./icons/calendarIcon";
import Image from "next/image";
import Link from "next/link";
import { IEventAttributes } from "./types";

interface Props {
  cardData: IEventAttributes;
}

const Card = ({ cardData }: Props) => {
  const { date, place, name, link, img } = cardData;

  const imgLink = process.env.CMS_URL + img.data.attributes.url;

  return (
    <li className={styles.card}>
      <Link className={styles.link} prefetch={false} href={link}>
        <div className={styles.header}>
          <span className={styles.title}>{name}</span>
          <Arrow />
        </div>

        <div className={styles.info}>
          <div className={styles.textContent}>
            <div className={styles.calendar}>
              <CalendarIcon />
              <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.descr}>{place}</div>
          </div>
          <Image
            src={imgLink}
            width={349}
            height={120}
            sizes="100vw"
            alt="card image"
            className={styles.image}
            priority
          />
        </div>
      </Link>
    </li>
  );
};

export default Card;
