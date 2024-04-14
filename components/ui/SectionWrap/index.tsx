import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
  tag?: string;
  sticky?: boolean;
}

const SectionWrap = ({
  className,
  children,
  sticky,
  tag = "section",
}: Props) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      className={cn(styles.sectionWrap, className, { [styles.sticky]: sticky })}
    >
      {children}
    </CustomTag>
  );
};

export default SectionWrap;
