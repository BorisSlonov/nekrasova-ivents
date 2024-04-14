import React from "react";
import styles from "./styles.module.css";
import FooterTitle from "../FooterTitle";
import Image from "next/image";
import Link from "next/link";
import Arrow from "./icons/arrow";
import Inst from "./icons/inst";
import Face from "./icons/face";
import Tlg from "./icons/tlg";
import Linked from "./icons/linked";

const Social = () => {
  return (
    <div className={styles.social}>
      <Link prefetch={false} href={"mailto:support@cryptopayments.com"}>
        <div className={styles.supportBlock}>
          <FooterTitle>Support:</FooterTitle>
          <span className={styles.link}>support@cryptopayments.com</span>
          <div className={styles.logo}>
            <Image
              src={"/footerSocialBg.png"}
              alt="'logo"
              width={74}
              height={74}
            />
          </div>
          <Arrow className={styles.arrow} />
        </div>
      </Link>
      <div className={styles.iconsLinks}>
        <Link
          className={styles.link}
          href={
            "https://www.instagram.com/crypto_payments?igsh=MXh6Y3EydXhwaDV2aA=="
          }
        >
          <Inst />
        </Link>
        <Link
          className={styles.link}
          href={
            "https://www.facebook.com/profile.php?id=61555951127771&mibextid=LQQJ4d"
          }
        >
          <Face />
        </Link>
        <Link className={styles.link} href={"https://t.me/Cryptopayments_B2B"}>
          <Tlg />
        </Link>
        <Link
          className={styles.link}
          href={"https://www.linkedin.com/company/cryptopayments-com/"}
        >
          <Linked />
        </Link>
      </div>
    </div>
  );
};

export default Social;
