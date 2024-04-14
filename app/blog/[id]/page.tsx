import React from "react";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import SectionWrap from "@/components/ui/SectionWrap";
import ArticleArrow from "@/components/Blog/icons/articleArrow";
import styles from "./page.module.css";
import cn from "classnames";
import Article from "@/components/Blog/Article";
import { articlesConfig } from "@/components/Blog/articlesConfig";
import { redirect } from "next/navigation";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const ArticlePage = ({ params }: Props) => {
  const articleData = articlesConfig[params.id];

  if (!articleData) {
    redirect("/");
  }

  return (
    <SectionWrap tag="main" className={styles.articlePage}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          <Link href={"/blog"}>Blog</Link> <ArticleArrow /> <span>Article</span>
        </h1>

        <Article pageId={params.id} articleData={articleData} />
      </div>

      <YellowGearIcon className={styles.gearIcon} />
      <TriangleIcon className={styles.triangleIcon} />
    </SectionWrap>
  );
};

export default ArticlePage;
