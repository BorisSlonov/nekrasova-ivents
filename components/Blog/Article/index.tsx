import React from "react";
import styles from "./styles.module.css";
import CaterogyBage from "../CategoryBage";
import DateBage from "../DateBage";
import NavBtns from "./NavBtns";
import Image from "next/image";

interface Props {
  articleData: {
    title: string;
    html: string;
    image: string;
    date: string;
  };
  pageId: string;
}

const Article = ({ articleData, pageId }: Props) => {
  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <div className={styles.bageDate}>
          <CaterogyBage />
          <DateBage date={articleData.date} />
        </div>
        <NavBtns pageId={pageId} className={styles.navBtns} />
      </div>
      <Image
        quality={100}
        alt={"article image"}
        width={1240}
        height={380}
        src={articleData.image}
        className={styles.image}
        sizes="100vw"
        priority
      />

      <div className={styles.textContent}>
        <h1 className={styles.title}>{articleData.title}</h1>
        <div className={styles.divider} />
        <div
          dangerouslySetInnerHTML={{ __html: articleData.html }}
          className={styles.text}
        />
      </div>
    </div>
  );
};

export default Article;
