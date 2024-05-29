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
import { getContacts } from "@/actions/getContacts";
import Vk from "./icons/vk";

const Social = async () => {
  const {
    attributes: { email, Instagram, LinkedIn, facebook, telegram },
  } = await getContacts();

  return (
    <div className={styles.social}>
      <Link prefetch={false} href={`mailto:${email}`}>
        <div className={styles.supportBlock}>
          <FooterTitle>Support:</FooterTitle>
          <span className={styles.link}>support@decornekrasova.com</span>
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
        <Link className={styles.link} href={Instagram}>
          <Inst />
        </Link>
        <Link className={styles.link} href={facebook}>
          <Face />
        </Link>
        <Link className={styles.link} href={telegram}>
          <Tlg />
        </Link>
      </div>
    </div>
  );
};

export default Social;
