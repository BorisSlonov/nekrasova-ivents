import React from "react";
import styles from "./page.module.css";
import AnimWrap from "@/components/ui/AnimWrap";
import CategorySingle from "@/components/CategoriesList/CategorySingle";
import { redirect } from "next/navigation";
import { getCategory } from "@/actions/getCategory";
import Reviews from "@/components/Reviews";
import LastForm from "@/components/LastForm";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import SectionWrap from "@/components/ui/SectionWrap";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import Link from "next/link";
import ArticleArrow from "@/components/Blog/icons/articleArrow";

interface Props {
  params: {
    slug: string;
    id: string;
    title: string;
  };
}

const Category = async ({ params }: Props) => {
  const { slug } = params;
  const categoryData: any = await getCategory(slug);

  // if (!categoryData) {
  //   redirect("/categories");
  // }

  return (
    <section className="otherWrapper">
      <div className={styles.blog}>
        <div className={'container'}>
          <h1 className={styles.header}>
            <Link href={"/categories"}>Категории</Link> <ArticleArrow />{" "}
            {categoryData[0].goods[0].title}
          </h1>
        </div>
        <CategorySingle
          categoryData={categoryData}
        />
        <Reviews />
        <LastForm />
        <YellowGearIcon className={styles.gearIcon} />
        <TriangleIcon className={styles.triangleIcon} />
      </div>
    </section>
  );
};



export default Category;
