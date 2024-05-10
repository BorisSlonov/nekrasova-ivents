import React from "react";
import styles from "./page.module.css";
import AnimWrap from "@/components/ui/AnimWrap";
import CategorySingle from "@/components/CategoriesList/CategorySingle";
import { redirect } from "next/navigation";
import { getCategory } from "@/actions/getCategory";
import Reviews from "@/components/Reviews";
import LastForm from "@/components/LastForm";

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
    <AnimWrap className={styles.blog}>
      <CategorySingle
        categoryData={categoryData}
      />
      <Reviews />
      <LastForm />
    </AnimWrap>
  );
};

export default Category;
