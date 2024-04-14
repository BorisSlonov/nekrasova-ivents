import React from "react";
import styles from "./styles.module.css";
import ArrowIcon from "./icons/arrowIcon";
import cn from "classnames";
import Link from "next/link";
import { IBlogFilters } from "../../types";
import { getArticles } from "@/actions/getArticles";
import { getHref } from "./utils/getHref";
import { redirect } from "next/navigation";

interface Props {
  className?: string;
  pageId: string;
  curFilter: IBlogFilters;
}

const NavBtns = async ({ className, pageId, curFilter }: Props) => {
  const articlesData = await getArticles(curFilter);

  if (!articlesData) {
    redirect("/not-found");
  }

  return (
    <div className={cn(styles.navBtns, className)}>
      <button className={styles.btn}>
        <Link
          className={styles.link}
          href={getHref("prev", pageId, articlesData, curFilter)}
        >
          <ArrowIcon />
          Previous
        </Link>
      </button>

      <button className={cn(styles.btn, styles.nextBtn)}>
        <Link
          className={styles.link}
          href={getHref("next", pageId, articlesData, curFilter)}
        >
          Next
          <ArrowIcon />
        </Link>
      </button>
    </div>
  );
};

export default NavBtns;
