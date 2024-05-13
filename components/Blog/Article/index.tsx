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
  articleData: any;
  pageId: string;
  curFilter: IBlogFilters;
}

const Article = ({ articleData, pageId, curFilter }: Props) => {


  const { title, text} = articleData[0]


  const imgSrc = getImageSrc(articleData[0].img.url);

  return (
    <div className={styles.article}>
      <div className={styles.header}>
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
        <ReactMarkdown className={styles.text}>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Article;
