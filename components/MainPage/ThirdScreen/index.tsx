"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import TriangleIcon from "./icons/triangleIcon";
import StartedContent from "./StartedContent";
import InstructionList from "./InstructionList";
import { useInView } from "framer-motion";
import cn from "classnames";

const ThirdScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <section ref={containerRef} className={styles.thirdScreen}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={cn(styles.titleWrap, { [styles.titleWrap_active]: isInView })} >
            <h2 className={styles.title}>Fast integration</h2>
            <div className={styles.titleDivider} />
            <div className={styles.triangleWrap}>
              <TriangleIcon />
            </div>
          </div>

          <div className={cn(styles.imageWrap, { [styles.imageWrap_active]: isInView })}>
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
