import React from "react";
import styles from "./styles.module.css";
import ArrowIcon from "./icons/arrowIcon";
import cn from "classnames";
import { articlesConfig } from "../../articlesConfig";
import Link from "next/link";
import { getHref } from "./utils/getHref";

interface Props {
  className?: string;
  pageId: string;
}

const NavBtns = ({ className, pageId }: Props) => {
  return (
    <div className={cn(styles.navBtns, className)}>
      <button className={styles.btn}>
        <Link className={styles.link} href={`/blog/${getHref("prev", pageId)}`}>
          <ArrowIcon />
          Previous
        </Link>
      </button>

      <button className={cn(styles.btn, styles.nextBtn)}>
        <Link className={styles.link} href={`/blog/${getHref("next", pageId)}`}>
          Next
          <ArrowIcon />
        </Link>
      </button>
    </div>
  );
};

export default NavBtns;
