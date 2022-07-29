import React, { FC } from 'react';

import type { IPropsBtn } from 'utils/types';

import plus from 'assets/plus.svg';
import s from './AddTask.module.scss';

const BtnShowInput: FC<IPropsBtn> = ({ showHideInput }) => (
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

export default BtnShowInput;
