"use client";

import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import BlackArrow from "./icons/BlackArrow";
import cn from "classnames";
import Link from "next/link";

interface Props {
  className?: string;
  children?: ReactNode;
  arrowBtnSize?: number;
}

const StartedBtn = ({ className, children, arrowBtnSize }: Props) => {
  return (
    <div className={cn(styles.startedBtnWrap, className)}>
      <Link
        className={cn(styles.startedBtn, styles.animate)}
        href={"https://app.cryptopayments.com/cabinet/login"}
      >
        {children ? children : "get started"}
      </Link>

      <button
        style={{
          height: arrowBtnSize,
          width: arrowBtnSize,
        }}
        className={styles.arrowBtn}
      >
        <BlackArrow />
      </button>
    </div>
  );
};

export default StartedBtn;
