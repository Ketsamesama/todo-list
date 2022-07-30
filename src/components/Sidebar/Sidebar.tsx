import React from 'react';

import s from './Sidebar.module.scss';
import NavMenu from 'components/NavMenu/NavMenu';

const Sidebar = () => (
  <div className={s.sidebar}>
    <NavMenu />
  </div>
);

export default Sidebar;
