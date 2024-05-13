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
import LastForm from "@/components/LastForm";
import Reviews from "@/components/Reviews";

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
    <section className="otherWrapper">
      <div className={'container'}>
        <h1 className={styles.header}>
          <Link href={"/blog"}>Блог</Link> <ArticleArrow />{" "}
          {title}
        </h1>
      </div>
      <Article
        curFilter={searchParams.filter}
        pageId={params.slug}
        articleData={articleData}
      />
      <YellowGearIcon className={styles.gearIcon} />
      <TriangleIcon className={styles.triangleIcon} />
      <Reviews />
      <LastForm />
    </section>
  );
};

export default ArticlePage;
