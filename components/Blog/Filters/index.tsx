import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import Link from "next/link";
import { filters } from "./config";
import { IBlogFilters } from "../types";

interface Props {
  currentFilter: IBlogFilters;
}

const Filters = ({ currentFilter }: Props) => {
  return (
    <div className={cn(styles.filters, "hideScroll")}>
      <div className={styles.filtersWrap}>
        {filters.map((filter, i) => {
          const activeFilter =
            currentFilter === filter.title ||
            (!currentFilter && filter.title === "All");

          return (
            <Link
              href={filter.href}
              key={i}
              className={cn(styles.filterItem, {
                [styles.active]: activeFilter,
              })}
            >
              {filter.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
