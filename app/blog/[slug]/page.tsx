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
  params: {
    slug: string;
    id: string;
  };
  searchParams: { filter: IBlogFilters };
}

const ArticlePage = async ({ params, searchParams }: Props) => {

  const { slug } = params
  const articleData: any = await getArticle(slug);


  if (!articleData) {
    redirect("/blog");
  }

  const blogLinkHref = searchParams.filter
    ? `/blog?filter=${searchParams.filter}`
    : "/blog";


  const title = articleData[0]?.title || "";

  return (
    <SectionWrap tag="main" className={styles.articlePage}>
      <div className={styles.content}>
        <div className={'container'}>
          <h1 className={styles.header}>
            <Link href={"/categories"}>Блог</Link> <ArticleArrow />{" "}
            {title}
          </h1>
        </div>

        <Article
          curFilter={searchParams.filter}
          pageId={params.slug}
          articleData={articleData}
        />
      </div>

      <YellowGearIcon className={styles.gearIcon} />
      <TriangleIcon className={styles.triangleIcon} />
    </SectionWrap>
  );
};

export default ArticlePage;
