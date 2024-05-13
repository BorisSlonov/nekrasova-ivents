import React from "react";
import styles from "./page.module.css";
import Filters from "@/components/Blog/Filters";
import Card from "@/components/Blog/Card";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import CircleIcon from "@/components/Blog/icons/circleIcon";
import { getArticles } from "@/actions/getArticles";
import { IBlogFilters } from "@/components/Blog/types";
import AnimWrap from "@/components/ui/AnimWrap";
import Reviews from "@/components/Reviews";
import LastForm from "@/components/LastForm";

interface Props {
  params: {
    slug: string;
    id: string;
    title: string;
  };
}


const Blog = async ({ params }: Props) => {
  const articlesData = await getArticles(params.slug);

  const showCards = articlesData && articlesData?.length > 0;
  function cn(arg0: string, arg1: { animated: any; }): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <AnimWrap className={styles.blog}>
      <section className={styles.blogSection}>
        <div className="container">
          <h2 className="h2 animated">Блог</h2>
          <div className={styles.cardList}>
            {showCards &&
              articlesData.map((card: any, i: number) => {
                return (
                  <Card
                    cardData={card}
                    key={i}
                  />
                );
              })}
          </div>
          {showCards && <CircleIcon className={styles.circleIcon} />}
        </div>
      </section>
      {showCards && (
        <>
          <YellowGearIcon className={styles.gearIcon} />
          <TriangleIcon className={styles.triangleIcon} />
        </>
      )}
      <Reviews />
      <LastForm />

    </AnimWrap>
  );
};

export default Blog;
