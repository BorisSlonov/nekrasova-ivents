"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import LogoIcon from "../ui/icons/LogoIcon";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileBtnIcon from "./icons/mobileBtnIcon";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import MobileLogo from "./icons/mobileLogo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = showMenu ? "hidden" : "unset";
  }, [showMenu]);

  const closeMenuHanlder = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className={styles.headerWrap}>
        <header className={cn(styles.header)}>
          <div className={styles.headerContent}>
            <Link className={styles.logoLink} href={"/"}>
              <LogoIcon className={styles.logo} />
              <MobileLogo className={styles.mobileLogo} />
            </Link>
            <Navigation />

            <div className={styles.links}>
              <div className={styles.btnLinks}>
                <Link
                  className={styles.joinLink}
                  href={"https://app.cryptopayments.com/cabinet/cregister"}
                >
                  join now
                </Link>
                <Link
                  className={styles.loginLink}
                  href={"https://app.cryptopayments.com/cabinet/login"}
                >
                  login
                </Link>
              </div>
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className={styles.mobileMenuBtn}
              >
                <MobileBtnIcon />
              </button>
            </div>
          </div>
          <MobileMenu showMenu={showMenu} closeMenuHanlder={closeMenuHanlder} />
        </header>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.blur}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
