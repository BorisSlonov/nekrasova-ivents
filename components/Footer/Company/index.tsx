import React from "react";
import FooterTitle from "../FooterTitle";
import styles from "./styles.module.css";

const Company = () => {
  return (
    <div className={styles.company}>
      <FooterTitle>Company</FooterTitle>
      <div className={styles.list}>
        <div className={styles.topListItems}>
          <div className={styles.text}>Stellar LLC</div>
          <div className={styles.text}>Registry code: 2969 LLC 2023</div>
        </div>
        <div className={(styles.text, styles.bottomText)}>
          Address: Suite 305, Griffith Corporate Centre, Beachmont, Kingstown,
          St. Vincent and the Grenadines
        </div>
      </div>
    </div>
  );
};

export default Company;
