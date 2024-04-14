import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import TriangleIcon from "./icons/triangleIcon";
import StartedContent from "./StartedContent";
import InstructionList from "./InstructionList";

const ThirdScreen = () => {
  return (
    <section className={styles.thirdScreen}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>Fast integration</h2>
            <div className={styles.titleDivider} />
            <div className={styles.triangleWrap}>
              <TriangleIcon />
            </div>
          </div>

          <div className={styles.imageWrap}>
            <Image
              fill
              src={"/mainPage/thirdSectionText.png"}
              alt={"round text"}
            />
          </div>
        </div>
        <div className={styles.bottomContent}>
          <StartedContent />
          <InstructionList />
        </div>
      </div>
    </section>
  );
};

export default ThirdScreen;
