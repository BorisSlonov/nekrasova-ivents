import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

interface Props {
  slideNum: number;
}

const SlideBackings = ({ slideNum }: Props) => {
  return (
    <div className={styles.slideBackings}>
      <div className={styles.wrapper}>
        {slideNum < 3 && <div className={cn(styles.top, styles.backing)} />}
        {slideNum < 2 && <div className={cn(styles.middle, styles.backing)} />}
        {slideNum < 1 && <div className={cn(styles.bottom, styles.backing)} />}
      </div>
    </div>
  );
};

export default SlideBackings;
