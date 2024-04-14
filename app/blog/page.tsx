import React from "react";
import styles from "./page.module.css";
import SectionWrap from "@/components/ui/SectionWrap";
import Filters from "@/components/Blog/Filters";
import Footer from "@/components/Footer";
import Card from "@/components/Blog/Card";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import CircleIcon from "@/components/Blog/icons/circleIcon";
import { cardsConfig } from "@/components/Blog/cardsConfig";

interface Props {
  searchParams: { filter: string };
}

const Blog = ({ searchParams }: Props) => {
  const showCards =
    searchParams.filter === undefined || searchParams.filter === "articles";

  return (
    <main className={styles.blog}>
      <section className={styles.blogSection}>
        <div className={styles.content}>
          <Filters />

          <div className={styles.cardList}>
            {showCards &&
              cardsConfig.map((card, i) => {
                return <Card cardData={card} key={i} />;
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
