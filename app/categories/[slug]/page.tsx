import React from "react";
import styles from "./page.module.css";
import AnimWrap from "@/components/ui/AnimWrap";
import { getCategory } from "@/actions/getCategory";
import CategorySingle from "@/components/CategoriesList/CategorySingle";
import { redirect } from "next/navigation";


interface Props {
  params: {
    slug: string;
    id: number;
    title: string;
  };
}

const Category = async ({ params }: Props) => {
  const categoryData = await getCategory(params.slug);

  if (!categoryData) {
    redirect("/categories");
  }


  return (
    <AnimWrap className={styles.blog}>
      <CategorySingle
        pageSlug={params.slug}
        categoryData={categoryData}
      />
    </AnimWrap>
  );
};

export default Category;