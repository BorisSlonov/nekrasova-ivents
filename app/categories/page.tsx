import React from "react";
import styles from "./page.module.css";
import CategoriesList from "@/components/CategoriesList";
import AnimWrap from "@/components/ui/AnimWrap";
import Reviews from "@/components/Reviews";
import LastForm from "@/components/LastForm";


const Categories = async () => {
  return (
    <AnimWrap className={styles.blog}>
      <CategoriesList />
      <Reviews />
      <LastForm />
    </AnimWrap>
  );
};

export default Categories;