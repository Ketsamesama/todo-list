import React from 'react';
import s from './Header.module.scss';

function Header({data}) {
  return (
    <>
      <h1>Мой день</h1>
      <p className={s.data}>{data}</p>
    </>
  )
}

export default Header