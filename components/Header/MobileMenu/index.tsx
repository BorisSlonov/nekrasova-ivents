import React from "react";
import styles from "./styles.module.css";
import LogoIcon from "@/components/ui/icons/LogoIcon";
import CloseIcon from "./icons/closeIcon";
import LinksList from "./LinksList";
import Link from "next/link";
import cn from "classnames";

interface Props {
  closeMenuHanlder: () => void;
  showMenu: boolean;
}

const MobileMenu = ({ closeMenuHanlder, showMenu }: Props) => {
  return (
    <div
      className={cn(styles.mobileMenu, {
        [styles.showMenu]: showMenu,
        [styles.hideMenu]: !showMenu,
      })}
    >
      <div className={styles.header}>
        <Link onClick={closeMenuHanlder} className={styles.logoLink} href={"/"}>
          <LogoIcon />
        </Link>
        <button onClick={closeMenuHanlder} className={styles.closeBtn}>
          <CloseIcon />
        </button>
      </div>
      <LinksList closeMenuHanlder={closeMenuHanlder} />


    </div>
  );
};

export default MobileMenu;
