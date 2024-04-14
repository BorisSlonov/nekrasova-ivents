"use client";

import React, { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { IAccordeonData } from "@/components/FaqLegal/types";
import AccordItem from "@/components/ui/AccordItem";

interface Props {
  className?: string;
  data: IAccordeonData;
}

const FaqList = ({ className, data }: Props) => {
  const { AccordeonItems, title } = data;

  const showTitle = title.length > 0;

  return (
    <ul className={cn(styles.faqList, className)}>
      {showTitle && (
        <li>
          <h2 className={styles.accordeonHeader}>{title}</h2>
        </li>
      )}
      {AccordeonItems.map((item, i) => {
        return <AccordItem key={i} data={item} />;
      })}
    </ul>
  );
};

export default FaqList;
