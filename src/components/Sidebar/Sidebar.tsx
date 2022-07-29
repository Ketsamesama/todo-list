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
              // у NavLink есть собсвенный проп activeClassName, используй лучше его
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
