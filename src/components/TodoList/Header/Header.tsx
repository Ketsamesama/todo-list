import React, { FC } from 'react';
import s from './Header.module.scss';

interface IPrpos {
  data: string;
}

const Header: FC<IPrpos> = ({ data }) => {
  return (
    <>
      <h1>Мой день</h1>
      <p className={s.data}>{data}</p>
    </>
  );
};

export default Header;
