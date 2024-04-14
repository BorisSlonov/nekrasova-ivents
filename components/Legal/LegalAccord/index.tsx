"use client";

import cn from "classnames";
import styles from "./styles.module.css";
import AccordItem from "@/components/ui/AccordItem";
import { IAccordItem } from "@/components/ui/AccordItem/types";

interface Props {
  className?: string;
  data: IAccordItem[];
}

const LegalAccord = ({ className, data }: Props) => {
  return (
    <ul className={cn(styles.faqList, className)}>
      {data.map((item, i) => {
        return <AccordItem key={i} data={item} />;
      })}
    </ul>
  );
};

export default LegalAccord;
