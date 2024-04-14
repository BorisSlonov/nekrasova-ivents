"use client";

import React from "react";
import styles from "./styles.module.css";
import { IAccordItem } from "@/components/ui/AccordItem/types";
import AccordItem from "@/components/ui/AccordItem";

interface Props {
  listData: IAccordItem[];
}

const FaqList = ({ listData }: Props) => {
  return (
    <ul className={styles.faqList}>
      {listData.map((item, i) => {
        return <AccordItem data={item} key={i} />;
      })}
    </ul>
  );
};

export default FaqList;
