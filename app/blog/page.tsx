import React from "react";
import styles from "./page.module.css";
import Filters from "@/components/Blog/Filters";
import Card from "@/components/Blog/Card";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import CircleIcon from "@/components/Blog/icons/circleIcon";
import { getArticles } from "@/actions/getArticles";
import { IBlogFilters } from "@/components/Blog/types";

interface Props {
  searchParams: { filter: IBlogFilters };
}

const Blog = async ({ searchParams }: Props) => {
  const articlesData = await getArticles(searchParams.filter);

  const showCards = articlesData && articlesData?.length > 0;
  return (
    <main className={styles.blog}>
      <section className={styles.blogSection}>
        <div className={styles.content}>
          <Filters currentFilter={searchParams.filter} />

          <div className={styles.cardList}>
            {showCards &&
              articlesData.map((card, i) => {
                return (
                  <Card
                    currentFilter={searchParams.filter}
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
    </main>
  );
};

export default Blog;
