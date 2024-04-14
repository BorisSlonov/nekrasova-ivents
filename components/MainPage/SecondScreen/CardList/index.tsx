import React from "react";
import styles from "./styles.module.css";
import Card from "./Card";

const CardList = () => {
  const cardData = [
    {
      title: "CRYPTO WALLETS",
      descr: "Securely store cryptocurrencies in one safety place",
      link: "/exchange",
    },
    {
      title: "CRYPTO PROCESSING",
      descr:
        "Get payed & receive crypto payments instantly directly to your wallet",
      link: "/processing",
    },
    {
      title: "B2B EXCHANGE",
      descr: "Exchange Crypto to fiat and settle to Your Bank Account",
      link: "/exchange",
    },
  ];

  return (
    <div className={styles.cardList}>
      {cardData.map((card, i) => {
        return <Card cardData={card} key={i} />;
      })}
    </div>
  );
};

export default CardList;
