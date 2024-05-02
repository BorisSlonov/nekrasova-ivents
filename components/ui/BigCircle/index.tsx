import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import cn from "classnames";
interface Props {
  className?: string,
}

const BigCircle = ({ className }: Props) => {
  return (
    <div className={cn(styles.bigCircle, className)}>
      <div className={styles.gearIconWrap}>
        <Image alt={"gear icon"} fill src={"/gear.png"} />
      </div>
    </div>
  );
};

export default BigCircle;
