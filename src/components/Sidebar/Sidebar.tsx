import React from 'react';

import { NavLink } from 'react-router-dom';

import { appPath } from 'utils/path';
import s from './Sidebar.module.scss';

function Sidebar() {
  const linkList = ['Все', 'Активные', 'Выполненные'];

  return (
    <div className={s.side}>
      <nav className={s.sidebar}>
        {linkList.map((link, i) => (
          <div className={s.item} key={link}>
            <NavLink
              to={appPath[i]}
              className={({ isActive }) => (isActive ? s.active : '')}
            >
              {link}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
