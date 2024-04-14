import React from "react";
import styles from "./styles.module.css";
import dayjs from "dayjs";

interface Props {
  date: string;
}

const DateBage = ({ date }: Props) => {
  const formattedDate = dayjs(date).format("D MMMM YYYY");
  return <div className={styles.dateBage}>{formattedDate}</div>;
};

export default DateBage;
