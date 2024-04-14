import React from "react";
import styles from "./styles.module.css";
import CaterogyBage from "../CategoryBage";
import DateBage from "../DateBage";
import NavBtns from "./NavBtns";
import Image from "next/image";
import { IArticle, IBlogFilters } from "../types";
import { getImageSrc } from "@/utils/getImageSrc";
import ReactMarkdown from "react-markdown";

interface Props {
  articleData: IArticle;
  pageId: string;
  curFilter: IBlogFilters;
}

const Article = ({ articleData, pageId, curFilter }: Props) => {
  const {
    attributes: { type, date, img, title, text },
  } = articleData;

  const imgSrc = getImageSrc(img.data[0].attributes.url);

  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <div className={styles.bageDate}>
          <CaterogyBage category={type} />
          <DateBage date={date} />
        </div>
        <NavBtns
          curFilter={curFilter}
          pageId={pageId}
          className={styles.navBtns}
        />
      </div>
      <Image
        quality={100}
        alt={"article image"}
        width={1240}
        height={380}
        src={imgSrc}
        className={styles.image}
        sizes="100vw"
        priority
      />

      <div className={styles.textContent}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.divider} />

        <ReactMarkdown className={styles.text}>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Article;
