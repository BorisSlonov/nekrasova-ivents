import React from "react";
import styles from "./styles.module.css";

import BtcIcon from "./icons/btcIcon";
import EthIcon from "./icons/ethIcon";
import UsdtIcon from "./icons/usdtIcon";
import AdvItem from "../AdvItem";
import Image from "next/image";
import cn from "classnames";
import SlideBackings from "../SlideBackings";
import SlidePagination from "../SlidePagination";

const icons = [
  {
    title: "btc",
    icon: <BtcIcon />,
  },
  {
    title: "eth",
    icon: <EthIcon />,
  },
  {
    title: "usdt",
    icon: <UsdtIcon />,
  },
];
interface Props extends React.HTMLProps<HTMLDivElement> {
  activeSlide: boolean;
}

const Exchange = ({ activeSlide, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(styles.exchange, props.className, {
        [styles.inActive]: !activeSlide,
      })}
    >
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.title}>
            <span className={styles.titleText}>exchange</span>
            <div className={cn(styles.coins)}>
              {icons.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={cn(styles.iconWrap, {
                      [styles.usdtIcon]: item.title === "usdt",
                    })}
                  >
                    {item.icon} {item.title}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.text}>
            Instant exchange between crypto and fiat currencies at the best
            market rates
          </div>

          <AdvItem
            className={styles.advItem}
            iconClassName={styles.advIcon}
            descrClassName={styles.advDescr}
            item={{
              descr:
                "Receive the best exchange rates in your CryptoPayments merchant account at any given time.",
              title: "Best exchange rates",
            }}
          />
        </div>
        <Image
          className={styles.image}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/topUp.png"}
          alt={"btc wallet"}
          unoptimized
          priority
          quality={100}
        />

        <Image
          className={styles.imageMob}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/topUpMob.png"}
          alt={"btc wallet"}
          unoptimized
          quality={100}
          priority
        />
        <SlidePagination slideNum={1} />
      </div>
      <SlideBackings slideNum={1} />
    </div>
  );
};

export default Exchange;
