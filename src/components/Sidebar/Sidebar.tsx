import React from 'react';

import NavMenu from 'components/NavMenu/NavMenu';
import s from './Sidebar.module.scss';

const Sidebar = () => (
  <div className={s.sidebar}>
    <NavMenu />
  </div>
);

export default Sidebar;
