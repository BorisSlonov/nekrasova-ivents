import React from "react";
import styles from "./styles.module.css";
import FooterTitle from "../FooterTitle";
import Link from "next/link";
import { leftLinks, rightLinks } from "./links";

const Legal = () => {
  return (
    <div className={styles.legal}>
      <FooterTitle>Legal</FooterTitle>
      <div className={styles.listsWrap}>
        <ul className={styles.list}>
          {leftLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.href} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={styles.list}>
          {rightLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.href} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Legal;
