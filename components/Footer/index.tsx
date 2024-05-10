import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css"

// icons
import WaIcon from "../ui/icons/WaIcon";
import InstIcon from "../ui/icons/InstIcon";
import TgIcon from "../ui/icons/TgIcon";




const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="footer__body">
          <div className="footer__item">
            <Link
              className={styles.logoLink}
              href={'/'}
            >
              <Image
                className={styles.logo}
                src="/logo.svg"
                alt="лого"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="footer__item">
            <h3 className="footer__h3">Категории</h3>
            <ul className="hoverOpen__list_shops">
              <li className="hoverOpen__li">
                <a href="#" className="hoverOpen__a">
                  <h4 className="hoverOpen__h4">
                    <img width="24" height="24" src="/icons/Tilda_Icons_5ev_baloons.svg" alt="" className="hoverOpen__h4-icon" />
                    <span className="hoverOpen__h4-span">Воздушные шары</span>
                  </h4>
                </a>
              </li>
              <li className="hoverOpen__li">
                <a href="#" className="hoverOpen__a">
                  <h4 className="hoverOpen__h4">
                    <img width="24" height="24" src="/icons/Tilda_Icons_5ev_disco.svg" alt="" className="hoverOpen__h4-icon" />
                    <span className="hoverOpen__h4-span">Выпускной вечер</span>
                  </h4>
                </a>
              </li>
              <li className="hoverOpen__li">
                <a href="#" className="hoverOpen__a">
                  <h4 className="hoverOpen__h4">
                    <img width="24" height="24" src="/icons/Tilda_Icons_5ev_magic.svg" alt="" className="hoverOpen__h4-icon" />
                    <span className="hoverOpen__h4-span">Свадебный декор</span>
                  </h4>
                </a>
              </li>
              <li className="hoverOpen__li">
                <a href="#" className="hoverOpen__a">
                  <h4 className="hoverOpen__h4">
                    <img width="24" height="24" src="/icons/Tilda_Icons_5ev_medal.svg" alt="" className="hoverOpen__h4-icon" />
                    <span className="hoverOpen__h4-span">Свадебные аксессуары</span>
                  </h4>
                </a>
              </li>
              <li className="hoverOpen__li">
                <a href="#" className="hoverOpen__a">
                  <h4 className="hoverOpen__h4">
                    <img width="24" height="24" src="/icons/Tilda_Icons_5ev_couple.svg" alt="" className="hoverOpen__h4-icon" />
                    <span className="hoverOpen__h4-span">Корпоративные клиенты</span>
                  </h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h3 className="footer__h3">Контакты</h3>
            <ul role="list" className="t-sociallinks__wrapper" aria-label="Social media links">
              <li className="t-sociallinks__item t-sociallinks__item_whatsapp">
                <a href="https://wa.me/79521849096" target="_blank" rel="nofollow noopener" aria-label="WhatsApp" style={{ width: "30px", height: "30px" }}>
                  <WaIcon />
                </a>
              </li>
              <li className="t-sociallinks__item t-sociallinks__item_instagram">
                <a href="https://instagram.com/purple_giraffe_tomsk" target="_blank" rel="nofollow noopener" aria-label="Instagram" title="Instagram" style={{ width: "30px", height: "30px" }}>
                  <InstIcon />
                </a>
              </li>
              <li className="t-sociallinks__item t-sociallinks__item_telegram">
                <a href="https://t.me/yesweddingtomsk" target="_blank" rel="nofollow noopener" aria-label="Telegram" style={{ width: "30px", height: "30px" }}>
                  <TgIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
