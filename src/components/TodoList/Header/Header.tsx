import NavMenu from 'components/NavMenu/NavMenu';
import React, { FC } from 'react';

import type { IPrposHeader } from 'utils/types';

import s from './Header.module.scss';

const Header: FC<IPrposHeader> = ({ data }) => {
  return (
    <div className={s.header}>
      <h1>Мой день</h1>
      <p className={s.data}>{data}</p>
      <NavMenu />
    </div>
  );
};

export default Header;
