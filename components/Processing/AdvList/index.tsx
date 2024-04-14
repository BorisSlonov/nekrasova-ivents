import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import AdvCard from "./AdvCard";

const config = [
  {
    title: "RELIABLE FEES",
    descr: "No Setup Fees. No Hidden Fees",
    num: 1,
  },
  {
    title: "AUTO CONVERSION",
    descr: "Swap crypto accets",
    num: 2,
  },
  {
    title: "NO CHARGEBACKS",
    descr: "Uninterrupted Financial Procedures",
    num: 3,
  },
];

const AdvList = () => {
  return (
    <SectionWrap>
      <div className={styles.content}>
        <div className={styles.advList}>
          {config.map((item, i) => {
            return <AdvCard cardData={item} key={i} />;
          })}
        </div>
      </div>
    </SectionWrap>
  );
};

export default AdvList;
