import React from "react";
import styles from "./styles.module.css";
import Company from "./Company";
import Legal from "./Legal";
import Products from "./Products";
import Social from "./Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <Company />

          <div className={styles.mobileWrap}>
            <Legal />
            <Products />
            <Social />
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.bottomTextWrap}>
            <span className={styles.bottomText}>
              Cryptopayments is a brand name of Stellar LLC, Registry code: 2969
              LLC 2023
            </span>
            <span className={styles.bottomText}>
              Registered office: Suite 305, Griffith Corporate Centre,
              Beachmont, Kingstown, St. Vincent and the Grenadines
            </span>
          </div>
          <div className={styles.date}>
            © Copyright Stellar LLC {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
