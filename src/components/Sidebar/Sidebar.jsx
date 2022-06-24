import React from 'react';
import s from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom'

function Sidebar() {  
  return (
    <div className={s.side}>
      <nav className={s.sidebar}>
        <div className={s.item}>
          <NavLink
            to="/all"
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Все
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/active"
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Активные
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/complited"
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Выполненные
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
