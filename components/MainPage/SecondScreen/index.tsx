import React from "react";
import styles from "./styles.module.css";
import CardList from "./CardList";
import BigCircle from "@/components/ui/BigCircle";

const SecondScreen = () => {
  return (
    <section className={styles.secondScreen}>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.titleWrap}>
            <span className={styles.subTitle}>
              Full circle of payments products
            </span>
            <h2 className={styles.title}>TAILORED TO YOUR NEEDS</h2>
          </div>
          <CardList />
        </div>

        <BigCircle />
      </div>
    </section>
  );
};

export default SecondScreen;
