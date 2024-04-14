import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import Link from "next/link";

interface Props {
  linkData: {
    title: string;
    href: string;
  };
  closeMenuHanlder: () => void;
}

const LinkItem = ({ linkData, closeMenuHanlder }: Props) => {
  const { href, title } = linkData;

  return (
    <Link onClick={closeMenuHanlder} href={href} className={styles.linkItem}>
      {title}
      <Arrow />
    </Link>
  );
};

export default LinkItem;
