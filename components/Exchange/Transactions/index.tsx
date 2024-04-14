import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import TopLeftBlur from "./icons/topLeftBlur";

import Image from "next/image";
import LineIcon from "./icons/lineIcon";
import GearIcon from "./icons/gearIcon";

const Transactions = () => {
  return (
    <section className={styles.transactions}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>
            <span className={styles.titleText}>
              Make transactions directly in your wallets
            </span>
            <span className={styles.subTitle}>All in one account. </span>
          </h1>
          <Image
            width={560}
            height={328}
            sizes="100vw"
            priority
            alt="macbook"
            src={"/exchange/macbookMob.png"}
            className={styles.macbookMob}
            unoptimized
            quality={100}
          />
          <div className={styles.btnContent}>
            <span className={styles.btnText}>
              Deposit, exchange, withdraw without delays and unnecessary
              settings
            </span>

            <div className={styles.startedBtn}>
              <StartedBtn>Get started</StartedBtn>
            </div>
          </div>
        </div>
      </div>
      <TopLeftBlur className={styles.topLeftBlur} />

      <div className={styles.centerBtmBlur} />
      <div className={styles.bottomRightBlur} />
      <div className={styles.macBook}>
        <LineIcon className={styles.line} />
      </div>
      <GearIcon className={styles.gearIcon} />
    </section>
  );
};

export default Transactions;
