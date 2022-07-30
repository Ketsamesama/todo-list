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
          <li key={link}>
            <NavLink
              to={appPath[i]}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
