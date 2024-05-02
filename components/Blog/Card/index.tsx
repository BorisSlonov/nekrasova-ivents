import React from "react";
import styles from "./styles.module.css";
import ArrowIcon from "./icons/arrowIcon";
import CaterogyBage from "../CategoryBage";
import DateBage from "../DateBage";
import Link from "next/link";
import { IArticle, IBlogFilters } from "../types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";

interface Props {
  cardData: IArticle;
  currentFilter: IBlogFilters;
}

const Card = ({ cardData, currentFilter }: Props) => {
  const {
    id,
    attributes: { img, type, title, date },
  } = cardData;

  const imgSrc = img.data[0].attributes.url;

  const cardHref = currentFilter
    ? `/blog/${id}?filter=${currentFilter}`
    : `/blog/${id}`;

  return (
    <Link className={styles.card} href={cardHref}>
      <div>
        <div className={styles.info}>
          <div className={styles.header}>
            <CaterogyBage category={type} />
            <DateBage date={date} />
          </div>

          <div className={styles.textInfo}>{title}</div>
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
