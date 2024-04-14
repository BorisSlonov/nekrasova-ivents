import React from "react";
import styles from "./page.module.css";
import Secure from "@/components/Exchange/Secure";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/MainPage/GetStartedSection";
import Transactions from "@/components/Exchange/Transactions";
import ExchangeSection from "@/components/Exchange/ExchangeSection";
import Choose from "@/components/Exchange/Choose";

const Exchange = () => {
  return (
    <main className={styles.exchange}>
      <Transactions />
      <ExchangeSection />
      <Secure />
      <Choose />
      <GetStartedSection />
    </main>
  );
};

export default Exchange;
