import React from "react";
import styles from "./styles.module.css";
import TriangleIcon from "./icons/triangleIcon";
import ArrowIcon from "./icons/arrowIcon";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <h1 className={styles.title}>
        <span className={styles.titleText}>Oops...</span>
        <TriangleIcon className={styles.triangleIcon} />
      </h1>

      <div className={styles.middleContent}>
        <span> That page doesn&apos;t exist</span>
        <ArrowIcon className={styles.arrowIcon} />
        <Link className={styles.mainPageLink} href={"/"}>
          Main Page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
