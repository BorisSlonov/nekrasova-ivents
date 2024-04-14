import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

const FooterTitle = ({ children, className }: Props) => {
  return <span className={cn(styles.footerTitle, className)}>{children}</span>;
};

export default FooterTitle;
