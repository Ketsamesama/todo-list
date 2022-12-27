import React, { FC } from 'react';

import NavMenu from 'components/NavMenu/NavMenu';
import s from './Header.module.scss';

interface IProsHeader {
    data: string;
}

const Header: FC<IProsHeader> = ({ data }) => {
  return (
    <div className={s.header}>
      <h1>Мой день</h1>
      <p className={s.data}>{data}</p>
      <NavMenu />
    </div>
  );
};

export default Header;
