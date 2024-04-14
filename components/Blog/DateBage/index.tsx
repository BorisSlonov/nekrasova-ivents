import React from "react";
import styles from "./styles.module.css";

interface Props {
  date: string;
}

const DateBage = ({ date }: Props) => {
  return <div className={styles.dateBage}>{date}</div>;
};

export default DateBage;
