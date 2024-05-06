import React from "react";
import styles from "./styles.module.css";
import LinkItem from "./LinkItem";
import { getMenuMain } from "@/actions/getMenu";

interface Props {
  closeMenuHanlder: () => void;
}

interface MenuItem {
  id: number;
  attributes: {
    title: string;
    url: string;
  };
}

const LinksList = async ({ closeMenuHanlder }: Props) => {
  const data = await getMenuMain()
  return (
    <div className={styles.linksList}>
      {data && data.map((menuItem: MenuItem) => (
        <li key={menuItem.id} className="main-menu__li">
          <a href={menuItem.attributes.url} className="header__link">
            {menuItem.attributes.title}
          </a>
        </li>
      ))}
    </div>
  );
};

export default LinksList;
