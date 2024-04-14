import React from "react";
import styles from "./styles.module.css";
import FaqList from "@/components/ui/FaqList";
import { config } from "./config";
import BigCircle from "@/components/ui/BigCircle";
import Arrow from "./icons/arrow";
import Link from "next/link";

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div id="faq" className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>

          <span className={styles.subTitle}>
            Everything you need to know about the product
          </span>
        </div>

        <FaqList className={styles.faqList} data={config} />

        <div className={styles.showMore}>
          <span className={styles.showMoreText}>
            Didn&apos;t find the answer you were looking for?
          </span>
          <Arrow className={styles.arrowPc} />

          <Link href={"#"} className={styles.showMoreBtn}>
            show more
          </Link>
        </div>
      </div>
      <BigCircle />
    </section>
  );
};

export default Faq;
