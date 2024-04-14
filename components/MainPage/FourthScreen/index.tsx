import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import Image from "next/image";
import Bg from "./icons/bg";

const FourthScreen = () => {
  return (
    <section className={styles.fourthScreen}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <h2 className={styles.title}>Multicurrency support</h2>
          <div className={styles.descr}>
            Say Goodbye to traditional payment barriers and Hello to the future
            of commerce with Crypto Payments for your Business.
          </div>

          <StartedBtn className={styles.startedBtn} />
        </div>
        <div className={styles.coinsBlock}>
          <div className={styles.coinsHeader}>
            <h2 className={styles.coinsTitle}>Multicurrency support</h2>
            <div className={styles.coinsDescr}>
              Say Goodbye to traditional payment barriers and Hello to the
              future of commerce with Crypto Payments for your Business.
            </div>
          </div>

          <Image
            width={0}
            height={0}
            className={styles.coinsImg}
            priority
            unoptimized
            src={"/coins.png"}
            alt="coin image"
          />
        </div>
        <div className={styles.lineBg}>
          <Bg />
        </div>
      </div>
    </section>
  );
};

export default FourthScreen;
