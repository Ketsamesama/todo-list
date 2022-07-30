import React from 'react';

import { NavLink } from 'react-router-dom';
import { appPath } from 'utils/path';

import './NavMenu.scss';

const NavMenu = () => {
  const linkList = ['Все', 'Активные', 'Выполненные'];

  return (
    <nav>
      <ul>
        {linkList.map((link, i) => (
          <NavLink
            key={link}
            to={appPath[i]}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <li>{link}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
