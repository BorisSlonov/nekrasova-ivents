import cn from "classnames";
import React from "react";
import styles from "./styles.module.css";
import BtcIcon from "./icons/btcIcon";
import Card from "./Card";
import { bottomRow, topRow } from "./config";
import GearIcon from "./icons/gearIcon";
import StartedBtn from "@/components/ui/StartedBtn";
import CornerIcon from "./icons/cornerIcon";

const Choose = () => {
  return (
    <section className={styles.choose}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          why cho{<BtcIcon className={styles.btcIcon} />}se Cryptopayments —
        </h2>

        <div className={styles.topRow}>
          <Card className={styles.border} data={topRow[0]} />
          <Card
            rightText
            data={topRow[1]}
            className={cn(styles.rightCard, styles.border)}
          />
        </div>

        <div className={styles.bottomRow}>
          <Card
            data={bottomRow[0]}
            className={cn(styles.bottomAlign, styles.border)}
          />
          <Card className={styles.bottomRight} rightText data={bottomRow[1]} />
        </div>
        <div className={styles.divider} />
        <GearIcon className={styles.gearIcon} />
        <div className={styles.startedBtn}>
          <StartedBtn />
        </div>
        <CornerIcon className={cn(styles.cornerIcon, styles.topLeftCorner)} />
        <CornerIcon
          className={cn(styles.cornerIcon, styles.bottomLeftCorner)}
        />
        <CornerIcon className={cn(styles.cornerIcon, styles.topRightCorner)} />
        <CornerIcon
          className={cn(styles.cornerIcon, styles.bottomRightCorner)}
        />
      </div>
    </section>
  );
};

export default Choose;
