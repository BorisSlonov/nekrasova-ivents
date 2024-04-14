import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";

const StartedContent = () => {
  return (
    <div className={styles.startedContent}>
      <div className={styles.textWrap}>
        <div className={styles.title}>Unlock the Power of Crypto:</div>
        <div className={styles.descr}>
          Integrate Cryptocurrency Payments into Your Business Effortlessly!
        </div>
      </div>
      <StartedBtn className={styles.startedBtn} />
    </div>
  );
};

export default StartedContent;
