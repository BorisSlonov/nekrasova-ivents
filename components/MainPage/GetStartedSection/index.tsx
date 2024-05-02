"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import RoundText from "./icons/roundText";

import cn from "classnames";
import { useInView } from "framer-motion";

const GetStartedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <section ref={containerRef} className={styles.getStartedSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={cn(styles.title, {
            [styles.title_active]: isInView,
          })}>
            READY TO GET <span className={styles.colorText}>STARTED</span>?
            <span className={styles.subTitle}>
              Take your business to the next level
            </span>
          </h2>
        </div>
        <div className={styles.btnWrap}>
          <StartedBtn>Start now</StartedBtn>
          <RoundText className={cn(styles.roundText, {
            [styles.roundText_active]: isInView,
          })} />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
