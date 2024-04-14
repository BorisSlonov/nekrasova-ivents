import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import Link from "next/link";
import { filters } from "./config";

const Filters = () => {
  return (
    <div className={cn(styles.filters, "hideScroll")}>
      <div className={styles.filtersWrap}>
        {filters.map((filter, i) => {
          return (
            <Link href={filter.href} key={i} className={styles.filterItem}>
              {filter.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
