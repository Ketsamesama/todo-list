import React, { FC } from 'react';

import type { IPropsBtn } from 'utils/types';
import s from './AddTask.module.scss';

const BtnShowInput: FC<IPropsBtn> = ({ showHideInput }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      showHideInput(true);
    }}
  >
    <button className={s.btnIcon}>+</button>
    <button className={s.btnText}>Добавить задачу</button>
  </form>
);

export default BtnShowInput;
