import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { navLinks } from "../navLinks";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navLinks.map((link, i) => {
        return (
          <Link className={styles.navLink} href={link.href} key={i}>
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
