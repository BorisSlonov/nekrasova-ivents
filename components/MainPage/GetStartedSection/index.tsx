import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import RoundText from "./icons/roundText";

const GetStartedSection = () => {
  return (
    <section className={styles.getStartedSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            READY TO GET <span className={styles.colorText}>STARTED</span>?
            <span className={styles.subTitle}>
              Take your business to the next level
            </span>
          </h2>
        </div>
        <div className={styles.btnWrap}>
          <StartedBtn>Start now</StartedBtn>
          <RoundText className={styles.roundText} />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
