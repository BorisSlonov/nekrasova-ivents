import React from "react";
import styles from "./styles.module.css";
import FooterTitle from "../FooterTitle";
import Link from "next/link";

const Products = () => {
  return (
    <div className={styles.products}>
      <FooterTitle>Products</FooterTitle>

      <div className={styles.list}>
        <Link href={"/processing"} className={styles.link}>
          Processing
        </Link>
        <Link href={"/exchange"} className={styles.link}>
          Exchange & Wallets
        </Link>
        <Link
          href={"https://app.cryptopayments.com/swagger/"}
          className={styles.link}
        >
          For developers
        </Link>
      </div>
    </div>
  );
};

export default Products;
