import React from "react";
import styles from "./styles.module.css";
import NavBtns from "./NavBtns";
import Image from "next/image";
import { getImageSrc } from "@/utils/getImageSrc";
import ReactMarkdown from "react-markdown";

interface Props {
  articleData: any;
  pageId: string;
}

const Article = ({ articleData, pageId }: Props) => {
  const { title, text } = articleData[0];
  const imgSrc = getImageSrc(articleData[0].img.url);

  return (
    <div className="container">
      <div className={styles.article}>
        <div className={styles.header}>
          <NavBtns pageId={pageId} className={styles.navBtns} curFilter={undefined} />
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
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
