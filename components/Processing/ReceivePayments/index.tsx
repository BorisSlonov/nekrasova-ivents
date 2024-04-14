"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import StartedBtn from "@/components/ui/StartedBtn";
import React from "react";
import Header from "@/components/Header";
import ButtonBg from "./icons/buttonBg";
import * as animationData from "./anim/ellipsAnim.json";
import Lottie from "lottie-react";
import UsdtIcon from "./icons/usdtIcon";
import EthIcon from "./icons/ethIcon";
import BtcIcon from "./icons/btcIcon";
import styles from "./styles.module.css";

const ReceivePayments = () => {
  return (
    <section className={styles.receivePayments}>
      <SectionWrap tag="div" className={styles.sectionWrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleText}>
              wanna receive payments in{" "}
              <span className={styles.shadowText}>crypto</span> ?
            </span>
            <span className={styles.colorText}>— Easy</span>
          </h1>

          <div className={styles.btnContent}>
            <span className={styles.btnText}>We’ve got you covered</span>
            <StartedBtn arrowBtnSize={50} className={styles.startedBtn}>
              Open a free account
            </StartedBtn>
            <ButtonBg className={styles.buttonBg} />
          </div>
        </div>
        <Lottie
          className={styles.ellipse}
          loop={false}
          animationData={animationData}
        />
        <UsdtIcon className={styles.usdtIcon} />
        <BtcIcon className={styles.btcIcon} />
        <EthIcon className={styles.ethIcon} />
      </SectionWrap>
    </section>
  );
};

export default ReceivePayments;
