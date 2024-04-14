import React from "react";
import styles from "./styles.module.css";

const InstructionList = () => {
  const config = [
    "Become our merchant.",
    "Customise your payment form.",
    "Start accepting crypto payments on the day of approval!",
  ];

  return (
    <ul className={styles.instructionList}>
      {config.map((item, i) => {
        return (
          <li key={i} className={styles.listItem}>
            <div className={styles.textContent}>
              <div className={styles.number}>0{i + 1}</div>
              <div className={styles.text}>{item}</div>
            </div>
            {i !== config.length - 1 && <div className={styles.divider} />}
          </li>
        );
      })}
    </ul>
  );
};

export default InstructionList;
