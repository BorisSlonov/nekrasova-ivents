import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import { config } from "./config";
import Card from "./Card";
import DashedCircle from "./icons/dashedCircle";
import GearIcon from "./icons/gearIcon";
import PurpleArrow from "./icons/purpleArrow";
import YellowArrow from "./icons/yellowArrow";
import DollarIcon from "./icons/dollarIcon";
import cn from "classnames";
import BtcIcon from "./icons/btcIcon";
import EurIcon from "./icons/eurIcon";
import UsdtIcon from "./icons/usdtIcon";
import MobilePurpleArrow from "./icons/mobilePurpleArrow";

const ExchangeSection = () => {
  return (
    <SectionWrap className={styles.exchangeSection}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>EXCHANGE</h2>
          <span className={styles.subTitle}>Crypto — fiat — crypto</span>
        </div>

        <div className={styles.cardList}>
          {config.map((card, i) => {
            return <Card key={i} cardData={card} />;
          })}
        </div>
      </div>
      <div className={styles.dashedCircleWrap}>
        <DashedCircle className={styles.dashedCircle} />
      </div>
      <div className={styles.whiteCircle} />

      <GearIcon className={styles.gearIcon} />
      <div className={styles.purpleWrap}>
        <PurpleArrow className={styles.purpleArrow} />

        <div className={cn(styles.bage, styles.usdBage)}>
          <DollarIcon />
          USD
        </div>

        <div className={cn(styles.bage, styles.eurBage)}>
          <EurIcon />
          eur
        </div>
      </div>
      <div className={styles.yellowWrap}>
        <YellowArrow className={styles.yellowArrow} />
        <div className={cn(styles.bage, styles.btcBage)}>
          <BtcIcon />
          btc
        </div>
        <div className={cn(styles.bage, styles.usdtBage)}>
          <UsdtIcon />
          usdt
        </div>
      </div>
    </SectionWrap>
  );
};

export default ExchangeSection;
