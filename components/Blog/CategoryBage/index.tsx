import React from "react";
import styles from "./styles.module.css";

interface Props {
  category: string;
}

const CaterogyBage = ({ category }: Props) => {
  return <div className={styles.categoryBage}>{category}</div>;
};

export default CaterogyBage;
