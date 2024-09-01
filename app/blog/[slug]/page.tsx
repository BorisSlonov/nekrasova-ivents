import React from "react";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import ArticleArrow from "@/components/Blog/icons/articleArrow";
import styles from "./page.module.css";
import Article from "@/components/Blog/Article";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getArticle } from "@/actions/getArticle";
import LastForm from "@/components/LastForm";
import Reviews from "@/components/Reviews";

interface Props {
  params: {
    slug: string;
    id: string;
  };
}

const ArticlePage = async ({ params }: Props) => {
  const { slug } = params;
  const articleData: any = await getArticle(slug);

  if (!articleData) {
    redirect("/blog");
  }

  return (
    <section className="otherWrapper">
      <div className="container">
        <h1 className={styles.header}>
          <Link href="/blog">Блог</Link> <ArticleArrow /> {articleData[0]?.title}
        </h1>
      </div>
      <Article articleData={articleData} pageId={slug} />
      <YellowGearIcon className={styles.gearIcon} />
      <TriangleIcon className={styles.triangleIcon} />
      <Reviews />
      <LastForm />
    </section>
  );
};

export default ArticlePage;
