import React from "react";
import styles from "./styles.module.css";
import LinkItem from "./LinkItem";
import { links } from "./links";
import { navLinks } from "../../navLinks";

interface Props {
  closeMenuHanlder: () => void;
}

const LinksList = ({ closeMenuHanlder }: Props) => {
  return (
    <div className={styles.linksList}>
      {navLinks.map((item, key) => {
        return (
          <LinkItem
            closeMenuHanlder={closeMenuHanlder}
            linkData={item}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default LinksList;
