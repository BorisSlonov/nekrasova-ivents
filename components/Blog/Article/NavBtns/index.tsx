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
        {getHref("prev", pageId, articlesData, curFilter) !== pageId && (
          <Link className={styles.link} href={getHref("prev", pageId, articlesData, curFilter)}>
            <ArrowIcon />
            Предыдущая
          </Link>
        )}
      </button>

      <button className={cn(styles.btn, styles.nextBtn)}>
        {getHref("next", pageId, articlesData, curFilter) !== pageId && (
          <Link className={styles.link} href={getHref("next", pageId, articlesData, curFilter)}>
            Следующая
            <ArrowIcon />
          </Link>
        )}
      </button>
    </div>
  );
};

export default NavBtns;
