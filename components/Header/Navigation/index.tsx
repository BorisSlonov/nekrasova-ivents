import React, { useState, useEffect } from "react";
import { getMenuMain } from "@/actions/getMenu";

interface MenuItem {
  id: number;
  attributes: {
    title: string;
    url: string;
  };
}

const Navigation = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const getMenuData = async () => {
      const data = await getMenuMain();
      setMenuItems(data);
    };

    getMenuData();
  }, []);

  return (
    <nav className="header__menu">
      <div className="main-menu">
        <div className="header__list">
          <ul className="main-menu__list">
            {menuItems && menuItems.map((menuItem) => (
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