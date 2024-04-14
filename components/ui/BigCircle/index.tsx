import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const BigCircle = () => {
  return (
    <div className={styles.bigCircle}>
      <div className={styles.gearIconWrap}>
        <Image alt={"gear icon"} fill src={"/gear.png"} />
      </div>
    </div>
  );
};

export default BigCircle;
