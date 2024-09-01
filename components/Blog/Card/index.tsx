import React from "react";
import styles from "./styles.module.css";
import ArrowIcon from "./icons/arrowIcon";
import DateBage from "../DateBage";
import Link from "next/link";
import { IArticle } from "../types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";

interface Props {
  cardData: IArticle;
}

const Card = ({ cardData }: Props) => {
  const { slug, img, title, date, text } = cardData;

  const imgSrc = img.url;
  const cardHref = `/blog/${slug}`;

  return (
    <Link className={styles.card} href={cardHref}>
      <div>
        <div className={styles.info}>
          <div className={styles.header}>
            <DateBage date={date} />
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.textInfo}>
            {text}
          </div>
        </div>

        <Image
          className={styles.cardImage}
          width={397}
          height={122}
          sizes="100vw"
          alt={"card image"}
          src={getImageSrc(imgSrc)}
          priority
        />

        <div className={styles.linkBtn}>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
};


export default Card;
