import React from 'react';

import plus from '../../assets/plus.svg';
import s from './AddTask.module.scss';

function BtnShowInput({ dispatch, showHideInput }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        showHideInput(true);
      }}
    >
      <button className={s.btnIcon}>
        <img src={plus} alt="добавить"></img>
      </button>
      <button className={s.btnText}>Добавить задачу</button>
    </form>
  );
}

export default BtnShowInput;
