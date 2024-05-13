import React from "react";
import styles from "./styles.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ru"; 

interface Props {
  date: string;
}

const DateBage = ({ date }: Props) => {
  dayjs.locale("ru");
  const formattedDate = dayjs(date).format("D MMMM YYYY");
  return <div className={styles.dateBage}>{formattedDate}</div>;
};

export default DateBage;
