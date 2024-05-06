import React from "react";
import { getMenuMain } from "@/actions/getMenu";

interface MenuItem {
  id: number;
  attributes: {
    title: string;
    url: string;
  };
}

const Navigation = async () => {
  const data = await getMenuMain()
  return (
    <nav className="header__menu">
      <div className="main-menu">
        <div className="header__list">
          <ul className="main-menu__list">
            {data && data.map((menuItem: MenuItem) => (
              <li key={menuItem.id} className="main-menu__li">
                <a href={menuItem.attributes.url} className="header__link">
                  {menuItem.attributes.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;