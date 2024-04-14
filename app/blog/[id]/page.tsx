import React from "react";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import SectionWrap from "@/components/ui/SectionWrap";
import ArticleArrow from "@/components/Blog/icons/articleArrow";
import styles from "./page.module.css";
import Article from "@/components/Blog/Article";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getArticle } from "@/actions/getArticle";
import { IBlogFilters } from "@/components/Blog/types";

interface Props {
  params: { id: string };
  searchParams: { filter: IBlogFilters };
}

const ArticlePage = async ({ params, searchParams }: Props) => {
  const articleData = await getArticle(params.id);

  if (!articleData) {
    redirect("/");
  }

  const blogLinkHref = searchParams.filter
    ? `/blog?filter=${searchParams.filter}`
    : "/blog";

  return (
    <SectionWrap tag="main" className={styles.articlePage}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          <Link href={blogLinkHref}>Blog</Link> <ArticleArrow />{" "}
          <span>Article</span>
        </h1>

        <Article
          curFilter={searchParams.filter}
          pageId={params.id}
          articleData={articleData}
        />
      </div>

      <YellowGearIcon className={styles.gearIcon} />
      <TriangleIcon className={styles.triangleIcon} />
    </SectionWrap>
  );
};

export default ArticlePage;
