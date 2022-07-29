import React, { FC } from 'react';

import type { IPrposHeader } from 'utils/types';
import s from './Header.module.scss';

const Header: FC<IPrposHeader> = ({ data }) => {
  return (
    <>
      <h1>Мой день</h1>
      <p className={s.data}>{data}</p>
    </>
  );
};

export default Header;
