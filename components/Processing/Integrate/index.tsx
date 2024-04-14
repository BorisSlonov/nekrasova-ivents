import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import IntegrateCard from "./IntegrateCard";
import CircleBg from "./icons/circleBg";
import TriangeIcon from "./icons/triangeIcon";
import CircleText from "./icons/circleText";
import UsdtIcon from "./icons/usdtIcon";

const cardConfig = [
  {
    title: "One click solution",
    descr:
      "Save time. Widget is quick and easy to integrate, and you won't have to involve those tech guys.",
  },
  {
    title: "Restful API Architecture",
    descr:
      "Our API Developer Portal is packed with all the documentation and additional support you need to get started.",
  },
  {
    title: "Track customers",
    descr:
      "All cardholder data in real time to monitor and manage everything going on in the sandbox.",
  },
];

const Integrate = () => {
  return (
    <SectionWrap className={styles.integrate}>
      <div className={styles.content}>
        <div className={styles.titleWrap}>
          <h2>
            <span className={styles.titleText}>Integrate</span>
            <TriangeIcon className={styles.triangleIcon} />
          </h2>
        </div>
        <span className={styles.subTitle}>how you prefer</span>
        <div className={styles.cardList}>
          {cardConfig.map((card, i) => {
            return <IntegrateCard card={card} key={i} />;
          })}
        </div>
        <CircleText className={styles.circleText} />
        <UsdtIcon className={styles.usdtIcon} />
      </div>
      <CircleBg className={styles.circleBg} />
    </SectionWrap>
  );
};

export default Integrate;
