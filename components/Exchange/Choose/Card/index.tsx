import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

interface Props {
  className?: string;
  data: {
    title: string;
    descr: string;
    number: string;
  };
  rightText?: boolean;
}

const Card = ({ className, data, rightText }: Props) => {
  const { descr, number, title } = data;

  return (
    <div className={cn(styles.card, className)}>
      <div
        className={cn(styles.text, {
          [styles.rightText]: rightText,
        })}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.descr}>{descr}</span>
      </div>

      <div className={styles.number}>{number}</div>
    </div>
  );
};

export default Card;
