import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('https://admin.decornekrasova.ru/api/menus/1?populate=*');
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        const data = await response.json();
        setMenuItems(data.data.attributes.items.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <nav className="header__menu">
      <div className="main-menu">
        <div className="header__list">
          <ul className="main-menu__list">
            {menuItems && menuItems.map((menuItem) => (
              <li key={menuItem.id} className="main-menu__li">
                <a href={menuItem.attributes.url} className="header__link_shops">
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
