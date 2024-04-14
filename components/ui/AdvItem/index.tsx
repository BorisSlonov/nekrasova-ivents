import React from "react";
import styles from "./styles.module.css";
import CheckedIcon from "./icons/checkedIcon";
import cn from "classnames";

interface Props {
  item: {
    title: string;
    descr?: string;
  };

  className?: string;
}

const AdvItem = ({ item, className }: Props) => {
  const { descr, title } = item;
  return (
    <div className={cn(styles.advItem, className)}>
      <div className={styles.title}>
        <CheckedIcon />
        <span className={styles.text}>{title}</span>
      </div>
      {descr && <div className={styles.descr}>{descr}</div>}
    </div>
  );
};

export default AdvItem;
