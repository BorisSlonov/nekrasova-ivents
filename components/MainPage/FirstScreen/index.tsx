import React from "react";
import styles from "./styles.module.css";
import Header from "@/components/Header";
import Image from "next/image";

import StartedBtnBg from "./icons/startedBtnBg";
import StartedBtn from "@/components/ui/StartedBtn";
import SectionWrap from "@/components/ui/SectionWrap";

const FirstScreen = () => {
  return (
    <SectionWrap className={styles.firstScreen}>
      {/* <Header /> */}
      <div className={styles.content}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>
            Crypto Payments for your{" "}
            <span className={styles.business}>Business</span>
          </h1>
          <Image
            width={400}
            height={400}
            className={styles.image}
            src={"/mainPage/firstScreenCircles.png"}
            alt="crypto payment ecosystem"
            layout="responsive"
          />
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.startedContent}>
            <StartedBtn className={styles.startedBtnWrap} />
            <div className={styles.startedBtnBgWrap}>
              <StartedBtnBg />
            </div>
          </div>
          <div className={styles.bottomText}>
            A simple solution to start accepting cryptocurrencies
          </div>
        </div>
      </div>
    </SectionWrap>
  );
};

export default FirstScreen;
